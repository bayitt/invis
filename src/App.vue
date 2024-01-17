<script setup lang="ts">
import { onMounted } from 'vue';
import Header from './components/Header.vue';
import Applications from './components/Applications.vue';
import Footer from './components/Footer.vue';
import { applications } from './data';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <Header />
  <Applications />
  <Footer />
</template>

