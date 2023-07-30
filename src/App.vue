<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderBlock from '@/components/HeaderBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';
</script>

<template>
  <HeaderBlock></HeaderBlock>
  <RouterView />
  <FooterBlock></FooterBlock>
</template>

<style scoped>
</style>
