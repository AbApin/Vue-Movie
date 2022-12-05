<template>
  <div class="relative">
    <button>
      <img src="@/assets/images/profile.png" alt="" class="w-10 rounded-full" />
    </button>
    <div class="absolute right-0 flex w-40 flex-col gap-3 rounded-lg bg-white px-3 py-2 shadow-xl">
      <a href="" class="block text-gray-500 hover:bg-i">Account Settings</a>
      <a href="" class="block text-gray-500">Support</a>
      <a href="" class="block text-gray-500">Logout</a>
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
