<template>
  <section class="grid grid-cols-12 gap-8 mb-16">
    <!-- Main feature article -->
    <div class="col-span-12 lg:col-span-8 group cursor-pointer">
      <div class="relative overflow-hidden aspect-[16/9] bg-surface-container mb-6 rounded-lg">
        <img
          :src="hero.image"
          :alt="hero.imageAlt"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div class="absolute top-6 left-6">
          <span class="bg-tertiary text-on-tertiary px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase rounded-sm">ШИНЭ МЭДЭЭ</span>
        </div>
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-black font-headline text-primary mb-6 leading-[1.1] tracking-tight">
        {{ hero.title }}
      </h1>
      <p class="text-on-surface-variant text-lg max-w-2xl leading-relaxed mb-6">{{ hero.excerpt }}</p>
      <div class="flex items-center gap-4 text-sm font-medium text-on-primary-fixed-variant">
        <span>{{ hero.author }}</span>
        <span class="w-1 h-1 bg-outline rounded-full"></span>
        <span class="text-outline">{{ hero.time }}</span>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="col-span-12 lg:col-span-4 space-y-8">
      <!-- Live Feed -->
      <div class="bg-surface-container p-8 rounded-lg">
        <h3 class="font-headline font-bold text-xl mb-6 flex items-center gap-2">
          <span class="w-2 h-6 bg-primary inline-block"></span>
          Шуурхай дамжуулалт
        </h3>
        <div class="space-y-6">
          <div
            v-for="(item, i) in liveItems"
            :key="i"
            :class="['border-l-2 pl-4', i === 0 ? 'border-primary-container' : 'border-surface-variant']"
          >
            <span class="text-[10px] font-bold font-label" :class="i === 0 ? 'text-on-primary-fixed-variant' : 'text-outline'">{{ item.time }}</span>
            <p :class="['text-sm mt-1', i === 0 ? 'font-semibold text-on-surface' : 'text-on-surface-variant']">{{ item.text }}</p>
          </div>
        </div>
        <button class="mt-8 text-on-primary-fixed-variant text-sm font-bold flex items-center gap-1 group">
          Бүгдийг үзэх
          <span class="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>

      <!-- Exchange rates -->
      <div class="bg-surface-container-low p-6 rounded-lg">
        <div class="flex items-center justify-between mb-4">
          <span class="text-[10px] font-bold text-on-surface-variant font-label uppercase tracking-widest">Ханш</span>
          <span class="text-[10px] text-outline">2024.05.20</span>
        </div>
        <div class="space-y-3">
          <div v-for="rate in rates" :key="rate.pair" class="flex justify-between items-center">
            <span class="text-sm font-medium">{{ rate.pair }}</span>
            <span class="text-sm font-bold">
              {{ rate.value }}
              <span :class="rate.up ? 'text-on-primary-container' : 'text-error'" class="text-xs">{{ rate.change }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const hero = {
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnc9OAmAPszxJ_L700PtddFTpwMK-PfdMSIJ8DoeSfMLUdCo2XbUVwxq4sgxsvmLkhFXy6yFBV3ApiaAxpDbzW3qDjHiKWtTEJN18VqF6-w6hxAs4DkLqW28p8i_1ZKyLfsZfpf-nWXoeQO-8v_hKfrU7dCYa_N_dV-Pm6PQFS46uJlGC0khfGogDTmSa0mO3BtpsX394E6_kA4Cx6Gk8ynLY9dPS1vpWBqf9znb7Vc_ccMvoDljjNgWceYQRkFR0CfPDDtkby2Yk',
  imageAlt: 'Stately government building in Ulaanbaatar during sunrise',
  title: 'УИХ-ын ээлжит бус чуулганаар эдийн засгийн шинэ багц хуулийг хэлэлцэж эхэллээ',
  excerpt: 'Засгийн газраас өргөн мэдүүлсэн эдийн засгийг эрчимжүүлэх, хөрөнгө оруулалтыг татах чиглэлээр боловсруулсан 12 багц хуулийн төслийг парламентаар хэлэлцэж байна.',
  author: 'Г. Бат-Эрдэнэ',
  time: '12 минутын өмнө',
}

const liveItems = [
  { time: '14:20', text: 'Төв банк бодлогын хүүг хэвээр үлдээх шийдвэр гаргалаа.' },
  { time: '13:45', text: 'Нийслэлийн авто замын түгжрэлийг бууруулах төлөвлөгөө танилцуулагдав.' },
  { time: '12:10', text: 'Гадаад харилцааны сайд БНХАУ-д хийх айлчлалаа эхлүүллээ.' },
]

const rates = [
  { pair: 'USD / MNT', value: '3,385.00', change: '▼ 0.2%', up: false },
  { pair: 'CNY / MNT', value: '468.40', change: '▲ 0.1%', up: true },
]
</script>
