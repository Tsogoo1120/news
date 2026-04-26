<template>
  <nav class="bg-[#0a2a52] text-white z-50 transition-colors duration-200">
    <div class="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
      <div class="flex items-center gap-12">
        <router-link to="/"><img src="/src/assets/logo.png" alt="ЭРХ МЭДЭЛ" class="h-16 w-auto" /></router-link>
        <div class="hidden md:flex items-center gap-6">
          <router-link
            v-for="item in navItems"
            :key="item.label"
            :to="item.path"
            class="text-xs tracking-wider font-label uppercase transition-colors duration-200"
            :class="$route.path === item.path
              ? 'text-white font-bold border-b-2 border-white pb-1'
              : 'text-blue-200 hover:text-white'"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="hidden lg:flex items-center bg-[#123a6e] rounded-lg px-3 py-1.5">
          <span class="material-symbols-outlined text-blue-200 text-lg">search</span>
          <input type="text" placeholder="Хайх..." class="bg-transparent border-none focus:ring-0 text-sm placeholder:text-blue-300 text-white w-40 outline-none" />
        </div>
        <button class="material-symbols-outlined p-2 hover:bg-[#123a6e] text-blue-200 hover:text-white rounded-full transition-colors duration-150">notifications</button>
        <button class="material-symbols-outlined p-2 hover:bg-[#123a6e] text-blue-200 hover:text-white rounded-full transition-colors duration-150">person</button>
        <button class="hidden md:block bg-white hover:bg-blue-100 text-[#0a2a52] px-6 py-2 rounded text-sm font-semibold transition-all duration-150 active:scale-95">Бүртгүүлэх</button>
        <!-- Mobile hamburger -->
        <button
          class="md:hidden p-2 hover:bg-[#123a6e] text-blue-200 hover:text-white rounded-full transition-colors duration-150"
          @click="menuOpen = !menuOpen"
        >
          <span class="material-symbols-outlined">{{ menuOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden bg-[#0a2a52] border-t border-[#123a6e] px-6 py-4 space-y-1">
      <router-link
        v-for="item in navItems"
        :key="item.label"
        :to="item.path"
        class="block px-4 py-3 text-sm tracking-wider uppercase rounded-lg transition-colors duration-150"
        :class="$route.path === item.path
          ? 'bg-[#123a6e] text-white font-bold'
          : 'text-blue-200 hover:bg-[#123a6e] hover:text-white'"
        @click="menuOpen = false"
      >
        {{ item.label }}
      </router-link>
      <div class="pt-3 border-t border-[#123a6e]">
        <div class="flex items-center bg-[#123a6e] rounded-lg px-3 py-2 mb-3">
          <span class="material-symbols-outlined text-blue-200 text-lg">search</span>
          <input type="text" placeholder="Хайх..." class="bg-transparent border-none focus:ring-0 text-sm placeholder:text-blue-300 text-white flex-1 outline-none ml-2" />
        </div>
        <button class="w-full bg-white hover:bg-blue-100 text-[#0a2a52] py-2 rounded text-sm font-semibold transition-all duration-150">Бүртгүүлэх</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const navItems = [
  { label: 'Улс төр', path: '/politics' },
  { label: 'Эдийн засаг', path: '/economy' },
  { label: 'Дэлхий', path: '/' },
  { label: 'Зах зээл', path: '/' },
  { label: 'Нийгэм', path: '/' },
  { label: 'Нийтлэл', path: '/articles' },
]
</script>
