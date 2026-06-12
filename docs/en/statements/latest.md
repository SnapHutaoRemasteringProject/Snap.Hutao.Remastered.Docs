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

# 🎉 Successfully Updated to Version 1.19.5

**简体中文** | [English](/en/statements/latest.html)

- **【🎉New】** Unpackaged mode support — Run directly via .exe without MSIX packaging
- **【🎉New】** Auto-update for non-MSIX installations (Inno Setup installer)
- **【🎉New】** Beyond Gacha Log (Thousand-Star Realm) cloud storage sync improvements
- **【🎉New】** Activity calendar display switches with account selection #107
- **【🎉New】** Full UIGF version compatibility for import/export

- **【✨Optimization】** Startup speed optimization — Skip pre-build validation in Release, phased initialization
- **【✨Optimization】** Cake build system refactoring — Unified MSIX + Installer build, auto-remove onnxruntime.dll
- **【✨Optimization】** Remove code-behind from gacha wish page
- **【✨Optimization】** Update icon when no plugins are loaded
- **【✨Optimization】** Remove unused static resources (LoadingPic, etc.)

- **【🔨Fix】** Loopback unlock implementation error
- **【🔨Fix】** Gacha total pulls display anomaly after switching accounts #150
- **【🔨Fix】** Unable to restart as administrator in Unpackaged mode
- **【🔨Fix】** Second instance not exiting properly in certain cases
- **【🔨Fix】** Hutao Passport token refresh not retrying
- **【🔨Fix】** Error message now shown when startup fails
- **【🔨Fix】** Incorrect localization field names
