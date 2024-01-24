<script setup lang="ts">
import Button from './Button.vue';
</script>

<template>
  <section class="py-10">
    <div
      class="w-[83%] max-w-[1200px] mx-auto flex justify-between items-center"
    >
      <div class="flex justify-between items-center w-full">
        <p class="font-bold">olamileke.dev</p>

        <Button>
          <FontAwesomeIcon icon="fa-brands fa-twitter" class="text-xl" />
          Share
        </Button>
      </div>
    </div>
  </section>
</template>