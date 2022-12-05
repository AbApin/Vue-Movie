<template>
  <div class="flex ju">
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
