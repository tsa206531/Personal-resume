<template>
  <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between  py-4 bg-white/90 dark:bg-gray-900/90 shadow backdrop-blur px-40">
    <!-- LOGO with breathing animation -->
    <div class="flex items-start  invisible md:visible">
      <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 flex items-center justify-center animate-breath">
        <span class="text-gray-800 font-bold text-lg dark:text-white">YL.dev</span>
      </div>
    </div>
    
    <!-- Desktop Nav Links -->
    <ul class="hidden md:flex space-x-8 text-lg font-medium text-gray-800 dark:text-white">
      <li><NuxtLink to="/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">首頁</NuxtLink></li>

      <li><NuxtLink to="/portfolio" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">作品集</NuxtLink></li>

      <!-- <li><NuxtLink to="/about" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">關於我</NuxtLink></li> -->
      <!-- <li><NuxtLink to="/tools" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">實用工具</NuxtLink></li> -->
    </ul>
    
    <!-- Mobile Controls -->
    <div class="flex items-center space-x-4 md:hidden">
      <!-- Mobile Theme Switcher -->
      <button @click="toggleTheme" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 animate-breath">
        <SunIcon v-if="isDark" class="w-6 h-6 text-gray-800 dark:text-white" />
        <MoonIcon v-else class="w-6 h-6 text-gray-800 dark:text-white" />
      </button>
      
      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMobileMenu" 
        class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 animate-breath"
      >
        <Bars3Icon v-if="!isMobileMenuOpen" class="w-6 h-6 text-gray-800 dark:text-white" />
        <XMarkIcon v-else class="w-6 h-4 text-gray-800 dark:text-white" />
      </button>
    </div>
    
    <!-- Desktop Theme Switcher -->
    <button @click="toggleTheme" class="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 animate-breath">
      <SunIcon v-if="isDark" class="w-6 h-6 text-gray-800 dark:text-white" />
      <MoonIcon v-else class="w-6 h-6 text-gray-800 dark:text-white" />
    </button>
  </nav>
  
  <!-- Mobile Menu Overlay -->
  <div 
    v-if="isMobileMenuOpen" 
    @click="closeMobileMenu"
    class="fixed inset-0 bg-black/50 z-40 md:hidden"
  ></div>
  
  <!-- Mobile Dropdown Menu -->
  <div 
    v-if="isMobileMenuOpen"
    class="fixed top-[72px] left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 md:hidden"
  >
    <!-- Mobile Nav Links -->
    <nav class="p-3">
      <ul class="space-y-1">
        <li>
          <NuxtLink 
            to="/" 
            @click="closeMobileMenu"
            class="block text-lg font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3 border-b border-gray-100 dark:border-gray-700"
          >
            首頁
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/about" 
            @click="closeMobileMenu"
            class="block text-lg font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3 border-b border-gray-100 dark:border-gray-700"
          >
            關於我
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/portfolio" 
            @click="closeMobileMenu"
            class="block text-lg font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3 border-b border-gray-100 dark:border-gray-700"
          >
            作品集
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/tools" 
            @click="closeMobileMenu"
            class="block text-lg font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3"
          >
            實用工具
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

// Mobile menu state
const isMobileMenuOpen = ref(false)

const toggleTheme = () => {
  // 切換 theme
  colorMode.preference = isDark.value ? 'light' : 'dark'

  // 檢查是否有 iframe，並通知 iframe 切換 theme
  const iframe = document.querySelector('iframe')
  if (iframe && iframe.contentWindow) {
    const currentTheme = colorMode.preference // 'dark' or 'light'
    iframe.contentWindow.postMessage({
      type: 'theme',
      theme: currentTheme
    }, '*') // 可以考慮改成具體的 origin 地址
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}




// Close mobile menu when clicking outside or pressing escape
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  }
  
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
.backdrop-blur {
  backdrop-filter: blur(5px);
}

/* Add padding to body to account for fixed navbar */
:global(body) {
  padding-top: 72px; /* Adjust based on your navbar height */
}

/* Breathing animation */
@keyframes breath {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-breath {
  animation: breath 3s ease-in-out infinite;
}
</style> 