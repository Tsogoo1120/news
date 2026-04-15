<template>
  <div class="bg-surface text-on-surface font-body selection:bg-primary-fixed-dim min-h-screen">
    <NavBar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
</script>
