<template>
  <section class="mt-16 py-8 border-t border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
    <!-- Share -->
    <div class="flex items-center gap-4">
      <span class="text-sm font-bold text-on-surface-variant">Хуваалцах:</span>
      <button
        v-for="btn in shareButtons"
        :key="btn.label"
        :title="btn.label"
        class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary transition-colors duration-200"
        :class="btn.hoverClass"
        @click="btn.action"
      >
        <span v-if="btn.icon" class="material-symbols-outlined text-sm">{{ btn.icon }}</span>
        <span v-else class="font-bold text-sm">{{ btn.text }}</span>
      </button>
    </div>

    <!-- Reactions -->
    <div class="flex items-center gap-6">
      <button
        class="flex items-center gap-2 transition-colors duration-200"
        :class="liked ? 'text-on-tertiary-container' : 'text-on-surface-variant hover:text-primary'"
        @click="toggleLike"
      >
        <span class="material-symbols-outlined" :style="liked ? 'font-variation-settings: FILL 1' : ''">favorite</span>
        <span class="text-sm font-bold">{{ likeCount.toLocaleString() }}</span>
      </button>

      <button class="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
        <span class="material-symbols-outlined">forum</span>
        <span class="text-sm font-bold">42</span>
      </button>

      <button
        class="flex items-center gap-2 transition-colors duration-200"
        :class="bookmarked ? 'text-primary' : 'text-on-surface-variant hover:text-primary'"
        @click="bookmarked = !bookmarked"
      >
        <span class="material-symbols-outlined" :style="bookmarked ? 'font-variation-settings: FILL 1' : ''">bookmark</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const liked = ref(false)
const likeCount = ref(1200)
const bookmarked = ref(false)

function toggleLike() {
  liked.value = !liked.value
  likeCount.value += liked.value ? 1 : -1
}

const shareButtons = [
  { label: 'Share', icon: 'share', hoverClass: 'hover:bg-primary hover:text-white', action: () => navigator.share?.({ title: document.title, url: location.href }) },
  { label: 'Facebook', text: 'f', hoverClass: 'hover:bg-[#1877F2] hover:text-white', action: () => {} },
  { label: 'X', text: '𝕏', hoverClass: 'hover:bg-[#1DA1F2] hover:text-white', action: () => {} },
]
</script>
