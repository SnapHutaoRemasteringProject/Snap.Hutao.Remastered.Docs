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

# 🎉 Successfully Updated to Version 2.0.1

[简体中文](/zh/statements/latest.html) | [繁體中文](/tw/statements/latest.html) | **English**

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
