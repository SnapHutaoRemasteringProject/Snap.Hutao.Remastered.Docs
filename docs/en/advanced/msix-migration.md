---
category: [FAQ]
order: 8
comment: false
---

# Migrate from a legacy MSIX installation to Microsoft Store

Starting with 2.0.2, the release MSIX uses a different package identity. Windows creates a separate app-data container for the Store edition; existing MSIX data and settings do not migrate automatically.

::: warning
Do not blindly copy the old `settings.dat` over the new application's settings, as it may contain old paths or package-specific values.
:::

1. Identify the **actual data directory** used by the old installation, especially if you changed it in settings. Back up everything. Fully exit both editions, including background tray processes.

2. In File Explorer, open `%LOCALAPPDATA%\Packages` and locate the old package directory beginning with `E8B6E2B3-D2A0-4435-A81D-2A16AAF405C8_`. Default user data is usually in `LocalState\Hutao`; use your configured path if different.

3. Install the new Microsoft Store edition, open it once, and exit completely. The new package directory starts with `SnapHutaoRemasteringProje.SnapHutaoRemastered_`; default user data is under `LocalState\Hutao`.

4. Back up destination files, then copy the required data (such as `Userdata.db` and needed resource folders) into the **actual new data directory**. Do not overwrite all of `Packages` or `LocalState`.

5. Restart the Store edition and verify accounts, wish records and other local history. `LocalSettings` are package-specific; preferences, sign-in state and credentials may require manual reconfiguration. Keep the old installation and backup until verification is complete.

[Quick Start](/en/quick-start)
