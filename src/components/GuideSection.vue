<template>
  <div class="relative z-10 -mt-[12rem] md:-mt-[14rem]">
    <!-- Heading aligned with the start of the cards -->
    <h2 class="text-xl font-semibold my-4 pl-4">Vejledning</h2>
    <section class="px-4">
      <swiper :slides-per-view="'auto'" :space-between="10" :pagination="{ clickable: true }" class="mySwiper">
        <!-- Swiper slide for Guide card 1 -->
        <swiper-slide style="width: 135px;">
          <div class="guide-card flex flex-col items-center space-y-3 bg-white rounded-lg p-3 shadow-lg relative" style="height: 210px;">
            <div class="circle circle1 bg-red-200"></div> 
            <div class="circle circle2 bg-red-200"></div> 
            <div class="circle circle3 bg-red-200"></div> 
            <span class="text-lg font-semibold text-center">Start din <br> tur ved at afspille lydfilerne</span>
            <img src="@/assets/down-arrow.svg" alt="Down" class="h-8 w-8 mt-4" />
          </div>
        </swiper-slide>
        <!-- Swiper slide for Guide card 2 -->
        <swiper-slide style="width: 135px;">
          <div class="guide-card flex flex-col items-center space-y-3 bg-white rounded-lg p-3 shadow-lg relative" style="height: 210px;">
            <div class="circle circle1 bg-yellow-200"></div> 
            <div class="circle circle2 bg-yellow-200"></div> 
            <div class="circle circle3 bg-yellow-200"></div> 
            <span class="text-lg font-semibold text-center">Lyt med på turen, og <br> følg hans anvisninger</span>
            <img src="@/assets/down-arrow.svg" alt="Down" class="h-8 w-8 mt-4" />
          </div>
        </swiper-slide>
        <!-- Swiper slide for Guide card 3 -->
        <swiper-slide style="width: 135px;">
          <div class="guide-card flex flex-col items-center space-y-3 bg-white rounded-lg p-3 shadow-lg relative" style="height: 210px;">
            <div class="circle circle1 bg-orange-200"></div> 
            <div class="circle circle2 bg-orange-200"></div> 
            <div class="circle circle3 bg-orange-200"></div> 
            <span class="text-lg font-semibold text-center">På ruten er der flere poster, som kan scannes</span>
            <img src="@/assets/down-arrow.svg" alt="Down" class="h-8 w-8 mt-4" />
          </div>
        </swiper-slide>
        <!-- Swiper slide for Guide card 4 -->
        <swiper-slide style="width: 135px;">
          <div class="guide-card flex flex-col items-center space-y-3 bg-white rounded-lg p-3 shadow-lg relative" style="height: 210px;">
            <div class="circle circle1 bg-blue-200"></div> 
            <div class="circle circle2 bg-blue-200"></div> 
            <div class="circle circle3 bg-blue-200"></div> 
            <span class="text-xl font-extrabold text-center">Nyd din <br> tur rundt <br> i haven</span>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
</script>

<style scoped>
.guide-card {
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.circle {
  position: absolute;
  border-radius: 50%;
}

.circle1 {
  top: -1rem; /* Adjusted */
  left: -1rem; /* Adjusted */
  width: 3rem; /* Adjusted */
  height: 3rem; /* Adjusted */
}

.circle2 {
  top: 2rem; /* Adjusted */
  left: 88%; /* Kept as percentage for positioning */
  width: 6rem; /* Adjusted */
  height: 6rem; /* Adjusted */
}

.circle3 {
  top: 65%; /* Kept as percentage for positioning */
  left: -4rem; /* Adjusted */
  width: 7rem; /* Adjusted */
  height: 7rem; /* Adjusted */
}

.scrollbar-hide {
  /* Hide scrollbar but allow scrolling */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

/* Additional Responsive Spacing */
@media (min-width: 768px) {
  .relative.z-10 {
    margin-top: -4rem; /* Less negative margin as the resolution increases */
  }
}

@media (min-width: 1024px) {
  .relative.z-10 {
    margin-top: -1rem; /* Even less negative, preventing overlap */
  }
}
</style>

