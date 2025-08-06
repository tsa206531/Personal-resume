<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 
  transition-colors duration-300 ">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html, body {
  background-color: white;
}

html.dark, body.dark {
  background-color: #111827; /* gray-900 */
}

/* 確保所有元素都繼承背景色 */
* {
  transition: background-color 0.5s ease, color 0.5s ease;
}
</style>
