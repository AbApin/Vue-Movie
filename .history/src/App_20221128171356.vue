<template>
  <div id="app">
    <header class="sticky top-0 z-50 border-b border-gray-500 bg-gray-900 py-5 ">
      <div class="header-inner container mx-auto flex items-center justify-between">
        <NavBar />
        <SearchBar />
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/header/NavBar.vue';
import SearchBar from './components/header/SearchBar.vue';
export default {
  name: 'App',
  components: { NavBar, SearchBar },
};
</script>

<style></style>
