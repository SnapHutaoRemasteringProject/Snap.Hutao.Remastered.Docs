---
category: [FAQ]
order: 8
comment: false
---

# Upgrade MSIX or switch installation types

The official 2.0.1 and 2.0.2 MSIX packages use the same package identity. Installing the signed 2.0.2 MSIX over 2.0.1 keeps your existing app data in place.

To switch between MSIX and Setup, find the data directory in Settings, fully exit Snap Hutao including from the system tray, and back up that directory. Install the target edition and check which data directory it uses. If the paths differ, exit Snap Hutao, back up existing files in the destination, and copy the data you need, such as `Userdata.db`, into that directory. Relaunch the app and verify your accounts and wish records. Keep the backup and original installation until you have verified the transfer. You may need to configure some settings again.

[Quick Start](/en/quick-start)
