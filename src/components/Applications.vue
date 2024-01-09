<script setup lang="ts">
import Application from './Application.vue';
import { applications } from '../data';
</script>

<template>
  <section class="w-[83%] max-w-[1200px] mx-auto">
    <Application
      v-for="(application, index) in applications"
      :key="index"
      v-bind="application"
    />
  </section>
</template>