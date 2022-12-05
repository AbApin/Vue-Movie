<template>
  <div class="relative">
    <button>
      <img src="@/assets/images/profile.png" alt="" class="w-10 rounded-full" />
    </button>
    <div class="absolute bg-white left-0 rounded-lg w-48">
      <a href="">Account Settings</a>
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
