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
  <div class="mb-8">
    <div class="flex gap-4 items-center mb-3">
      <p class="text-sm font-semibold uppercase">{{ name }}</p>
      <a :href="url" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon="fa-solid fa-up-right-from-square"
          class="text-[13.5px] text-[#333333]"
        />
      </a>
      <a :href="github_url" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </a>
    </div>
    <div class="flex flex-wrap gap-4 w-full">
      <Suspense>
        <template #default>
          <Service
            v-for="(service, index) in services"
            :key="index"
            v-bind="service"
          />
        </template>
        <template #fallback> Loading </template>
      </Suspense>
    </div>
  </div>
</template>