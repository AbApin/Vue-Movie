<template>
  <div class="container mx-auto mt-5">
    <div>
      <div class="">
        <img src="" alt="" />
        <div class="flex items-center gap-3">
          <a href=""> </a>
          <a href=""> </a>
          <a href=""> </a>
          <a href=""> </a>
        </div>
      </div>
      <div>
        <h2 class="text-4xl font-semibold">{{}}</h2>
        <div class="flex items-center gap-3 mt">
            <img src="@/assets/images/birthday.png" alt="" class="w-5">
            <p>{{}}</p>
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
