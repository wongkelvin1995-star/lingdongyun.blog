/**
 * 灵动云 LINGDONG CLOUD - 节点与网络拓扑数据
 * 基于香港、台湾、日本、新加坡、美国等官方公开节点地区
 * 杜绝虚构实时在线人数、假延迟或捏造在线率，以客观架构和技术特性为核心
 */

export interface NodeRegion {
  id: string;
  code: string;
  name: string;
  enName: string;
  flag: string;
  tag: string;
  architecture: string;
  highlights: string[];
  bestFor: string[];
  description: string;
}

export const NODE_REGIONS: NodeRegion[] = [
  {
    id: 'hk',
    code: 'HK',
    name: '中国香港',
    enName: 'Hong Kong',
    flag: '🇭🇰',
    tag: '主力低延时',
    architecture: 'BGP 多线优化 / 直连骨干 / IEPL 专线互联',
    highlights: [
      '物理距离极近，大陆多地直连访问延迟极低',
      '覆盖主流国际云厂商与互联网交换中心 (HKIX)',
      '全天候大带宽吞吐保障',
      '高并发路由优化，抗抖动表现优异'
    ],
    bestFor: ['日常网页浏览与即时通讯', '跨国办公协同与视频会议', '高清视频流媒体低缓冲点播'],
    description: '香港节点是灵动云的主力核心接入区域之一，依托直连与骨干互联网络，为内地用户提供低延迟、高响应速度的平稳体验。'
  },
  {
    id: 'tw',
    code: 'TW',
    name: '中国台湾',
    enName: 'Taiwan',
    flag: '🇹🇼',
    tag: '影音与动画',
    architecture: '高品质海缆 / 亚太骨干互通 / BGP 路由调优',
    highlights: [
      '华语原生网络环境，繁体中文服务与本地化内容友好',
      '主流华语动画、影视平台支持良好',
      '亚太主干线路直连，稳定性高',
      '动态负载均衡分流'
    ],
    bestFor: ['动画番剧追更与流媒体解锁', '地区特定华语资源与社群互动', '学术与技术资源跨境访问'],
    description: '台湾节点专注于华语文化圈与亚太地区的内容访问，拥有良好的原生网络环境和流媒体支持。'
  },
  {
    id: 'jp',
    code: 'JP',
    name: '日本',
    enName: 'Japan',
    flag: '🇯🇵',
    tag: '亚太枢纽 · 极客优选',
    architecture: '东京 / 大阪机房 / 多线 BGP / 国际专线',
    highlights: [
      '连接亚太与北美的重要网络桥梁，国际带宽极充沛',
      '优质网络基础设施，丢包率极低',
      '对海外代码仓库、开发者工具及云平台连接优异',
      '高品质机房环境与自动化故障旁路切换'
    ],
    bestFor: ['开发者 GitHub / Docker / NPM 依赖拉取', '海外云平台运维与远程服务器管理', '跨国低抖动联机游戏与实时通讯'],
    description: '日本节点依托东京等地的高等级数据中心，具备充沛的国际带宽和优质的路由拓扑，是技术开发者和高品质网络需求者的坚实选择。'
  },
  {
    id: 'sg',
    code: 'SG',
    name: '新加坡',
    enName: 'Singapore',
    flag: '🇸🇬',
    tag: '东南亚中枢',
    architecture: '多路国际海底光缆交汇 / Equinix 等高标准数据中心',
    highlights: [
      '东南亚乃至全球最具影响力的网络中枢与海缆交汇点',
      '国际访问网络互联互通性高，路由中转损耗小',
      '跨国企业云服务与国际业务交互友好',
      '全天候高可用性保障'
    ],
    bestFor: ['东南亚出海业务与跨国电商运营', '跨国 SaaS 系统与云端协作软件', '全球化网络服务连接与中转'],
    description: '新加坡作为亚太与印度洋海缆的重要交汇枢纽，拥有出色的国际互联质量，适合跨国业务运营与多区域业务系统的高效对接。'
  },
  {
    id: 'us',
    code: 'US',
    name: '美国',
    enName: 'United States',
    flag: '🇺🇸',
    tag: 'AI与原生应用',
    architecture: '美西 / 美东骨干 / 多 Tier-1 运营商直连',
    highlights: [
      '主流 AI 大模型与海外科研计算集群的原生访问地',
      '纯净原生 IP 环境，会话保持与风控通过率高',
      '海量学术数据库、海外高校与研究机构资源直达',
      '极高带宽承载力，大文件传输无瓶颈'
    ],
    bestFor: ['ChatGPT、Claude、Midjourney 等 AI 工具高频交互', '海外学术文献与期刊数据库查阅', '全球开源社区与开发者生态深度接入'],
    description: '美国节点专为前沿 AI 模型互动、学术科研探索和海外原生数字生态打造，提供充沛的出口吞吐与良好的协议兼容性。'
  }
];

export const NETWORK_TECH_SPECS = [
  {
    title: '智能分流与规则引擎',
    desc: '采用精细化分流规则体系，自动识别境内外域名与 IP，国内流量直连省流量，海外流量经由优质加速通道转发。'
  },
  {
    title: 'IEPL / IPLC 专线冗余',
    desc: '在骨干传输层面部署端对端内网传输线路，不经公网骨干路由波动，大幅降低跨境网络抖动与高峰期丢包率。'
  },
  {
    title: '多节点高可用热备',
    desc: '核心区域配置多套异构出口与多线 BGP，系统实时检测链路连通性，突发网络波动时支持毫秒级无缝倒换。'
  },
  {
    title: '现代全协议兼容',
    desc: '全面兼容 Shadowsocks、Shadowsocks-2022、Vless 及 Trojan 等主流现代化网络传输协议，安全、轻量且高效。'
  }
];
