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
## 1.20.1 Release<Badge text="Latest" type="tip" />
- **【🎉New】** Added character total score display on character page, artifact score supports color gradient #254
- **【🎉New】** Added Traveler's Diary card on home page showing today's and this month's Primogems and Mora #249
- **【🎉New】** BetterGI automation now supports fetching current cultivation plan
- **【🎉New】** Added character IDs for version 7.0

- **【✨Optimization】** Optimized page transition animations
- **【✨Optimization】** Optimized character artifact scoring algorithm
- **【✨Optimization】** Permanent wish statistics now show 2-star item count and ratio #258

- **【🔨Fix】** Fixed homepage jumping when opening Snap Hutao #247
- **【🔨Fix】** Fixed compact webview window video unable to enter mini window #245
- **【🔨Fix】** Fixed window close lag in administrator mode
- **【🔨Fix】** Fixed crash dialog disappearing

## 1.20.0 Release
- **【🎉New】** Added backpack items page with filtering, dynamic sorting, and detail viewing
- **【🎉New】** Added artifact scoring feature #158
- **【🎉New】** Added lock and mark icons for weapons and artifacts
- **【🎉New】** Automation tasks now support manually entering BetterGI path #232
- **【🎉New】** Cultivation plan now supports syncing items from backpack inventory
- **【🎉New】** Added Mirror酱 (MirrorChyan) download channel and auto-update adaptation

- **【✨Optimization】** Optimized cultivation calculation #220
- **【✨Optimization】** Optimized backpack item performance
- **【✨Optimization】** Reduced copy overhead on gacha page
- **【✨Optimization】** Auto-close flyout menu after modifying cultivation parameters
- **【✨Optimization】** No longer blocks low Windows versions; shows first-launch warning instead

- **【🔨Fix】** Fixed 7.0 first-half background video not playing or displaying abnormally
- **【🔨Fix】** Fixed crash when installing the game
- **【🔨Fix】** Fixed FileUnlocker causing metadata update to get stuck
- **【🔨Fix】** Fixed crash when Toast notification helper process is not registered #216
- **【🔨Fix】** Fixed duplicate window appearing when restoring after game-launch window close #238
- **【🔨Fix】** Fixed character page skill level ComboBox height error #242
- **【🔨Fix】** Fixed Embedded Yae achievement import error #246
- **【🔨Fix】** Fixed backpack items showing empty materials
- **【🔨Fix】** Fixed condensed resin being categorized as material instead of precious item

## 1.19.9 Release
- **【🔨Fix】** Fixed crash when switching pages in debug mode
- **【🔨Fix】** Completely fixed UIGF timezone issue
- **【🔨Fix】** Fixed ContentDialog interaction animation lost

## 1.19.8 Release
- **【🎉New】** Auto-close main window on game launch, auto-restore on game exit #195
- **【🎉New】** Agreement checkbox added to Hutao Passport registration
- **【🎉New】** Achievement grid view now shows earned/total primogem count #219

- **【✨Optimization】** Gacha record delete confirmation dialog to prevent accidental deletion
- **【✨Optimization】** Adjusted frame rate cap
- **【✨Optimization】** Auto-switching fallback domains no longer modifies persistent settings
- **【✨Optimization】** Enhanced game launch error messages

- **【🔨Fix】** Fixed app freezing on download page in certain scenarios
- **【🔨Fix】** Fixed UIGF v3.0 export failure due to missing UID checkbox #217
- **【🔨Fix】** Fixed re-login required when launching via BetterGI after Hutao Passport login #151
- **【🔨Fix】** Fixed announcement page double refresh when switching tabs #118
- **【🔨Fix】** Fixed window unable to restore after minimizing to tray
- **【🔨Fix】** Fixed vertical scrollbar hiding gacha record action buttons

## 1.19.7 Release
- **【🎉New】** Official launcher-like dynamic background #191
- **【🎉New】** Customizable background video wallpaper support

- **【✨Optimization】** GuideView download progress with speed display and 10s stall detection #188
- **【✨Optimization】** Separate character anti-blur and underwater mosaic options #184
- **【✨Optimization】** Improved toast notification under admin privileges; Unpackaged mode notification support #113
- **【✨Optimization】** Updated character Wiki page enhanced styling
- **【✨Optimization】** Added light-theme icon for Beyond Gacha button #166
- **【✨Optimization】** Suppress plugin loading message on startup
- **【✨Optimization】** Full screen mode enabled by default

- **【🔨Fix】** Background video GPU decoding resource consumed after minimizing
- **【🔨Fix】** Occasional error window after exiting
- **【🔨Fix】** Repeated account error messages when network is abnormal
- **【🔨Fix】** Quick launch game shortcut hard to trigger #194
- **【🔨Fix】** Character Wiki missing event-enhanced character content #190
- **【🔨Fix】** Background video settings not saving
- **【🔨Fix】** Durin's constellation text error #185
- **【🔨Fix】** UIGF file timezone issue

## 1.19.6.0 Release
- **【🎉New】** Auto-enable backup domain when main domain is polluted #169
- **【🎉New】** Weapon "Frostbound Oath" added to database #165
- **【🎉New】** Local background image supports custom path and shortcut links #143

- **【✨Optimization】** Game version 6.7 adaptation
- **【✨Optimization】** Speedgraph chart update #183
- **【✨Optimization】** Add new icons for AssociationTypeIconConverter

- **【🔨Fix】** "Remove Elemental Burst Camera" in injection feature not working #182
- **【🔨Fix】** "Close Map Banner" still showing in-game when enabled #181
- **【🔨Fix】** Pool pull count syncs with merge button changes #179
- **【🔨Fix】** List view and grid view buttons not working in wish records #178
- **【🔨Fix】** Web cache refresh gacha record feature fix #175
- **【🔨Fix】** Crash when selecting game path or installing plugin #173
- **【🔨Fix】** Anti-character blur function underwater behavior #162
- **【🔨Fix】** NotifyIcon double left-click not activating minimized window #112

## 1.19.5.1 Release
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
