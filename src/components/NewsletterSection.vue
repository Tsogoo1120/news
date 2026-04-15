<template>
  <section class="mt-24 mb-12">
    <div class="relative overflow-hidden bg-primary rounded-xl p-12 text-center">
      <div class="absolute inset-0 opacity-10">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzoxikcqRI6XsKahUZAMyT7CZhNr_w2Cr6VPbi5o-xEmeNRmJDoZzTU5l6slgLMOYEef4575Fq9TEYcBYyMiRBUahfflySb_rvZ8s_nKPSOf9dq1pZsTp1wQLsoUC0H0A3nYGMRMLogu1Aap81kgWXdBf4bO6hcD_JBNtpuOMMQadww41xOwcki6NGVyA-IMp19pym1MNl3wI_cLbBXKPxXkKn6ej5S0w0X5C4dWzuZ3ILz7FpTRq_jJMLwEOMj53Ys3lFUnkazG0"
          alt="Abstract geometric pattern"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="relative z-10 max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-headline font-black text-white mb-4">Мэдээллээс хоцрохгүй байх</h2>
        <p class="text-on-primary-container text-lg mb-10">Өдөр тутмын хамгийн чухал мэдээ, шинжилгээг имэйлээрээ хүлээн аваарай.</p>
        <form class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" @submit.prevent="subscribe">
          <input
            v-model="email"
            type="email"
            placeholder="Имэйл хаяг"
            class="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-primary-fixed outline-none transition-all"
          />
          <button type="submit" class="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary-fixed transition-colors active:scale-95 duration-150">
            Бүртгүүлэх
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

function subscribe() {
  if (email.value) {
    alert(`Амжилттай бүртгэгдлээ: ${email.value}`)
    email.value = ''
  }
}
</script>
