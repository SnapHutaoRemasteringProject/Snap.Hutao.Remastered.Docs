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


# 🎉 Successfully Updated to Version 2.0.2

**简体中文** [zh](/zh/statements/latest) · **繁體中文** [tw](/tw/statements/latest) · **English** [en](/en/statements/latest) · **日本語** [jp](/jp/statements/latest) · **Bahasa Indonesia** [id](/id/statements/latest) · **Русский** [ru](/ru/statements/latest)

This release improves game process detection and management, opens Island's Catherine Redirect setting to all users, and updates MSIX packaging for Microsoft Store. **From 2.0.2, MSIX is Store-only; previous MSIX data is isolated and must be migrated manually.**

### 🎉 New Features
- **【🎉】** Detect Genshin Impact launched outside Snap Hutao, display its running state, and provide an option to end the process.
- **【🎉】** Make the Island Catherine Redirect setting available to all users.

### ✨ Improvements
- **【✨】** Improve process monitoring by using periodic discovery while idle and OS exit notifications while a game is running.
- **【✨】** Allow terminating same-permission game processes without elevating Snap Hutao, with better multi-process and access-denied handling.
- **【✨】** Associate the release MSIX with Microsoft Store identity. GitHub continues to provide Setup; Store MSIX updates can use smaller differential packages.

### 🔨 Bug Fixes
- **【🔨】** Fix the game running state not updating promptly after external game launch or exit.
- **【🔨】** Fix stale Island connection state after game exit and missing read-only x:Bind UI notifications.
- **【🔨】** Fix failed remote feature configuration requests remaining cached and preventing timely retries.
- **【🔨】** Fix the list on the Wish Record retrieval page not scrolling.

[Microsoft Store](https://apps.microsoft.com/search?query=Snap%20Hutao%20Remastered) · [GitHub Setup](https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/releases/latest) · [MSIX migration](/en/advanced/msix-migration)

**Full Changelog:** https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/compare/2.0.1...2.0.2
