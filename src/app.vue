<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import './assets/stylesheets/palette.scss';

html {
  background-color: $color2;
}

body {
  margin: 0;
  @media (max-width:480px)  {
    margin: 0;
  }
  padding: 0;
  background-color: $color2;
  .app {
    height: 100vh;
  }
  transform: translateZ(0);
}

p {
  font-family: 'Heebo', sans-serif;
  color: $color1;
}
h1, h2, h3, h5 {
  color: $color1;
}
span {
  color: $color1;
}

::-webkit-scrollbar {
  width: 7px;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar-thumb {
  background: rgba(64, 65, 90, 0.3);
  transition: all 0.4s;
  &:hover {
    background: rgba(64, 65, 90, 1);
  }
}

::-webkit-scrollbar-track {
  background: transparent;
}
</style>