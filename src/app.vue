<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import './assets/stylesheets/palette.scss';

body {
  margin: 0 3px 0 0;
  @media (max-width:480px)  {
    margin: 0;
  }
  padding: 0;
  background-color: $color4;
  .app {
    height: 100vh;
  }
  transform: translateZ(0)
}

p {
  font-family: 'Heebo', sans-serif;
}

::-webkit-scrollbar {
  width: 10px;
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