<template>
  <div class="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
    <div class="lg:col-span-8">
      <span class="text-on-tertiary-container font-bold text-xs tracking-[0.2em] uppercase block mb-4">ӨНӨӨДРИЙН ОНЦЛОХ</span>
      <h1 class="text-6xl md:text-7xl font-black tracking-tight text-primary leading-none font-headline">Эдийн засаг</h1>
    </div>
    <div class="lg:col-span-4 flex gap-4 overflow-x-auto pb-4 lg:pb-0">
      <div v-for="ticker in tickers" :key="ticker.label" class="bg-surface-container-lowest p-4 min-w-[160px] flex-1">
        <div class="text-[10px] uppercase font-bold text-outline tracking-wider mb-1">{{ ticker.label }}</div>
        <div class="text-xl font-black text-primary">{{ ticker.value }}</div>
        <div :class="ticker.up ? 'text-green-600' : 'text-red-600'" class="text-xs font-bold flex items-center gap-1">
          <span class="material-symbols-outlined text-sm">{{ ticker.up ? 'trending_up' : 'trending_down' }}</span>
          {{ ticker.change }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tickers = [
  { label: 'MSE TOP-20', value: '36,842.12', change: '+1.24%', up: true },
  { label: 'USD/MNT',    value: '3,452.00',  change: '-0.05%', up: false },
]
</script>
