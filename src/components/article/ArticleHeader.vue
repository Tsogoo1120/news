<template>
  <header class="mb-12">
    <div class="flex items-center gap-3 mb-6">
      <span class="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-1 tracking-widest uppercase rounded-sm">{{ article.category }}</span>
      <span class="text-outline text-xs">{{ article.readTime }} минутын уншлага</span>
    </div>

    <h1 class="text-4xl md:text-6xl font-black font-headline text-primary leading-tight mb-8 tracking-tight">
      {{ article.title }}
    </h1>

    <div class="flex items-center justify-between py-6 border-y border-outline-variant/20">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-surface-container overflow-hidden flex-shrink-0">
          <img :src="article.authorImg" :alt="article.authorAlt" class="w-full h-full object-cover" />
        </div>
        <div>
          <p class="text-sm font-bold text-on-surface">{{ article.author }}</p>
          <p class="text-xs text-outline">{{ article.authorRole }}</p>
        </div>
      </div>
      <span class="text-xs text-outline">{{ article.date }}</span>
    </div>
  </header>
</template>

<script setup>
defineProps({
  article: { type: Object, required: true },
})
</script>
