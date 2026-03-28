---
category: [Open Source, Development]
tag: ["Development", "GitHub"]
icon: iconfont icon-code
order: 3
description: Snap Hutao Remastered is developed using C# and the .NET framework for both the desktop client and server. We greatly appreciate feedback from the open-source community, and if you're willing to contribute your code, please refer to the instructions in this document.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/development/contribute.html
---

# Contribute Your Code

Snap Hutao Remastered is developed using `C#` and the `.NET Framework` for both the desktop client and server. We greatly appreciate feedback from the open-source community. If you are willing to contribute your code, please read the following guidelines.

You can find all [unsolved opened issues](https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues) on GitHub.

## <HopeIcon icon="iconfont icon-visual-studio" size="1.5rem" color="rgb(193,142,241)" /> Setup Snap Hutao Remastered Project
For more contribution details, please refer to [CONTRIBUTING.md](https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered?tab=contributing-ov-file#contribute-your-code) on GitHub.  
This guide is not mandatory; you can adjust it according to your personal habits for different situations.
1.  Download and install [Visual Studio 2026](https://visualstudio.microsoft.com/downloads/)
    - You need to install the following components:
      - `.NET desktop development`
      - `Desktop development with C++`
      - `Windows application development`
2.  Use Git to clone the project repository: `git@github.com:SnapHutaoRemasteringProject/Snap.Hutao.Remastered.git`.
3.  Switch the branch to `develop`.
4.  Open the project solution (Solution) with Visual Studio using the corresponding .slnx file, and you can start developing.

## <HopeIcon icon="iconfont icon-debug" size="1.5rem" color="rgb(73,156,84)" /> Enable Debug

1. Download and install [Sysinternals Suite](https://www.microsoft.com/store/productid/9P7KNL5RWT25) from the Microsoft Store or download it from the [Microsoft website](https://learn.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite).
2. Locate and run the `DebugView` program (either in the Start menu or in the unzipped files).
3. Launch the Snap Hutao Remastered main program.
4. Observe the debug information output by `DebugView`.

## <HopeIcon icon="iconfont icon-pull-request" size="1.5rem" color="rgb(130,80,223)"/> Start Pull Request

- All Pull Requests not initiated from other branches of the project are only allowed to be merged into the `develop` branch.
- If your code is related to an existing issue, please use [keywords](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests) to link your PR to the relevant issue. This will automatically close the issue when the PR is merged into the `main` branch.

## <HopeIcon icon="iconfont icon-build-package" size="1.5rem" color="rgb(254,189,105)" /> Test Binary Package

::: warning Attention
If you want to try the latest Alpha version, please download and install [**SnapHutaoRemasteringProjectRootCA.cer**](https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/raw/refs/heads/main/SnapHutaoRemasteringProjectRootCA.cer) to **Trusted Root Certification Authorities** first.
:::

- After each `push`, a GitHub Actions script will automatically run to build the latest solution:
  - For the `main`, `develop`, and `feat` branches, the script will automatically upload the built `Snap Hutao Remastered Alpha` archive for testing.
  - Other branches will only verify code buildability and will not provide an upload feature.
- You can view all build logs in the [Alpha pipeline](https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/actions/workflows/alpha.yml).
