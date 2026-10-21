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
## 2.0.1 Release<Badge text="Latest" type="tip" />
- **【🎉New】** Added a dedicated Account History Insights window, accessible from Network settings and the Wish History, Spiral Abyss, Imaginarium Theater, and Stygian Onslaught pages #335
- **【🎉New】** Added charts based on locally saved records: monthly counts and banner distributions for both regular wishes and Miliastra Wonderland wishes, plus Abyss stars, Theater medals, and solo Stygian Onslaught clear times grouped by difficulty #335
- **【🎉New】** Account insights incorporates the existing wish statistics for recorded five-star characters and weapons, average pity, current pity, featured results, and guarantees; incomplete histories are not treated as zero #335
- **【🎉New】** Added an optional AI assistant inside Account History Insights, with user-initiated analysis, streamed Markdown replies, and multi-turn follow-up questions about recorded history #335
- **【🎉New】** The AI assistant supports OpenAI Chat Completions, OpenAI Responses, and Anthropic APIs with configurable endpoints, API keys, models, and inference parameters #335
- **【🎉New】** Added saved conversation management, model switching, response regeneration, conversation copying, token statistics, and approve/deny controls for tools that require user consent #335
- **【🎉New】** Added a scale control for Liquid Glass ToggleSwitch visuals, defaulting to 0.7 without resizing labels
- **【🎉New】** Expanded Liquid Glass optical parameters and pointer-lighting settings, with immediate visual updates
- **【🎉New】** Added Skip this version to update prompts: automatic checks will no longer prompt for that version, while manual update checks remain available
- **【🎉New】** Added Island's Redirect Catherine option, which opens the daily commission reward confirmation directly from the Adventurer Handbook shortcut; a compatible Island component is required
- **【🎉New】** Added Refresh Installation on the game launch page, showing config.ini and ScriptVersion independently and warning about mismatches, missing files, or read errors
- **【🎉New】** Added copying of account-history statistical summaries for reviewing AI analysis inputs; configured model API keys are stored in Windows Credential Locker

- **【✨Optimization】** Enabled ReadyToRun (R2R) precompilation by default to reduce runtime JIT overhead, helping startup and responsiveness in applicable scenarios; refined the MSIX and installer publishing pipeline #334
- **【✨Optimization】** Improved AI model discovery, display labels, and selection for OpenAI-compatible services; model refresh retains custom names, parameters, and selection while rejecting duplicate or invalid IDs
- **【✨Optimization】** AI reasoning is collapsed by default and can be expanded with bounded scrolling; improved model-settings layouts, the insights window, and destructive-action affordances
- **【✨Optimization】** Improved Liquid Glass profile validation, persistence, and rollback so rejected settings do not overwrite unrelated unsaved changes
- **【✨Optimization】** Refined Fluent and Liquid Glass theme foregrounds, card corner clipping and shadows, calendar material icons, and sign-in card overlays #325
- **【✨Optimization】** Improved Acrylic rendering and popup behavior across Flyout, ComboBox, NumberBox, and related controls
- **【✨Optimization】** Moved cached-image retrieval off UI callbacks and improved asynchronous lock scheduling and page cleanup to reduce UI blocking and race conditions
- **【✨Optimization】** Improved completed-achievement counts after import, guide navigation recovery, and Crowdin translations

- **【🔨Fix】** Fixed incorrect installed-version detection when config.ini and ScriptVersion disagree; version-dependent updates and predownloads are disabled until the discrepancy is resolved, but explicit full verification and repair remain available
- **【🔨Fix】** Fixed stale installation metadata during game package operations: version sources are checked again before work begins and synchronized only after resource verification, preserving channel settings and backups with rollback on failure
- **【🔨Fix】** Fixed insufficient Island compatibility checks: installed game version and matching DLL are validated before process creation, without restricting ordinary launches
- **【🔨Fix】** Fixed unpackaged startup tasks pointing to an incorrect executable and settings toggles becoming inconsistent when task registration fails
- **【🔨Fix】** Fixed blank AI model names, lost ComboBox selection, parameter exceptions when adding models, and unstable handling of large discovery results
- **【🔨Fix】** Fixed external AI settings reloads overwriting newer local edits or credential changes with stale snapshots
- **【🔨Fix】** Fixed bindings for approving or denying AI tool calls and for rendering fallback tool names and arguments
- **【🔨Fix】** Fixed missing native runtime libraries and dependencies in published MSIX and installer outputs, with pre-packaging validation
- **【🔨Fix】** Fixed some native controls retaining glass backgrounds after switching off Liquid Glass, broken template bindings, and incorrect theme foregrounds #317
- **【🔨Fix】** Fixed visual and interaction feedback in certain Liquid Glass dropdowns, flyouts, and controls #308
- **【🔨Fix】** Fixed the Daily Note notification toggle not updating visually after its setting changed
- **【🔨Fix】** Fixed cross-thread access during account-role selection, re-adding existing accounts, and automatic sign-in snapshots #318 #326
- **【🔨Fix】** Fixed hotkey-enabled settings being overwritten by stale values during reentrant property notifications #327
- **【🔨Fix】** Fixed cultivation cards and shared flyouts not refreshing after deletion, stale items being saved, and card actions being intercepted by a flyout #329
- **【🔨Fix】** Fixed HTTP request-body replay on retry and background video playback state across Windows session lock/unlock #320 #323
- **【🔨Fix】** Fixed exceptions in the Hutao Passport password-reset dialog and countdown behavior in the fast-dialogue-skip confirmation
- **【🔨Fix】** Fixed calendar material bindings when switching visual modes, some Snezhnaya character icons and missing skill-description text, and the Wish Statistics mode toggle #313

> Note: AI analysis runs only when initiated by the user with a configured model service. Historical aggregates and wish summaries, not the entire account database, are sent to that provider. Although direct identifiers such as UID are removed, distinctive history patterns may still be linkable. Review the third-party provider's privacy policy before use.

## 1.20.4 Release
- **【🎉New】** Added a "Control Material" setting to switch between native Fluent and Liquid Glass, with an effect preview #279
- **【🎉New】** Liquid Glass can now be enabled per control type, with adjustable blur, refraction, highlight and other optical parameters plus a live preview #279
- **【🎉New】** Added an offline mode: falls back to the local repository list when the server is unreachable, with a reconnect entry
- **【🎉New】** The "My Characters" page now supports choosing an artifact score algorithm per character: HoYoLAB recommended stats, built-in scoring presets, or custom score configurations #269
- **【🎉New】** Backpack items now have equipped-state filters (Equipped / Unequipped) and an equipped-character badge, with equipment info in the detail flyout
- **【🎉New】** Backpack artifacts now show a Sanctifying Elixir marker and can be filtered by it; the substats defined by Sanctifying Elixir can be viewed
- **【🎉New】** Artifact substats are now colored by valid / invalid / dual crit / inactive, and the inactive 4th substat is displayed
- **【🎉New】** Added a refresh button to the Realtime Notes card on the home page #281
- **【🎉New】** Added character IDs for version 7.1 and new material types

- **【✨Optimization】** Refactored the plugin system: disabling a plugin now releases its assemblies, and saving/resetting plugin settings shows a result notification
- **【✨Optimization】** Upgraded Yae to the 5.5.0 protocol, with support for subscribing to custom packets
- **【✨Optimization】** Improved backpack item list performance, reducing stutter when switching or refreshing
- **【✨Optimization】** Artifact score configuration dialog: canceling no longer saves, deletion runs in a single transaction, switching presets no longer reverts, and saving no longer discards existing edits
- **【✨Optimization】** Improved background video thread control to reduce background resource usage
- **【✨Optimization】** A hint is now shown when a background image cannot be decoded instead of silently skipping it
- **【✨Optimization】** Improved default language selection and regional language matching: matches supported languages by system UI language while keeping Simplified and Traditional Chinese distinct #117
- **【✨Optimization】** Upgraded to .NET 11 and updated dependencies

- **【🔨Fix】** Fixed protocol arguments being lost when "Automatically restart as administrator" is enabled, which prevented `hutao://launch/` from launching the game directly #305
- **【🔨Fix】** Fixed synced character levels and talents in the cultivation plan not accounting for constellation bonuses #307
- **【🔨Fix】** Fixed some local specialty counts not syncing when the cultivation plan syncs via a backpack save #280
- **【🔨Fix】** Fixed auto sign-in only checking in the current account #302
- **【🔨Fix】** Fixed background videos occupying the system SMTC #290
- **【🔨Fix】** Fixed backpack equipment state treating "unknown" as "unequipped", which made filters wrong for old saves
- **【🔨Fix】** Fixed an exception caused by Yae packet handling referencing a pooled buffer that had already been returned
- **【🔨Fix】** Fixed backup-domain switching and request retries: URL query parameters are no longer rewritten incorrectly, and non-idempotent requests are no longer retried automatically
- **【🔨Fix】** Fixed the app occasionally blocking on exit
- **【🔨Fix】** Fixed HTML escaping in localized resources so bold hints render correctly again

## 1.20.3 Release
- **【🎉New】** Added a pre-download progress badge to the game management page
- **【🔨Fix】** Fixed pre-download not being pausable
- **【🔨Fix】** Fixed a possible memory leak when updating the game window

## 1.20.2 Release
- **【🎉New】** Added a "This Month's Primogem Sources" page to the Traveler's Diary card, showing the breakdown with a donut chart
- **【🎉New】** Cultivation plan now supports syncing character levels and talents via HoYoLAB
- **【🎉New】** Material domains are no longer restricted within 7 days after a banner change, and the calendar card shows the corresponding hint
- **【🎉New】** Added farming schedule for new materials from Snezhnaya
- **【🎉New】** Added a second confirmation when disabling resin item options
- **【🎉New】** The "Running in background" notification can now be turned off #260

- **【✨Optimization】** Backpack artifacts are now sorted by SortOrder
- **【✨Optimization】** Removed the item rarity filter from the backpack page
- **【✨Optimization】** Removed the gray background of artifact icons in the backpack
- **【✨Optimization】** Material list in the calendar cultivation card now supports vertical scrolling
- **【✨Optimization】** Added troubleshooting hint for "Target Frame Rate" not working #262
- **【✨Optimization】** Added description to the Mirror酱 CDK redemption dialog
- **【✨Optimization】** Improved the interaction and style of the countdown confirmation dialog

- **【🔨Fix】** Fixed false network detection leaving the app stuck on "network unavailable" #268
- **【🔨Fix】** Fixed auto-update failure when using the backup domain #265
- **【🔨Fix】** Corrected domain open days and material schedule data

## 1.20.1 Release
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
