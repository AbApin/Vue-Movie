<template>
  <div>
    <img src="@/assets/images/logo.gif" alt="" />
    <ul>
        <li v-for="link in navBarLinks"></li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            navBarLinks: [
                {title: 'Movies',path: '/movies'},
                {title: 'Actors',path: '/actors'},
                {title: 'Profile',path: '/profile'}
            ]
        }
    },
};
</script>

<style scoped></style>
