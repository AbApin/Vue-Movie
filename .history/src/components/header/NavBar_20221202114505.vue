<template>
  <div class="flex items-center">
    <router-link to="/">
      <img src="@/assets/images/logo.gif" alt="" class="w-64" />
    </router-link>
    <ul class="ml-10 flex gap-5">
      <li v-for="(link, index) in navBarLinks" :key="index" v-if="(index == 2 && this.$store.state.isUserLoggedIn)">
        <router-link :to="link.path" class="opacity-70 hover:opacity-100">{{
          link.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navBarLinks: [
        { title: 'Movies', path: '/' },
        { title: 'Actors', path: '/actors' },
        { title: 'Profile', path: '/profile' },
      ],
    };
  },
};
</script>

<style scoped></style>
