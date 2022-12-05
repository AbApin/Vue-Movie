<template>
  <div class="container mx-auto mt-5">
    <div class="flex justify-between">
      <div class="w-{48} md:max-w-full">
        <img src="@/assets/images/Joker.webp" alt="" class="md:max-w-full" />
        <div class="flex items-center gap-3">
          <a href=""> </a>
          <a href=""> </a>
          <a href=""> </a>
          <a href=""> </a>
        </div>
      </div>
      <div class="w-{48} max-w-[48%]">
        <h2 class="text-4xl font-semibold">{{}}</h2>
        <div class="mt-3 flex items-center gap-3">
          <img src="@/assets/images/birthday.png" alt="" />
          <p class="text-sm text-gray-400">1988-12-16</p>
        </div>
        <p class="mt-8 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus sed quo eum ipsam est
          laborum. Asperiores explicabo praesentium eum sequi officia nostrum debitis commodi optio
          magni provident, maxime animi ex voluptatem iste voluptate odio, eius molestias aperiam ea
          repudiandae quibusdam atque ipsa. Officiis unde nisi mollitia et fuga necessitatibus.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
};
</script>
