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

# 🎉 Successfully Updated to Version 1.20.4

**简体中文** | [English](/en/statements/latest.html)

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
