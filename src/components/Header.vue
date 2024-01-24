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

        <a
          href="https://twitter.com/intent/tweet?text=Status&url=https://status.olamileke.dev"
          target="_blank"
          rel="noopener noferrer"
        >
          <Button>
            <FontAwesomeIcon
              icon="fa-brands fa-twitter"
              class="mr-1 text-lg relative top-[1px]"
            />
            Share on Twitter
          </Button>
        </a>
      </div>
    </div>
  </section>
</template>