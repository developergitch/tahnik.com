<template>
  <div class="body_container">
    <transition name="fade">
      <div class="loader" v-if="loading" key="loading">
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div v-else key="notLoading">
        <div class="front">
          <div class="profile_card">
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
                I like to be confident about what I'm doing and I also try to mange my time properly. To me time management is the most important
                aspect of someone's life. Along with time management, a professional attitude and behavior is what makes a person
                perfect. I want to be that kind of person. I want to create new project ideas and I intend to lead the project
                I take or Manage. I always try to keep myself updated with new ideas. To summarize myself I am a person who would
                like to be professional, wants to take the lead, provide better idea, have a professional attitude and have better
                time management.
              </p>
            </div>
            <div class="social">
              <div v-for="(link, index) in links" v-if="index < 3" v-bind:key="link.name" class="link" @click="openLink(link.URL)">
                <i v-bind:class="link.icon"></i>
                <span>{{ link.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <profile-skills></profile-skills>
        <div class="footer">
          <h4>Connect with me</h4>
          <div class="line"></div>
          <div class="socials">
            <div class="social" v-for="link in links" v-bind:key="link.name" v-on:click="openLink(link.URL)">
              <i v-bind:class="link.icon"></i>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Typed from 'typed.js';
  import ProfileSkills from './profile_skills.vue';
  import Vue from 'vue';
  export default {
    components: {
      ProfileSkills,
    },
    data() {
      return {
        links: [{
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
            name: "Steam",
            URL: "tahnik@live.co.uk",
            icon: "ion-email",
          },
        ],
        loading: true,
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = false;
        Vue.nextTick(() => {
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
        })
      }, 2000)
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active below version 2.1.8 */

    {
    opacity: 0;
  }

  @keyframes loadFirst {
    0% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes loadSecond {
    0% {
      transform: translateX(1rem);
    }
    100% {
      transform: translateX(0);
    }
  }

  .body_container {
    .loader {
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $color2;
      z-index: 999;
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
          @media (max-width:320px) {
            display: none;
          }
        }

        .summary {
          flex: 1;
          color: $color1;
          max-width: 50rem;
          @media (max-width: 480px) {
            max-width: 100vw;
            p {
              padding: 1rem;
              font-size: 0.9rem;
            }
          }
          font-size: 1.1rem;
          text-align: center;
          margin-bottom: 1rem;
          font-family: 'Heebo',
          sans-serif;
          transition: all 0.8s;
        }
        .line {
          height: 3px;
          border-radius: 10px;
          background-color: $color1;
          margin-bottom: 20px;
          width: 30rem;
          @media (max-width: 480px) {
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
          @media (max-width: 480px) {
            font-size: 3rem;
          }
          @media (max-width:320px) {
            font-size: 2.5rem;
          }
          .first {
            font-weight: 700;
            animation: loadFirst 0.8s forwards;
          }
          .second {
            font-weight: 300;
            animation: loadSecond 0.8s forwards;
          }
        }
        .role {
          flex: 1;
          margin: 0 0 1.2rem 0;
          font-family: 'Quicksand', sans-serif;
          font-size: 2rem;
          color: $color1;
          @media (max-width: 480px) {
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
            border: 2px solid $color1;
            font-size: 1.2rem;
            @media (max-width: 480px) {
              font-size: 1rem;
              margin: 0 0.5rem;
            }
            @media (max-width:320px) {
              font-size: 0.8rem;
            }
            border-radius: 5px;
            color: $color1;
            opacity: 0.4;
            transition: 0.4s all;
            margin: 0 1rem;
            font-family: 'Quicksand',
            sans-serif;
            &:hover {
              opacity: 1;
              cursor: pointer;
            }
          }
        }
      }
    }
    .lds-roller {
      display: inline-block;
      position: relative;
      width: 64px;
      height: 64px;
    }
    .lds-roller div {
      animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: 32px 32px;
    }
    .lds-roller div:after {
      content: " ";
      display: block;
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #000;
      margin: -3px 0 0 -3px;
    }
    .lds-roller div:nth-child(1) {
      animation-delay: -0.036s;
    }
    .lds-roller div:nth-child(1):after {
      top: 50px;
      left: 50px;
    }
    .lds-roller div:nth-child(2) {
      animation-delay: -0.072s;
    }
    .lds-roller div:nth-child(2):after {
      top: 54px;
      left: 45px;
    }
    .lds-roller div:nth-child(3) {
      animation-delay: -0.108s;
    }
    .lds-roller div:nth-child(3):after {
      top: 57px;
      left: 39px;
    }
    .lds-roller div:nth-child(4) {
      animation-delay: -0.144s;
    }
    .lds-roller div:nth-child(4):after {
      top: 58px;
      left: 32px;
    }
    .lds-roller div:nth-child(5) {
      animation-delay: -0.18s;
    }
    .lds-roller div:nth-child(5):after {
      top: 57px;
      left: 25px;
    }
    .lds-roller div:nth-child(6) {
      animation-delay: -0.216s;
    }
    .lds-roller div:nth-child(6):after {
      top: 54px;
      left: 19px;
    }
    .lds-roller div:nth-child(7) {
      animation-delay: -0.252s;
    }
    .lds-roller div:nth-child(7):after {
      top: 50px;
      left: 14px;
    }
    .lds-roller div:nth-child(8) {
      animation-delay: -0.288s;
    }
    .lds-roller div:nth-child(8):after {
      top: 45px;
      left: 10px;
    }
    @keyframes lds-roller {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
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
        @media (max-width: 480px) {
          font-size: 2rem;
        }
      }
      .socials {
        display: flex;
        @media (max-width: 480px) {
          flex-wrap: wrap;
          justify-content: center;
        }
        .social {
          margin: 0 1rem;
          font-size: 3rem;
          transition: all 0.2s;
          &:hover {
            cursor: pointer;
            transform: scale(1.2);
          }
        }
      }
    }
  }
</style>