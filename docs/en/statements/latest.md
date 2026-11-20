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

This release adds a Windows 10 live tile for Real-time Notes, improves **game process detection and management**, makes Island's Catherine Redirect setting available to all users, and fixes a MiYouShe sign-in issue affecting some users.

### 🎉 New Features

- **【🎉New】** The Game Launch page automatically detects Genshin Impact when it is launched outside Snap Hutao, shows its running state, and lets you end the game process.
- **【🎉New】** Island's Catherine Redirect setting is now available to all users.
- **【🎉New】** The MSIX edition on Windows 10 now supports a Real-time Notes Start menu live tile for resin and daily commission progress. Search for a character to use their namecard as the tile background.
- **【🎉New】** The new Legacy Paimon Menu setting in Island restores the positions of the Miliastra Wonderland shop and popular Wonders in the Paimon Menu.
- **【🎉New】** Installers can now include bundled images. Storage settings can remove cached copies that match the bundled files.

### ✨ Improvements

- **【✨Improved】** Reduced unnecessary process scans and used operating system exit notifications to update the running state promptly.
- **【✨Improved】** Snap Hutao can now attempt to end game processes running at the same privilege level without running as administrator.
- **【✨Improved】** Improved state checks after ending a game process, handling multiple matching processes and showing clearer error messages when the operation fails.
- **【✨Improved】** All MSIX builds and Setup installers with bundled images skip bulk image downloads during first-run setup. Missing images download on demand. Standard Setup without bundled images can still preload images by category.
- **【✨Improved】** Added an illustrated in-app tip for Catherine Redirect.
- **【✨Improved】** Applied the saved theme to individual windows and dialogs and refined Settings animations and translations.
- **【✨Improved】** Added support for new material categories in Genshin Impact 7.1.

### 🔨 Bug Fixes

- **【🔨Fix】** Fixed an issue that prevented some users from signing in to MiYouShe.
- **【🔨Fix】** Fixed delays in updating the running state when the game was started or closed outside Snap Hutao.
- **【🔨Fix】** Fixed Island sometimes showing as connected after the game process exited.
- **【🔨Fix】** Fixed change notifications for certain read-only properties failing to refresh `x:Bind` bindings on the Game Launch page.
- **【🔨Fix】** Fixed errors when ending the game if some processes were inaccessible or multiple matching processes were running.
- **【🔨Fix】** Fixed failed remote feature configuration requests being cached for too long and delaying retries.
- **【🔨Fix】** Fixed the list on the Wish Record retrieval page failing to scroll.
- **【🔨Fix】** Fixed the refresh time overlapping the UID on Real-time Notes cards.
- **【🔨Fix】** Fixed Island closing the game when account verification encountered a network error or timeout. It now displays a warning and leaves the game running.
- **【🔨Fix】** Fixed version detection and repair when `config.ini` contains duplicate `game_version` entries, and improved handling of INI comments and section headers.
- **【🔨Fix】** Separated standard and Miliastra Wonderland wish queries, improved validation of manually entered and cached wish URLs, and localized the missing wish metadata error.
- **【🔨Fix】** Fixed failed inventory syncs potentially clearing previously synced items.
- **【🔨Fix】** Fixed stalled image downloads taking too long to stop during first-run setup.
- **【🔨Fix】** Fixed cleared plugin settings retaining old values, and fixed some blank dropdown options.
- **【🔨Fix】** Fixed waiting on exit after closing the window and an error during account initialization.
- **【🔨Fix】** Restored the Nod-Krai and Snezhnaya character affiliation icons.

### Usage Notes

If the game runs with elevated privileges, you may still need to run Snap Hutao as administrator to end the game process.

[Full Changelog](https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/compare/2.0.1...2.0.2)
