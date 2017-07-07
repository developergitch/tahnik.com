<template>
<div class="projects">
  <div class="header">
    <span class="header_text">Projects</span>
  </div>
  <div class="line"></div>
  <div class="project devrantron">
    <div class="left">
      <img src="../assets/devrantron2.jpg" alt="" />
    </div>
    <div class="description">
      <h1>devRantron</h1>
      <p>
        Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.
      </p>
      <h3>Skills Gained</h3>
      <div class="skills">
        <div class="skill web">
          ReactJS
        </div>
        <div class="skill desktop">
          Electron
        </div>
        <div class="skill web">
          Redux
        </div>
        <div class="skill tool">
          Travis CI
        </div>
        <div class="skill web">
          TDD
        </div>
      </div>
    </div>
    <div class="right">
      <img src="../assets/devrantron1.jpg" alt="" />
    </div>
  </div>
  <div class="project aws">
    <div class="description">
      <h1>Amazon AWS Migration</h1>
      <p>
        Working with 7 different developers from 4 different continents on an open source application for a developer community website. We use ReactJS and Electron to build the cross platform application, using CI Pipelines we run test to make sure we are writing valid and quality code. I started the project initially and am currently managing it.
      </p>
    </div>
    <div class="center">
      <img src="../assets/AWSMigration.svg" alt="" />
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
  <div class="project plookify">
    <div class="left">
      <img src="../assets/se.png" alt="" />
    </div>
    <div class="description">
      <h1>Plookify</h1>
      <p>I was part of a team with 5 collaborators inside it. Each team members had different modules to do and I was the account manager. We followed agile development methodologies to develop our program. It involved creating class diagram, database normalisation, code development and testing
      </p>
      <h3>Skills Gained</h3>
      <div class="skills">
        <div class="skill desktop">
          Java
        </div>
        <div class="skill desktop">
          JavaFX
        </div>
        <div class="skill tool">
          Git
        </div>
        <div class="skill desktop">
          SQL
        </div>
      </div>
    </div>
  </div>
  <div class="project lluvium">
    <div class="left">
      <img src="../assets/Lluvium_large_2nd.jpg" alt="" />
    </div>
    <div class="description">
      <h1>Lluvium</h1>
      <p>
        An application that shows the details about current weather and suggests music based on the weather condition. This was part of one of my university module. We had a group of 3 people. Our UX design was based on surveys and market research. Our app was created with Java and JavaFX.
      </p>
      <h3>Skills Gained</h3>
      <div class="skills">
        <div class="skill desktop">
          Java
        </div>
        <div class="skill desktop">
          JavaFX
        </div>
        <div class="skill desktop">
          Design
        </div>
      </div>
    </div>
    <div class="right">
      <img src="../assets/Lluvium_large_master.jpg" alt="" />
    </div>
  </div>
  <div class="project elearning">
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
    <div class="right">
      <img src="../assets/elearning.png" alt="" />
    </div>
  </div>
  <div class="project animated">
    <div class="left">
      <img src="../assets/animated.png" alt="" />
    </div>
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
</template>

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
  .project {
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
    }
    .right {
      flex: 2;
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
      transform: rotateY(2deg)
    }
    .right {
      margin-right: -7rem;
      transform: rotateY(-2deg)
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
