---
category: [FAQ]
order: 8
comment: false
---

# 旧版 MSIX 迁移到 Microsoft Store 版本

2.0.2 起，正式版 MSIX 的包身份已经改变。Windows 会把新版的数据保存在独立的应用容器中，旧版的本地数据和偏好设置不会自动迁移。

::: warning
不要直接复制旧版的 `settings.dat` 覆盖新包的设置文件；它可能包含旧路径或与包身份相关的内容。
:::

1. 查看旧版胡桃所使用的**实际数据目录**，如曾在设置中更改路径，请记录自定义路径。**完整备份**后退出两个版本，包括系统托盘中的后台进程。

2. 默认安装的旧版 MSIX 可在文件资源管理器中打开 `%LOCALAPPDATA%\Packages`，寻找以 `E8B6E2B3-D2A0-4435-A81D-2A16AAF405C8_` 开头的目录；用户数据一般在 `LocalState\Hutao`。如果设置了自定义目录，应以实际路径为准。

3. 从 Microsoft Store 安装新版本，打开一次后彻底退出。新包目录以 `SnapHutaoRemasteringProje.SnapHutaoRemastered_` 开头，默认用户数据在其中的 `LocalState\Hutao`。

4. 备份新版目标文件后，将旧版中需要的用户数据（如 `Userdata.db` 及相关资源文件夹）复制到新版**实际使用的数据目录**。不要直接覆盖整个 `Packages` 或 `LocalState`。

5. 重新启动商店版，核对账号、祈愿记录和其他历史内容。`LocalSettings` 属于各自包身份，部分偏好、登录状态和凭据可能需要重新设置。未确认迁移成功之前，请保留备份和旧版本。

[快速开始](/zh/quick-start)
