---
comment: false
externalLinkIcon: false
index: false
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/update-log.html
sidebar: false
navbar: false
footer: false
copyright: false
editLink: false
breadcrumbExclude: true
breadcrumb: false
lastUpdated: false
contributors: false
backToTop: false
pageInfo: false
---


# 🎉 已成功更新至 2.0.2 版本

**简体中文** [zh](/zh/statements/latest) · **繁體中文** [tw](/tw/statements/latest) · **English** [en](/en/statements/latest) · **日本語** [jp](/jp/statements/latest) · **Bahasa Indonesia** [id](/id/statements/latest) · **Русский** [ru](/ru/statements/latest)

本次更新改进游戏运行状态检测与进程管理，开放 Island「凯瑟琳重定向」功能，并为 Microsoft Store 发行调整 MSIX 包身份。**从 2.0.2 起，MSIX 仅通过微软商店分发，旧版数据无法自动共享，需要手动迁移。**

### 🎉 新增功能
- **【🎉】** 游戏启动页支持检测从外部启动的《原神》，显示运行状态并提供结束进程操作。
- **【🎉】** Island「凯瑟琳重定向」设置向普通用户开放。

### ✨ 功能优化
- **【✨】** 优化进程检测：空闲时定期检查、运行时等待系统退出通知，减少扫描开销。
- **【✨】** 同权限游戏进程可在非管理员模式下结束，增强多个进程及权限错误的处理。
- **【✨】** 正式版 MSIX 关联 Microsoft Store 包身份，GitHub 将仅发布 Setup 安装程序，商店负责 MSIX 后续更新及差分分发。

### 🔨 问题修复
- **【🔨】** 修复游戏从外部启动或结束时界面状态未及时更新的问题。
- **【🔨】** 修复游戏结束后 Island 连接状态残留，以及部分只读属性的 x:Bind 通知无法刷新问题。
- **【🔨】** 修复远程功能配置获取失败后错误结果长时间缓存、无法及时重试的问题。
- **【🔨】** 修复祈愿记录获取界面列表无法滚动的问题。

[Microsoft Store](https://apps.microsoft.com/search?query=Snap%20Hutao%20Remastered) · [GitHub Setup](https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/releases/latest) · [MSIX migration](/zh/advanced/msix-migration)

**Full Changelog:** https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/compare/2.0.1...2.0.2
