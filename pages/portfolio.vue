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

import { ref, computed } from 'vue'
const { projects } = useProjects();

const visibleCount = ref(6)
const visibleProjects = computed(() => projects.value.slice(0, visibleCount.value))
const showMore = () => {
  visibleCount.value += 6
}


// const projects = [
//   {
//     title: '個人部落格',
//     desc: '使用 Nuxt 與 Tailwind 製作的個人部落格網站。',
//     image: 'https://placehold.co/400x200?text=Blog',
//     link: '#'
//   },
//   {
//     title: '天氣查詢工具',
//     desc: 'Vue + API 打造的即時天氣查詢小工具。',
//     image: 'https://placehold.co/400x200?text=Weather',
//     link: '#'
//   },
//   {
//     title: '線上簡歷',
//     desc: '互動式前端工程師履歷展示頁。',
//     image: 'https://placehold.co/400x200?text=Resume',
//     link: '#'
//   },
//   {
//     title: 'Todo List App',
//     desc: '支援拖曳排序的待辦清單應用。',
//     image: 'https://placehold.co/400x200?text=Todo',
//     link: '#'
//   },
//   {
//     title: '圖片藝廊',
//     desc: 'RWD 響應式圖片藝廊展示。',
//     image: 'https://placehold.co/400x200?text=Gallery',
//     link: '#'
//   },
//   {
//     title: '即時聊天室',
//     desc: 'Socket.io 打造的多人即時聊天室。',
//     image: 'https://placehold.co/400x200?text=Chat',
//     link: '#'
//   },
//   {
//     title: '電商前台',
//     desc: '模擬電商網站前台，含購物車功能。',
//     image: 'https://placehold.co/400x200?text=Shop',
//     link: '#'
//   },
//   {
//     title: 'Markdown 編輯器',
//     desc: '支援即時預覽的 Markdown 編輯器。',
//     image: 'https://placehold.co/400x200?text=Markdown',
//     link: '#'
//   },
//   {
//     title: '日曆行事曆',
//     desc: '可拖曳事件的行事曆工具。',
//     image: 'https://placehold.co/400x200?text=Calendar',
//     link: '#'
//   },
//   {
//     title: 'API 文件產生器',
//     desc: '自動產生 API 文件的前端工具。',
//     image: 'https://placehold.co/400x200?text=API+Doc',
//     link: '#'
//   },
//   {
//     title: 'QR Code 產生器',
//     desc: '快速產生 QR Code 的小工具。',
//     image: 'https://placehold.co/400x200?text=QR+Code',
//     link: '#'
//   },
//   {
//     title: '即時匯率查詢',
//     desc: '查詢最新匯率的前端應用。',
//     image: 'https://placehold.co/400x200?text=Currency',
//     link: '#'
//   }
// ]


</script> 