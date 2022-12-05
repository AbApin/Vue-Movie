<template>
  <div class="container mx-auto mt-5">
    <div class="flex justify-between">
      <div class=" md:w-full w-{48}">
        <img src="" alt="" />
        <div class="flex items-center gap-3">
          <a href=""> </a>
          <a href=""> </a>
          <a href=""> </a>
          <a href=""> </a>
        </div>
      </div>
      <div class="w-1/2">
        <h2 class="text-4xl font-semibold">{{}}</h2>
        <div class="mt-3 flex items-center gap-3">
          <img src="@/assets/images/birthday.png" alt=""  />
          <p class="text-sm text-gray-400">1988-12-16</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
};
</script>
