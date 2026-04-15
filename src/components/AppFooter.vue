<template>
  <footer class="bg-[#d6dade] dark:bg-slate-900 text-[#001e42] dark:text-slate-300 py-12 mt-16 transition-all duration-300">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-screen-2xl mx-auto">
      <div class="col-span-1 md:col-span-2">
        <div class="text-xl font-black text-[#001e42] dark:text-white font-headline mb-6">ЭРХ МЭДЭЛ</div>
        <p class="max-w-md text-sm text-[#171c1f] dark:text-slate-400 leading-relaxed mb-8">
          Бид уншигчдадаа бодит, тэнцвэртэй, мэргэжлийн түвшний мэдээ мэдээллийг цаг алдалгүй хүргэхийг зорин ажиллаж байна. Дижитал эрин үеийн мэдээллийн хөтөч.
        </p>
        <div class="flex gap-4">
          <button v-for="icon in socialIcons" :key="icon"
            class="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-container hover:text-white transition-colors duration-200">
            <span class="material-symbols-outlined text-lg">{{ icon }}</span>
          </button>
        </div>
      </div>

      <div>
        <h4 class="font-headline font-bold text-sm uppercase tracking-widest mb-6">Холбоосууд</h4>
        <ul class="space-y-4">
          <li v-for="link in links" :key="link"><a href="#" class="text-[#171c1f] dark:text-slate-400 hover:underline hover:text-[#0e4686] text-sm">{{ link }}</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-headline font-bold text-sm uppercase tracking-widest mb-6">Салбар</h4>
        <ul class="space-y-4">
          <li v-for="s in sections" :key="s.label">
            <router-link :to="s.path" class="text-[#171c1f] dark:text-slate-400 hover:underline hover:text-[#0e4686] text-sm">{{ s.label }}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="max-w-screen-2xl mx-auto px-8 mt-12 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
      <span class="text-xs text-outline">© 2024 Эрх Мэдэл Медиа Групп. Бүх эрх хуулиар хамгаалагдсан.</span>
      <div class="flex gap-6">
        <a href="#" class="text-xs text-outline hover:text-primary">Үйлчилгээний нөхцөл</a>
        <a href="#" class="text-xs text-outline hover:text-primary">Cookie тохиргоо</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialIcons = ['public', 'rss_feed']
const links = ['Бидний тухай', 'Холбоо барих', 'Нууцлалын бодлого', 'Зар сурталчилгаа']
const sections = [
  { label: 'Улс төр',    path: '/' },
  { label: 'Эдийн засаг', path: '/economy' },
  { label: 'Дэлхий дахинд', path: '/' },
  { label: 'Технологи',  path: '/' },
]
</script>
