<template>
  <div id="app">
    <header class="border-b border-gray-500 py-5">
      <div class="header-inner container mx-auto flex items-center justify-between">
        <NavBar />
        <SearchBar />
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './header/NavBar.vue';
import SearchBar from './header/SearchBar.vue';
export default {
  name: 'App',
  components: { NavBar, SearchBar },
};
</script>

<style></style>
