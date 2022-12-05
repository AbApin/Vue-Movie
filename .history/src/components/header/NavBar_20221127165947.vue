<template>
  <div class="flex items-center">
    <router-link to="/">
      <img src="@/assets/images/logo.jpg" alt="" class="w-64" />
    </router-link>
    <ul class="ml-10 flex gap-5">
      <li v-for="(link,index) in navBarLinks" :key="link">
        <router-link :to="link.path">{{ link.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { link } from 'fs';

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
