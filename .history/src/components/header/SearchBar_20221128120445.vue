<template>
  <div class="relative flex items-center gap-5">
    <input
      type="text"
      class="rounded-full bg-gray-600 px-7 py-2 focus:outline-none"
      placeholder="search..."
      v-model.trim="searchValue"
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
      v-if="searchResult.length === 0"
      class="absolute top-14 left-0 w-full max-w-[80%] rounded bg-gray-600 pl-2"
    >
      <ul>
        <li
          v-for="searchMovie in searchResult"
          :key="searchMovie.id"
          class="flex items-center gap-3 border-b border-gray-500 pb-2 pt-2"
        >
          <img src="@/assets/images/Joker.webp" alt="" class="w-10" />
          <span>Die Hard</span>
        </li>
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
    };
  },
  mounted() {
    this.searchDebounce();
  },
  methods: {
    searchDebounce() {

    },

  },
  watch: {
    searchValue: async function(newValue) {
      clearTimeout(this.timerId);
      this.timerId = setTimeout(() => {

      }, 600);

    }
  }
};
</script>

<style scoped></style>
