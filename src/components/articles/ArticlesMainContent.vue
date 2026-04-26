<template>
  <div class="lg:col-span-8 space-y-12">

    <!-- Featured article -->
    <article class="group relative bg-surface-container-lowest overflow-hidden cursor-pointer" @click="$router.push('/article/1')">
      <div class="absolute top-0 left-0 w-1 h-full bg-tertiary z-10"></div>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="overflow-hidden">
          <img :src="featured.image" :alt="featured.imageAlt"
            class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div class="flex flex-col justify-center py-6 pr-8">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-on-tertiary-container font-bold text-[0.7rem] uppercase tracking-widest">ОНЦЛОХ НИЙТЛЭЛ</span>
            <span class="text-outline text-xs">| {{ featured.time }}</span>
          </div>
          <h2 class="font-headline font-extrabold text-3xl text-primary leading-tight mb-4 group-hover:text-on-primary-fixed-variant transition-colors">
            {{ featured.title }}
          </h2>
          <p class="text-on-surface-variant text-lg mb-6 leading-relaxed line-clamp-3">{{ featured.excerpt }}</p>
          <div class="flex items-center gap-4">
            <img :src="featured.authorImg" :alt="featured.authorAlt" class="w-8 h-8 rounded-full object-cover" />
            <span class="text-on-surface font-bold text-sm">{{ featured.author }}</span>
            <span class="text-outline text-xs">• {{ featured.tag }}</span>
          </div>
        </div>
      </div>
    </article>

    <!-- Articles grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
      <template v-for="(article, i) in articles" :key="i">

        <!-- Wide card -->
        <article v-if="article.wide" class="flex flex-col gap-4 md:col-span-2 bg-surface-container-low p-6 cursor-pointer group" @click="$router.push('/article/1')">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/3">
              <img :src="article.image" :alt="article.imageAlt" class="w-full h-44 object-cover" />
            </div>
            <div class="md:w-2/3">
              <span class="text-on-tertiary-container font-bold text-[0.65rem] uppercase tracking-widest mb-2 inline-block">{{ article.category }}</span>
              <h3 class="font-headline font-bold text-2xl text-primary leading-snug mb-3 group-hover:text-on-primary-fixed-variant cursor-pointer transition-colors">{{ article.title }}</h3>
              <p class="text-on-surface-variant text-sm mb-4">{{ article.excerpt }}</p>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-tertiary-container rounded-full"></div>
                <span class="text-on-primary-fixed-variant font-bold text-xs uppercase">Унших хугацаа: {{ article.readTime }}</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Normal card -->
        <article v-else class="flex flex-col gap-4 group cursor-pointer" @click="$router.push('/article/1')">
          <img :src="article.image" :alt="article.imageAlt" class="w-full h-48 object-cover" />
          <span class="text-on-secondary-container font-bold text-[0.65rem] uppercase tracking-widest">{{ article.category }}</span>
          <h3 class="font-headline font-bold text-xl text-primary leading-snug group-hover:text-on-primary-fixed-variant transition-colors">{{ article.title }}</h3>
          <p class="text-on-surface-variant text-sm line-clamp-2">{{ article.excerpt }}</p>
          <div class="text-outline text-[0.7rem] uppercase font-bold tracking-tighter">{{ article.time }}</div>
        </article>
      </template>
    </div>

    <div class="flex justify-center pt-8">
      <button class="bg-surface-container-highest text-on-surface px-12 py-3 font-bold uppercase text-xs tracking-widest hover:bg-surface-variant transition-colors">
        Илүү ихийг үзэх
      </button>
    </div>
  </div>
</template>

<script setup>
const featured = {
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoljrRabrbezlWGpyOa_bI-SxfADS9Yn6w3d3SA32PGC7PVHncBy3CLkljnMEt-5rlNTZL0IWvwSemkmxzRlQgVRAC2x0EdNpya3dsa6ti-GyTemwpXs24MlXN6BT2S6fMOvCw4af0x4rtopXUtVkAIpYupBzYgLQrTEuLRF1pevm_NiGGuguZC2fVu84gjP22BQdmqo_0WehUaqsxbMaAjMKGSFS-DB1YdkI1Jj6YYWne9zBV7zRLZ8rgYgo2HQALVlfJmsJSW2c',
  imageAlt: 'Mongolian Stock Exchange building',
  time: '8 минутын уншлага',
  title: 'Монгол Улсын гадаад өрийн стратеги ба 2024 оны эдийн засгийн төлөв байдал',
  excerpt: 'Өнгөрсөн арван жилийн хугацаанд Монгол Улсын эдийн засгийн гол хөшүүрэг болсон гадаад өрийн асуудал өнөөдөр ч анхаарлын төвд байна.',
  author: 'Б. Гантулга',
  authorImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBByPaTf7vYGSDy58i5Sl72PpsLgZgHjSn-RndQkK67YVT5ROSDGvCgEBf9IqPf76KnCxW-VN910R8dY2rG_VxTokPrcueblFoLiChgZ_IByddVZdR3Dq0mX0eTaTRFDcGBLhQCbiBzkyCWgbB_iVSyaetR-qAGS2wkITsSPyI4HvOW-PRsVO6OjTrhKF24eWIEJzvtr7SyI1bIUhXOMOU2Y_ZW4SISbTz96Ig2c5FyDUjlK7TpgP8a-QdcNooz74VR11lvF_h2kw',
  authorAlt: 'Author portrait',
  tag: 'Шинжилгээ',
}

const articles = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc-q0WQvkQ28K3KAqtf7FPbKQ87I_Hwq50VvGf29uDwmVm_1rpu4c5GYXiZ0Po9MXaidLcOVb7rUOOGSKBbW6-ofK0O3VkaBfCAVw05rRIDJXujflY8CBd68ERqmdvNIUPqW7HFFLLB-13A7hvvNhMF0KBmyR2eCRN5zbgOap7PwlPKExG0Lz8Ri1rY9vJICv6jKqNT-5HtLp2pDr9ZxcHE0wkjvItRZNDzMpUR42VeSqWTzBUDiTuJntjEflSm8YfppuSzzxMk8U',
    imageAlt: 'Government building',
    category: 'Тайлбар',
    title: 'Засгийн газрын шинэ бодлого: Иргэдэд юу өөрчлөгдөх вэ?',
    excerpt: 'Энэ оны эхээр батлагдсан шинэ бодлогын баримт бичгүүд практик хэрэгжилтдээ ямар үр дүн авчрах талаар шинжилгээ хийлээ.',
    time: 'Өнөөдөр 09:00',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCXoS-msCB5pa55xhvI2cN258HxyOiZeD3KXDY6DSEPDDy57sZowg9Afu45OFV2tws91SqNtL58HD56WrXz9yIV64DA5WJ8ryD0qBWsqJhO6RwN9i82rqYVqokT2c8rX6V8wZEomrF-YgTUhSg3nRBV-wdDDpa98lf8V8zlQ7TVU4dxX-ylc6JRm6wZoFzfvAKwq5UIsp-w7g5sc20S0YrKhrNSbo7FBnRLz1QgpXxNpfA6-0ZAxI4vUHTBSimu3vxwAE-ecPqjM4',
    imageAlt: 'Currency',
    category: 'Санал бодол',
    title: 'Дижитал төгрөг: Ирээдүй үү, эрсдэл үү?',
    excerpt: 'Монгол банкны дижитал валютын туршилтын үр дүнгийн талаар эдийн засагч Д. Нарантуяагийн тайлбар.',
    time: 'Өнөөдөр 11:30',
  },
  {
    wide: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU9dd7AooJEBHpfVqB9t5xr09iZfflTObYCCBMX9LNaMufS8vxjOdqkxWfQicfvDWEUxVWsyFnhdeErl78d1w_a0IvrX6_MJEwptdoVXhlTw4RhhClFGPKknE_sdMHQxfwPk4W01NDC1qM-76tRkRtNq0B3VkhFKnrfoXIqBExcTib-lWBbGqKW0r6oQ3A9FobZBqiZ7cGU-nzdxHt8boJtEgjXSQvTalQ8vjBx9PRQoUfoN3xJfSV4TliSm7V2WfzfFNw6x8fF10',
    imageAlt: 'Justice and law',
    category: 'Ярилцлага',
    title: 'Улс төрч Д. Батбаяртай ярилцлага: "Манай улсын хамгийн том асуудал бол хариуцлагагүй байдал"',
    excerpt: 'УИХ-ын гишүүн, хуульч Д. Батбаяр засаглал, авилгал, залуу үеийн улс төрийн оролцооны талаар үзэл бодлоо хуваалцлаа.',
    readTime: '12 мин',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeUmKXB0aNjGgbcqR0ios1z7SS2T1GrQTwDSAzIgQSLIAY_wYW6PtsOBYPheQkynuJhaTJNeO_WhYBoYl-ZpwDJwHyPnab_UGUxYCJcvm88hU4RV9EuqW4Fcrh6U5KC5AHDJYYzL8CmJv8z06fv92mSCxInOLfj9pSAZGM9fW8SjaHz1LmJqT9tXvzCEp769HJKcqd8fGdnDtHQmoSxdDLQOqPfDoTev1Jr0m-192xmCgg1Z2naA2gqZ0ezEDJ07Djgge0tVkBGBs',
    imageAlt: 'Wind turbines',
    category: 'Шинжилгээ',
    title: 'Уур амьсгалын өөрчлөлтийн эдийн засгийн нөлөө: Монголын хувьд',
    excerpt: 'Цаг агаарын эрс тэс өөрчлөлт малчдын амьжиргаа болон хөдөө аж ахуйд үзүүлж буй нөлөөний тооцоо.',
    time: 'Өчигдөр 15:00',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLmZdzI2-pGxGg_cEqSO1MWRAfJmsEysb5-VBdbCeBiQUnXrlJ2MMZZoNBZ7w7RcK6OmIuBeHhZuU2m-rMgqihf3eiGt5m7PkWP1JITYGgH5O0dprrOHrYpuXHLe5FFX64rgm_j534KLuSSJMUQZ0DwP0wjL7WrS5xXDLdIgxOJYQPvaiVZ2IQsKQs-e6DMH5v7JD_xBtzQGfl26d9kd-ccyCm1u8F3lgOs2QA_Vcitob9y07Im-6DYSdPbkwOj9pQPjOc8qlWaxw',
    imageAlt: 'Political discussion',
    category: 'Тайлбар',
    title: 'Сонгуулийн системийн өөрчлөлт яагаад чухал вэ?',
    excerpt: 'Пропорциональ болон мажоритар системийн давуу болон сул талуудыг харьцуулан судалж, Монголд тохирох загварыг тодорхойлох оролдлого.',
    time: 'Өчигдөр 18:00',
  },
]
</script>
