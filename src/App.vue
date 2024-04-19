<template>
  <div>
    <Header />
    <main>
      <HeroSection />
      <EpisodeList />
    </main>
    <AudioPlayer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
import EpisodeList from '@/components/EpisodeList.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'
</script>

<style scoped>
/* Global styles for layout will go here */
</style>
