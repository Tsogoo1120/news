<template>
  <aside class="lg:col-span-4 space-y-12">

    <!-- Popular articles -->
    <div class="bg-surface-container-low p-8">
      <h4 class="font-headline font-black text-xl text-primary mb-8 border-b-4 border-primary pb-2 inline-block">УНШИХТАЙ</h4>
      <div class="space-y-8">
        <div
          v-for="(item, i) in popular"
          :key="i"
          :class="['flex gap-4 items-start group cursor-pointer', i > 0 ? 'border-t border-outline-variant/20 pt-8' : '']"
        >
          <span class="font-black text-4xl text-outline-variant group-hover:text-primary transition-colors italic">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <div>
            <h5 class="font-bold text-on-surface leading-snug group-hover:text-on-primary-fixed-variant">{{ item.title }}</h5>
            <div class="text-xs text-outline mt-2 uppercase font-bold">{{ item.reads }} уншсан</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columnists -->
    <div class="bg-primary p-8 text-on-primary">
      <h4 class="font-headline font-bold text-lg mb-6 uppercase tracking-widest text-primary-fixed">НИЙТЛЭЛЧИД</h4>
      <div class="space-y-6">
        <div
          v-for="author in columnists"
          :key="author.name"
          class="flex items-center gap-4 cursor-pointer hover:bg-primary-container p-2 -m-2 transition-colors rounded"
        >
          <img :src="author.image" :alt="author.alt" class="w-12 h-12 rounded-full object-cover border-2 border-primary-fixed" />
          <div>
            <div class="font-bold text-white">{{ author.name }}</div>
            <div class="text-primary-fixed-dim text-xs">{{ author.role }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter -->
    <div class="bg-surface-dim p-8">
      <h4 class="font-headline font-black text-xl text-primary mb-4">ӨГЛӨӨНИЙ ТОЙМ</h4>
      <p class="text-on-surface-variant text-sm mb-6">Улс төр, эдийн засгийн хамгийн чухал мэдээллийг өглөө бүр имэйлээрээ хүлээн аваарай.</p>
      <form class="space-y-3" @submit.prevent="subscribe">
        <input
          v-model="email"
          type="email"
          placeholder="Имэйл хаяг"
          class="w-full bg-surface-container-lowest border-none py-3 px-4 focus:ring-2 focus:ring-primary text-sm outline-none"
        />
        <button type="submit" class="w-full bg-primary text-on-primary font-bold py-3 uppercase text-xs tracking-widest hover:bg-primary-container transition-colors">
          Бүртгүүлэх
        </button>
      </form>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
function subscribe() {
  if (email.value) {
    alert('Амжилттай бүртгэгдлээ: ' + email.value)
    email.value = ''
  }
}

const popular = [
  { title: 'Төрийн албаны шинэчлэл: Юу өөрчлөгдөх вэ?', reads: '24,500' },
  { title: 'Гадаадын шууд хөрөнгө оруулалт 20%-иар өслөө', reads: '18,200' },
  { title: 'Боловсролын салбарт хийгдэх томоохон реформ', reads: '12,100' },
]

const columnists = [
  {
    name: 'Ж. Бат-Эрдэнэ',
    role: 'Улс төр судлаач',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH_U5JpLi5P0KgSybtr-LdSZdi2lnhVZEYus3yp1_HW6doPyhEmf_JGFg46Chr9ICmcnuO9ORtXW_AhpdgEFN_enan2qfzIblJr4LcoNIgjbzGJAXreUcCZ0SGqM43u1jFGs1jOFeL6UTYahFMc1O4aCOW36GtmJZC5desBXva9YJE2n-BA4ePMYDI0vX4TB3UXg-ZZZkM4L5drjUgTppsF1C1wDJUVws-NshVSOzl7nowskjFa_lhK8XVOaHAzs8UyuDLPAEgXP4',
    alt: 'Political analyst portrait',
  },
  {
    name: 'С. Уянга',
    role: 'Эдийн засагч',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNEXrPNiVs-D0fwst8QuLr7EJ8BTK7KAmApvZItbw9j6ZCER1QfIDVCsEjqa4TI2RJj2ORZPUr6FNJYJYlgi9Zw6bui3TEWIipUWSbtgmNaSmHil1asGscmQLVKNF34UMrdW-PoOp0EMwdqdGVrBMtgMi01OPq05NMhH25Ck47iVSa35Sn-tN2Yx7JAXL6yUH0z1xfTgVtlF6552xUA1bnz6ieT7goKNBsT2ImnbKkkIO7VUnC6ftHHB-x8e6X9EEgrljkjoFJ-bE',
    alt: 'Economist portrait',
  },
]
</script>
