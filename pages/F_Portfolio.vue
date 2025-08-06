<template>
  <section class="container mx-auto py-12">
    <h2 class="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">作品集</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ">
      <div v-for="(item, idx) in visibleProjects" :key="item.title" class="bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col border border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] shadow-none">

        <img :src="item.image" alt="作品圖片" class="w-full h-60 object-cover rounded mb-3" />
        <h3 class="text-lg font-bold mb-1 text-gray-900 dark:text-white ">{{ item.title }}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300 flex-1 mb-2">{{ item.desc }}</p>
      <div class="">
  <a 
    :href="item.link"  
    target="_blank"   
    class="block w-full text-center px-3 py-1.5 text-base rounded border border-blue-700 dark:border-gray-700 bg-stone-50 dark:bg-gray-900 text-blue-700 dark:text-gray-100 hover:bg-blue-700 hover:text-stone-50 dark:hover:bg-blue-700 dark:hover:text-white transition-colors duration-200"
  >
    查看作品
    <img 
      :src="`https://cdn.simpleicons.org/spreadshirt`"  
      alt="spreadshirt"
      class="w-3 h-3 inline-block ml-1"
    />
    
  </a>
</div>
      </div>
    </div>
    <div class="flex justify-center" v-if="visibleCount < projects.length">
      <button @click="showMore" class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">更多</button>
    </div>
  </section>
</template>

<script setup>
//選用空白layout
definePageMeta({
  layout: 'empty',
})

// 顯示更多按鈕
import { ref, computed, onMounted ,nextTick , watch } from 'vue'


const { projects } = useProjects();

const visibleCount = ref(6)
const visibleProjects = computed(() => projects.value.slice(0, visibleCount.value))
const showMore = () => {
  visibleCount.value += 6
  setTimeout(() => {
    updateHeight() // 載入後重新傳送高度
  }, 100) // 等圖片載入
}

// iframe


// 傳送高度給父頁
const updateHeight = async () => {
  await nextTick()
  const height = document.documentElement.scrollHeight
  window.parent.postMessage({ type: 'resize', height }, 'Personal-resume\pages\index.vue')
}

// 初始加載 + 每次載入更多圖片後都呼叫
onMounted(() => {
  updateHeight()
  setTimeout(() => updateHeight(), 500)

})


onMounted(() => {
  window.addEventListener('message', (event) => {
    // 接收到來自父頁的訊息
    if (event.data.type === 'theme') {
      const theme = event.data.theme
      const html = document.documentElement

      // 切換 iframe 的 theme
      if (theme === 'dark') {
        html.classList.add('dark')
      } else {
        html.classList.remove('dark')
      }
    }
  })
})


</script>