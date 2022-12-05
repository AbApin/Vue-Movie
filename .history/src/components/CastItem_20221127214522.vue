<template>
  <div class="">
    <img
      :src="@/assets/images/arthur.webp"
      alt=""
      class="transition duration-150 ease-in-out hover:opacity-75"
    />
    <span class="text-gray-300"> Arthur Fleck / Joker</span>
  </div>
</template>

<script>
export default {
  props: {
    cast: {
      required: true,
    },
  },
};
</script>
