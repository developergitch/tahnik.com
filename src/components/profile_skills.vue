<template>
<div class="sections" v-if="!this.loading">
  <div
    class="section"
    v-for="section in sections" v-bind:key="section.header.title"
  >
    <div v-bind:class="`header ${section.header.name}`">
      <span class="header_text">{{ section.header.title }}</span>
    </div>
    <div class="line"></div>
    <div class="items">
      <div
        v-for="item in section.items"
        v-bind:class="`item ${item.name} ${item.type} ${item.visible ? '' : 'invisible'}`"
        v-bind:key="item.name"
      >
        <div
          class="left"
          v-if="item.type === 'both' || item.type === 'left'"
        >
          <img v-bind:src="item.left" alt=""></img>
        </div>
        <div
          class="description"
        >
          <h1>{{ item.title }}</h1>
          <h5 v-if="item.subtitle">{{ item.subtitle }}</h5>
          <p>{{ item.description }}</p>
          <h3 v-if="item.type !== 'center'">Skills Gained</h3>
          <div class="skills" v-if="item.type !== 'center'">
            <div
              v-for="skill in item.skills"
              v-bind:class="`skill ${skill.type}`"
              v-bind:key="skill.name"
            >
              {{ skill.name }}
            </div>
          </div>
        </div>
        <div class="center" v-if="item.type === 'center'">
          <img v-bind:src="item.center" alt=""></img>
        </div>
        <div
          class="description" v-if="item.type === 'center'"
        >
          <h3>Skills Gained</h3>
          <div class="skills">
            <div
              v-for="skill in item.skills"
              v-bind:class="`skill ${skill.type}`"
              v-bind:key="skill.name"
            >
              {{ skill.name }}
            </div>
          </div>
        </div>
        <div
          class="right"
          v-if="item.type === 'both' || item.type === 'right'"
        >
          <img v-bind:src="item.right" alt=""></img>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
const TYPES = {
  BOTH: 'both',
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
  SHARED: 'shared',
}

const SKILL_TYPES = {
  WEB: 'web',
  DESKTOP: 'desktop',
  TOOL: 'tool',
}

const SKILLS = {
  REACTJS: {
    name: 'ReactJS',
    type: SKILL_TYPES.WEB,
  },
  ELECTRON: {
    name: 'Electron',
    type: SKILL_TYPES.DESKTOP,
  },
  REDUX: {
    name: 'Redux',
    type: SKILL_TYPES.WEB,
  },
  TRAVIS: {
    name: 'Travis CI',
    type: SKILL_TYPES.TOOL,
  },
  TDD: {
    name: 'TDD',
    type: SKILL_TYPES.WEB,
  },
}
export default {
  props: ['loading'],
  data() {
    return {
      devrantron: false,
      sections: [
        {
          header: {
            title: 'Projects',
            name: 'projects'
          },
          items: [
            {
              type: TYPES.BOTH,
              visible: false,
              name: 'devrantron',
              title: 'devRantron',
              subtitle: 'Open Source',
              description: 'Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.',
              left: '/assets/images/devrantron2.jpg',
              right: '/assets/images/devrantron1.jpg',
              skills: [
                SKILLS.REACTJS,
                SKILLS.ELECTRON,
                SKILLS.REDUX,
                SKILLS.TRAVIS,
                SKILLS.TDD,
              ]
            },
            {
              type: TYPES.CENTER,
              visible: false,
              name: 'aws',
              title: 'Amazon AWS Migration',
              subtitle: 'Volunteering Experience',
              description: 'Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.',
              center: '/assets/images/AWSMigration.svg',
              skills: [
                SKILLS.REACTJS,
                SKILLS.ELECTRON,
                SKILLS.REDUX,
                SKILLS.TRAVIS,
                SKILLS.TDD,
              ]
            },
            {
              type: TYPES.LEFT,
              visible: false,
              name: 'plookify',
              title: 'Plookify',
              subtitle: 'Open Source',
              description: 'Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.',
              left: '/assets/images/se.png',
              skills: [
                SKILLS.REACTJS,
                SKILLS.ELECTRON,
                SKILLS.REDUX,
                SKILLS.TRAVIS,
                SKILLS.TDD,
              ]
            },
            {
              type: TYPES.BOTH,
              visible: false,
              name: 'lluvium',
              title: 'Lluvium',
              subtitle: 'Open Source',
              description: 'Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.',
              left: '/assets/images/Lluvium_large_2nd.jpg',
              right: '/assets/images/Lluvium_large_master.jpg',
              skills: [
                SKILLS.REACTJS,
                SKILLS.ELECTRON,
                SKILLS.REDUX,
                SKILLS.TRAVIS,
                SKILLS.TDD,
              ]
            },
            {
              type: TYPES.SHARED,
              visible: false,
              name: 'elearning',
              title: 'eLearning',
              subtitle: 'Chosen Care Group',
              description: 'Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.',
              skills: [
                SKILLS.REACTJS,
                SKILLS.ELECTRON,
                SKILLS.REDUX,
                SKILLS.TRAVIS,
                SKILLS.TDD,
              ]
            },
            {
              type: TYPES.SHARED,
              visible: false,
              name: 'animated',
              title: 'Animated Video',
              subtitle: 'Speiuss Ltd.',
              description: 'Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.',
              skills: [
                SKILLS.REACTJS,
                SKILLS.ELECTRON,
                SKILLS.REDUX,
                SKILLS.TRAVIS,
                SKILLS.TDD,
              ]
            },
          ]
        },
        {
          header: {
            title: 'Work Experiences',
            name: 'work'
          },
          items: [
            {
              type: TYPES.CENTER,
              visible: false,
              name: 'buhler',
              title: 'Software Engineer',
              subtitle: 'Buhler UK Limited',
              description: 'Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.',
              center: '/assets/images/AWSMigration.svg',
              skills: [
                SKILLS.REACTJS,
                SKILLS.ELECTRON,
                SKILLS.REDUX,
                SKILLS.TRAVIS,
                SKILLS.TDD,
              ]
            },
            {
              type: TYPES.SHARED,
              visible: false,
              name: 'ccg',
              title: 'IT Consultant',
              subtitle: 'Chosen Care Group (Oct 2015 - Jun 2016)',
              description: 'Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.',
              skills: [
                SKILLS.REACTJS,
                SKILLS.ELECTRON,
                SKILLS.REDUX,
                SKILLS.TRAVIS,
                SKILLS.TDD,
              ]
            },
            {
              type: TYPES.SHARED,
              visible: false,
              name: 'speiuss',
              title: 'IT Support',
              subtitle: 'Speiuss Ltd.',
              description: 'Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.',
              skills: [
                SKILLS.REACTJS,
                SKILLS.ELECTRON,
                SKILLS.REDUX,
                SKILLS.TRAVIS,
                SKILLS.TDD,
              ]
            },
          ]
        },
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrolledInViewHandler, false);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrolledInViewHandler, false);
  },
  methods: {
    scrolledInViewHandler(element) {
      const sections = this.sections;
      sections.forEach((section) => {
        const items = section.items;
        items.forEach((item) => {
          const element = document.getElementsByClassName(item.name)[0];
          if (this.isVisible(element)) {
            if (!item.visible) {
              item.visible = true;
            }
          }
        })
      })
    },
    isVisible(element) {
      let rect = element.getBoundingClientRect();

      const scrolledInView = (
        rect.top <= ((window.innerHeight || document.documentElement.clientHeight) / 1.7)
      );
      return scrolledInView;
    }
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/palette.scss';
.sections {
  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    .header {
      flex: 0 0 100%;
      display: flex;
      justify-content: center;
      font-size: 3rem;
      font-family: 'Quicksand', sans-serif;
      &.work {
        margin-top: 10rem;
      }
    }
    .line {
      height: 3px;
      border-radius: 10px;
      background-color: $color1;
      margin-bottom: 50px;
      margin-top: 20px;
      width: 40rem;
    }
    h1 {
      font-size: 3rem;
      margin-top: 0;
      margin-bottom: 0.5rem;
    }
    .items {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .item {
        display: flex;
        flex: 0 1 100%;
        justify-content: center;
        overflow-x: hidden;
        padding-top: 5rem;
        padding-bottom: 3rem;
        &.both, &.center {
          h1 {
            text-align: center;
          }
          p {
            text-align: center;
          }
        }
        &.both {
          .left {
            margin-left: -7rem;
          }
          .right {
            margin-right: -7rem;
          }
        }
        &.center {
          flex-direction: column;
          .center {
            width: 100%;
            padding: 1rem 0;
            img {
              display: block;
              margin: 0 auto;
              width: 60rem;
            }
          }
        }
        &.shared {
          flex: 0 1 50%;
          .description {
            h1 {
              text-align: left;
            }
            p {
              text-align: left;
            }
            h5 {
              text-align: left;
            }
          }
        }
        &.left {
          padding-left: 1rem;
          padding-right: 1rem;
          .description {
            h1 {
              text-align: left;
            }
            p {
              text-align: left;
            }
            h5 {
              text-align: left;
            }
          }
        }
        &.invisible {
          .description {
            h1 {
              text-align: left;
              opacity: 0;
              transform: translateY(2rem);
            }
            p {
              text-align: left;
              opacity: 0;
              transform: translateY(2rem);
            }
            h5 {
              text-align: left;
              opacity: 0;
              transform: translateY(2rem);
            }
          }
        }
        .description {
          flex: 2;
          margin: 0 1rem;
          font-family: 'Quicksand', sans-serif;
          padding: 0 1rem;
          h3 {
            text-align: center;
            margin-bottom: 0;
          }
          h1 {
            transition: all 0.4s;
          }
          p {
            transition: all 0.4s;
          }
          h5 {
            margin-top: 0;
            text-align: center;
            transition: all 0.4s;
          }
          .skills {
            padding: 1rem 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            .skill {
              margin: 0 0.3rem;
              width: 5rem;
              height: 5rem;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 100%;
              transition: 0.2s all;
              font-size: 0.9rem;
              &:hover {
                cursor: pointer;
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
              }
            }
            .web {
              background-color: $color2;
              color: $color4;
            }
            .tool {
              background-color: $color3;
              color: $color4;
            }
            .desktop {
              background-color: $color5;
              color: $color4;
            }
          }
        }
        img {
          width: 100%;
          border-radius: 5px;
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
        .left {
          flex: 2;
          z-index: 99;
          transition: all 0.4s;
        }
        .right {
          flex: 2;
          z-index: 99;
          transition: all 0.4s;
        }
      }
      .devrantron {
      }
      .aws {
      }
      .buhler {

      }
      .ccg {
        h1 {
          margin-bottom: 1rem;
        }
      }
      .lluvium {
      }
      .plookify {
        img {
          box-shadow: none;
        }
      }
    }
  }
}
</style>
