<template>
  <div class="download-page">
    <!-- Hero Section -->
    <div class="download-hero">
      <div class="download-hero-content">
        <div class="download-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 16V4M8 12l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h1>{{ t('title') }}</h1>
        <p class="subtitle">{{ t('subtitle') }}</p>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="download-status-card">
      <div class="loading-spinner">
        <svg class="spinner" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.2"/>
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-dasharray="31.4 31.4" stroke-linecap="round"/>
        </svg>
        <span>{{ t('checking') }}</span>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="download-status-card error">
      <div class="error-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v4M12 16h.01" stroke-linecap="round"/>
        </svg>
      </div>
      <p class="error-text">{{ t('error') }}</p>
      <p class="error-detail">{{ error }}</p>
      <button class="retry-btn" @click="fetchData">
        {{ t('retry') }}
      </button>
    </div>

    <!-- Download Content -->
    <div v-else-if="data" class="download-content">
      <!-- Countdown / Auto-download -->
      <div class="download-status-card">
        <template v-if="countdown > 0">
          <div class="countdown-ring">
            <svg viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="26" class="countdown-bg" />
              <circle cx="30" cy="30" r="26" class="countdown-progress"
                :style="{ strokeDashoffset: 163.36 * (1 - countdown / 5) }" />
            </svg>
            <span class="countdown-number">{{ countdown }}</span>
          </div>
          <p>{{ t('preparing') }}</p>
        </template>
        <template v-else>
          <div class="download-started-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 16V4M8 12l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p>{{ t('downloading') }}</p>
        </template>
        <p class="direct-link-hint">
          {{ t('fallback') }}
          <a :href="directUrl" @click.prevent="startDownload">{{ t('direct_link') }}</a>
        </p>
      </div>

      <!-- File Info -->
      <div class="file-info">
        <h2>{{ t('file_info') }}</h2>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">{{ t('version') }}</span>
            <span class="info-value">{{ data.version }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">{{ t('file_name') }}</span>
            <span class="info-value">{{ fileName }}</span>
          </div>
          <div class="info-item hash-item">
            <span class="info-label">SHA256</span>
            <span class="info-value hash-value">{{ data.validation }}</span>
            <button class="copy-btn" @click="copyHash" :title="t('copy')">
              <svg v-if="!copied" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <rect x="9" y="9" width="13" height="13" rx="2"/>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-linecap="round"/>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mirrors -->
      <div class="mirror-section">
        <h2>{{ t('mirrors') }}</h2>
        <div class="mirror-list">
          <a
            v-for="mirror in data.mirrors"
            :key="mirror.mirror_name"
            :href="mirror.url"
            :class="['mirror-btn', mirror.mirror_type === 'Direct' ? 'primary' : 'secondary']"
            :target="mirror.mirror_type === 'Browser' ? '_blank' : '_self'"
            @click="handleMirrorClick(mirror)"
          >
            <span class="mirror-icon">
              <svg v-if="mirror.mirror_name === 'R2'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
            </span>
            <span class="mirror-text">
              <span class="mirror-name">{{ mirror.mirror_name }}</span>
              <span class="mirror-type">{{ mirror.mirror_type === 'Direct' ? t('direct_download') : t('browser') }}</span>
            </span>
            <span class="mirror-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vitepress'

interface Mirror {
  url: string
  mirror_name: string
  mirror_type: string
}

interface ApiResponse {
  data: {
    version: string
    validation: string
    mirrors: Mirror[]
  }
}

const route = useRoute()
const loading = ref(true)
const error = ref<string | null>(null)
const data = ref<ApiResponse['data'] | null>(null)
const countdown = ref(5)
const copied = ref(false)
let timer: ReturnType<typeof setInterval> | null = null

// Locale detection
const locale = computed(() => {
  const path = route.path || ''
  const match = path.match(/^\/(zh|en|id|jp|ru|tw)\//)
  return match ? match[1] : 'zh'
})

// Localization
const messages: Record<string, Record<string, string>> = {
  zh: {
    title: '感谢您下载 Snap.Hutao.Remastered',
    subtitle: '开源 | 免费 | 为 Windows 打造的胡桃工具箱重制版',
    checking: '正在获取最新版本信息...',
    error: '获取版本信息失败',
    retry: '重试',
    preparing: '正在准备下载...',
    downloading: '下载已经开始',
    fallback: '如果下载未在 5 秒内开始，请',
    direct_link: '点击此处的直接链接',
    file_info: '文件信息',
    version: '版本',
    file_name: '文件名',
    copy: '复制',
    copied: '已复制',
    mirrors: '镜像下载',
    direct_download: '直接下载',
    browser: '浏览器',
  },
  en: {
    title: 'Thank you for downloading Snap.Hutao.Remastered',
    subtitle: 'Open Source | Free | Hutao Toolbox Remastered for Windows',
    checking: 'Checking for the latest version...',
    error: 'Failed to get version information',
    retry: 'Retry',
    preparing: 'Preparing your download...',
    downloading: 'Your download has started',
    fallback: 'If your download does not start in 5 seconds,',
    direct_link: 'click this direct link',
    file_info: 'File Information',
    version: 'Version',
    file_name: 'File Name',
    copy: 'Copy',
    copied: 'Copied',
    mirrors: 'Download Mirrors',
    direct_download: 'Direct Download',
    browser: 'Browser',
  },
  id: {
    title: 'Terima kasih telah mengunduh Snap.Hutao.Remastered',
    subtitle: 'Sumber Terbuka | Gratis | Toolkit untuk Windows',
    checking: 'Memeriksa versi terbaru...',
    error: 'Gagal mendapatkan informasi versi',
    retry: 'Coba lagi',
    preparing: 'Menyiapkan unduhan...',
    downloading: 'Unduhan Anda telah dimulai',
    fallback: 'Jika unduhan tidak dimulai dalam 5 detik,',
    direct_link: 'klik tautan langsung ini',
    file_info: 'Informasi Berkas',
    version: 'Versi',
    file_name: 'Nama Berkas',
    copy: 'Salin',
    copied: 'Tersalin',
    mirrors: 'Cermin Unduhan',
    direct_download: 'Unduh Langsung',
    browser: 'Peramban',
  },
  jp: {
    title: 'Snap.Hutao.Remastered をダウンロードいただきありがとうございます',
    subtitle: 'オープンソース | 無料 | Windows向け多機能ツールボックス',
    checking: '最新バージョンを確認中...',
    error: 'バージョン情報の取得に失敗しました',
    retry: '再試行',
    preparing: 'ダウンロードを準備中...',
    downloading: 'ダウンロードが開始されました',
    fallback: '5秒経ってもダウンロードが開始されない場合は、',
    direct_link: 'こちらをクリック',
    file_info: 'ファイル情報',
    version: 'バージョン',
    file_name: 'ファイル名',
    copy: 'コピー',
    copied: 'コピーしました',
    mirrors: 'ダウンロードミラー',
    direct_download: '直接ダウンロード',
    browser: 'ブラウザ',
  },
  ru: {
    title: 'Спасибо за скачивание Snap.Hutao.Remastered',
    subtitle: 'Открытый исходный код | Бесплатно | Инструментарий для Windows',
    checking: 'Получение информации о последней версии...',
    error: 'Не удалось получить информацию о версии',
    retry: 'Повторить',
    preparing: 'Подготовка к загрузке...',
    downloading: 'Загрузка началась',
    fallback: 'Если загрузка не начнется в течение 5 секунд,',
    direct_link: 'нажмите эту прямую ссылку',
    file_info: 'Информация о файле',
    version: 'Версия',
    file_name: 'Имя файла',
    copy: 'Копировать',
    copied: 'Скопировано',
    mirrors: 'Зеркала загрузки',
    direct_download: 'Прямая загрузка',
    browser: 'Браузер',
  },
  tw: {
    title: '感謝您下載 Snap.Hutao.Remastered',
    subtitle: '開源 | 免費 | 為 Windows 打造的胡桃工具箱重製版',
    checking: '正在獲取最新版本資訊...',
    error: '獲取版本資訊失敗',
    retry: '重試',
    preparing: '正在準備下載...',
    downloading: '下載已經開始',
    fallback: '如果下載未在 5 秒內開始，請',
    direct_link: '點擊此處的直接連結',
    file_info: '檔案資訊',
    version: '版本',
    file_name: '檔名',
    copy: '複製',
    copied: '已複製',
    mirrors: '鏡像下載',
    direct_download: '直接下載',
    browser: '瀏覽器',
  },
}

function t(key: string): string {
  return (messages[locale.value] || messages.zh)[key] || key
}

// API URL
function getApiUrl(): string {
  if (typeof window === 'undefined') return 'https://api.snaphutaorp.org/patch/hutao?type=Installer'
  const hostname = window.location.hostname
  if (hostname === 'hutaorp.org' || hostname.endsWith('.hutaorp.org') ||
      hostname === 'snap.hutaorp.org' || hostname.endsWith('.snap.hutaorp.org')) {
    return 'https://api.hutaorp.org/patch/hutao?type=Installer'
  }
  return 'https://api.snaphutaorp.org/patch/hutao?type=Installer'
}

// Direct download URL (R2 mirror)
const directUrl = computed(() => {
  if (!data.value) return '#'
  const direct = data.value.mirrors.find(m => m.mirror_type === 'Direct')
  return direct?.url || '#'
})

// Extract file name from download URL
const fileName = computed(() => {
  const url = directUrl.value
  if (!url || url === '#') return ''
  return url.split('/').pop() || ''
})

// Fetch data
async function fetchData() {
  loading.value = true
  error.value = null
  data.value = null

  try {
    const url = getApiUrl()
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const json: ApiResponse = await response.json()
    if (!json.data) throw new Error('Invalid response')
    data.value = json.data
    startCountdown()
  } catch (e: any) {
    error.value = e.message || 'Unknown error'
  } finally {
    loading.value = false
  }
}

// Countdown
function startCountdown() {
  countdown.value = 5
  timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      if (timer) clearInterval(timer)
      timer = null
      triggerDownload()
    }
  }, 1000)
}

// Trigger download
function triggerDownload() {
  if (directUrl.value && directUrl.value !== '#') {
    window.location.href = directUrl.value
  }
}

function startDownload() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  countdown.value = 0
  triggerDownload()
}

function handleMirrorClick(mirror: Mirror) {
  if (mirror.mirror_type === 'Direct') {
    startDownload()
  }
}

// Copy hash
async function copyHash() {
  if (!data.value) return
  try {
    await navigator.clipboard.writeText(data.value.validation)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // Fallback
    const ta = document.createElement('textarea')
    ta.value = data.value.validation
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}

onMounted(() => {
  fetchData()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.download-page {
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 24px 80px;
}

/* Hero */
.download-hero {
  text-align: center;
  margin-bottom: 32px;
}

.download-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: #fff;
  padding: 16px;
}

.download-hero h1 {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
}

.subtitle {
  font-size: 15px;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* Status Card */
.download-status-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  margin-bottom: 24px;
}

.download-status-card.error {
  border-color: var(--vp-c-danger-1);
}

.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--vp-c-text-2);
  font-size: 15px;
}

.spinner {
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
  color: var(--vp-c-brand-1);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Countdown */
.countdown-ring {
  position: relative;
  width: 60px;
  height: 60px;
  margin: 0 auto 16px;
}

.countdown-ring svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.countdown-bg {
  fill: none;
  stroke: var(--vp-c-divider);
  stroke-width: 4;
}

.countdown-progress {
  fill: none;
  stroke: var(--vp-c-brand-1);
  stroke-width: 4;
  stroke-dasharray: 163.36;
  stroke-linecap: round;
  transition: stroke-dashoffset 1s linear;
}

.countdown-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

.download-started-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 12px;
  color: var(--vp-c-brand-1);
}

.download-status-card p {
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
  font-size: 15px;
}

.direct-link-hint {
  color: var(--vp-c-text-2) !important;
  font-size: 14px !important;
}

.direct-link-hint a {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  cursor: pointer;
}

/* Error */
.error-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 12px;
  color: var(--vp-c-danger-1);
}

.error-text {
  font-weight: 600 !important;
}

.error-detail {
  color: var(--vp-c-text-2) !important;
  font-size: 13px !important;
  font-family: monospace;
}

.retry-btn {
  margin-top: 16px;
  padding: 8px 24px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand-1);
  background: transparent;
  color: var(--vp-c-brand-1);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.retry-btn:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
}

/* File Info */
.file-info {
  margin-bottom: 24px;
}

.file-info h2 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px;
  color: var(--vp-c-text-1);
}

.info-grid {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
}

.info-item {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  gap: 12px;
}

.info-item:last-child {
  border-bottom: none;
}

.info-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  min-width: 72px;
  flex-shrink: 0;
}

.info-value {
  font-size: 14px;
  color: var(--vp-c-text-1);
  word-break: break-all;
}

.hash-value {
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  line-height: 1.5;
}

.copy-btn {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  margin-left: auto;
}

.copy-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

/* Mirrors */
.mirror-section {
  margin-bottom: 24px;
}

.mirror-section h2 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px;
  color: var(--vp-c-text-1);
}

.mirror-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mirror-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.mirror-btn:hover {
  text-decoration: none;
}

.mirror-btn.primary {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-dimm);
}

.mirror-btn.primary:hover {
  background: var(--vp-c-brand-dimm);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
  transform: translateY(-1px);
}

.mirror-btn.secondary:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-mute);
}

.mirror-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--vp-c-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: var(--vp-c-text-2);
  flex-shrink: 0;
}

.mirror-btn.primary .mirror-icon {
  color: var(--vp-c-brand-1);
}

.mirror-text {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.mirror-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.mirror-type {
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.mirror-arrow {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--vp-c-text-3);
  transition: transform 0.2s;
}

.mirror-btn:hover .mirror-arrow {
  transform: translateX(4px);
  color: var(--vp-c-brand-1);
}

/* Responsive */
@media (max-width: 640px) {
  .download-page {
    padding: 32px 16px 60px;
  }

  .download-hero h1 {
    font-size: 22px;
  }

  .info-item {
    flex-wrap: wrap;
    gap: 6px;
  }

  .hash-value {
    font-size: 11px;
    word-break: break-all;
  }
}
</style>
