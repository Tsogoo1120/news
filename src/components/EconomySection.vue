<template>
  <section class="bg-surface-container-low -mx-8 px-8 py-20 rounded-xl">
    <div class="max-w-screen-2xl mx-auto">
      <div class="flex justify-between items-end mb-12">
        <div>
          <span class="text-xs font-bold text-on-tertiary-container font-label uppercase tracking-widest mb-2 block">Эдийн засаг</span>
          <h2 class="text-3xl font-black font-headline text-primary">Зах зээлийн дүн шинжилгээ</h2>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          v-for="card in cards"
          :key="card.title"
          :class="['bg-surface-container-lowest p-6 rounded-lg premium-shadow border-t-4 group', card.accent]"
        >
          <div class="mb-4">
            <span class="text-[10px] font-bold text-primary-container font-label uppercase">{{ card.category }}</span>
          </div>
          <h3 class="font-headline font-bold text-lg mb-4 group-hover:text-on-primary-fixed-variant transition-colors">{{ card.title }}</h3>
          <p class="text-sm text-on-surface-variant leading-relaxed mb-6">{{ card.excerpt }}</p>
          <div class="mt-auto pt-4 border-t border-surface-container flex justify-between items-center">
            <span class="text-[10px] text-outline font-bold">{{ card.readTime }}</span>
            <span class="material-symbols-outlined text-primary text-xl">{{ card.icon }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    category: 'Хөрөнгийн зах',
    title: 'ТОП-20 индекс 1.5 хувиар өсөлттэй хаагдлаа',
    excerpt: 'Уул уурхайн компаниудын хувьцааны ханш сүүлийн гурван өдөр дараалан тогтвортой өсөж байна.',
    readTime: '5 МИНУТ УНШИХ',
    icon: 'trending_up',
    accent: 'border-primary',
  },
  {
    category: 'Уул уурхай',
    title: 'Зэсийн үнэ дэлхийн зах зээл дээр өслөө',
    excerpt: 'Дэлхийн эдийн засгийн сэргэлттэй холбоотойгоор түүхий эдийн эрэлт нэмэгдэж байна.',
    readTime: '3 МИНУТ УНШИХ',
    icon: 'analytics',
    accent: 'border-surface-variant',
  },
  {
    category: 'Банк санхүү',
    title: 'Дижитал банкны хэрэглээ 30 хувиар өсөв',
    excerpt: 'Финтек салбарын хурдацтай хөгжил уламжлалт банкны салбарт шинэ сорилт болж байна.',
    readTime: '8 МИНУТ УНШИХ',
    icon: 'payments',
    accent: 'border-surface-variant',
  },
  {
    category: 'Чухал',
    title: 'Инфляцийн түвшин буурах хандлагатай байна',
    excerpt: 'Статистикийн хорооноос гаргасан сүүлийн тайлангаар үнийн өсөлт саарчээ.',
    readTime: '6 МИНУТ УНШИХ',
    icon: 'show_chart',
    accent: 'border-tertiary',
  },
]
</script>
