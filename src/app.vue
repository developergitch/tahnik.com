<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import './assets/palette.scss';

body {
  margin: 0;
  padding: 0;
  background-color: $color4;
  .app {
    height: 100vh;
  }
}

p {
  font-family: 'Heebo', sans-serif;
}
</style>