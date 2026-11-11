/**
 * 灵动云 LINGDONG CLOUD - 客户端与多端平台生态
 * 真实客观列出主流现代客户端生态及适用系统
 */

export interface ClientApp {
  id: string;
  name: string;
  platform: 'windows' | 'macos' | 'android' | 'ios' | 'linux';
  platformName: string;
  kernel: string;
  badge?: string;
  desc: string;
  features: string[];
  docUrl: string;
  isRecommended?: boolean;
}

export const PLATFORMS = [
  { id: 'windows', name: 'Windows', icon: 'windows', desc: 'Windows 10 / 11 64位系统', path: '/guides/windows/' },
  { id: 'macos', name: 'macOS', icon: 'apple', desc: 'Apple Silicon (M系列) / Intel 架构', path: '/guides/macos/' },
  { id: 'android', name: 'Android', icon: 'android', desc: 'Android 9.0+ 手机与平板终端', path: '/guides/android/' },
  { id: 'ios', name: 'iOS / iPadOS', icon: 'smartphone', desc: 'iPhone / iPad (App Store 区域工具)', path: '/guides/ios/' },
  { id: 'linux', name: 'Linux', icon: 'terminal', desc: 'Ubuntu / Debian / Arch / Fedora', path: '/download/' },
] as const;

export const CLIENT_APPS: ClientApp[] = [
  // Windows
  {
    id: 'clash-verge-rev-win',
    name: 'Clash Verge Rev',
    platform: 'windows',
    platformName: 'Windows',
    kernel: 'Mihomo (Meta) 内核',
    badge: '首选推荐',
    isRecommended: true,
    desc: '界面现代美观、系统开销低、支持 TUN 虚拟网卡模式及现代化订阅转换的 Windows 桌面客户端。',
    features: ['内置 Meta 高级规则引擎', '支持系统代理与全局 TUN 模式', '暗色未来风格界面与流畅交互', '支持自定义脚本与规则扩展'],
    docUrl: '/guides/windows/',
  },
  {
    id: 'mihomo-party-win',
    name: 'Mihomo Party',
    platform: 'windows',
    platformName: 'Windows',
    kernel: 'Mihomo 内核',
    badge: '极简聚会',
    desc: '基于 Mihomo 核心开发的现代化聚合客户端，拥有清晰的路由面板与轻量设计。',
    features: ['图形化路由节点切换', '一键启动 TUN 模式', '多订阅聚合与健康状态展示', '低系统资源占用'],
    docUrl: '/guides/windows/',
  },
  {
    id: 'flclash-win',
    name: 'FlClash',
    platform: 'windows',
    platformName: 'Windows',
    kernel: 'Clash Meta / Mihomo',
    desc: '基于 Flutter 打造的跨平台客户端，支持全系统一致性体验与高度自定义选项。',
    features: ['现代化响应式 UI', '支持多协议节点组合', '轻量化无驻留守护', '便捷的日志排查工具'],
    docUrl: '/guides/windows/',
  },

  // macOS
  {
    id: 'clash-verge-rev-mac',
    name: 'Clash Verge Rev (Mac)',
    platform: 'macos',
    platformName: 'macOS',
    kernel: 'Mihomo 内核 (通用二进制)',
    badge: '首选推荐',
    isRecommended: true,
    desc: '完美适配 Apple Silicon M 系列芯片与 Intel 架构，原生支持 macOS 菜单栏与快捷切换。',
    features: ['原生 ARM64 高性能编译', '菜单栏常驻控制', 'TUN 模式完美捕获系统网络', '分应用代理与局域网共享'],
    docUrl: '/guides/macos/',
  },
  {
    id: 'mihomo-party-mac',
    name: 'Mihomo Party (Mac)',
    platform: 'macos',
    platformName: 'macOS',
    kernel: 'Mihomo 内核',
    badge: '轻量优雅',
    desc: '专为 Mac 设计的现代科技风界面，节点状态一览无余，配置简捷。',
    features: ['暗黑模式与系统主题自适应', '节点延迟与分组一键切换', '多订阅配置管理', '极简托盘菜单'],
    docUrl: '/guides/macos/',
  },

  // Android
  {
    id: 'clash-meta-android',
    name: 'Clash Meta for Android',
    platform: 'android',
    platformName: 'Android',
    kernel: 'Mihomo / Clash Meta',
    badge: 'Android 首选',
    isRecommended: true,
    desc: '经典且成熟的 Android 客户端，适配 Material You 设计规范，支持全协议与应用分流。',
    features: ['支持分应用代理设置', '通知栏便捷开关与节点切换', '低电量消耗与后台保活', '全面兼容主流订阅格式'],
    docUrl: '/guides/android/',
  },
  {
    id: 'flclash-android',
    name: 'FlClash (Android)',
    platform: 'android',
    platformName: 'Android',
    kernel: 'Mihomo 内核',
    badge: '跨端一致',
    desc: 'Flutter 架构驱动的精美客户端，适合追求现代交互与动效体验的 Android 用户。',
    features: ['卡片式极简布局', '灵活的路由规则选择', '深色模式与流畅手势', '一键测试与分组切换'],
    docUrl: '/guides/android/',
  },

  // iOS
  {
    id: 'shadowrocket-ios',
    name: 'Shadowrocket (小火箭)',
    platform: 'ios',
    platformName: 'iOS',
    kernel: '专用网络引擎',
    badge: 'iOS 首选',
    isRecommended: true,
    desc: 'iOS 平台上装机量最大、生态最成熟的网络工具，支持扫码导入订阅与按需智能路由分流。',
    features: ['支持一键扫码导入订阅', '按需连接与自动化快捷指令', '完备的规则集与分流策略', '极低耗电与后台无感运行'],
    docUrl: '/guides/ios/',
  },
  {
    id: 'loon-ios',
    name: 'Loon',
    platform: 'ios',
    platformName: 'iOS',
    kernel: '高性能自主引擎',
    badge: '现代高定',
    desc: '界面极度精美、插件生态丰富的 iOS 代理调试与加速神器。',
    features: ['可视化节点测速与测延迟', '强大的脚本与插件支持', '原生 iCloud 同步配置', '专业网络诊断面板'],
    docUrl: '/guides/ios/',
  },
  {
    id: 'stash-ios',
    name: 'Stash (iOS)',
    platform: 'ios',
    platformName: 'iOS',
    kernel: 'Clash 规则兼容内核',
    badge: '规则原生',
    desc: '专为 iOS 平台打造的 Clash 核心体验工具，支持原生规则集导入与家庭共享。',
    features: ['完美兼容 Clash 配置文件', '支持 Apple TV 同步接入', '美观的信息面板与请求日志', '按域名与应用分流'],
    docUrl: '/guides/ios/',
  },
];
