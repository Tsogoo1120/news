<template>
  <nav class="bg-[#f6fafe]/80 dark:bg-slate-950/80 backdrop-blur-md text-[#001e42] dark:text-[#305ea0] top-0 sticky z-50 transition-colors duration-200">
    <div class="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
      <div class="flex items-center gap-12">
        <router-link to="/" class="text-2xl font-black tracking-tighter text-[#001e42] dark:text-white font-headline">ЭРХ МЭДЭЛ</router-link>
        <div class="hidden md:flex items-center gap-6">
          <router-link
            v-for="item in navItems"
            :key="item.label"
            :to="item.path"
            class="text-xs tracking-wider font-label uppercase transition-colors duration-200"
            :class="$route.path === item.path
              ? 'text-[#001e42] dark:text-white font-bold border-b-2 border-[#001e42] pb-1'
              : 'text-[#171c1f] dark:text-slate-400 hover:text-[#0e4686]'"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="hidden lg:flex items-center bg-surface-container-high rounded-lg px-3 py-1.5">
          <span class="material-symbols-outlined text-outline text-lg">search</span>
          <input type="text" placeholder="Хайх..." class="bg-transparent border-none focus:ring-0 text-sm placeholder:text-outline w-40 outline-none" />
        </div>
        <button class="material-symbols-outlined p-2 hover:bg-[#f0f4f8] rounded-full transition-colors duration-150">notifications</button>
        <button class="material-symbols-outlined p-2 hover:bg-[#f0f4f8] rounded-full transition-colors duration-150">person</button>
        <button class="bg-primary hover:bg-primary-container text-on-primary px-6 py-2 rounded text-sm font-semibold transition-all duration-150 active:scale-95">Бүртгүүлэх</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navItems = [
  { label: 'Улс төр', path: '/politics' },
  { label: 'Эдийн засаг', path: '/economy' },
  { label: 'Дэлхий', path: '/' },
  { label: 'Зах зээл', path: '/' },
  { label: 'Нийгэм', path: '/' },
  { label: 'Шинжилгээ', path: '/' },
]
</script>
