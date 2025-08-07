<template>
  <section class="w-full py-12 md:px-0 lg:px-44">
    <!-- 大頭照和自我介紹 - 左右各50% -->
    <div class="flex flex-col xl:flex-row-reverse md:flex-row-reverse items-stretch w-full mb-12 ">
      <!-- 左側：大頭照 -->
      <div class="w-full md:w-1/4 flex justify-center items-center py-8">
        <div class="w-80 h-100 rounded-xl bg-gray-200 dark:bg-gray-700 overflow-hidden shadow-lg">
          <img 
            src="https://raw.githubusercontent.com/tsa206531/OverTask25/refs/heads/main/img/GPT%20Image%202025%20(1).png" 
            alt="profile" 
            class="w-full h-full object-cover"
          >
        </div>
      </div>
      
      <!-- 右側：自我介紹 -->
      <div class="w-full md:w-3/4 flex flex-col justify-center items-start text-start px-8 py-8 ">
        <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">嗨, 我是YL</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed pb-8">
          你好！我是YL Chen，一名致力於研究AI與前端技術的工程師。目前專注於Vue、Nuxt、Tailwind CSS、Cucumber和AI領域，並積極探索如何將AI技術應用於前端開發，提升開發效率和用戶體驗。<br>目前在AIxBDD社群中擔任的前端組組長，專注於研究如何將AI應用於前端開發領域。 <br><br>
          我相信，好的前端開發不僅在於技術實現，更是在每一個細節中傳遞溫暖與流暢感。
        </p>
          <div class="flex flex-col sm:flex-row gap-4 ">
            <NuxtLink to="/portfolio" class="gradient-bass-box gradient-border gradient-bass-box:hover">查看作品</NuxtLink>            

            <a href="https://www.canva.com/design/DAGk5EyHeU8/akt1dBHgvTdCDYDNi3LubA/view?utm_content=DAGk5EyHeU8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h729735aa3d" download class="gradient-bass-box custom-button custom-button:hover">下載 PDF 履歷</a> 
          </div>
      </div>
    </div>
    <!-- 技能圖示區塊保留原本內容 -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">技能專長</h2>
      <ClientOnly>
        <Swiper
          :modules="swiperModules"
          :slides-per-view="2"
          :space-between="20"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :pagination="{ clickable: true }"
          :breakpoints="{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }"
          class="skills-swiper"
        >
          <SwiperSlide v-for="skill in skills" :key="skill.name" class="text-center">
            <div class="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow ">
              <div class="w-16 h-16 flex items-center justify-center mb-3">
                <img 
                  :src="`https://cdn.simpleicons.org/${skill.icon}`" 
                  :alt="skill.name"
                  class="w-12 h-12"/>                
              </div>              
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
<!-- 作品集 -->
    <div style="overflow:hidden;">
      <iframe
      src="https://personal-resume-two-sage.vercel.app/F_Portfolio"
      ref="iframeRef"
      style="width: 100%; border: none; display: block;"  
      scrolling="no"
      >
      </iframe>  
    </div>

  </section>
</template>

<script setup>
import { Autoplay, Pagination } from 'swiper/modules'

const swiperModules = [Autoplay, Pagination]
const { skills } = useSkills()

// iframe
import { onMounted, ref } from 'vue'

const iframeRef = ref(null)

onMounted(() => {
  window.addEventListener('message', (event) => {
    if (event.data.type === 'resize' && iframeRef.value) {
      iframeRef.value.style.height = `${event.data.height}px`
    }
  })
})


</script>



<style scoped>
.skills-swiper {
  padding-bottom: 40px;
}

:deep(.swiper-pagination-bullet) {
  background-color: #3b82f6;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

:deep(.swiper-pagination) {
  bottom: 0;
}
</style> 