---
category: [FAQ]
icon: iconfont icon-delete
tag: [卸载]
order: 9
comment: false
description: 卸载胡桃工具箱是一个简单快速的过程，你可以根据本页教程，以最适合你的程度来卸载胡桃工具箱。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/uninstall.html&has_description=False
---

# 卸载胡桃重制版

::: warning
如果是为了从旧 MSIX 转移到 2.0.2 Microsoft Store 版，**不要先卸载或清理旧版数据**。请先按照 [数据迁移指南](/zh/advanced/msix-migration) 备份并核对。
:::

卸载 Snap Hutao Remastered是一个简单的过程。如果您希望完全移除程序及其相关数据，请按照以下步骤操作：

## 卸载 Snap Hutao Remastered应用程序

1. 打开 **开始菜单**。
2. 搜索 `Snap Hutao`。
3. 右键点击 Snap Hutao Remastered并选择 **“卸载”**。

## 清除应用数据（仅限确定不再需要时）

数据位置取决于安装方式和用户设置。旧 MSIX 的默认数据通常位于 `%LOCALAPPDATA%\Packages\E8B6E2B3-D2A0-4435-A81D-2A16AAF405C8_*\LocalState\Hutao`；新版商店包位于 `%LOCALAPPDATA%\Packages\SnapHutaoRemasteringProje.SnapHutaoRemastered_*\LocalState\Hutao`；Setup 版通常位于 `%LOCALAPPDATA%\SnapHutaoRemastered`。带星号的部分是各自包完整名称的后缀，不能直接粘贴作为文件夹路径。若更改过数据目录，以应用实际设置为准。请先备份，再手动删除不再需要的目录。
::: info
下面的是原项目的内容，仅作留存参考。
:::
# 卸载胡桃工具箱

卸载 Snap Hutao 是一个简单的过程。如果您希望完全移除程序及其相关数据，请按照以下步骤操作：

## 卸载 Snap Hutao 应用程序

1. 打开 **开始菜单**。
2. 搜索 `Snap Hutao`。
3. 右键点击 Snap Hutao 并选择 **“卸载”**。

## 清除数据文件夹（如需完全卸载）

1. 打开文件资源管理器。
2. 前往以下路径：`%userprofile%/Documents/Hutao`。
3. 删除 `Hutao` 文件夹。

## 常见问题

### 为什么会弹出“需要使用新应用以打开”的对话框？

![uninstall-error](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01b3j0eY1g6duBXLJXg_!!1797064093.jpg_.webp)

如果卸载 Snap Hutao 后出现如上图所示的“需要使用新应用以打开此 hutao 链接”提示，这说明在卸载前未清除实时便笺定时任务。该问题仅出现在较老版本的 Snap Hutao 中。

解决方案：

1. 重新安装 Snap Hutao。
2. 在设置中清除实时便笺定时任务。
3. 再次卸载 Snap Hutao。

若在系统定时任务中找不到相关任务但问题仍然存在，请参考 [这份文档](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/18) 获取进一步解决方法。

### 如何完整备份/恢复客户端数据？

::: warning 数据安全提示
`Userdata.db` 文件包含您的全部客户端数据，包括安全敏感的米哈游论坛 Cookie。请妥善保管此文件，不要与他人分享。
:::

#### 备份数据

1. 前往胡桃数据目录（默认路径为 `%userprofile%/Documents/Hutao`）。
2. 复制文件夹内的 `Userdata.db` 文件至您选择的备份位置。

#### 恢复数据

1. 将备份的 `Userdata.db` 文件复制回胡桃数据目录中。
2. 启动 Snap Hutao，恢复您的数据。

通过以上步骤，您可以安全地备份或恢复胡桃工具箱的全部数据。
