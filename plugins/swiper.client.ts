import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export default defineNuxtPlugin((nuxtApp) => {
  // Register Swiper components globally
  nuxtApp.vueApp.component('Swiper', Swiper)
  nuxtApp.vueApp.component('SwiperSlide', SwiperSlide)
  
  // Provide Swiper modules
  return {
    provide: {
      SwiperAutoplay: Autoplay,
      SwiperPagination: Pagination
    }
  }
}) 