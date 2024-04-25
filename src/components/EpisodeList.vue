<template>
    <section class="mt-4 bg-white">
      <div class="flex items-center justify-between px-4 mb-2">
        <h2 class="text-xl font-bold">EPISODER</h2>
        <div class="flex">
          <!-- Flag icons -->
          <img src="/src/assets/flag-dk.svg" alt="Danish Flag" class="h-5 w-8 object-cover mx-1">
          <img src="/src/assets/flag-gb.svg" alt="UK Flag" class="h-5 w-8 object-cover mx-1">
          <img src="/src/assets/flag-gm.svg" alt="UK Flag" class="h-5 w-8 object-cover mx-1">
          <!-- Add other flags as needed -->
        </div>
      </div>
      <ul>
        <!-- Iterate over the episodes array to generate list items -->
        <li v-for="episode in episodes" :key="episode.id" class="flex items-center py-3 px-4 border-b border-gray-200">
          <img :src="episode.image" alt="" class="h-10 w-10 rounded-full object-cover">
          <img src="/src/assets/play-icon.svg" alt="Play" class="h-5 w-5 ml-3">
          <div class="ml-4 flex-grow">
            <span class="font-semibold">{{ episode.title }}</span>
          </div>
          <button class="ml-auto p-2">
            <img src="/src/assets/heart.svg" alt="Like" class="h-5 w-5">
          </button>
          <button class="p-2">
            <img src="/src/assets/more-icon.svg" alt="More" class="h-5 w-5">
          </button>
        </li>
        <!-- Add the rest of your episodes here -->
      </ul>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
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
  </script>
  
  <style scoped>
  /* Tailwind utility classes are preferred for styling */
  </style>
  