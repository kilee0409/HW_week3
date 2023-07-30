<script setup>
  import { SloganDetails, Classical } from "@/constant/homeView.constant.js";
</script>

<template>
  <section class="relative">
    <div class="md:hidden" >
      <img class="w-[100%]" src="/images/home-header.png" alt="home-header"/>
    </div>
    <div  class="hidden md:block">
      <img class="w-[100%]" src="/images/home-header-sm.png" alt="home-header"/>
    </div>
    <div class="absolute top-[50%] right-[10%] text-fontPrimary w-[580px] translate-y-[-50%] flex flex-col items-end 
      lg:right-[5%]">
      <h3 class="block text-[36px] home-md:text-[24px] home-sm:text-[16px]">Promise-Desert 2020 早春系列</h3>
      <h2 class="block font-bold text-[64px] home-md:text-[36px] home-sm:text-[24px]">看得清，才能看得遠</h2>
      <div class="btn w-[105px]">
        <span>立即購買</span>
      </div>
    </div>
  </section>
  <section class="bg-secondary py-[80px]">
    <h2 class="text-fontPrimary font-bold text-[48px] pb-[32px] text-center sm:text-[24px]">用專業的心，做專業的事</h2>
    <div class="flex gap-[24px] justify-center px-[36px] lg:flex-wrap">
      <div class="flex flex-col items-center" v-for="item in SloganDetails">
        <div class="w-[100px] h-[100px]">
          <img class="w-[100%]" :src="item.icon" :alt="item.alt"/>
        </div>
        <h3 class="text-fontPrimary text-[24px] font-bold pt-[24px]">{{ item.title }}</h3>
        <p class="max-w-[305px] pt-[8px] text-justify">{{ item.details }}</p>
      </div>
    </div>
  </section>
  <section class="py-[80px]">
    <h2 class="text-fontPrimary font-bold text-[48px] pb-[48px] text-center">經典系列鏡框</h2>
    <div class="flex gap-[24px] justify-center px-[24px] lg:flex-col md:px-[14px]">
      <!-- <div > -->
        <a class="flex flex-col items-center" :href="item.href" v-for="item in  Classical">
          <div class="max-w-[415px] home-md:w-[335px] home-sm:w-[350px]">
            <img class="w-[100%]" :src="item.image" :alt="item.alt"/>
          </div>
          <h3 class="text-fontPrimary font-bold text-[48px] text-center italic uppercase">{{item.title}}</h3>
        </a>
      <!-- </div> -->
    </div>
   
  </section>
</template>
