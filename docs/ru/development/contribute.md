---
category: [open source, разработка]
tag: ["разработка", "GitHub"]
icon: iconfont icon-code
order: 3
description: Snap Hutao использует C# и .NET Framework для разработки настольного клиента и сервера. Мы приветствуем отзывы от сообщества открытого исходного кода. Если вы хотите внести свой вклад в код, пожалуйста, прочтите это руководство.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/development/contribute.html
---

::: important
Это перевод, выполненный моделью Google Gemini. Мы приветствуем исправления через PR.
:::

# Внесение своего вклада в код

Snap Hutao использует `C#` и `.NET Framework` для разработки настольного клиента и сервера. Мы приветствуем отзывы от сообщества открытого исходного кода. Если вы заинтересованы в том, чтобы внести свой вклад в код, пожалуйста, прочтите это руководство.

Вы можете просмотреть все текущие [нерешенные проблемы](https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues) на GitHub.

## <HopeIcon icon="iconfont icon-visual-studio" size="1.5rem" color="rgb(193,142,241)" /> Настройка проекта Snap.Hutao
Для получения более подробной информации о внесении вклада, пожалуйста, обратитесь к [CONTRIBUTING.md](https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered?tab=contributing-ov-file#contribute-your-code) на GitHub.  
Это руководство не является обязательным; вы можете адаптировать его в соответствии с вашими личными привычками для различных ситуаций.
1. Скачайте и установите [Visual Studio 2026](https://visualstudio.microsoft.com/downloads/)
   - Необходимо установить следующие компоненты:
     - `.NET desktop development` (Разработка классических приложений .NET)
     - `Desktop development with C++` (Разработка классических приложений на C++)
     - `Windows application development` (Разработка приложений Windows)
2. Используйте Git для клонирования репозитория проекта: `git@github.com:SnapHutaoRemasteringProject/Snap.Hutao.Remastered.git`.
3. Переключитесь на ветку `develop`.
4. Откройте решение проекта (Solution) в Visual Studio, используя соответствующий файл .slnx, и можно начинать разработку.

## <HopeIcon icon="iconfont icon-debug" size="1.5rem" color="rgb(73,156,84)" /> Включение отладки

1. Скачайте и установите [Sysinternals Suite](https://www.microsoft.com/store/productid/9P7KNL5RWT25) (из Microsoft Store) или с [официального сайта Microsoft](https://learn.microsoft.com/zh-cn/sysinternals/downloads/sysinternals-suite).
2. Найдите и запустите `DebugView` (в меню «Пуск» или в распакованных файлах).
3. Запустите основную программу Snap Hutao.
4. Наблюдайте за отладочной информацией, выводимой `DebugView`.

## <HopeIcon icon="iconfont icon-pull-request" size="1.5rem" color="rgb(130,80,223)"/> Отправка Pull Request

- Все Pull Request, созданные не из других веток проекта, могут быть объединены только с веткой `develop`.
- Если ваш код связан с существующей проблемой, используйте [ключевые слова](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests), чтобы связать ваш PR с соответствующей проблемой. Это приведет к автоматическому закрытию связанной проблемы при слиянии PR с веткой `main`.

## <HopeIcon icon="iconfont icon-build-package" size="1.5rem" color="rgb(254,189,105)" /> Тестирование сборки пакета

::: warning Внимание
Если вы хотите протестировать последнюю Alpha-версию, пожалуйста, сначала загрузите и установите [**SnapHutaoRemasteringProjectRootCA.cer**](https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/raw/refs/heads/main/SnapHutaoRemasteringProjectRootCA.cer) в **доверенные корневые центры сертификации**.
:::

- После каждого `push` скрипты GitHub Actions автоматически запускаются для сборки последнего решения:
  - Для веток `main`, `develop` и `feat` скрипт автоматически загружает собранный архив `Snap Hutao Alpha` для тестирования.
  - Другие ветки только проверяют возможность сборки кода и не предоставляют функцию загрузки.
- Вы можете просмотреть все записи компиляции в [конвейере Alpha](https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/actions/workflows/alpha.yml).
