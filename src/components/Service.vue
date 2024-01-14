<script setup lang="ts">
const props = defineProps<{
  name: string;
  github_url: string;
  url: string;
  type: 'frontend' | 'api' | 'bot';
}>();

const typeColorMappings: Record<string, string> = {
  frontend: '#B8BEDD',
  api: '#EEC584',
  bot: '#BFEDEF',
};

const getTypeColor = () => {
  return typeColorMappings[props.type];
};
</script>

<template>
  <div
    class="group p-5 border border-[#333333] flex justify-between items-center"
    style="width: calc((100% - 32px) / 3)"
  >
    <div class="h-fit-content">
      <div class="mb-3 flex gap-3">
        <p class="text-sm uppercase">{{ name }}</p>
        <a
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="relative -top-[3px] transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-up-right-from-square"
            class="text-xs text-[#333333]"
          />
        </a>
        <a
          :href="github_url"
          target="_blank"
          rel="noopener noreferrer"
          class="relative -top-[3px] transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" class="text-xs" />
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
  </div>
</template>