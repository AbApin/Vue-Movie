<template>
  <div class="relative">
    <button>
      <img src="@/assets/images/profile.png" alt="" class="w-10 rounded-full" />
    </button>
    <div class="w- absolute right-0 flex flex-col gap-5 rounded-lg bg-white px-3 py-2">
      <a href="" class="block text-gray-500">Account Settings</a>
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
