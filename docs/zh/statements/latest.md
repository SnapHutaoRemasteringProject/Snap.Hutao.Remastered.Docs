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

# 🎉 已成功更新至 1.19.5 版本

**简体中文** | [English](/en/statements/latest.html)

- **【🎉新增】** 支持 Unpackaged 模式 — 程序脱离 MSIX 可直接通过 .exe 运行
- **【🎉新增】** 支持非 MSIX 安装版的自动更新（Inno Setup 安装器）
- **【🎉新增】** 颂愿记录（千星奇域）云存储同步完善
- **【🎉新增】** 切换账号后活动日历联动切换显示 #107
- **【🎉新增】** 兼容所有 UIGF 版本导入/导出

- **【✨优化】** 启动速度优化 — Release 跳过预构建校验、分阶段初始化
- **【✨优化】** Cake 构建系统重构 — 统一 MSIX + Installer 构建，自动移除 onnxruntime.dll
- **【✨优化】** 移除祈愿页面 Code-Behind 代码
- **【✨优化】** 无插件时修改使用的图标
- **【✨优化】** 移除不需要的静态资源（LoadingPic 等）

- **【🔨修复】** Loopback 解锁实现错误
- **【🔨修复】** 切换账号后抽数合并显示异常 #150
- **【🔨修复】** Unpackaged 模式下无法以管理员身份重启
- **【🔨修复】** 某些情况下第二个实例未正常退出
- **【🔨修复】** 胡桃通行证 Token 刷新不重试
- **【🔨修复】** 启动失败时提示报错信息
- **【🔨修复】** 本地化字段命名错误