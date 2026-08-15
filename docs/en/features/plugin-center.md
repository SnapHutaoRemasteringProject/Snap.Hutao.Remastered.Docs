---
headerDepth: 2
category: [Feature, Tutorial]
order: 5
tag: [plugin, extension, plugin center]
comment: false
description: The Plugin Center in Snap Hutao supports installing and managing third-party plugins, extending the tool's functionality through a plugin system including installation, enabling, disabling, settings management, and in-game DLL injection.
---

# Plugin Center

The Plugin Center is an extensible plugin system provided by Snap Hutao, allowing users to install and manage third-party plugins to flexibly extend the functionality of the toolbox.
All installed plugins are automatically loaded when the program starts, and users can manage them in a unified interface on the Plugin Center page.

## Installing Plugins

![Plugin Center](/images/202608/plugin-center.webp)

::: tip Plugin Format
Snap Hutao plugin files use the `.hutao` extension and are actually ZIP archives containing a plugin manifest, assemblies, and optional resource files.
:::

1. Open Snap Hutao and navigate to the **Plugin Center** page from the left navigation bar
2. Click the **Install Plugin** button on the toolbar
3. Select a `.hutao` plugin file in the file picker
4. The program will automatically extract and validate the `manifest.json` in the plugin package, and complete the installation upon successful verification
5. After successful installation, the plugin will appear in the plugin list

## Managing Plugins

The Plugin Center page displays all installed plugins as cards, with each card containing the following information:

- **Plugin Icon**: Provided by the `icon.png` file inside the plugin package; a default icon is shown if not present
- **Name and Description**: From the `name` and `description` fields in the plugin manifest
- **Version**: Shows the current version of the plugin
- **Author**: Displays the list of plugin authors
- **Status Badge**: A colored label indicating whether the plugin is currently **Enabled** or **Disabled**

### Enabling and Disabling Plugins

- Click the **Enable** button on a plugin card to activate the plugin, which calls the plugin's `OnEnable()` lifecycle method
- Click the **Disable** button to deactivate the plugin, which calls the `OnDisable()` method and releases associated resources
- The enable/disable state toggle also renames the plugin file extension (`.hutao` ↔ `.hutaodisabled`)

### Uninstalling Plugins

1. Click the **Uninstall** button on a plugin card
2. Confirm the operation in the confirmation dialog
3. The program will first disable the plugin, then delete the plugin file to complete the uninstallation

### Other Operations

- **Refresh**: Click the refresh button on the toolbar to re-scan and reload the plugin directory
- **Open Plugin Directory**: Click the folder button on the toolbar to open the plugin storage directory in File Explorer

## Plugin Settings

If a plugin provides configurable settings, click the **Settings** button on the plugin card to enter the plugin's settings page.

The settings page provides different input controls based on the setting value type:

- **String type**: Uses a text input box (TextBox)
- **Integer type**: Uses a number input box (NumberBox)
- **Boolean type**: Uses a toggle switch (ToggleSwitch)

Each setting item provides **Save** and **Reset to Default** buttons for easy adjustment and restoration of settings.

## In-Game DLL Injection

::: important Advanced Feature
DLL injection is an advanced feature of the plugin system and only takes effect when launching the game through Snap Hutao.
:::

When users launch the game through Snap Hutao, the program iterates through all enabled plugins and checks whether they contain an `inject/` directory within their plugin package. If such a directory exists, all `.dll` files inside it will be injected into the game process.

This feature allows plugins to interact with the game at runtime, enabling richer functionality extensions.

## Plugin Development

::: tip Developer Information
To develop your own Snap Hutao plugin, refer to the `Snap.Hutao.Plugin.SDK` NuGet package. The SDK provides core APIs including the `HutaoPlugin` base class, `PluginSetting<T>` for settings management, and `PluginScopedPage` for custom pages.
:::

Basic steps for plugin development:

1. Create a .NET class library project and install the `Snap.Hutao.Plugin.SDK` package
2. Create a main class inheriting from `HutaoPlugin` and mark it with the `[PluginMain]` attribute
3. Implement the lifecycle methods: `OnInstall()`, `OnLoad()`, `OnEnable()`, `OnDisable()`, `OnUninstall()`
4. Fill in plugin metadata (name, ID, version, author, description) in `manifest.json`
5. Package the compiled DLL, `manifest.json`, and optional `icon.png` into a `.hutao` file (ZIP format)
