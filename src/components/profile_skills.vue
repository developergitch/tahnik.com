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
              <p>{{ skill.name }}</p>
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
              <p>{{ skill.name }}</p>
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
  AWS: {
    name: 'Amazon AWS',
    type: SKILL_TYPES.TOOL,
  },
  LINUX: {
    name: 'Linux',
    type: SKILL_TYPES.DESKTOP,
  },
  GITLAB: {
    name: 'GitLab',
    type: SKILL_TYPES.WEB,
  },
  JAVA: {
    name: 'Java',
    type: SKILL_TYPES.DESKTOP,
  },
  JAVAFX: {
    name: 'JavaFX',
    type: SKILL_TYPES.DESKTOP,
  },
  GIT: {
    name: 'Git',
    type: SKILL_TYPES.WEB,
  },
  SQL: {
    name: 'SQL',
    type: SKILL_TYPES.WEB,
  },
  DESIGN: {
    name: 'Design',
    type: SKILL_TYPES.DESKTOP,
  },
  TESTING: {
    name: 'Testing',
    type: SKILL_TYPES.TOOL,
  },
  CAPTIVATE: {
    name: 'Adobe Captivate',
    type: SKILL_TYPES.DESKTOP,
  },
  PHOTOSHOP: {
    name: 'Adobe Photoshop',
    type: SKILL_TYPES.DESKTOP,
  },
  GOANIMATE: {
    name: 'GoAnimate',
    type: SKILL_TYPES.DESKTOP,
  },
  CPP: {
    name: 'C++',
    type: SKILL_TYPES.DESKTOP,
  },
  QT: {
    name: 'QT',
    type: SKILL_TYPES.DESKTOP,
  },
  NODE: {
    name: 'NodeJS',
    type: SKILL_TYPES.WEB,
  },
  VUE: {
    name: 'Vue',
    type: SKILL_TYPES.WEB,
  },
  DEBUGGING: {
    name: 'Debugging',
    type: SKILL_TYPES.DESKTOP,
  },
  AGILE: {
    name: 'Agile',
    type: SKILL_TYPES.TOOL,
  },
  PREMIER: {
    name: 'Adobe Premier',
    type: SKILL_TYPES.DESKTOP,
  },
  WINSERVER: {
    name: 'Windows Server',
    type: SKILL_TYPES.DESKTOP,
  },
  WEBDEV: {
    name: 'Web Development',
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
              description: 'Helped a company to migrate their dedicated server to cloud instances. This helped them to save a enormous amount of money and scale up and down according to their needs. This required me to setup EC2 Instances, S3 Buckets, SMS and Email services, CloudFront and Route 53 services for their websites. I volunteered to do this work to gather commercial experience of cloud infrastructure.',
              center: '/assets/images/AWSMigration.svg',
              skills: [
                SKILLS.AWS,
                SKILLS.LINUX,
                SKILLS.GITLAB
              ]
            },
            {
              type: TYPES.LEFT,
              visible: false,
              name: 'plookify',
              title: 'Plookify',
              subtitle: 'Open Source',
              description: 'I was part of a team with 5 collaborators inside it. Each team members had different modules to do and I was the account manager. We followed agile development methodologies to develop our program. It involved creating class diagram, database normalisation, code development and testing',
              left: '/assets/images/se.png',
              skills: [
                SKILLS.JAVA,
                SKILLS.JAVAFX,
                SKILLS.GIT,
                SKILLS.SQL,
              ]
            },
            {
              type: TYPES.BOTH,
              visible: false,
              name: 'lluvium',
              title: 'Lluvium',
              subtitle: 'Open Source',
              description: 'An application that shows the details about current weather and suggests music based on the weather condition. This was part of one of my university module. We had a group of 3 people. Our UX design was based on surveys and market research. Our app was created with Java and JavaFX.',
              left: '/assets/images/Lluvium_large_2nd.jpg',
              right: '/assets/images/Lluvium_large_master.jpg',
              skills: [
                SKILLS.JAVA,
                SKILLS.JAVAFX,
                SKILLS.DESIGN,
              ]
            },
            {
              type: TYPES.SHARED,
              visible: false,
              name: 'elearning',
              title: 'eLearning',
              subtitle: 'Chosen Care Group',
              description: 'I tested a LMS website for 6 months working with our web developer in Chosen Care Group. This included filing bugs to developer and verifying the fix. Once the website was finished I created eLearning content using Adobe Captivate',
              skills: [
                SKILLS.WEBDEV,
                SKILLS.TESTING,
                SKILLS.DEBUGGING,
              ]
            },
            {
              type: TYPES.SHARED,
              visible: false,
              name: 'animated',
              title: 'Animated Video',
              subtitle: 'Speiuss Ltd.',
              description: 'Created multiple animated video using GoAnimate to describe things like payroll, induction day etc. Also I know video using Adobe premier which I used for green screen editing for training and marketing videos',
              skills: [
                SKILLS.PREMIER,
                SKILLS.GOANIMATE,
                SKILLS.PHOTOSHOP,
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
              description: 'Currently doing my internship in Buhler Sortex - provider of world\'s best in class food sorting machines. I am using C++ with Visual Studio for updating and debugging existing software. I am also using QT for building automatic testing software.',
              center: '/assets/images/Buhler.png',
              skills: [
                SKILLS.CPP,
                SKILLS.NODE,
                SKILLS.QT,
                SKILLS.AGILE,
                SKILLS.DEBUGGING,
              ]
            },
            {
              type: TYPES.SHARED,
              visible: false,
              name: 'ccg',
              title: 'IT Consultant',
              subtitle: 'Chosen Care Group (Oct 2015 - Jun 2016)',
              description: 'Helped the company to build their IT infrastructure from the scratch. Developer multiple brand by the use of Social media, Ads and Marketing. Developed their main website and tested multiple existing website they had.',
              skills: [
                SKILLS.WINSERVER,
                SKILLS.WEBDEV,
                SKILLS.PREMIER,
                SKILLS.PHOTOSHOP
              ]
            },
            {
              type: TYPES.SHARED,
              visible: false,
              name: 'speiuss',
              title: 'IT Support',
              subtitle: 'Speiuss Ltd.',
              description: 'Managed their eLearning website contents and tested the website for develoeprs. Created eLearning website contents using Adobe captivate. Troubleshooted daily IT issues throughout the office.',
              skills: [
                SKILLS.WEBDEV,
                SKILLS.PREMIER,
                SKILLS.PHOTOSHOP
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
        rect.top <= ((window.innerHeight || document.documentElement.clientHeight) / 1.5)
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
              margin: 0.5rem 0.3rem;
              width: 5.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: 0.2s all;
              font-size: 0.8rem;
              padding: 0 0.2rem;
              p {
                text-align: center;
              }
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
        img {
          box-shadow: none;
        }
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
