/**
 * 灵动云 LINGDONG CLOUD - 站点核心配置
 * 统一管理全站 URL、品牌信息、导航与结构化数据配置
 */

export const SITE = {
  name: '灵动云 LINGDONG CLOUD · 官方网站',
  shortName: '灵动云',
  brandEn: 'LINGDONG CLOUD',
  tagline: '连接世界，自在无界',
  themeName: '灵动云 · 星域控制台',
  designCode: 'AETHER MAX',
  domain: 'lingdongyun.blog',
  url: 'https://lingdongyun.blog',
  // 官方注册与订阅入口（完整保留安全推荐码）
  registerUrl: 'https://varnexa.lingdongaff.com/#/?code=HHoxxHGa',
  description: '灵动云（LINGDONG CLOUD）官方网站。灵动云为多设备用户提供灵活高效的网络连接服务，采用深色星域控制台设计，提供香港、台湾、日本、新加坡、美国等多地区高速优质网络加速节点，让工作、学习与数字生活拥有更多连接选择。',
  keywords: '灵动云, 灵动云官网, LINGDONG CLOUD, 灵动云机场, 灵动云VPN, 网络加速, IEPL专线, 跨境网络, Clash配置, Mihomo',
  publishedDate: '2026-10-21',
  updatedDate: '2026-11-11',
  ogImage: '/og-image.png',
  author: '灵动云技术团队',
  version: '2.5.0',
} as const;

export const NAV_ITEMS = [
  { label: '首页', href: '/' },
  { label: '全球节点', href: '/network/' },
  { label: '套餐价格', href: '/pricing/' },
  { label: '核心优势', href: '/features/' },
  { label: '客户端下载', href: '/download/' },
  { label: '使用教程', href: '/guides/' },
  { label: '真实测速', href: '/speed-tests/' },
  { label: '技术博客', href: '/blog/' },
  { label: '常见问题', href: '/faq/' },
  { label: '关于我们', href: '/about/' },
  { label: '联系客服', href: '/contact/' },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: '套餐价格', href: '/pricing/' },
    { label: '全球节点', href: '/network/' },
    { label: '核心特性', href: '/features/' },
    { label: '客户端下载', href: '/download/' },
    { label: '测速与评测', href: '/speed-tests/' },
  ],
  guides: [
    { label: '教程中心', href: '/guides/' },
    { label: 'Windows 配置教程', href: '/guides/windows/' },
    { label: 'Android 配置教程', href: '/guides/android/' },
    { label: 'iOS / iPadOS 教程', href: '/guides/ios/' },
    { label: 'macOS 配置教程', href: '/guides/macos/' },
  ],
  support: [
    { label: '常见问题 FAQ', href: '/faq/' },
    { label: '技术博客', href: '/blog/' },
    { label: '关于灵动云', href: '/about/' },
    { label: '联系与支持', href: '/contact/' },
    { label: '服务条款', href: '/terms/' },
    { label: '隐私政策', href: '/privacy/' },
  ],
} as const;
