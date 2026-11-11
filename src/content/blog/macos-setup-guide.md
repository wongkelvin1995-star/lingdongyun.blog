---
title: "macOS 平台配置教程：Clash Verge Rev 与系统级 TUN 模式实操"
description: "专为 Mac 用户撰写的网络配置指南，涵盖 Apple Silicon M 系列原生适配、菜单栏控制、终端代理与系统级 TUN 模式深度应用。"
pubDate: "2026-10-26"
updatedDate: "2026-11-11"
author: "灵动云技术团队"
category: "配置教程"
tags: ["macOS", "Clash Verge Rev", "Mihomo", "Mac", "TUN模式"]
featured: false
---

# macOS 平台配置教程：Clash Verge Rev 与系统级 TUN 模式实操

在 Mac 电脑（无论是搭载 Apple Silicon M1/M2/M3/M4 系列芯片，还是经典 Intel 处理器的 MacBook 与 Mac mini）上，**Clash Verge Rev (Mac 版)** 是目前兼具出色性能、原生菜单栏整合与低电量消耗的现代开源客户端。

本文将为您详细拆解在 macOS 系统中配置灵动云订阅、解决首次打开未签名提示以及开启系统级 TUN 虚拟网卡的完整指引。

---

## 一、下载与安装要点

1. 访问灵动云[客户端下载中心](/download/)，下载对应的 macOS 安装镜像（`.dmg`）：
   - 如果您的 Mac 是 M1/M2/M3/M4 系列芯片，请下载 **ARM64 (Apple Silicon)** 版本；
   - 如果是较早的 Intel 处理器机型，请下载 **x64** 版本。
2. 双击打开 `.dmg` 镜像，将 `Clash Verge` 图标拖拽入 `Applications (应用程序)` 文件夹中。

> **特别提示：首次打开提示“无法打开，因为无法验证开发者”怎么办？**  
> 打开「系统设置」->「隐私与安全性」，滑至最下方找到“已阻止使用 Clash Verge...”，点击 **「仍要打开」**，输入 Mac 开机密码即可正常运行。

---

## 二、导入灵动云订阅与配置

### 1. 订阅导入
1. 登录[灵动云用户中心](https://varnexa.lingdongaff.com/#/?code=HHoxxHGa)；
2. 复制您的专属订阅链接；
3. 打开 Clash Verge Rev，点击左侧导航栏的 **「订阅 (Profiles)」**；
4. 在顶部输入框粘贴该链接，点击 **「保存并导入」**；
5. 导入完成后，在订阅卡片上点击右键，选择 **「设为激活」**。

### 2. 节点选择与规则
1. 点击左侧 **「代理 (Proxies)」**；
2. 确认工作模式为 **「规则 (Rule)」**；
3. 在分组列表中点击您希望使用的节点地区（例如：中国香港、日本或新加坡）；
4. 客户端会在顶部菜单栏显示当前所选节点与实时网速。

---

## 三、进阶：配置系统级 TUN 虚拟网卡模式

### 为什么在 Mac 上强烈推荐开启 TUN 模式？
在 macOS 系统中，普通的「系统代理」开关仅能作用于遵循系统 HTTP 代理规范的浏览器（如 Safari、Chrome）。然而，很多专业软件（如终端 Terminal、iTerm2、Git、Docker、VS Code 插件以及部分协同工具）会绕过系统代理，导致命令行经常出现连接超时。

**TUN 模式通过在 macOS 内核中创建虚拟网络接口（utun），将整机的网络流量在网络层进行透明接管与分流。**

### 开启步骤：
1. 打开 Clash Verge Rev 的 **「设置 (Settings)」**；
2. 找到 **「TUN 模式 (TUN Mode)」** 项；
3. 首次开启时，点击「授权/安装核心服务 (Grant Core Permissions)」；
4. macOS 会弹出系统授权框，输入 Mac 锁屏密码授权；
5. 授权成功后打开 TUN 模式开关。此时无需再手动设置 `export http_proxy`，整台 Mac 的终端和所有后台进程都会自动享受加速服务。

---

## 四、Mac 常用快捷操作与排查

1. **菜单栏快速切换：** 点击右上角菜单栏的小图标，无需展开主窗口，即可直接切换节点或切换直连/规则模式；
2. **局域网共享：** 如果您希望家里的 Apple TV 或另一台手机借由 Mac 代理上网，可在设置中开启「允许局域网连接 (Allow LAN)」，并在 Apple TV 网络设置中配置 Mac 的内网 IP 和混合端口（默认 7897）。

如需了解网络线路的选择原则，请阅读[全球节点地区选择与网络路由策略](/blog/node-regions-selection/)。
