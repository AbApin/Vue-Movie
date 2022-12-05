<template>
  <div>
    <button>
      <img src="@/assets/images/profile.png" alt="" class="w-10 rounded-full" />
    </button>
    <div class="bg-white ">
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
