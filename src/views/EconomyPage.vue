<template>
  <main class="max-w-screen-2xl mx-auto px-8 py-12">
    <EconomyHeader />
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <EconomyMainContent />
      <EconomySidebar />
    </div>
  </main>
</template>

<script setup>
import EconomyHeader from '../components/economy/EconomyHeader.vue'
import EconomyMainContent from '../components/economy/EconomyMainContent.vue'
import EconomySidebar from '../components/economy/EconomySidebar.vue'
</script>
