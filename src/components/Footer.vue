<script setup lang="ts">
</script>

<template>
  <section
    class="bg-[#4C243B] p-12 sm:p-16 flex flex-col items-center text-[#FFFFFF]"
  >
    <div class="flex justify-center gap-6 w-fit mb-7">
      <a
        href="mailto:olamileke.f@gmail.com"
        class="w-[50px] h-[50px] flex justify-center items-center border border-[1px] border-[#FFFFFF] rounded-full"
      >
        <FontAwesomeIcon
          icon="fa fa-envelope"
          class="relative -top-[1px] text-xl"
        />
      </a>
      <a
        href="https://github.com/olamileke"
        target="_blank"
        class="w-[50px] h-[50px] flex justify-center items-center border border-[1px] border-[#FFFFFF] rounded-full"
      >
        <FontAwesomeIcon
          icon="fa-brands fa-github"
          class="relative bottom-[1px] text-xl"
        />
      </a>
      <a
        href="https://twitter.com/f_olamileke"
        target="_blank"
        class="w-[50px] h-[50px] flex justify-center items-center border border-[1px] border-[#FFFFFF] rounded-full"
      >
        <FontAwesomeIcon icon="fa-brands fa-square-twitter" class="text-xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/fambegbe-olamileke-4a9731145/"
        target="_blank"
        class="w-[50px] h-[50px] flex justify-center items-center border border-[1px] border-[#FFFFFF] rounded-full"
      >
        <FontAwesomeIcon icon="fa-brands fa-linkedin" class="text-xl" />
      </a>
    </div>
    <p class="text-[15px]">
      olamileke.dev &copy; {{ new Date().getFullYear() }}
    </p>
  </section>
</template>