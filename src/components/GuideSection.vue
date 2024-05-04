<template>
  <div class="relative z-10 -mt-[12rem] md:-mt-[14rem]">
    <h2 class="absolute left-0 right-0 top-[-2.5rem] text-xl font-semibold text-center">Vejledning</h2>
    <section class="bg-opacity-90 p-4 mx-4 md:mx-6 lg:mx-8">
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
            <span class="text-xl	 font-extrabold	 text-center">Nyd din <br> tur rundt <br> i haven</span>
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
  border-radius: 8px; /* This gives the card rounded corners */
}

.circle {
  position: absolute;
  border-radius: 50%;
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
  top: 65%;
  left: -25%;
  width: 16vw;
  height: 16vw;
}
</style>
