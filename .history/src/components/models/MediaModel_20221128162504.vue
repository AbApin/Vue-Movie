<template>
  <div
    style="background-color: rgba(0, 0, 0, 0.5)"
    class="fixed top-0 left-0 flex h-full w-full items-center shadow-sm"
    tabindex="0"
    v-show="value"
  >
    <div class="container mx-auto overflow-y-auto rounded-lg lg:px-32">
      <div class="rounded bg-gray-900">
        <div class="flex justify-end pr-4 pt-2">
          <button class="text-3xl leading-none hover:text-gray-300" @click="closeModal">
            &times;
          </button>
        </div>
        <div class="modal-body px-8 py-8">
          <div class="responsive-container relative overflow-hidden" style="padding-top: 56.25%">
            <iframe
              v-if="isVideo"
              ref="trailer"
              class="responsive-iframe absolute top-0 left-0 h-full w-full"
              style="border: 0"
              allow="autoplay;encrypted-media"
              allowfullscreen
              :src="mediaURL"
            ></iframe>
            <img :src="mediaURL" alt="" v-if="isVideo">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
    },
    mediaURL: {
      required: true,
    },
    isVideo: {
      required: true,
    },
  },
  methods: {
    closeModal() {
      let iframe = this.$refs.trailer;
      if (iframe !== null) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
      }
      this.$emit('input', !this.value);
    },
  },
};
</script>
