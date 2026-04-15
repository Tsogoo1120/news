<template>
  <aside class="lg:col-span-4 space-y-12">
    <!-- Markets -->
    <section class="bg-surface-container-high p-8">
      <h4 class="text-primary font-black text-lg mb-6 border-l-4 border-primary pl-4 uppercase tracking-tighter font-headline">Зах зээлийн үзүүлэлт</h4>
      <div class="space-y-6">
        <div
          v-for="(item, i) in markets"
          :key="item.name"
          :class="['flex justify-between items-center pb-4', i < markets.length - 1 ? 'border-b border-outline-variant/30' : '']"
        >
          <div>
            <div class="font-bold text-sm">{{ item.name }}</div>
            <div class="text-[10px] text-outline uppercase">{{ item.exchange }}</div>
          </div>
          <div class="text-right">
            <div class="font-bold">{{ item.price }}</div>
            <div :class="item.up ? 'text-green-600' : 'text-red-600'" class="text-[10px] font-bold">{{ item.change }}</div>
          </div>
        </div>
      </div>
      <button class="w-full mt-8 text-on-primary-fixed-variant text-[10px] font-black uppercase tracking-widest hover:underline">Бүх ханш харах</button>
    </section>

    <!-- Reports -->
    <section>
      <h4 class="text-primary font-black text-lg mb-6 uppercase tracking-tighter font-headline">Тайлан, илтгэлүүд</h4>
      <div class="space-y-8">
        <div v-for="report in reports" :key="report.title" class="flex gap-4 group cursor-pointer">
          <div class="flex-shrink-0 w-16 h-20 bg-surface-dim flex items-center justify-center">
            <span class="material-symbols-outlined text-outline">{{ report.icon }}</span>
          </div>
          <div>
            <h5 class="font-bold text-sm leading-snug group-hover:text-on-primary-fixed-variant transition-colors">{{ report.title }}</h5>
            <div class="text-[10px] text-outline font-bold mt-2 uppercase tracking-widest">{{ report.meta }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="bg-primary p-8 text-white rounded-lg">
      <h4 class="text-xl font-bold font-headline mb-4">Эдийн засгийн тойм</h4>
      <p class="text-white/70 text-sm mb-6 leading-relaxed">Долоо хоног бүрийн зах зээлийн гол мэдээллүүдийг и-мэйлээрээ хүлээн аваарай.</p>
      <form class="space-y-3" @submit.prevent="subscribe">
        <input
          v-model="email"
          type="email"
          placeholder="И-мэйл хаяг"
          class="w-full bg-white/10 border border-white/20 text-white text-sm focus:ring-2 focus:ring-white/30 rounded-lg placeholder:text-white/40 px-4 py-3 outline-none"
        />
        <button type="submit" class="w-full bg-white text-primary font-black text-[10px] py-3 uppercase tracking-widest rounded-lg hover:bg-primary-fixed transition-colors">Бүртгүүлэх</button>
      </form>
    </section>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

function subscribe() {
  if (email.value) {
    alert(`Амжилттай бүртгэгдлээ: ${email.value}`)
    email.value = ''
  }
}

const markets = [
  { name: 'Алтан (Алт)',    exchange: 'London Bullion', price: '$2,342.10', change: '+0.42%', up: true },
  { name: 'Зэс (LME)',      exchange: 'LME Cash',       price: '$9,150.00', change: '-1.15%', up: false },
  { name: 'Нүүрс (Thermal)',exchange: 'Newcastle',      price: '$124.50',   change: '+2.30%', up: true },
  { name: 'Brent Oil',      exchange: 'Global Bench',   price: '$82.15',    change: '-0.88%', up: false },
]

const reports = [
  { icon: 'description', title: 'Гадаадын шууд хөрөнгө оруулалтын 2023 оны тайлан', meta: 'ҮСХ | 4.2 MB' },
  { icon: 'analytics',   title: 'Төсвийн тогтвортой байдлын зөвлөлийн дүгнэлт',     meta: 'ТТБЗ | 2.8 MB' },
]
</script>
