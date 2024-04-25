<template>
  <div>
    <Header />
    <main>
      <GuideSection />
      <EpisodeList />
    </main>
    <!-- <AudioPlayer /> -->
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import GuideSection from '@/components/GuideSection.vue'
import EpisodeList from '@/components/EpisodeList.vue'
/* import AudioPlayer from '@/components/AudioPlayer.vue' */
</script>

<style scoped>
/* Global styles for layout will go here */
</style>
