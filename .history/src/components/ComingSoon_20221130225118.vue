<template>
  <div>
    <carousel-3d :controls-visible="true" :clickable="false">
      <slide>
        <figure>
          <img src="https://placehold.it/360x270" />
          <figcaption>
            The sky is the limit only for those who aren't afraid to fly! The sky is the limit only
            for those who aren't afraid to fly!
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  components: {
    Carousel3d,
    Slide,
  },
};
</script>

<style scoped>
.carousel-3d-container figure{
    margin: 0;
}
.carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(red, green, blue, alpha);
}
</style>
