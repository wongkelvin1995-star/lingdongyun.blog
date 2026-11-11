/**
 * 灵动云 LINGDONG CLOUD - 统一套餐数据管理
 * 真实公开参考资料，提供严谨准确的计费周期与流量额度描述
 */
import { SITE } from './site';

export type PlanCycle = 'monthly' | 'yearly' | 'onetime' | 'custom';

export interface Plan {
  id: string;
  name: string;
  price: number;
  periodLabel: string;
  cycle: PlanCycle;
  cycleName: string;
  trafficAmount: number;
  trafficUnit: 'GB' | 'TB';
  trafficDisplay: string;
  trafficRule: string;
  tag?: string;
  isPopular?: boolean;
  audience: string;
  summary: string;
  features: string[];
  notes?: string;
  ctaText: string;
  ctaUrl: string;
}

export const PLANS: Plan[] = [
  {
    id: 'fufeng',
    name: '灵动·拂风',
    price: 20,
    periodLabel: '元 / 月起',
    cycle: 'monthly',
    cycleName: '月付方案',
    trafficAmount: 100,
    trafficUnit: 'GB',
    trafficDisplay: '100 GB / 月',
    trafficRule: '每月周期重置 100GB 基础流量',
    tag: '轻量入门',
    isPopular: false,
    audience: '轻度跨境浏览、学术文献查阅、日常即时通讯用户',
    summary: '适合单人日常查阅网页、邮件办公及社交应用，按月体验与续费。',
    features: [
      '按月付费，到期自主续费',
      '每月 100GB 基础额度',
      '支持常见客户端与全协议接入',
      '香港、台湾、日本、新加坡、美国核心节点接入',
      '工单支持与网络健康监测'
    ],
    ctaText: '立即开启连接',
    ctaUrl: SITE.registerUrl,
  },
  {
    id: 'yulang',
    name: '灵动·驭浪',
    price: 50,
    periodLabel: '元 / 月起',
    cycle: 'monthly',
    cycleName: '月付方案',
    trafficAmount: 300,
    trafficUnit: 'GB',
    trafficDisplay: '300 GB / 月',
    trafficRule: '每月周期重置 300GB 高速流量',
    tag: '热门推荐 · 日常首选',
    isPopular: true,
    audience: '主流影音流媒体、多设备协作、远程办公与学习人群',
    summary: '综合性价比标杆方案，充足流量储备从容应对 4K 视频与大文件传输。',
    features: [
      '按月付费，支持灵活升级或续订',
      '每月 300GB 充沛流量',
      '多端设备同时在线连接',
      '优质专线与 BGP 多线接入',
      'AI 辅助工具与主流海外服务深度优化',
      '优先客服响应与节点故障快速热备'
    ],
    ctaText: '选购驭浪套餐',
    ctaUrl: SITE.registerUrl,
  },
  {
    id: 'poxiao',
    name: '灵动·破晓',
    price: 100,
    periodLabel: '元 / 月起',
    cycle: 'monthly',
    cycleName: '月付方案',
    trafficAmount: 700,
    trafficUnit: 'GB',
    trafficDisplay: '700 GB / 月',
    trafficRule: '每月周期重置 700GB 高速流量',
    tag: '大流量进阶',
    isPopular: false,
    audience: '重度海外开发者、视频制作团队、跨国设计与代码拉取',
    summary: '面向中高频网络使用者，具备更充裕的带宽配额与每月 700GB 宽裕流量。',
    features: [
      '按月付费，宽裕配额无后顾之忧',
      '每月 700GB 稳定高速流量',
      '支持团队多终端设备接入',
      '高并发吞吐保障与低丢包率专线通道',
      '包含所有可用节点地区接入权限',
      '高等级客服支持与故障应急通道'
    ],
    ctaText: '选购破晓套餐',
    ctaUrl: SITE.registerUrl,
  },
  {
    id: 'lingxiao',
    name: '灵动·凌霄',
    price: 180,
    periodLabel: '元 / 月起',
    cycle: 'monthly',
    cycleName: '月付方案',
    trafficAmount: 1.5,
    trafficUnit: 'TB',
    trafficDisplay: '1.5 TB / 月',
    trafficRule: '每月周期重置 1.5TB (1500GB) 超大流量',
    tag: '极客旗舰',
    isPopular: false,
    audience: '高吞吐量工作室、跨境电商运营团队、海量媒体同步用户',
    summary: '单月超大流量天花板，为海量数据传输与全天候高负荷连接提供坚实保障。',
    features: [
      '按月付费，每月享有高达 1.5TB 额度',
      '顶格网络通道权重与并发连接数支持',
      '支持全平台多设备同时高负荷吞吐',
      '骨干专线多重冗余自动容灾切换',
      '极速客服保障与专属运维排查通道'
    ],
    ctaText: '选购凌霄套餐',
    ctaUrl: SITE.registerUrl,
  },
  {
    id: 'chuanyun',
    name: '灵动·穿云',
    price: 99,
    periodLabel: '元 / 年',
    cycle: 'yearly',
    cycleName: '年付方案',
    trafficAmount: 70,
    trafficUnit: 'GB',
    trafficDisplay: '70 GB / 月 (年付)',
    trafficRule: '一次性支付全年 99 元，每月定时发放 70GB 流量',
    tag: '长效省心',
    isPopular: false,
    audience: '长期轻度稳定使用者、不想频繁月付的省心型用户',
    summary: '折合每月仅需 8.25 元，全年自动按月发放 70GB 流量，省去每月手动续订。',
    features: [
      '一次付清 99 元，覆盖整整 12 个月',
      '每月自动重置发放 70GB（非全年共 70GB）',
      '平摊月均成本极具性价比',
      '长期保留连接凭证，稳定无需频繁操作',
      '享受标准线路与官方技术支持'
    ],
    notes: '年付套餐为一次性支付 99 元，流量按月周期发放 70GB，当月未使用不累计至下月。',
    ctaText: '选购穿云年付',
    ctaUrl: SITE.registerUrl,
  },
  {
    id: 'xianyun',
    name: '灵动·闲云',
    price: 199,
    periodLabel: '元 / 一次性',
    cycle: 'onetime',
    cycleName: '一次性流量包',
    trafficAmount: 150,
    trafficUnit: 'GB',
    trafficDisplay: '150 GB (不限时)',
    trafficRule: '一次性购买 150GB 总流量，用完为止',
    tag: '不限时间 · 备用无忧',
    isPopular: false,
    audience: '出差备用、低频访问、不希望被固定月费绑定的自由用户',
    summary: '没有按月清空的压力，150GB 额度常年有效，随用随扣，适合作为高可靠备用线路。',
    features: [
      '一次性付费 199 元，无月费账单困扰',
      '总计 150GB 总额度，用完即止',
      '无固定月到期清零机制（以平台条款为准）',
      '出差、旅行、紧急连接随时随地即开即用',
      '全节点通用，不额外限制区域'
    ],
    ctaText: '购买闲云流量包',
    ctaUrl: SITE.registerUrl,
  },
  {
    id: 'jingyun',
    name: '灵动·惊云',
    price: 499,
    periodLabel: '元 / 一次性',
    cycle: 'onetime',
    cycleName: '一次性流量包',
    trafficAmount: 400,
    trafficUnit: 'GB',
    trafficDisplay: '400 GB (不限时)',
    trafficRule: '一次性购买 400GB 总流量，用完为止',
    tag: '弹性容量',
    isPopular: false,
    audience: '阶段性项目制研发、出国访学、不定期需要传输大量资料的用户',
    summary: '中大型弹性流量储备，单次补充 400GB，既无月度续费负担，又享充沛带宽。',
    features: [
      '一次性付费 499 元，额度长期有效',
      '共计 400GB 大容量总流量池',
      '项目周期内随需消耗，不浪费月度配额',
      '全线接入香港、日本、新加坡等优质路由',
      '支持多设备共用订阅额度'
    ],
    ctaText: '购买惊云流量包',
    ctaUrl: SITE.registerUrl,
  },
  {
    id: 'feiyun',
    name: '灵动·飞云',
    price: 899,
    periodLabel: '元 / 一次性',
    cycle: 'onetime',
    cycleName: '一次性流量包',
    trafficAmount: 800,
    trafficUnit: 'GB',
    trafficDisplay: '800 GB (不限时)',
    trafficRule: '一次性购买 800GB 总流量，用完为止',
    tag: '超大弹性包',
    isPopular: false,
    audience: '重度非周期性需求、长效大文件流转、追求一次备足的长线用户',
    summary: '顶级不限时流量方案，一次性注入 800GB 充沛数据配额，从容应对多元连接场景。',
    features: [
      '一次性付费 899 元，超大流量持久备用',
      '高达 800GB 宽裕总流量配额',
      '自由分配使用节奏，无需担心月末清零',
      '专线多路负载均衡保障与高等级 SLA 运维',
      '团队或家庭多端长期可靠接入'
    ],
    ctaText: '购买飞云流量包',
    ctaUrl: SITE.registerUrl,
  },
  {
    id: 'custom',
    name: '至尊私人定制',
    price: 680,
    periodLabel: '元 / 月起',
    cycle: 'custom',
    cycleName: '私人定制',
    trafficAmount: 500,
    trafficUnit: 'GB',
    trafficDisplay: '500 GB / 月 (定制通道)',
    trafficRule: '每月 500GB 专属定制高防高优先级别出口',
    tag: '独立资源 · 尊崇定制',
    isPopular: false,
    audience: '对网络纯净度、独立出口 IP 或特定合规业务有高标准的个人与机构',
    summary: '尊享独立分配通道资源与专属客服接入，打造稳定清爽的私人网络空间。',
    features: [
      '每月 500GB 专属保障带宽与出口配置',
      '高纯净度住宅或机房独立出口可选',
      '低延迟专用专线通道，杜绝高峰期拥堵',
      '1 对 1 专属工程师工单响应与路线调优',
      '支持企业级特殊路由策略定制'
    ],
    notes: '定制方案需经客服与运维团队人工确认资源后开通，请联系在线支持了解详情。',
    ctaText: '咨询定制方案',
    ctaUrl: SITE.registerUrl,
  },
];

export const PLAN_FILTERS = [
  { id: 'all', label: '全部方案' },
  { id: 'monthly', label: '按月付费' },
  { id: 'yearly', label: '年付优惠' },
  { id: 'onetime', label: '一次性流量包' },
  { id: 'custom', label: '私人定制' },
] as const;

export const PLAN_DISCLAIMERS = [
  '套餐价格与流量规格以上方展示及注册后官方后台实时结账账单为准。',
  '月付套餐每月周期性重置流量；年付套餐按月周期发放固定额度（非全年一次性消耗）；一次性流量包为账户总额度，用完为止。',
  '灵动云严格遵守用户网络服务协议，订阅链接及访问令牌为个人专属凭证，切勿泄露或公开传播，避免非授权消耗。',
  '为保障网络安全与高可用性，严禁利用本服务从事任何违法违规、恶意扫描或高频攻击行为。'
];
