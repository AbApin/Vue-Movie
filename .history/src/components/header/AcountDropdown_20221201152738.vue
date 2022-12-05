<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="border-">
      <img src="@/assets/images/profile.png" alt="" class="w-10 rounded-full" />
    </button>
    <div v-show="isOpen" class="absolute right-0 flex w-40 flex-col rounded-lg bg-white shadow-xl">
      <a
        href=""
        class="block rounded-tr-lg rounded-tl-lg px-3 py-2 text-gray-500 hover:bg-indigo-500 hover:text-cyan-50"
        >Account Settings</a
      >
      <a href="" class="block px-3 py-2 text-gray-500 hover:bg-indigo-500 hover:text-cyan-50"
        >Support</a
      >
      <a
        href=""
        class="block rounded-br-lg rounded-bl-lg px-3 py-2 text-gray-500 hover:bg-indigo-500 hover:text-cyan-50"
        >Logout</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
