<template>
  <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
    <div>
      <span class="text-on-tertiary-container bg-tertiary-fixed px-3 py-1 text-xs font-bold tracking-widest uppercase mb-4 inline-block">АНГИЛАЛ</span>
      <h1 class="font-headline font-black text-6xl text-primary tracking-tighter">Нийтлэл</h1>
    </div>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="f in filters"
        :key="f"
        :class="[
          'px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors',
          activeFilter === f
            ? 'bg-primary text-on-primary'
            : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
        ]"
        @click="activeFilter = f"
      >{{ f }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const filters = ['Бүх нийтлэл', 'Шинжилгээ', 'Тайлбар', 'Санал бодол', 'Ярилцлага']
const activeFilter = ref('Бүх нийтлэл')
</script>
