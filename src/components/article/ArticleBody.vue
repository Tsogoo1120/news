<template>
  <div>
    <!-- Featured image -->
    <div class="relative w-full aspect-[16/9] mb-12 rounded-lg overflow-hidden bg-surface-container">
      <img :src="article.image" :alt="article.imageAlt" class="w-full h-full object-cover" />
      <p class="absolute bottom-4 left-4 text-xs text-white/80 bg-black/40 px-2 py-1 backdrop-blur-sm rounded">
        {{ article.imageCaption }}
      </p>
    </div>

    <!-- Body -->
    <div class="text-on-surface leading-relaxed font-body space-y-8">
      <p class="text-xl font-medium text-on-surface-variant leading-relaxed">{{ article.lead }}</p>

      <p v-for="(para, i) in article.paragraphs.slice(0, 2)" :key="'p'+i">{{ para }}</p>

      <!-- Pull quote -->
      <div class="bg-surface-container-low p-8 rounded-lg border-l-4 border-primary my-10">
        <p class="text-2xl font-headline font-bold text-primary italic leading-tight">
          "{{ article.quote.text }}"
        </p>
        <p class="mt-4 text-sm font-bold text-on-surface-variant">— {{ article.quote.source }}</p>
      </div>

      <h2 class="text-3xl font-black font-headline text-primary mt-12 mb-6">{{ article.subheading }}</h2>

      <p v-for="(para, i) in article.paragraphs.slice(2, 3)" :key="'p2'+i">{{ para }}</p>

      <!-- Stats grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
        <div
          v-for="stat in article.stats"
          :key="stat.label"
          class="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant/10"
        >
          <p class="text-sm text-outline mb-2">{{ stat.label }}</p>
          <p class="text-3xl font-black text-primary">{{ stat.value }}</p>
          <p :class="stat.positive ? 'text-green-600' : 'text-on-tertiary-container'" class="text-xs font-bold mt-2">
            {{ stat.change }}
          </p>
        </div>
      </div>

      <p v-for="(para, i) in article.paragraphs.slice(3)" :key="'p3'+i">{{ para }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: { type: Object, required: true },
})
</script>
