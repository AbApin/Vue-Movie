<template>
  <div>
    
Guide
Installation
1
npm install -S vue-carousel-3d
Usage (Global)
You may install Vue Carousel 3d globally:

1
2
3
4
import Vue from 'vue';
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);
This will make <carousel> and <slide> available to all components within your Vue app.

Usage (Local)
Include the carousel 3d into your component using import:

1
2
3
4
5
6
7
8
9
10
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  ...
  components: {
    Carousel3d,
    Slide
  }
  ...
};
HTML Structure
Once the Carousel3d and Slide components are installed globally or imported, they can be used in templates like below:


8
<carousel-3d>
  <slide :index="0">
    Slide 1 Content
  </slide>
  <slide :index="1">
    Slide 2 Content
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
