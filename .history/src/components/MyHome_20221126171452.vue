<template>
  <div class="container mx-auto flex items-center justify-between py">
    <NavBar />
    <SearchBar />
  </div>
</template>

<script>
import NavBar from './header/NavBar.vue';
import SearchBar from './header/SearchBar.vue';
export default {
  components: {
    NavBar,
    SearchBar,
  },
};
</script>

<style scoped></style>
