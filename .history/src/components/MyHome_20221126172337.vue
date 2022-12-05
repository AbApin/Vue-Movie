<template>
  <div >
    <header class="container mx-auto flex items-center justify-between border-b border-gray-500 py-5">
      <div class="header-inne">
        
      </div>
    </header>
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
