<template>
  <section class="bg-surface-container-low py-20">
    <div class="max-w-6xl mx-auto px-6">
      <h3 class="text-2xl font-black font-headline text-primary mb-10 flex items-center gap-4">
        <span class="w-8 h-1 bg-primary inline-block"></span>
        ХОЛБООТОЙ НИЙТЛЭЛҮҮД
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="item in related"
          :key="item.title"
          class="bg-surface-container-lowest group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
        >
          <div class="aspect-video overflow-hidden">
            <img
              :src="item.image"
              :alt="item.imageAlt"
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div class="p-6">
            <span class="text-[10px] font-bold text-on-tertiary-container uppercase tracking-widest mb-3 block">{{ item.category }}</span>
            <h4 class="text-lg font-bold font-headline text-primary leading-snug group-hover:text-on-primary-fixed-variant transition-colors">
              {{ item.title }}
            </h4>
            <p class="text-xs text-outline mt-4">{{ item.date }} · {{ item.readTime }} мин</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const related = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKAps4yP2RAHoeDx9qgILWNLVNQXwTnJ7sPP0Wk4t2UuUBqWGOFmWuyiruim1OwK1kJwQnXtDQj28G0t7OqNqREEqDSrE-EstA17QMaDjz4M9k8E0s_pRXFxo0NqAXm2WTN9fYON44zDX0fsoPbQaqUQpMaG34tpBbGk_lsj6NeC1Q64swHkKSpOi2i5g7cjObWKkbk5qp-HvQVrxoWaBFZcCOkInsVeIcIcFtP4vBG_4gi8H-Au2X-kZ2CsEzGPXqSN0tL4',
    imageAlt: 'Modern skyscraper',
    category: 'Улс төр',
    title: 'УИХ-ын сонгуулийн өмнөх эдийн засгийн амлалтууд',
    date: '2024.05.18',
    readTime: '5',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCXoS-msCB5pa55xhvI2cN258HxyOiZeD3KXDY6DSEPDDy57sZowg9Afu45OFV2tws91SqNtL58HD56WrXz9yIV64DA5WJ8ryD0qBWsqJhO6RwN9i82rqYVqokT2c8rX6V8wZEomrF-YgTUhSg3nRBV-wdDDpa98lf8V8zlQ7TVU4dxX-ylc6JRm6wZoFzfvAKwq5UIsp-w7g5sc20S0YrKhrNSbo7FBnRLz1QgpXxNpfA6-0ZAxI4vUHTBSimu3vxwAE-ecPqjM4',
    imageAlt: 'Currency on table',
    category: 'Зах зээл',
    title: 'Амралтын өдрүүдэд валютын ханш ямар байх вэ?',
    date: '2024.05.19',
    readTime: '3',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeUmKXB0aNjGgbcqR0ios1z7SS2T1GrQTwDSAzIgQSLIAY_wYW6PtsOBYPheQkynuJhaTJNeO_WhYBoYl-ZpwDJwHyPnab_UGUxYCJcvm88hU4RV9EuqW4Fcrh6U5KC5AHDJYYzL8CmJv8z06fv92mSCxInOLfj9pSAZGM9fW8SjaHz1LmJqT9tXvzCEp769HJKcqd8fGdnDtHQmoSxdDLQOqPfDoTev1Jr0m-192xmCgg1Z2naA2gqZ0ezEDJ07Djgge0tVkBGBs',
    imageAlt: 'Wind turbines on green hill',
    category: 'Нийгэм',
    title: 'Сэргээгдэх эрчим хүчний төслүүдэд гадаадын хөрөнгө оруулалт нэмэгдэв',
    date: '2024.05.15',
    readTime: '7',
  },
]
</script>
