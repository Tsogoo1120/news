<template>
  <main class="max-w-screen-2xl mx-auto px-8 py-12">
    <ArticlesHeader />
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <ArticlesMainContent />
      <ArticlesSidebar />
    </div>
  </main>
</template>

<script setup>
import ArticlesHeader from '../components/articles/ArticlesHeader.vue'
import ArticlesMainContent from '../components/articles/ArticlesMainContent.vue'
import ArticlesSidebar from '../components/articles/ArticlesSidebar.vue'
</script>
