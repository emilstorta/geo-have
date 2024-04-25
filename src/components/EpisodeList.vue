<template>
    <section class="mt-4 bg-white">
      <div class="flex items-center justify-between px-4 mb-2">
        <h2 class="text-xl font-bold">EPISODER</h2>
        <div class="flex">
          <!-- Flag icons -->
          <img src="/src/assets/flag-dk.svg" alt="DK Flag" class="h-5 w-8 object-cover mx-1">
          <img src="/src/assets/flag-gb.svg" alt="UK Flag" class="h-5 w-8 object-cover mx-1">
          <img src="/src/assets/flag-gm.svg" alt="DE Flag" class="h-5 w-8 object-cover mx-1">
          <!-- Add other flags as needed -->
        </div>
      </div>
      <ul>
        <!-- Iterate over the episodes array to generate list items -->
        <li v-for="episode in episodes" :key="episode.id" class="flex items-center py-3 px-4 border-b border-gray-200">
          <img :src="episode.image" alt="" class="h-10 w-10 rounded-full object-cover">
          <button @click="playEpisode(episode.title)">
            <img src="/src/assets/play-icon.svg" alt="Play" class="h-5 w-5 ml-3">
          </button>
          <div class="ml-4 flex-grow">
            <span class="font-semibold" >{{ episode.title }}</span>
          </div>
          <button @click="toggleHeart(episode.id)" class="text-black hover:text-orange-500 transition-colors duration-300">
                <svg v-if="!heartStates[episode.id]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                    stroke="currentColor" class="h-5 w-5 text-orange-500">
                    <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            </button>
          <button class="p-2">
            <img src="/src/assets/more-icon.svg" alt="More" class="h-5 w-5">
          </button>
        </li>
        <!-- Add the rest of your episodes here -->
      </ul>
    </section>
    <AudioPlayer v-if="showComponent" :episodeTitle="currentEpisodeTitle"  />
  </template>
  
  <script setup>
  import { ref, onMounted, reactive, } from 'vue';
  import AudioPlayer from './AudioPlayer.vue';
  
  const episodes = ref([
    {
      id: 1,
      title: 'Introduktion til haven',
      image: '/src/assets/episode1.jpg',
    },
    {
      id: 2,
      title: 'Drageånden i Kina',
      image: '/src/assets/episode2.jpg',
    },
    {
      id: 3,
      title: 'Japans skønhed',
      image: '/src/assets/episode3.jpg',
    },
    {
      id: 4,
      title: 'Europas Hemmeligheder',
      image: '/src/assets/episode4.jpg',
    },
    {
      id: 5,
      title: 'Nordamerikas Vilde Hjerte',
      image: '/src/assets/episode5.jpg',
    },
    {
      id: 6,
      title: 'Udforskning af Dyrehaven',
      image: '/src/assets/episode6.jpg',
    },
    {
      id: 7,
      title: 'Sydamerikas Fortællinger',
      image: '/src/assets/episode7.jpg',
    },
    {
      id: 8,
      title: 'Kolding i Miniatur',
      image: '/src/assets/episode8.jpg',
    },
    {
      id: 9,
      title: 'Rosens Rige',
      image: '/src/assets/episode9.jpg',
    },
    // other episodes...
  ]);

const heartStates = reactive({});

// Initialize heart states from local storage
episodes.value.forEach((episode) => {
  const storedIsFilled = localStorage.getItem(`heartIsFilled_${episode.id}`);
  heartStates[episode.id] = storedIsFilled !== null ? JSON.parse(storedIsFilled) : false;
});

const toggleHeart = (episodeId) => {
  heartStates[episodeId] = !heartStates[episodeId];
  // Save to local storage
  localStorage.setItem(`heartIsFilled_${episodeId}`, JSON.stringify(heartStates[episodeId]));
};

  const showComponent = ref(false);
  const currentEpisodeTitle = ref('');

  const playEpisode = (title) => {
  currentEpisodeTitle.value = title;
  showComponent.value = true;
};
//const toggleComponent = () => {
//  showComponent.value = !showComponent.value;
//};

  </script>
  
  <style scoped>
  /* Tailwind utility classes are preferred for styling */
  </style>
  