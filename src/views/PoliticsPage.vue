<template>
  <main class="max-w-screen-2xl mx-auto px-8 py-12">
    <PoliticsHeader />
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <PoliticsMainContent />
      <PoliticsSidebar />
    </div>
  </main>
</template>

<script setup>
import PoliticsHeader from '../components/politics/PoliticsHeader.vue'
import PoliticsMainContent from '../components/politics/PoliticsMainContent.vue'
import PoliticsSidebar from '../components/politics/PoliticsSidebar.vue'
</script>
