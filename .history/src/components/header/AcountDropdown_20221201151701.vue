<template>
  <div class="relative">
    <button>
      <img src="@/assets/images/profile.png" alt="" class="w-10 rounded-full" />
    </button>
    <div class="absolute right-0 flex w-40 flex-col gap-3 rounded-lg bg-white  shadow-xl">
      <a href="" class="block text-gray-500 hover:bg-indigo-500 px-3 py-2">Account Settings</a>
      <a href="" class="block text-gray-500 px-3 py-2">Support</a>
      <a href="" class="block text-gray-500 px-3 py-2">Logout</a>
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
