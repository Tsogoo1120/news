<template>
  <section class="mb-24">
    <div class="flex justify-between items-end mb-10">
      <div>
        <span class="text-xs font-bold text-on-tertiary-container font-label uppercase tracking-widest mb-2 block">Салбар мэдээ</span>
        <h2 class="text-3xl font-black font-headline text-primary">Улс төр</h2>
      </div>
      <a href="#" class="text-on-primary-fixed-variant font-bold border-b-2 border-transparent hover:border-on-primary-fixed-variant pb-1 transition-all">Бүх мэдээ</a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Large card -->
      <div class="md:col-span-2 relative h-[500px] group overflow-hidden rounded-lg">
        <img
          :src="featured.image"
          :alt="featured.imageAlt"
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-10 text-on-primary">
          <div class="bg-on-tertiary-container text-white text-[10px] font-bold px-2 py-1 inline-block mb-4">ШИНЖИЛГЭЭ</div>
          <h3 class="text-3xl font-headline font-bold mb-4 max-w-xl leading-snug">{{ featured.title }}</h3>
          <p class="text-on-primary-container line-clamp-2 max-w-lg">{{ featured.excerpt }}</p>
        </div>
      </div>

      <!-- Small cards -->
      <div class="space-y-8">
        <div v-for="article in sideArticles" :key="article.title" class="group cursor-pointer">
          <div class="aspect-video bg-surface-container rounded-lg overflow-hidden mb-4">
            <img
              :src="article.image"
              :alt="article.imageAlt"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h4 class="text-lg font-bold font-headline leading-tight group-hover:text-on-primary-fixed-variant transition-colors">{{ article.title }}</h4>
          <p class="text-sm text-outline mt-2">{{ article.time }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const featured = {
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVOK1vr7Bx53QUEgzMbImLLXk81NmpV_ZgA0fwF9qK5z9AxApWczpFjGlZBDbewKj3MXof3hefKNAXSkPzkhxq1C_Mzef3qdxrvNRYiBfLMlCyg9R96pbKef2Qwzt0kKYvVLzopgObVtvCdSEvWtbRYkl3zR97eq65PwY0dPpvDQJnWP5QRE0jtmZYFPOGR8rKL4xG5XmAU7kHF40X_UZB527Qq6pjuiNziU2fIboJH944OxdiBymfEydzd-3B2V_8-MAa_6Ucy50',
  imageAlt: 'Modern government conference room with diplomats',
  title: 'Сонгуулийн тогтолцооны өөрчлөлт: Намуудын байр суурь ба боломжит хувилбарууд',
  excerpt: 'Ирэх оны сонгуулийн бэлтгэл ажил эхэлсэнтэй холбогдуулан улс төрийн намууд өөрсдийн стратегиа тодорхойлж байна.',
}

const sideArticles = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZqewT7QRsV4l5vWYiazByKjQAQbR7csn4W_e8px2mrgGwBxFVOJsNZAfCpXyzVwxhv1r_F3qiKChM3p5OfL0iO9dxvYblaXNN41VouHbqPAk9Ds8Kb-ZEcoE98VGJljAPhu6uzYD7zN1yGP9qYT8NvTvSbzkO8KQc2R8Z72KUxa6COozaWPEHKUi2wvwDlNb26jbP71mDzfauyX5SXX48N6IinrMelIYIAQHkAc1gjp8-anB-frfuZQPXuwNhnlVxVzCrNVT0eXs',
    imageAlt: 'Close up of a voting ballot box',
    title: 'Орон нутгийн сонгуулийн тов гарлаа',
    time: '2 цагийн өмнө',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDev9LJKVVewjLlYNK5lj65QvkUMgHZGk9vM9WBj4d30NmSAkKla4ZMH0iUy3nowP7-U5eU8UiVb9DdDRWgXo_aPVYY4GzzXGHKBJhSXLllfYOuD5vufVGlpwVz1ZPnx3Onk0xAmaU91MGCu9S5qi1ImtUSwl8H2V73UchrcCaDOgCfnPiXQ2fwsHO-TNNdSqyLFK1_1JkyHlmMaleWpsBmJOqlGmlPEiEAQtjNFpMBC0ZYwij4BQDwpN2XUODnfzCxKq5C2V8HYJg',
    imageAlt: 'Wooden gavel on a judge desk',
    title: 'Шүүхийн шинэчлэлийн хүрээнд хийгдэх ажлууд',
    time: '5 цагийн өмнө',
  },
]
</script>
