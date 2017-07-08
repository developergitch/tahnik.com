<template>
<div class="projects">
  <div class="header">
    <span class="header_text">Projects</span>
  </div>
  <div class="line"></div>
  <div
    v-for="project in projects"
    v-bind:class="'project ' + project.name"
    v-bind:key="project.name"
  >
    <div class="left" v-if="project.type === 'both' || project.type === 'left'">
      <img v-bind:src="project.left" alt=""></img>
    </div>
    <div
      class="description"
    >
      <h1>{{ project.title }}</h1>
      <p>
        {{ project.description }}
      </p>
      <h3 v-if="project.type !== 'center'">Skills Gained</h3>
      <div class="skills" v-if="project.type !== 'center'">
        <div
          v-for="skill in project.skills"
          v-bind:class="`skill ${skill.type}`"
          v-bind:key="skill.name"
        >
          {{ skill.name }}
        </div>
      </div>
    </div>
    <div class="center" v-if="project.type === 'center'">
      <img v-bind:src="project.center" alt=""></img>
    </div>
    <div
      class="description" v-if="project.type === 'center'"
    >
      <h3>Skills Gained</h3>
      <div class="skills">
        <div
          v-for="skill in project.skills"
          v-bind:class="`skill ${skill.type}`"
          v-bind:key="skill.name"
        >
          {{ skill.name }}
        </div>
      </div>
    </div>
    <div
      class="right"
      v-if="project.type === 'both' || project.type === 'right'"
    >
      <img v-bind:src="project.right" alt=""></img>
    </div>
  </div>
  <div class="project elearning">
    <div class="left">
      <div class="description">
        <h1>eLearning</h1>
        <p>I tested a LMS website for 6 months working with our web developer in Chosen Care Group. This included filing bugs to developer and verifying the fix. Once the website was finished I created eLearning content using Adobe Captivate
        </p>
        <h3>Skills Gained</h3>
        <div class="skills">
          <div class="skill web">
            Testing
          </div>
          <div class="skill tool">
            Captivate
          </div>
          <div class="skill tool">Photoshop
          </div>
          <div class="skill desktop">
            Design
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="description">
        <h1>Animated Video</h1>
        <p>Created multiple animated video using GoAnimate to describe things like payroll, induction day etc. Also I know video using Adobe premier which I used for green screen editing for training and marketing videos
        </p>
        <h3>Skills Gained</h3>
        <div class="skills">
          <div class="skill tool">Photoshop
          </div>
          <div class="skill desktop">GoAnimate
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="header">
    <span class="header_text">Work Experiences</span>
  </div>
  <div class="line"></div>
  <div class="work buhler">
    <div class="description">
      <h1>Software Engineer</h1>
      <h5>Buhler UK Limited</h5>
      <p>
        Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.
      </p>
    </div>
    <div class="center">
      <img src="../assets/Buhler.png" alt="" />
    </div>
    <div class="description">
      <h3>Skills Gained</h3>
      <div class="skills">
        <div class="skill web">
          AWS EC2
        </div>
        <div class="skill desktop">
          Linux
        </div>
        <div class="skill web">
          AWS S3
        </div>
        <div class="skill tool">
          GitLab
        </div>
      </div>
    </div>
  </div>
  <div class="work ccg">
    <div class="left">
      <div class="description">
        <h1>IT Consultant</h1>
        <h5>Chosen Care Group</h5>
        <p>I tested a LMS website for 6 months working with our web developer in Chosen Care Group. This included filing bugs to developer and verifying the fix. Once the website was finished I created eLearning content using Adobe Captivate
        </p>
        <h3>Skills Gained</h3>
        <div class="skills">
          <div class="skill web">
            Testing
          </div>
          <div class="skill tool">
            Captivate
          </div>
          <div class="skill tool">Photoshop
          </div>
          <div class="skill desktop">
            Design
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="description">
        <h1>IT Support</h1>
        <h5>Speiuss Ltd.</h5>
        <p>Created multiple animated video using GoAnimate to describe things like payroll, induction day etc. Also I know video using Adobe premier which I used for green screen editing for training and marketing videos
        </p>
        <h3>Skills Gained</h3>
        <div class="skills">
          <div class="skill tool">Photoshop
          </div>
          <div class="skill desktop">GoAnimate
          </div>
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
  data() {
    return {
      devrantron: false,
      projects: [
        {
          type: TYPES.BOTH,
          name: 'devrantron',
          title: 'devRantron',
          description: 'Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.',
          left: '/devrantron2.jpg',
          right: '/devrantron1.jpg',
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
          name: 'aws',
          title: 'Amazon AWS Migration',
          description: 'Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.',
          center: '/AWSMigration.svg',
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
          name: 'plookify',
          title: 'Plookify',
          description: 'Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.',
          left: '/se.png',
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
          name: 'lluvium',
          title: 'Lluvium',
          description: 'Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.',
          left: '/Lluvium_large_2nd.jpg',
          right: '/Lluvium_large_master.jpg',
          skills: [
            SKILLS.REACTJS,
            SKILLS.ELECTRON,
            SKILLS.REDUX,
            SKILLS.TRAVIS,
            SKILLS.TDD,
          ]
        },
      ]
    }
  },
  mounted() {
    const devRantron = document.getElementsByClassName("devrantron")[0];
  },
  destroyed() {
    const devRantron = document.getElementsByClassName("devrantron")[0];
  },
  methods: {
    scrolledInViewHandler(element) {

    },
    isVisible(element) {
      let rect = element.getBoundingClientRect();

      const scrolledInView = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
      );
      console.log(scrolledInView);
    }
  }
}
</script>

<style lang="scss">
@import '../assets/palette.scss';
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    display: flex;
    justify-content: center;
    font-size: 3rem;
    font-family: 'Quicksand', sans-serif;
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
  }
  .project, .work {
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    padding-bottom: 10rem;
    perspective: 200px;
    transform-style: preserve-3d;
    .description {
      flex: 2;
      margin: 0 1rem;
      font-family: 'Quicksand', sans-serif;
      padding: 0 1rem;
      h3 {
        text-align: center;
        margin-bottom: 0;
      }
      h5 {
        margin-top: 0;
      }
    }
    img {
      width: 100%;
      border-radius: 5px;
    }
    .skills {
      padding: 1rem 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .skill {
        margin: 0 0.3rem;
        width: 6rem;
        height: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        transition: 0.2s all;
        transform: scale(0.9);
        &:hover {
          cursor: pointer;
          transform: scale(1);
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
    .left {
      flex: 2;
      z-index: 99;
    }
    .right {
      flex: 2;
      z-index: 99;
    }
  }
  .devrantron {
    padding-top: 5rem;
    .description {
      h1 {
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
    img {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    .left {
      margin-left: -7rem;
      transition: 0.4s all;
      &:hover {
        transform: translateX(10rem);
      }
    }
    .right {
      margin-right: -7rem;
      transition: 0.4s all;
      &:hover {
        transform: translateX(-10rem);
      }
    }
  }
  .aws {
    padding-top: 5rem;
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
    .description {
      h1 {
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
    img {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  }
  .buhler {
    padding-top: 5rem;
    flex-direction: column;
    h1 {
      margin-bottom: 1rem;
    }
    h5 {
      text-align: center;
    }
    .center {
      width: 100%;
      padding: 1rem 0;
      img {
        display: block;
        margin: 0 auto;
        width: 85vw;
      }
    }
    .description {
      h1 {
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
  }
  .ccg {
    h1 {
      margin-bottom: 1rem;
    }
  }
  .lluvium {
    .description {
      h1 {
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
    img {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    .left {
      margin-left: -7rem;
    }
    .right {
      margin-right: -7rem;
    }
  }
  .plookify {
    display: flex;
    padding: 0 1rem 10rem 1rem; 
    .description {
      padding: 0 2rem;
    }
  }
  .elearning {
    .right {
      margin-right: 1rem;
    }
  }
  .animated {
    .left {
      margin-left: -7rem;
    }
  }
}
</style>
