<script setup lang="ts">
defineProps<{
  name: string;
  github_url: string;
  url: string;
  type: 'frontend' | 'backend' | 'bot';
}>();
</script>

<template>
  <div class="w-[33%] p-5">
    {{ name }}
  </div>
</template>