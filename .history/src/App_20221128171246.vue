<template>
  <div id="app">
    <header class="border-b border-gray-500 py-5 sticky top-0 z-30 w-full px-2 py-4 e sm:px-4 shadow-xl">
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
