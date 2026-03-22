---
pageClass: link-box
externalLinkIcon: false
category: [Functionality, Tutorial]
comment: false
icon: iconfont icon-launch
order: 5
description: Follow this quick start guide to quickly set up Snap Hutao Remastered.
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01mpzxPR1g6e22IjFMh_!!1797064093.png
---

# Quick Start

Follow this quick start guide to quickly set up Snap Hutao Remastered.

## <HopeIcon icon="iconfont icon-windows" size="1.7rem" color="rgb(0, 168, 232)" /> Minimum System Requirements

| Requirement                      | Specification                                                         |
| -------------------------------- | --------------------------------------------------------------------- |
| **Minimum Supported OS Version** | Windows 10 Build 19045.5371 (22H2)<br/> Windows 11 Build 22621 (22H2) |
| **Recommended OS Version**       | Windows 11 Build 26100 (24H2) or later                                |
| **Required Components**          | Windows Update, App Installer, **MSVC Runtime**                       |
| Optional Components              | WebView2 Runtime                                                      |

**Unsupported OS Versions**:

1. Windows Enterprise Edition, including **LTSC and LTSB branches**
2. Windows IoT editions
3. **Lightweight or modified versions of Windows; issues on non-official Microsoft full versions will not be handled**
4. Issues on Windows Insider Preview builds will not be addressed

> **The January 2025 Windows update [KB5049981](https://support.microsoft.com/en-us/topic/january-14-2025-kb5049981-os-builds-19044-5371-and-19045-5371-12f3788f-6e7d-4524-8ab3-27d1666e0510) is a mandatory requirement for running Snap Hutao Remastered on Windows 10. It is included in Windows 10 Build 19045.5371 and later.**

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> Download Snap Hutao Remastered

### New Installation

::: tabs

== Use Deployment.exe Installer

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">Tip: Deployment.exe is our new installer that can automatically configure certificates, etc.</p>
  </div>

<VPCard
title="GitHub"
desc="All versions of Snap Hutao Remastered are released in the main code repository"
logo="/images/202312/github-mark.svg"
link="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/releases"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

:::

## Community-developed Derivative Versions

From the power of the community!
:::tabs 

== Snap Hutao Remastered

<div class="vp-card-container">
<VPCard
title="Snap Hutao Remastered Official Website"
desc="A project that has redesigned advanced features"
logo="https://snaphutaorp.org/logo.png"
link="https://snaphutaorp.org/"
background="rgba(155, 233, 168, 0.15)"
/>
</div>

== Snap Hutao Original Fix
<div class="vp-card-container">
<VPCard
title="Snap Hutao Original"
desc="Presented by WDG"
logo="/images/202312/github-mark.svg"
link="https://github.com/wangdage12/Snap.Hutao"
background="rgba(155, 233, 168, 0.15)"
/>
</div>
:::

If you are interested in making the Snap Hutao Remastered project better through your own efforts, you are welcome to [join us](development/join.md)!

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> Update Snap Hutao Remastered

Usually, following the update prompts within the application will complete the update.

As long as you do not manually delete the data directory, your local data will not be affected.

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> Install Optional Components

Through optional components, Snap Hutao Remastered can implement some functions more efficiently. Although they are not mandatory components, they can significantly improve the user experience.

### <img src="/images/202312/MSEdge.webp" alt="Edge" width="20" height="20"> WebView2 Runtime

WebView2 Runtime is provided by Microsoft and allows Snap Hutao Remastered to embed low-overhead browser components. This component is used to implement the MiYouShe account WebView2 login function.

You can find the `Evergreen Standalone Installer` at the bottom of the [Microsoft official website](https://developer.microsoft.com/en-us/microsoft-edge/webview2/). Select `x64` to download and install.

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> Segoe Fluent Icons Font

This font is provided by Microsoft and optimizes the icon display effect of Snap Hutao Remastered. Missing this font may cause some icons to not display correctly.

Click [this link](https://aka.ms/SegoeFluentIcons) to download the font ZIP file. After unzipping, right-click to install the font to the system.

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> MSVC Runtime Library (MSVCRT)

MSVC Runtime Library is a necessary component to unlock the frame rate function. If you are prompted with "Missing XXX.dll" or "Missing XXX component", please install the latest version of MSVCRT.

Click [this link](https://aka.ms/vs/17/release/vc_redist.x64.exe) to download the MSVC Runtime Library (x64) installation file and complete the installation.

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> Add the First MiHoYo Account

On the main interface, click the account panel in the lower left corner between the document button and the settings button. In the pop-up MiHoYo account panel, select a login method according to the account type.

Regardless of the method used, please ensure that the account has been initialized through the official application. Otherwise, Snap Hutao Remastered will not be able to obtain the account information correctly.

:::: tabs

== MiYouShe Mobile Verification Code Login

::: warning
Please confirm that the MiYouShe account is bound to the Genshin Impact domestic server account.
:::

1.  Click the "Mobile Verification Code" button, fill in the mobile phone number and send the verification code.
2.  After filling in the verification code, confirm, and wait a moment for the account to be added.

== MiYouShe QR Code Login

::: warning
Please confirm that the MiYouShe account is bound to the Genshin Impact domestic server account.
:::

1.  Click the "QR Code Login" button and wait for the QR code to load.
2.  Use the MiYouShe App to scan the QR code and confirm the login.
3.  Wait a moment, and Snap Hutao Remastered will add the account.

== HoYoLAB Password Login

::: warning
Please confirm that the HoYoLAB account is bound to the Genshin Impact international server account.
:::

1.  Click the "Password Login" button, fill in the account password, and confirm.
2.  Wait a moment, and the account will be added.

== HoYoLAB Social Media Account Login

This method relies on the WebView2 Runtime component.

::: warning
HoYoLAB blocks network connections from mainland China by default.
:::

1.  Click the "Third-Party Login" button and log in through WebView2.
2.  Wait a moment, and the account will be added.

== Cookies Login

::: warning
Please keep your Cookie information safe to avoid account risks.
:::

Log in by manually entering SToken to submit the Cookie.

1.  Click the target App icon and select "Manual Input".
2.  Enter a valid Cookie and confirm. After a moment, the account will be added.
    ::::

## <HopeIcon icon="iconfont icon-ask" size="1.7rem" color="var(--theme-color)" /> Installation FAQ

### Why Does Mojibake Appear in Program Icons

- Windows 10 users can solve the problem by installing the `Segoe Fluent Icons` font.
- Select "Install for all users" when installing.

### Can the Installation Problem Be Solved by Repairing System Components

You can try to repair missing components based on error messages, but the Snap Hutao Remastered development team will not provide support.

---

::: warning
The following issues only apply to MSIX installation. Please try [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) installation first.
:::

### My Computer Cannot Open MSIX Format Installation Package

Check if the system is missing App Installer.

1.  Install [App Installer](https://apps.microsoft.com/detail/9NBLGGH4NNS1?hl=en-us&gl=US).
2.  Make sure you are using the official Windows 10 or 11 image to install the system.

### MSIX Installation Package Prompts `The Publisher Certificate of This Application Package Cannot Be Verified`

Manually install the [GlobalSign Code Signing Root R45](https://secure.globalsign.com/cacert/codesigningrootr45.crt) certificate to `Trusted Root Certification Authorities`.

### MSIX Installation Package Prompts Group Policy Error or Requires a Developer License

1.  Open Windows Settings.
2.  Open "System - For developers".
3.  Turn on the "Developer mode" switch.

---

### Installation of MSIX Package Fails with an Error Message

| Error Message                             | Reason                                       |
| ----------------------------------------- | -------------------------------------------- |
| `0x80040154` Error Code                   | Incorrect Windows user account permissions   |
| `Application did not start` Error message | App Installer permissions error or corrupted |
| `0x80073CF0` Error Code                   | Incorrect directory permissions              |
| `0x80070005` Error Code                   | Incorrect Windows user account permissions   |
| `0x80070570` Error Code                   | Incorrect Windows user account permissions   |
| `0x8007065E` Error Code                   | Incorrect Windows user account permissions   |

#### Solution Steps

1.  Right-click on the Start menu and select `PowerShell (Admin)`.
2.  Execute the following code to complete the installation:

    ```PowerShell
    cd $env:USERPROFILE\Downloads; $url="https://api.snapgenshin.com/patch/hutao/download"; $targetFileName="Snap.Hutao.latest.msix"; $targetFilePath=Join-Path -Path $PWD -ChildPath $targetFileName; Invoke-WebRequest -Uri $url -OutFile $targetFilePath; Add-AppxPackage -Path $targetFilePath; Remove-Item -Path $targetFilePath
    ```

3.  No red error messages indicate successful installation.
