<template>
  <div class="relative">
    <button>
      <img src="@/assets/images/profile.png" alt="" class="w-10 rounded-full" />
    </button>
    <div class="absolute bg-white right-0 rounded-lg w-48 flex gap-">
      <a href="" class="text-gray-500 block">Account Settings</a>
      <a href="">Support</a>
      <a href="">Logout</a>
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
