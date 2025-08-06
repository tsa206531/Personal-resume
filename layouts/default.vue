<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <Navbar />
    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
</script> 