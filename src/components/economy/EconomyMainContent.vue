<template>
  <div class="lg:col-span-8 space-y-12">
    <!-- Hero article -->
    <section class="group cursor-pointer">
      <div class="relative overflow-hidden mb-6 h-[500px]">
        <img
          :src="hero.image"
          :alt="hero.imageAlt"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-10">
          <span class="bg-on-tertiary-container text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest mb-4 inline-block">ШУУРХАЙ</span>
          <h2 class="text-4xl font-bold font-headline text-white leading-tight mb-4">{{ hero.title }}</h2>
          <p class="text-white/80 text-lg max-w-xl line-clamp-2">{{ hero.excerpt }}</p>
        </div>
      </div>
    </section>

    <!-- Secondary stories -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="story in stories" :key="story.title" class="space-y-4 group cursor-pointer">
        <div class="h-48 overflow-hidden">
          <img
            :src="story.image"
            :alt="story.imageAlt"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <span class="text-on-primary-fixed-variant text-[10px] font-black tracking-widest uppercase">{{ story.category }}</span>
        <h3 class="text-xl font-bold font-headline leading-tight group-hover:text-on-primary-fixed-variant transition-colors">{{ story.title }}</h3>
        <p class="text-on-surface-variant text-sm leading-relaxed">{{ story.excerpt }}</p>
      </div>
    </section>

    <!-- Analysis block -->
    <section class="bg-surface-container p-12 relative overflow-hidden">
      <div class="relative z-10">
        <span class="text-on-tertiary-container text-[10px] font-black tracking-widest uppercase mb-6 block">ШИНЖИЛГЭЭ</span>
        <h2 class="text-3xl font-black font-headline text-primary mb-6 max-w-lg">{{ analysis.title }}</h2>
        <div class="flex items-center gap-4 mb-8">
          <div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-xs">{{ analysis.authorInitials }}</div>
          <div>
            <div class="text-sm font-bold">{{ analysis.author }}</div>
            <div class="text-[10px] text-outline uppercase font-bold">{{ analysis.role }}</div>
          </div>
        </div>
        <button class="bg-primary text-white px-8 py-3 font-bold text-xs uppercase tracking-widest hover:bg-primary-container transition-colors">Үргэлжлүүлэн унших</button>
      </div>
      <div class="absolute right-0 top-0 h-full w-1/3 bg-surface-dim opacity-20 transform skew-x-12 translate-x-1/2"></div>
    </section>
  </div>
</template>

<script setup>
const hero = {
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9mLDp0EO39lQB2CiBlkecWp9L354ij7pPiTmhUB2gz1oGa2dKZ-WPknNMYTA2G9mly8uKWRcuvTkChpDWYjjC2vpw6oy5UzQSxfP8UPveNLQ7JRUWjG54wTovAQJWuHUbDpq8tRpNitFWBo0PiraqcAj8zN_MqwDpDsNpKMQVuWhTeQ-ervxStO0U29U1VgXljHv45iybo8vyQi22eCUtuStLfI9Tpq3dYrac1ZAOu8ifucMGcgDfySfk3zjL4uuj50OiYCZHCmk',
  imageAlt: 'Modern city skyline with glass reflections',
  title: 'Монгол Улсын эдийн засаг 2024 онд 7.1 хувиар өсөх төлөвтэй байна',
  excerpt: 'Дэлхийн банкнаас гаргасан шинэчилсэн тайланд уул уурхайн салбарын идэвхжил болон экспортын өсөлт эдийн засагт голлох нөлөө үзүүлэхийг онцоллоо.',
}

const stories = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXKKhhTBsM0e4Mp3nwulQrA5dWGczL178JIeU6m45b-MGvq57QvnUxwxQ-QLVdFPW-QgemesHBvD5CL5qFctFiriy2kikqlhr1itGLBDWNTYP6W03QoNA2CdYHeKeQhWuEmj9xZKhPR5yasa1WH0ZwkRDhrIAvQu667uXfirwDfZfU6hx0DN4KC4bAdxflzyKrwgj19tDGIRFIio3CeafJBwbx5k8RXu-7pfXrdLiiplAwuCD5jWG-3OOmWsz7iplDdNmrHGaxPA0',
    imageAlt: 'Aerial view of mining operation',
    category: 'Уул Уурхай',
    title: 'Оюу Толгойн гүний уурхайн олборлолт төлөвлөгөөт хэмжээндээ хүрлээ',
    excerpt: 'Зэсийн баяжмалын агууламж нэмэгдсэнээр төсөвт төвлөрүүлэх татвар, хураамж 15 хувиар өссөн байна.',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6JbF8GC4B7rQwsqTeJMeFJYpXKUIus-GSh0jjLBj04da43qgAjipocGER0j19ALXrYBM5preVm2je1g6gQmPZ9zHh-ue0ANV9kd_BA-B7zV3PMR6Sd5mpM9Iucf1ovst18VUKNtzGCX3gxTpXP02Rx0igH6-3rvI9WW7hW5mftjPjQHDuTHo1Jr6MZM2BlsX303qXl5hIhYzD0P5_s7_RPkpttABfDwo33PApd821xbCoZXgaX2Z4C-b2EfXtGMj-NrzA8VmTX6o',
    imageAlt: 'Financial district building facade',
    category: 'Банк & Санхүү',
    title: 'Мөнгөний бодлогын хүүг хэвээр үлдээх шийдвэр гарлаа',
    excerpt: 'Монголбанкны Мөнгөний бодлогын хороо инфляцын түвшинг тогтворжуулах зорилгоор хүүг 13 хувьд хадгалахаар болов.',
  },
]

const analysis = {
  title: 'Инфляц ба иргэдийн худалдан авах чадвар: Юу өөрчлөгдөв?',
  authorInitials: 'Б.Т',
  author: 'Б.Төгөлдөр',
  role: 'Ахлах аналитик',
}
</script>
