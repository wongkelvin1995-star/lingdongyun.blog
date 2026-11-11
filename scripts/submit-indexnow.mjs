/**
 * 灵动云 LINGDONG CLOUD - IndexNow 自动批量提交脚本
 * 仅在站点构建或发布后由运维脚本主动触发，不影响前端运行性能
 */

const HOST = 'lingdongyun.blog';
const KEY = '9f8e7d6c5b4a3928170f1e2d3c4b5a67';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/about/`,
  `https://${HOST}/pricing/`,
  `https://${HOST}/network/`,
  `https://${HOST}/features/`,
  `https://${HOST}/download/`,
  `https://${HOST}/guides/`,
  `https://${HOST}/guides/windows/`,
  `https://${HOST}/guides/android/`,
  `https://${HOST}/guides/ios/`,
  `https://${HOST}/guides/macos/`,
  `https://${HOST}/speed-tests/`,
  `https://${HOST}/blog/`,
  `https://${HOST}/blog/brand-overview/`,
  `https://${HOST}/blog/plan-selection-guide/`,
  `https://${HOST}/blog/windows-setup-tutorial/`,
  `https://${HOST}/blog/android-client-guide/`,
  `https://${HOST}/blog/ios-shadowrocket-guide/`,
  `https://${HOST}/blog/macos-setup-guide/`,
  `https://${HOST}/blog/node-regions-selection/`,
  `https://${HOST}/blog/iepl-iplc-line-knowledge/`,
  `https://${HOST}/blog/connection-timeout-troubleshooting/`,
  `https://${HOST}/blog/ai-tools-network-optimization/`,
  `https://${HOST}/blog/speed-test-methodology/`,
  `https://${HOST}/blog/subscription-security-and-support/`,
  `https://${HOST}/faq/`,
  `https://${HOST}/contact/`,
  `https://${HOST}/privacy/`,
  `https://${HOST}/terms/`,
];

async function submitToIndexNow() {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  console.log(`[IndexNow] Preparing to submit ${URL_LIST.length} URLs to Bing & IndexNow engines...`);

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`[IndexNow] Sending request to: ${endpoint}`);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      console.log(`[IndexNow] ${endpoint} Response status: ${res.status} ${res.statusText}`);
      if (res.status === 200 || res.status === 202) {
        console.log(`[IndexNow] Successfully accepted by ${endpoint}`);
      }
    } catch (err) {
      console.warn(`[IndexNow] Submission to ${endpoint} failed or network unreachable in current environment:`, err.message);
    }
  }
}

submitToIndexNow();
