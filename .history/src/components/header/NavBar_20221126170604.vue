<template>
  <div class="flex">
    <img src="@/assets/images/logo.gif" alt="" />
    <ul class="flex gap-5 ">
      <li v-for="link in navBarLinks" :key="link">
        <router-link :to="link.path">{{ link.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navBarLinks: [
        { title: 'Movies', path: '/movies' },
        { title: 'Actors', path: '/actors' },
        { title: 'Profile', path: '/profile' },
      ],
    };
  },
};
</script>

<style scoped></style>
