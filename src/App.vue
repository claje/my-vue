<script setup>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'
</script>

<template>
  <div id="app-layout">
    <Navbar />

<main class="page-content">
  <RouterView />
</main>

    <Footer />
  </div>
</template>