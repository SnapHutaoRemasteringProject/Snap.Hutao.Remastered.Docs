---
category:
  - Announcement
icon: iconfont icon-update
order: 1
comment: false
externalLinkIcon: false
description: Snap Hutao strives to provide users with the best user experience by continuously updating and fixing known issues and releasing new features. We will always publish update logs to track the changes made to the program.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/update-log.html
---

# Update Logs
## 1.19.5.1 Release<Badge text="Latest" type="tip" />
- **【✨Optimization】** Reduce auto-update thread count
- **【✨Optimization】** Change WebView2 data directory in Unpackaged mode to resolve permission issues

- **【🔨Fix】** Fix auto-update unable to run a second time in certain cases
- **【🔨Fix】** Fix auto-restart-as-admin not working
- **【🔨Fix】** Fix Beyond Gacha records unable to download from Hutao Cloud
- **【🔨Fix】** Add data migration for Beyond Gacha record fix

## 1.19.5 Release
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

## 1.19.3 Release
- **【🎉New】** Supports automatic consecutive sign-in after date updates, with new installations defaulting to enabled sign-in
- **【🎉New】** Home page game version event information window toggle
- **【🎉New】** Portable open synthesis table option
- **【🎉New】** More relaxed map teleportation function checks allowing map opening in domains

- **【✨Optimization】** Particular cases of auto-start stability
- **【✨Optimization】** Update logic for old version icon registration information
- **【✨Optimization】** Name of created shortcut icons

- **【🔨Fix】** Taskbar tray icon tooltip text display
- **【🔨Fix】** Hutao tray icon missing after Task Manager restart
- **【🔨Fix】** Unable to copy redemption code
- **【🔨Fix】** Application may freeze when exiting after preparing metadata or calling exit through notification icon menu
- **【🔨Fix】** uifg export timezone issue
- **【🔨Fix】** Internal program update adaptation

## 1.19.2 Release

- **【🎉New】** Home page displays the current version game event calendar
- **【🎉New】** Settings display current version game event calendar entries that are not in progress

- **【✨Optimization】** Optimized home page loading speed
- **【✨Optimization】** Optimized app auto-start update logic under non-administrator privileges

- **【🔨Fix】** Fixed display issue in the Pass account dialog

## 1.19.1 Release

- **【🎉New】** My Characters page supports batch exporting character development status as text documents [#82]
- **【🎉New】** Main interface displays countdown for remaining event time [#76]
- **【🎉New】** Background task status display to avoid misjudgment as unresponsive
- **【🎉New】** Program auto-start function (full support for Win11, limited support for Win10)
- **【🎉New】** New update download progress chart UI display (not final effect, still being optimized)
- **【🎉New】** Support for pause and resume during game update/repair processes
- **【🎉New】** Custom launch: allows launching more applications with one click when starting the game

- **【✨Optimization】** Internal program update adaptation [#96]
- **【✨Optimization】** Added maintainer prompt during OOBE stage: Snap Hutao Remastered is not maintained by the original author [#90]
- **【✨Optimization】** Functions automatically recover after network environment restoration at startup
- **【✨Optimization】** Optimized Hutao account login failure verification mechanism

- **【🔨Fix】** Fixed issue where process does not exit after closing the game [#98]
- **【🔨Fix】** Fixed abnormal game process exit [#92]
- **【🔨Fix】** Fixed exception when refreshing wish records [#78]
- **【🔨Fix】** Fixed error when adding character development [#87]
- **【🔨Fix】** Handled issue where Deployment.exe is falsely reported as Malgent!MSR by some antivirus software [#91]
- **【🔨Fix】** Fixed issue where window may not close if game update download is cancelled
- **【🔨Fix】** Fixed text overlap on pause button

## 1.19.0 Release

- **【✨Optimization】** Remove the time adjustment process (#66)  

- **【🔨Fix】** Fix the issue where stoken refresh causes duplicate import of all wish records (#74)  
- **【🔨Fix】** Fix the abnormal jitter of the progress bar when clicking the "Check for Updates" button twice during version update (#67)  
- **【🔨Fix】** Fix the "No response to update" issue (#64)


## Original Project Development Logs Before V1.18.0

**For patch notes older than 1.18.0, please check [`Update Logs Older than Version 1.18.0`](update-log-pre-1.18.0-archive.md)**
