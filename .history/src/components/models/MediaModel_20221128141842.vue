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
          <button class="text-3xl leading-none hover:text-gray-300">&times;</button>
        </div>
        <div class="modal-body px-8 py-8">
          <div class="responsive-container relative overflow-hidden">
            <iframe
              class="responsive-iframe absolute top-0 left-0 h-full w-full"
              style="border: 0"
              allow="autoplay;encrypted-media"
              allowfullscreen
            ></iframe>
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
    mediaUrl: {
      required: true,
      type: String,
    },
  },
};
</script>
