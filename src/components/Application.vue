<script setup lang="ts">
import { ref } from 'vue';
import { TService } from '../types';
import Service from './Service.vue';
import Skeleton from './Skeleton.vue';

defineProps<{
  name: string;
  url: string;
  github_url: string;
  services: TService[];
}>();

const fetchedServices = ref(0);

const updateFetchedServices = () => {
  fetchedServices.value += 1;
};
</script>

<template>
  <div class="mb-8">
    <div v-if="fetchedServices > 0" class="flex gap-4 items-center mb-3">
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
    <Skeleton v-else class="w-[120px] h-[24px] mb-3" />
    <div class="flex flex-wrap gap-4 w-full">
      <Suspense>
        <template #default>
          <Service
            v-for="(service, index) in services"
            :key="index"
            v-bind="service"
            @updateFetchedServices="updateFetchedServices"
          />
        </template>
        <template #fallback>
          <Skeleton
            v-for="n in services.length"
            :key="n"
            class="h-[100px] w-full sm:w-2-column lg:w-3-column"
          />
        </template>
      </Suspense>
    </div>
  </div>
</template>