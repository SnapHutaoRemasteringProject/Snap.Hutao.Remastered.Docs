---
pageClass: link-box
externalLinkIcon: false
category: [Функции, Руководство]
comment: false
icon: iconfont icon-launch
order: 5
description: Следуя этому руководству по быстрому началу, вы сможете быстро привести Snap Hutao в рабочее состояние.
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FkOS5H1g6e1z8LCaD_!!1797064093.png
---

# Быстрый старт

::: important
Это перевод, сделанный моделью Google Gemini. Мы приветствуем исправления через Pull Request.
:::

Следуя этому руководству по быстрому началу, вы сможете быстро привести Snap Hutao в рабочее состояние.

## <HopeIcon icon="iconfont icon-windows" size="1.7rem" color="rgb(0, 168, 232)" /> Минимальные системные требования

| Требование                              | Спецификация                                                          |
|-----------------------------------------|-----------------------------------------------------------------------|
| **Минимально поддерживаемая версия ОС** | Windows 10 Build 19045.5371 (22H2)<br/> Windows 11 Build 22621 (22H2) |
| **Рекомендуемая версия ОС**             | Windows 11 Build 26100 (24H2) или более поздняя                       |
| **Обязательные компоненты**             | Windows Update, App Installer, **MSVC Runtime**                       |
| Необязательные компоненты               | WebView2 Runtime                                                      |

**Неподдерживаемые версии ОС**:

1. Windows Enterprise, включая ветки **LTSC и LTSB**
2. Версии Windows IoT
3. **Упрощённые или модифицированные версии Windows. Проблемы, возникающие на неофициальных сборках, не будут обрабатываться**
4. Проблемы в сборках Windows Insider Preview не рассматриваются

> **Обновление Windows от января 2025 года [KB5049981](https://support.microsoft.com/en-us/topic/january-14-2025-kb5049981-os-builds-19044-5371-and-19045-5371-12f3788f-6e7d-4524-8ab3-27d1666e0510) обязательно для запуска Snap Hutao на Windows 10. Оно включено в версию 19045.5371 и выше.**

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> Загрузка Snap Hutao

### Новая установка

::: tabs

== Использовать Snap.Hutao.Remastered.Deployment Installer

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">Snap.Hutao.Remastered.Deployment — наш новый установщик, который может автоматически настраивать сертификаты и т.д.</p>
  </div>

<VPCard
title="Ускоренная ссылка"
desc="Предоставляет загрузку установщика на этом сайте"
logo="/assets/logo.png"
link="https://static.snaphutaorp.org/Snap.Hutao.Remastered.Deployment.exe"
background="rgba(155, 233, 168, 0.15)"
/>

<VPCard
title="Github"
desc="Оригинальная ссылка Github"
logo="/images/202312/github-mark.svg"
link="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/releases/download/1.19.0.0/Snap.Hutao.Remastered.Deployment.exe"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

== Загрузить с Github Release

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">
    Рекомендуется использовать Snap.Hutao.Remastered.Deployment
    В противном случае вам нужно вручную установить сертификаты и загрузить пакет msix
    </p>
  </div>

<VPCard
title="GitHub"
desc="Все версии Snap Hutao Remastered выпускаются в основном репозитории кода"
logo="/images/202312/github-mark.svg"
link="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/releases"
background="rgba(155, 233, 168, 0.15)"
/>

</div>
:::

## Производные версии, разработанные сообществом

От силы сообщества!
:::tabs 

== Snap Hutao Remastered

<div class="vp-card-container">
<VPCard
title="Официальный сайт Snap Hutao Remastered"
desc="Проект, который переработал расширенные функции"
logo="https://snaphutaorp.org/logo.png"
link="https://snaphutaorp.org/"
background="rgba(155, 233, 168, 0.15)"
/>
</div>

== Snap Hutao Original Fix
<div class="vp-card-container">
<VPCard
title="Snap Hutao Original"
desc="Представлено WDG"
logo="/images/202312/github-mark.svg"
link="https://github.com/wangdage12/Snap.Hutao"
background="rgba(155, 233, 168, 0.15)"
/>
</div>
:::

Если вы заинтересованы в том, чтобы сделать проект Snap Hutao лучше, добро пожаловать к [нам](development/join.md)!

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> Обновление Snap Hutao

Обычно, следуя подсказкам обновления в приложении, вы завершите обновление.

Пока вы не удалите каталог данных вручную, ваши локальные данные не будут затронуты.

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> Установка дополнительных компонентов

С помощью дополнительных компонентов Snap Hutao может более эффективно реализовывать некоторые функции, хотя они и не являются обязательными, но могут значительно улучшить пользовательский опыт.

### <img src="/images/202312/MSEdge.webp" alt="Edge" width="20" height="20"> WebView2 Runtime

WebView2 Runtime предоставляется Microsoft и позволяет Snap Hutao встраивать браузерные компоненты с низким потреблением ресурсов. Этот компонент используется для реализации функции входа в аккаунт MiYouShe через WebView2.

Вы можете найти `Автономный установщик` в нижней части [официального сайта Microsoft](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/), выберите `x64` для загрузки и установки.

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> Шрифт Segoe Fluent Icons

Этот шрифт предоставляется Microsoft и может оптимизировать отображение значков Snap Hutao. Отсутствие этого шрифта может привести к некорректному отображению некоторых значков.

Нажмите [на эту ссылку](https://aka.ms/SegoeFluentIcons), чтобы загрузить ZIP-архив со шрифтом, распакуйте его и щелкните правой кнопкой мыши для установки шрифта в систему.

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> MSVC Runtime Library (MSVCRT)

MSVC Runtime Library является необходимым компонентом для разблокировки функции частоты кадров. Если отображается сообщение "Отсутствует XXX.dll" или "Отсутствует компонент XXX", установите последнюю версию MSVCRT.

Нажмите [на эту ссылку](https://aka.ms/vs/17/release/vc_redist.x64.exe), чтобы загрузить установочный файл MSVC Runtime Library (x64) и завершите установку.

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> Добавление первой учетной записи MiYouShe

На главном экране нажмите на панель учетной записи, расположенную между кнопкой документа в левом нижнем углу и кнопкой настроек. Во всплывающей панели учетной записи MiYouShe выберите способ входа в систему в зависимости от типа учетной записи.

Независимо от того, какой способ вы используете, убедитесь, что учетная запись была инициализирована через официальное приложение. В противном случае Snap Hutao не сможет правильно получить информацию об учетной записи.

:::: tabs

== Вход через SMS-код MiYouShe

::: warning
Убедитесь, что учетная запись MiYouShe привязана к аккаунту на внутренних серверах (国服).
:::

1. Нажмите кнопку "SMS-код", введите номер телефона и отправьте SMS-код.
2. Введите SMS-код и подтвердите, подождите немного, пока учетная запись не будет добавлена.

== Вход через QR-код MiYouShe

::: warning
Убедитесь, что учетная запись MiYouShe привязана к аккаунту на внутренних серверах (国服).
:::

1. Нажмите кнопку "Вход по QR-коду", дождитесь загрузки QR-кода.
2. Отсканируйте QR-код с помощью приложения MiYouShe и подтвердите вход в систему.
3. Подождите немного, Snap Hutao добавит учетную запись.

== Вход через пароль HoYoLAB

::: warning
Убедитесь, что учетная запись HoYoLAB привязана к аккаунту на международных серверах.
:::

1. Нажмите кнопку "Вход по паролю", введите имя пользователя и пароль и подтвердите.
2. Подождите немного, пока аккаунт не будет добавлен.

== Вход через социальные сети HoYoLAB

Этот метод зависит от компонента WebView2 Runtime.

::: warning
HoYoLAB по умолчанию блокирует сетевое подключение из материкового Китая.
:::

1. Нажмите кнопку "Сторонний вход" и войдите через WebView2.
2. Подождите немного, пока аккаунт не будет добавлен.

== Вход через Cookies

::: warning
Пожалуйста, храните информацию о Cookie в надёжном месте, чтобы избежать риска для аккаунта.
:::

Войдите в систему, отправив SToken вручную.

1. Нажмите на значок целевого приложения, выберите "Ввести вручную".
2. Введите действительные Cookie и подтвердите, подождите немного, пока аккаунт не будет добавлен.
   ::::

## <HopeIcon icon="iconfont icon-ask" size="1.7rem" color="var(--theme-color)" /> Часто задаваемые вопросы при установке

### Почему значки в программе выглядят как беспорядочный набор символов?

- Пользователи Windows 10 могут решить эту проблему, установив шрифт `Segoe Fluent Icons`.
- При установке выберите "Установить для всех пользователей системы".

### Можно ли решить проблемы с установкой, исправив системные компоненты?

Вы можете исправить недостающие компоненты в соответствии с сообщениями об ошибках, но команда разработчиков Snap Hutao не предоставляет поддержки в этом случае.
