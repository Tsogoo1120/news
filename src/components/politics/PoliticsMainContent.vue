<template>
  <div class="lg:col-span-8 space-y-12">

    <!-- Featured article -->
    <article class="group relative bg-surface-container-lowest overflow-hidden">
      <div class="absolute top-0 left-0 w-1 h-full bg-tertiary z-10"></div>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="overflow-hidden">
          <img :src="featured.image" :alt="featured.imageAlt"
            class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div class="flex flex-col justify-center py-6 pr-8">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-on-tertiary-container font-bold text-[0.7rem] uppercase tracking-widest">ОНЦЛОХ</span>
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

    <!-- News grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
      <template v-for="(article, i) in articles" :key="i">

        <!-- Wide card -->
        <article v-if="article.wide" class="flex flex-col gap-4 md:col-span-2 bg-surface-container-low p-6">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/3">
              <img :src="article.image" :alt="article.imageAlt" class="w-full h-44 object-cover" />
            </div>
            <div class="md:w-2/3">
              <span class="text-on-tertiary-container font-bold text-[0.65rem] uppercase tracking-widest mb-2 inline-block">{{ article.category }}</span>
              <h3 class="font-headline font-bold text-2xl text-primary leading-snug mb-3 hover:text-on-primary-fixed-variant cursor-pointer transition-colors">{{ article.title }}</h3>
              <p class="text-on-surface-variant text-sm mb-4">{{ article.excerpt }}</p>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-tertiary-container rounded-full"></div>
                <span class="text-on-primary-fixed-variant font-bold text-xs uppercase">Унших хугацаа: {{ article.readTime }}</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Normal card -->
        <article v-else class="flex flex-col gap-4 group cursor-pointer">
          <img :src="article.image" :alt="article.imageAlt" class="w-full h-48 object-cover" />
          <span class="text-on-secondary-container font-bold text-[0.65rem] uppercase tracking-widest">{{ article.category }}</span>
          <h3 class="font-headline font-bold text-xl text-primary leading-snug hover:text-on-primary-fixed-variant transition-colors">{{ article.title }}</h3>
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
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc-q0WQvkQ28K3KAqtf7FPbKQ87I_Hwq50VvGf29uDwmVm_1rpu4c5GYXiZ0Po9MXaidLcOVb7rUOOGSKBbW6-ofK0O3VkaBfCAVw05rRIDJXujflY8CBd68ERqmdvNIUPqW7HFFLLB-13A7hvvNhMF0KBmyR2eCRN5zbgOap7PwlPKExG0Lz8Ri1rY9vJICv6jKqNT-5HtLp2pDr9ZxcHE0wkjvItRZNDzMpUR42VeSqWTzBUDiTuJntjEflSm8YfppuSzzxMk8U',
  imageAlt: 'Modern government building with glass facade',
  time: '10 минутын өмнө',
  title: 'Засгийн газрын ээлжит бус хуралдаанаар шинэ төсвийн төслийг хэлэлцэж байна',
  excerpt: 'УИХ-ын намрын чуулганаар хэлэлцэх хамгийн чухал асуудлуудын нэг болох ирэх оны төсвийн төслийг Засгийн газар эцсийн байдлаар боловсруулж байна.',
  author: 'Б. Гантулга',
  authorImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbBsKaoge4Cmu1u1kHHbVMDltWlwMWH2CUBd31uax_66h_NEhNZxWuvkMNB_ED5MVRoAE9vyeStg0xf3TSHIPOCrV3xSvrFr6Z5yIf5OZYHsXzN-TNG242E6n6TNEUNQslp5KBRkLcLwsP-dn6ioFc3k0NklMiRmeNs97PItPiaGFR3WgmV9eK21k18UxpmcxpZNEsUc8Upb52Cyz3DDaBh2yovBzJpz71eLKaIyv_M0yjQhdNMwkTTzCgsS4a1VbgJyztqTmmek4',
  authorAlt: 'Journalist portrait',
  tag: 'Шинжилгээ',
}

const articles = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLoIn7GkJc9PcsLTpTqrCshJJ0mW1DmwEGx_agYX0GzWnwcLw7G6-ruITjYYDq7wk39zPo75BULhRGMLhi0idDEtYUHcrrbiRHdcSaGC1OwgIWGdI8R1624pHUNVhzoQFGqxmOXYXSOwyHGElXTapknXjvkCQKIyeZJtyQP-11jIcIrytlF7qR_w9olcmQ0zCjnOQWJlrz7QEBYjs3Mx7jiud_K2Ctm2TjoIuQs2mGBLEE3IwoGo0ogbGRpOghfhyM7RREjtHUHsI',
    imageAlt: 'State Khural interior',
    category: 'УИХ',
    title: 'Байнгын хорооны хуралдаанаар Сонгуулийн тухай хуулийн нэмэлт өөрчлөлтийг дэмжлээ',
    excerpt: 'Шинэ хуулийн төсөл хэрэгжиж эхэлснээр сонгуулийн тогтолцоонд томоохон өөрчлөлт орох хүлээлттэй байна.',
    time: 'Өнөөдөр 09:45',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4Wy9lZ9oZXI2Mga1NrnRwOI0mVJOLyGHZ7kx45ZRQzZTN3f8_RIHne5sQBc_zUkgPt1oe7jCawJTFIO8AOVonGaLKnj8ojkepyhmK8Uuam41Sjlptpm2Y3-2FFNPPhCOl2dcG-IQL1PBMjoENEHZEvrq_voA1kqQGSJmvKws8zDaz60mHVVJ8rzaWRrTWmpYyDHSEi-XvblOBh0koYBm0N8KxBub7ACRnMrGF2bzGiqnxTq6dHbrM5JAGt3OknP1GBc1BFDqmAMc',
    imageAlt: 'World leaders handshake',
    category: 'Гадаад харилцаа',
    title: 'Монгол Улс болон Европын Холбооны хамтын ажиллагааны шинэ шат',
    excerpt: 'Стратегийн түншлэлийн хүрээнд хөрөнгө оруулалтыг нэмэгдүүлэх чиглэлээр тохиролцоонд хүрлээ.',
    time: 'Өнөөдөр 11:20',
  },
  {
    wide: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU9dd7AooJEBHpfVqB9t5xr09iZfflTObYCCBMX9LNaMufS8vxjOdqkxWfQicfvDWEUxVWsyFnhdeErl78d1w_a0IvrX6_MJEwptdoVXhlTw4RhhClFGPKknE_sdMHQxfwPk4W01NDC1qM-76tRkRtNq0B3VkhFKnrfoXIqBExcTib-lWBbGqKW0r6oQ3A9FobZBqiZ7cGU-nzdxHt8boJtEgjXSQvTalQ8vjBx9PRQoUfoN3xJfSV4TliSm7V2WfzfFNw6x8fF10',
    imageAlt: 'Legal documents and gavel',
    category: 'Бодлогын шинжилгээ',
    title: 'Нийгмийн даатгалын багц хууль: Иргэдэд ирэх бодит өөрчлөлт юу байх вэ?',
    excerpt: 'Манай тоймч Б.Тэмүүлэн нийгмийн даатгалын шинэчлэлийн давуу болон сул талуудыг нэг бүрчлэн тайлбарлаж байна.',
    readTime: '8 мин',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLmZdzI2-pGxGg_cEqSO1MWRAfJmsEysb5-VBdbCeBiQUnXrlJ2MMZZoNBZ7w7RcK6OmIuBeHhZuU2m-rMgqihf3eiGt5m7PkWP1JITYGgH5O0dprrOHrYpuXHLe5FFX64rgM_j534KLuSSJMUQZ0DwP0wjL7WrS5xXDLdIgxOJYQPvaiVZ2IQsKQs-e6DMH5v7JD_xBtzQGfl26d9kd-ccyCm1u8F3lgOs2QA_Vcitob9y07Im-6DYSdPbkwOj9pQPjOc8qlWaxw',
    imageAlt: 'Political party flags',
    category: 'Улс төрийн нам',
    title: 'Сөрөг хүчний зүгээс эдийн засгийн бодлогод шүүмжлэлтэй хандаж байна',
    excerpt: 'Инфляци болон валютын ханшийн тогтвортой байдлыг хангах асуудлаар мэдэгдэл хийлээ.',
    time: 'Өчигдөр 18:00',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg8eIdZX6xQb-Wpx9ezIzzTMTmkozI22b4oQNLqqdYglgDjP18sN-2nZhDmZQvAN06TkCrurHlQCnwR5UEfnPkBogxsS1W63xFyEQeI44UmUD3ugrPmONMaNexnL5jdR-xF01BWOlNkz8IU2jA8eAdHTMN1rW2WlXhxAWkl_sq93LyK1P1B4mklE_xSQugFtdZ7uRyHIVuE8BvK9BkgFLC2CYvVzHbkGS2Zy_mvI9QGFbMdgi_XDeWCsRO9pvPEt-Ph8uxHEiN3fw',
    imageAlt: 'Gavel and scales of justice',
    category: 'Хууль',
    title: 'Үндсэн хуулийн цэцийн ээлжит хуралдаан маргааш болно',
    excerpt: 'Иргэдийн өргөдлийн дагуу зарим хуулийн заалт Үндсэн хууль зөрчсөн эсэхийг хэлэлцэнэ.',
    time: 'Өчигдөр 16:30',
  },
]
</script>
