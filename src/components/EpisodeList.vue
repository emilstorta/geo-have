<template>
  <div id="listWrapper">
  <section class="mt-4 bg-white overflow-y-auto">
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
        <li v-for="episode in episodes" :key="episode.ids" class="flex items-center py-3 px-4 border-b border-gray-200">
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
      </ul>
      <AudioPlayer v-if="showComponent" :episodeTitle="currentEpisodeTitle" :isPlaying="audioIsPlaying" />
    </section>
  </div>
  </template>
  
  <script setup>
  import { ref, onMounted, reactive } from 'vue';
  import AudioPlayer from './AudioPlayer.vue';
  import {
    collection,
    getDocs,
    query,
    orderBy
  } from 'firebase/firestore';
  import { db } from '@/firebase/init.js';
  
  
  
  // Episodes collection
  const episodeListRef = collection(db, 'Episodes')
  const episodeListQuery = query(episodeListRef, orderBy("sortingNumber", "asc"));

 
  
  const episodes = ref([]);

  // Get episodes
  onMounted(async() => {
    const querySnapshot = await getDocs(episodeListQuery)
    const listEpisodes =[]
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data())
      const episode = {
        id: doc.id,
        title: doc.data().Name,
        image: doc.data().imgURL,
        audio: doc.data().audioURL
      }
    listEpisodes.push(episode)
    })
    episodes.value = listEpisodes
  });


// Set state of audioplayer to hidden
  const showComponent = ref(false);


// Episode title in audioplayer set to be empty  
  const currentEpisodeTitle = ref('');

// Keep track of the currently playing episode
  const currentPlayingEpisode = ref(null);
  const audioIsPlaying = ref(false);
  

  const playEpisode = (title) => {
// Find the episode with the matching title
  const selectedEpisode = episodes.value.find((episode) => episode.title === title);
    if (selectedEpisode) {
    // Retrieve the audio URL
    const audioUrl = selectedEpisode.audio;

    // Create an <audio> element
    const audioElement = new Audio(audioUrl);

    // Pause the currently playing episode (if any)
      if (currentPlayingEpisode.value) {
        currentPlayingEpisode.value.pause();
      }
    
    // Play the audio
      audioElement.play();
      audioIsPlaying.value = true;
      currentPlayingEpisode.value = audioElement;
  } else {
    console.error(`Episode "${title}" not found.`);
  }

  // When play is pressed, sends episode title to child component af a prop
    currentEpisodeTitle.value = title;
  // Shows the child component AudioPlayer
    showComponent.value = true;
   // Makes the listWrapper height
  const myDiv = document.getElementById("listWrapper")
  myDiv.style.height = "850px"; 
  };

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


  </script>
  
  <style scoped>
  
  </style>
  