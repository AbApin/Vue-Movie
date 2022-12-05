<template>
  <div class="relative flex items-center gap-5">
    <input
      type="text"
      class="rounded-full bg-gray-600 px-7 py-2 focus:outline-none"
      placeholder="search..."
      v-model="searchValue"
      @focus="handleFocus"
    />
    <div class="top-50% absolute left-2 mt-1">
      <svg
        class="w-4"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        id="Layer_1"
        style="enable-background: new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        xml:space="preserve"
        fill="#ccc"
      >
        <path
          d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z"
        />
      </svg>
    </div>

    <div
      ref="searchResultDiv"
      class="scrollbar-hide absolute top-14 left-0 max-h-80 w-full max-w-[80%] overflow-y-auto rounded bg-gray-600 pl-2"
    >
      <ul v-if="searchResult.length != 0">
        <li
          v-for="searchMovie in searchResult"
          :key="searchMovie.id"
          class="flex items-center gap-3 border-b border-gray-500 pb-2 pt-2 pr-3"
        >
          <router-link :to="`/movie/${searchMovie.id}`" @click="">
            <img :src="posterPath(searchMovie.poster_path)" alt="" class="w-10" />
            <span>{{ searchMovie.title }}</span>
          </router-link>
        </li>
      </ul>
      <ul v-if="searchResult.length === 0 && !isSearchValueEmpty" class="px-3 py-3">
        <li class="text-center">No result found for "{{ searchValue }}"</li>
      </ul>
    </div>

    <img src="@/assets/images/profile.png" alt="" class="h-10 rounded-full" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
      searchResult: [],
      isSearchValueEmpty: true,
    };
  },
  mounted() {
    this.keyboardEvents();
  },
  methods: {
    searchDebounce(value) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        if (value.length > 3) {
          this.fetchSearch(value);
        }
      }, 600);
    },
    async fetchSearch(term) {
      try {
        const response = await this.$http.get('/search/movie?query=' + term);
        console.log(response);
        if (response.status > 205 || response.data.results.length === 0) {
          this.isNoResponseData = true;
        }
        this.searchResult = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
    handleFocus() {
      if (this.searchValue != '') {
        
      }
    },
    search
    posterPath(poster_path) {
      return poster_path
        ? 'https://image.tmdb.org/t/p/w500/' + poster_path
        : 'https://via.placeholder.com/300x450';
    },
    keyboardEvents() {
      window.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
          this.$refs.searchResultDiv.style.display = 'none';
        }
      });
    },
  },
  watch: {
    searchValue: function (newValue) {
      console.log(newValue);
      if (newValue == '') {
        this.searchResult = [];
        this.isSearchValueEmpty = true;
      } else if (newValue != '') {
        this.searchDebounce(newValue);
        this.isSearchValueEmpty = false;
      }
    },
  },
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
