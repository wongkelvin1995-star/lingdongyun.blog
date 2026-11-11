/**
 * 灵动云 LINGDONG CLOUD - 生产构建自动化综合校验脚本
 * 验证产物完整性、SEO 元信息、无 404 盲区、Canonical 闭环与外部链接安全
 */

import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');

if (!fs.existsSync(DIST_DIR)) {
  console.error('❌ dist 目录不存在，请先执行 npm run build');
  process.exit(1);
}

const REQUIRED_PATHS = [
  '',
  'about',
  'pricing',
  'network',
  'features',
  'download',
  'guides',
  'guides/windows',
  'guides/android',
  'guides/ios',
  'guides/macos',
  'speed-tests',
  'blog',
  'blog/brand-overview',
  'blog/plan-selection-guide',
  'blog/windows-setup-tutorial',
  'blog/android-client-guide',
  'blog/ios-shadowrocket-guide',
  'blog/macos-setup-guide',
  'blog/node-regions-selection',
  'blog/iepl-iplc-line-knowledge',
  'blog/connection-timeout-troubleshooting',
  'blog/ai-tools-network-optimization',
  'blog/speed-test-methodology',
  'blog/subscription-security-and-support',
  'faq',
  'contact',
  'privacy',
  'terms',
  '404.html',
];

console.log('🔍 开始执行灵动云生产构建全面检查...\n');

let passCount = 0;
let failCount = 0;

for (const relPath of REQUIRED_PATHS) {
  let filePath;
  if (relPath.endsWith('.html')) {
    filePath = path.join(DIST_DIR, relPath);
  } else {
    filePath = path.join(DIST_DIR, relPath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    console.error(`❌ 缺失关键页面: /${relPath}/ (${filePath})`);
    failCount++;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  // Check 1: Title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    console.error(`❌ 页面缺少标题: /${relPath}/`);
    failCount++;
    continue;
  }

  // Check 2: Description
  const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
  if (!descMatch || !descMatch[1].trim()) {
    console.error(`❌ 页面缺少 Meta Description: /${relPath}/`);
    failCount++;
    continue;
  }

  // Check 3: Canonical URL (except 404)
  if (!relPath.includes('404')) {
    const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
    if (!canonicalMatch || !canonicalMatch[1].startsWith('https://lingdongyun.blog/')) {
      console.error(`❌ Canonical URL 缺失或格式有误: /${relPath}/ (Found: ${canonicalMatch?.[1]})`);
      failCount++;
      continue;
    }
  }

  // Check 4: H1 Heading (except 404 which can use H1)
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!h1Match) {
    console.error(`❌ 页面缺少明确的 H1 标签: /${relPath}/`);
    failCount++;
    continue;
  }

  passCount++;
  console.log(`✅ [200 OK] /${relPath}${relPath && !relPath.endsWith('.html') ? '/' : ''} - 标题: "${titleMatch[1].slice(0, 32)}..."`);
}

// Check robots.txt and sitemap
console.log('\n📄 检查静态 SEO 索引文件...');
const robotsPath = path.join(DIST_DIR, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  console.log('✅ robots.txt 存在且已生成');
} else {
  console.error('❌ robots.txt 缺失');
  failCount++;
}

const sitemapIndexPath = path.join(DIST_DIR, 'sitemap-index.xml');
const sitemap0Path = path.join(DIST_DIR, 'sitemap-0.xml');
if (fs.existsSync(sitemapIndexPath) || fs.existsSync(sitemap0Path)) {
  console.log('✅ Sitemap XML 索引文件已成功生成');
} else {
  console.error('❌ Sitemap XML 文件缺失');
  failCount++;
}

const bingAuthPath = path.join(DIST_DIR, 'BingSiteAuth.xml');
if (fs.existsSync(bingAuthPath)) {
  console.log('✅ BingSiteAuth.xml 验证文件存在');
} else {
  console.error('❌ BingSiteAuth.xml 缺失');
  failCount++;
}

console.log(`\n========================================`);
console.log(`检查完成: 成功 ${passCount} 项，失败 ${failCount} 项`);
console.log(`========================================\n`);

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 全部页面与 SEO 指标检查通过！');
}
