<template>
<div class="front">
  <div class="profile_card">
    <div class="picture">
      <img src="../assets/profile.jpg" alt="tahnik">
    </div>
    <div class="name">
      <span>Tahnik Mustasin</span>
    </div>
    <div class="line"></div>
    <div class="summary">
      <p>
        I like to be confident about what I'm doing and I also try to mange my time properly. To me time management is the most important aspect of someone's life. Along with time management, a professional attitude and behavior is what makes a person perfect. I want to be that kind of person. I want to create new project ideas and I intend to lead the project I take or Manage. I always try to keep myself updated with new ideas. To summarize myself I am a person who would like to be professional, wants to take the lead, provide better idea, have a professional attitude and have better time management.
      </p>
    </div>
    <div class="social">
      <div
        v-for="link in links"
        v-bind:key="link.name"
        class="link"
        @click="openLink(link.URL)"
      >
        <i v-bind:class="link.icon"></i>
        <span>{{ link.name }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "GitHub",
          URL: "https://github.com/tahnik",
          icon: "ion-social-github",
        },
        {
          name: "LinkedIn",
          URL: "https://uk.linkedin.com/in/tahnik",
          icon: "ion-social-linkedin",
        },
        {
          name: "Twitter",
          URL: "https://twitter.com/mstahnik",
          icon: "ion-social-twitter",
        },
      ]
    }
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    }
  }
}
</script>

<style lang="scss">
@import '../assets/palette.scss';
@import url('https://fonts.googleapis.com/css?family=Heebo|Quicksand');
.front {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .profile_card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    .picture {
      flex: 1;
      position: relative;
      img {
        display: block;
        width: 15vw;
        @media screen and (max-width: 480px) {
          width: 400px;
        }
        height: auto;
        margin: 0 auto;
        border-radius: 100%;
      }
    }
    .summary {
      flex: 1;
      color: $color1;
      max-width: 50rem;
      font-size: 1.1rem;
      text-align: center;
      margin-bottom: 1rem;
      font-family: 'Heebo', sans-serif;
      @media screen and (max-width: 480px) {
        font-size: 2rem;
      }
    }
    .line {
      height: 3px;
      border-radius: 10px;
      background-color: $color1;
      margin-bottom: 20px;
      width: 30rem;
    }
    .name {
      flex: 1;
      color: $color1;
      font-size: 3rem;
      @media screen and (max-width: 480px) {
        font-size: 6rem;
      }
      font-family: 'Quicksand', sans-serif;
      padding: 1rem 0;
      display: flex;
      justify-content: center;
    }
    .social {
      max-width: 80rem;
      display: flex;
      .link {
        padding: 0.7rem;
        border: 2px solid $color1;
        font-size: 1.5rem;
        @media screen and (max-width: 480px) {
          font-size: 2.5rem;
        }
        border-radius: 5px;
        color: $color1;
        opacity: 0.4;
        transition: 0.4s all;
        margin-right: 1rem;
        font-family: 'Quicksand', sans-serif;
        &:hover {
          opacity: 1;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
