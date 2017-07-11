<template>
<div :class="`body_container${loading ? ' loading' : ''}`">
  <div class="front">
    <div :class="`profile_card${this.loading ? ' loading' : ''}`">
      <div class="fork" v-on:click="openLink('https://github.com/tahnik/tahnik.com')">
        <i class="ion-fork-repo"></i>&nbsp;Fork this website
      </div>
      <div class="name">
        <span class="first">Tahnik</span>
        <span class="second">Mustasin</span>
      </div>
      <div class="role">
        <span id="role_name">Software Engineer</span>
      </div>
      <div class="line"></div>
      <div class="summary">
        <p>
          I like to be confident about what I'm doing and I also try to mange my time properly. To me time management is the most important aspect of someone's life. Along with time management, a professional attitude and behavior is what makes a person perfect. I want to be that kind of person. I want to create new project ideas and I intend to lead the project I take or Manage. I always try to keep myself updated with new ideas. To summarize myself I am a person who would like to be professional, wants to take the lead, provide better idea, have a professional attitude and have better time management.
        </p>
      </div>
      <div class="social">
        <div
          v-for="(link, index) in links"
          v-if="index < 3"
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
  <profile-skills v-bind:loading="this.loading" ></profile-skills>
  <div class="footer" v-if="!loading">
    <h4>Connect with me</h4>
    <div class="line"></div>
    <div class="socials">
      <div class="social" v-for="link in links" v-bind:key="link.name" v-on:click="openLink(link.URL)">
        <i v-bind:class="link.icon"></i>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Typed from 'typed.js';
import ProfileSkills from './profile_skills.vue';
export default {
  components: {
      ProfileSkills,
  },
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
        {
          name: "Facebook",
          URL: "https://www.facebook.com/Tahnik",
          icon: "ion-social-facebook",
        },
        {
          name: "devRant",
          URL: "https://www.devrant.io/users/tahnik",
          icon: "ion-android-chat",
        },
        {
          name: "Steam",
          URL: "tahnik@live.co.uk",
          icon: "ion-email",
        },
      ],
      loading: true,
    }
  },
  mounted() {
    let typed = new Typed('#role_name', {
      strings: [
        'Software Engineer',
        'Front-End Developer',
        'Back-End Developer',
        'Server Administrator'
      ],
      typeSpeed: 50,
      loop: true,
      fadeOut: true,
      startDelay: 1500,
    });
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  },
  methods: {
    openLink(url) {
      if (url === 'tahnik@live.co.uk') {
        window.location.href = "mailto:tahnik@live.co.uk";
        return;
      }
      window.open(url, '_blank');
    }
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/palette.scss';
@import '../assets/stylesheets/fonts.css';
.body_container {
  &.loading {
    margin-right: 10px;
    @media (max-width:480px)  {
      margin-right: 0;
    }
  }
  .front {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .profile_card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      .fork {
        position: absolute;
        opacity: 0.4;
        top: 10px;
        right: 10px;
        font-size: 1rem;
        font-family: 'Quicksand', sans-serif;
        transition: opacity 0.4s;
        &:hover {
          cursor: pointer;
          opacity: 1;
        }
        @media (max-width:320px)  {
          display: none;
        }
      }
      &.loading {
        overflow: hidden;
        .fork {
          opacity: 0;
        }
        .summary {
          opacity: 0;
        }
        .line {
          @-webkit-keyframes loading {
            0% {
              transform: translateX(-150px);
            }
            50% {
              transform: translateX(150px);
            }
            100% {
              transform: translateX(-150px);
            }
          }
          @keyframes loading {
            0% {
              transform: translateX(-150px);
            }
            50% {
              transform: translateX(150px);
            }
            100% {
              transform: translateX(-150px);
            }
          }
          animation: loading 1s infinite;
        }
        .name {
          .first {
            opacity: 0;
            transform: translateY(-1rem);
          }
          .second {
            opacity: 0;
            transform: translateX(1rem);
          }
        }
        .role {

        }
        .social {
          opacity: 0;
          .link {

          }
        }
      }
      .summary {
        flex: 1;
        color: $color1;
        max-width: 50rem;
        @media (max-width:480px)  {
          max-width: 100vw;
          p {
            padding: 1rem;
            font-size: 0.9rem;
          }
        }
        font-size: 1.1rem;
        text-align: center;
        margin-bottom: 1rem;
        font-family: 'Heebo', sans-serif;
        transition: all 0.8s;
      }
      .line {
        height: 3px;
        border-radius: 10px;
        background-color: $color1;
        margin-bottom: 20px;
        width: 30rem;
        @media (max-width:480px)  {
          width: 15rem;
        }
      }
      .name {
        flex: 1;
        color: $color1;
        font-family: 'Quicksand', sans-serif;
        padding: 1rem 0;
        display: flex;
        justify-content: center;
        transition: all 0.8s;
        font-size: 5rem;
        @media (max-width:480px)  {
          font-size: 3rem;
        }
        @media (max-width:320px)  {
          font-size: 2.5rem;
        }
        .first {
          font-weight: 700;
          transition: all 0.8s;
        }
        .second {
          font-weight: 300;
          transition: all 0.8s;
        }
      }
      .role {
        flex: 1;
        margin: 0 0 1.2rem 0;
        font-family: 'Quicksand', sans-serif;
        font-size: 2rem;
        @media (max-width:480px)  {
          font-size: 1rem;
        }
      }
      .social {
        max-width: 80rem;
        display: flex;
        transition: all 0.8s;
        transition-delay: 0.5s;
        .link {
          padding: 0.7rem;
          border: 2px solid $color3;
          font-size: 1.2rem;
          @media (max-width:480px)  {
            font-size: 1rem;
            margin: 0 0.5rem;
          }
          @media (max-width:320px)  {
            font-size: 0.8rem;
          }
          border-radius: 5px;
          color: $color3;
          opacity: 0.4;
          transition: 0.4s all;
          margin: 0 1rem;
          font-family: 'Quicksand', sans-serif;
          &:hover {
            opacity: 1;
            cursor: pointer;
          }
        }
      }
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Quicksand', sans-serif;
    margin-bottom: 5rem;
    h4 {
      font-size: 3rem;
      font-weight: 300;
      margin-bottom: 1rem;
      color: gray;
      text-align: center;
      @media (max-width:480px)  {
        font-size: 2rem;
      }
    }
    .line {
      height: 3px;
      border-radius: 10px;
      background-color: $color1;
      margin-bottom: 15px;
      width: 40rem;
      @media (max-width:480px)  {
        width: 15rem;
      }
    }
    .socials {
      display: flex;
      @media (max-width:480px)  {
        flex-wrap: wrap;
        justify-content: center;
      }
      .social {
        margin: 0 1rem;
        font-size: 3rem;
      }
    }
  }
}
</style>
