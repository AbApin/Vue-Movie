<template>
  <div class="container mx-auto mt-5">
    <div class="flex justify-between">
      <div class="w-full max-w-[48%]">
        <img src="@/assets/images/Joker.webp" alt="" />
        <div class="flex items-center gap-3">
          <a href=""> </a>
          <a href=""> </a>
          <a href=""> </a>
          <a href=""> </a>
        </div>
      </div>
      <div class="w-full max-w-[48%]">
        <h2 class="text-4xl font-semibold">Anna Popplewell</h2>
        <div class="mt-3 flex items-center gap-3">
          <img src="@/assets/images/birthday.png" alt="" />
          <p class="text-sm text-gray-400">1988-12-16</p>
        </div>
        <p class="mt-8 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus sed quo eum ipsam est
          laborum. Asperiores explicabo praesentium eum sequi officia nostrum debitis commodi optio
          magni provident, maxime animi ex voluptatem iste voluptate odio, eius molestias aperiam ea
          repudiandae quibusdam atque ipsa. Officiis unde nisi mollitia et fuga necessitatibus.
        </p>
        <h4 class="mt-12 font-semibold">Known For</h4>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <img
              src="@/assets/images/arthur.webp"
              alt="poster"
              class="transition duration-150 ease-in-out hover:opacity-75"
            />
            <a href="" class="text-sm leading-normal text-gray-400 hover:text-white"
              >MansField Park</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
        
    }
  },
  methods: {
    fetchActor() {
        conts response = this.$http.get(`/person/${id}`)
    }
  }
};
</script>
