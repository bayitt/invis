<script setup lang="ts">
import { usePing } from '../composables/ping';

const props = defineProps<{
  name: string;
  github_url: string;
  url: string;
  type: 'frontend' | 'api' | 'bot';
}>();

const typeColorMappings: Record<string, string> = {
  frontend: '#F8FCDA',
  api: '#EEC584',
  bot: '#BFEDEF',
};

const getTypeColor = () => {
  return typeColorMappings[props.type];
};

const status = await usePing(props.url, props.type);
</script>

<template>
  <div
    class="group p-5 shadow rounded-sm flex bg-[#FFFFFF] justify-between items-center"
    style="width: calc((100% - 32px) / 3)"
  >
    <div>
      <div class="mb-3 flex gap-3">
        <p class="text-xs uppercase font-semibold">{{ name }}</p>
        <a
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-up-right-from-square"
            class="relative -top-[6px] text-xs text-[#333333]"
          />
        </a>
        <a
          :href="github_url"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
        >
          <FontAwesomeIcon
            icon="fa-brands fa-github"
            class="relative -top-[6px] text-xs"
          />
        </a>
      </div>
      <span
        class="p-[6px] text-[10px] font-semibold rounded-[3px] text-[#00000]"
        :style="{
          background: getTypeColor(),
        }"
        >{{ type.toUpperCase() }}</span
      >
    </div>
    <FontAwesomeIcon
      icon="fa-solid fa-circle-check"
      class="text-3xl text-[#6CAE75]"
    />
    <!-- <FontAwesomeIcon
      icon="fa-solid fa-circle-xmark"
      class="text-3xl text-[#DB5461]"
    /> -->
  </div>
</template>