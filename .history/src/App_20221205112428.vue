<template>
  <div id="app" class="pb-14">
    <header
      class="sticky top-0 z-50 border-b border-gray-500 bg-gray-900 py-5"
      :class="!atTopOfPage ? 'z-20 shadow shadow-white' : ''"
    >
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
  data() {
    return {
      atTopOfPage: true,
    };
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.atTopOfPage) this.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.atTopOfPage) this.atTopOfPage = true;
      }
    },
  },
};
</script>

<style>
@media screen and (min-width: 1240px) and (max-width: 1360px) {
  header {
    padding: 0 20px;
  }
}
@media screen and (max-width: 1024px) {
  header {
    padding: 0 20px;
  }
}
</style>
