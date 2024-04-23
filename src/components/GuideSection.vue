<template>
  <div class="relative z-10 -mt-[12rem] md:-mt-[14rem]">
    <h2 class="absolute left-0 right-0 top-[-2.5rem] text-xl font-semibold text-center">Vejledning</h2>
    <section class="bg-opacity-90 p-4 mx-4 md:mx-6 lg:mx-8">
      <div class="grid grid-cols-3 gap-2 md:gap-4">
        <!-- Guide card 1 -->
        <div class="guide-card flex flex-col items-center space-y-3 bg-white rounded-lg p-3 shadow-lg relative" style="height: 210px;">
          <div class="circle circle1 bg-red-200"></div> 
          <div class="circle circle2 bg-red-200"></div> 
          <div class="circle circle3 bg-red-200"></div> 

          <!-- Text -->
          <span class="text-lg font-semibold text-center">Start din <br> tur ved at afspille lydfilerne </span>
          <!-- Down arrow -->
          <img src="@/assets/down-arrow.svg" alt="Down" class="h-8 w-8 mt-4" />
        </div>
        <!-- Guide card 2 -->
        <div class="guide-card flex flex-col items-center space-y-3 bg-white rounded-lg p-3 shadow-lg" style="height: 210px;">
          <div class="circle circle1 bg-yellow-200"></div> 
          <div class="circle circle2 bg-yellow-200"></div> 
          <div class="circle circle3 bg-yellow-200"></div> 

          <!-- Text -->
          <span class="text-lg font-semibold text-center">Lyt med på turen, og <br> følg hans anvisninger</span>
          <!-- Down arrow -->
          <img src="@/assets/down-arrow.svg" alt="Down" class="h-8 w-8 mt-4" />
        </div>
        <!-- Guide card 3 -->
        <div class="guide-card flex flex-col items-center space-y-3 bg-white rounded-lg p-3 shadow-lg" style="height: 210px;">
          <div class="circle circle1 bg-orange-200"></div> 
          <div class="circle circle2 bg-orange-200"></div> 
          <div class="circle circle3 bg-orange-200"></div> 
          <!-- Text -->
          <span class="text-lg font-semibold text-center">På ruten er der flere poster, som kan scannes</span>
          <!-- Down arrow -->
          <img src="@/assets/down-arrow.svg" alt="Down" class="h-8 w-8 mt-4" />
        </div>
        
        <!-- Repeat for other guide cards -->
      </div>
    </section>
  </div>
</template>

<script setup>
// Component logic goes here
</script>

<style scoped>
.guide-card {
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 8px; /* This gives the card rounded corners */
}

.guide-card::before {
  content: '';
  position: absolute;
  background-color: rgba(255, 182, 193, 0.5); /* Your color */
  border-radius: 50%; /* Makes it round */
  opacity: 0.6; /* Adjust the transparency */
}

.guide-card::after {
  content: '';
  position: absolute;
}
.circle {
  position: absolute;
  border-radius: 50%;
  /* opacity: 0.6; */
}

.circle1 {
  top: -10%;
  left: -10%;
  width: 10vw;
  height: 10vw;

}

.circle2 {
  top: 10%;
  left: 88%;
  width: 14vw;
  height: 14vw;
}

.circle3 {
  top: 65%; /* Adjust top position */
  left: -25%; /* Adjust left position */
  width: 16vw;
  height: 16vw;
}

</style>