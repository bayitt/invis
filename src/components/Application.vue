<script setup lang="ts">
import { TService } from '../types';
import Service from './Service.vue';

defineProps<{
  name: string;
  url: string;
  github_url: string;
  services: TService[];
}>();
</script>

<template>
  <div class="mb-4">
    <div class="flex mb-2">
      <p class="text-lg">{{ name }}</p>
    </div>
    <div class="flex flex-wrap gap-4 w-full">
      <Service
        v-for="(service, index) in services"
        :key="index"
        v-bind="service"
      />
    </div>
  </div>
</template>