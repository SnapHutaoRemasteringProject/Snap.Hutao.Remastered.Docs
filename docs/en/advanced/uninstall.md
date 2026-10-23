---
category: [FAQ]
icon: iconfont icon-delete
tag: [Uninstall]
order: 9
comment: false
description: Uninstalling Snap Hutao Remastered is a simple and quick process. You can follow the tutorial on this page to uninstall Snap Hutao Remastered to the extent that suits you best.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/uninstall.html&has_description=False
---

# Uninstall Snap Hutao Remastered

::: warning
If you are moving from an older MSIX to the 2.0.2 Microsoft Store edition, **do not uninstall or delete old data first**. Follow the [migration guide](/en/advanced/msix-migration) and make a backup.
:::

Uninstalling Snap Hutao Remastered is a straightforward process. If you want to completely remove the program and its associated data, please follow these steps:

## Uninstalling the Snap Hutao Remastered Application

1. Open the **Start Menu**.
2. Search for `Snap Hutao Remastered`.
3. Right-click on Snap Hutao Remastered and select **"Uninstall"**.

## Delete application data (only when it is no longer needed)

The location depends on the installation channel and your configuration. The old MSIX default is generally `%LOCALAPPDATA%\Packages\E8B6E2B3-D2A0-4435-A81D-2A16AAF405C8_*\LocalState\Hutao`, the Store MSIX default is `%LOCALAPPDATA%\Packages\SnapHutaoRemasteringProje.SnapHutaoRemastered_*\LocalState\Hutao`, and the Setup edition usually uses `%LOCALAPPDATA%\SnapHutaoRemastered`. The asterisk stands for the package-name suffix, not a literal folder path. If you configured a custom directory, use that location instead. Back up before deleting any data.

## Frequently Asked Questions

### Why does the "You'll need a new app to open this" dialog box pop up?

![uninstall-error](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01b3j0eY1g6duBXLJXg_!!1797064093.jpg_.webp)

If you see a prompt like "You'll need a new app to open this hutao link" after uninstalling Snap Hutao Remastered as shown above, it means that the real-time notes scheduled task was not cleared before uninstallation. This issue only occurs in older versions of Snap Hutao Remastered.

Solution:

1. Reinstall Snap Hutao Remastered.
2. Clear the real-time notes scheduled task in the settings.
3. Uninstall Snap Hutao Remastered again.

If you cannot find the relevant task in the system's scheduled tasks but the problem persists, please refer to [this document](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/18) for further solutions.

### How to Fully Backup/Restore Client Data?

::: warning Data Security Warning
The `Userdata.db` file contains all of your client data, including your sensitive MiHoYo BBS Cookie. Please keep this file safe and do not share it with anyone.
:::

#### Backing Up Data

1. Go to the Snap Hutao Remastered data directory (default path is `%userprofile%/Documents/Hutao`).
2. Copy the `Userdata.db` file from the folder to your chosen backup location.

#### Restoring Data

1. Copy the backed-up `Userdata.db` file back into the Snap Hutao Remastered data directory.
2. Launch Snap Hutao Remastered to restore your data.

By following the above steps, you can safely backup or restore all of your Snap Hutao Remastered data.
