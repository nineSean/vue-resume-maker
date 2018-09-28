<template>
  <div id="resumePreview">
    <section data-name="profile" v-show="resume.profile">
      <h1>{{resume.profile.name}}</h1>
      <h2>{{resume.profile.title}}</h2>
      <p>
        <small>{{resume.profile.city}}</small>
        <small>{{resume.profile.age}}</small>
      </p>
    </section>
    <section data-name="project" v-show="resume.projects">
      <h2>项目经历</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h3>{{item.name}}</h3>
          <hr>
          <p v-show=item.content>{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="workHistory" v-show="resume.workHistory">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.workHistory">
          <h3>{{item.company}}</h3>
          <hr>
          <p v-show=item.content>{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="education" v-show="resume.education">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>{{item.school}}
            <span v-show=item.content> - {{item.content}}</span>
          </h3>
        </li>
      </ol>
    </section>
    <section data-name="awards" v-show="resume.awards">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h3>{{item.name}}</h3>
          <hr>
          <p v-show=item.content>{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="contacts" v-show="resume.contacts">
      <h2>联系方式</h2>
      <ol>
        <li v-for="item in resume.contacts">
          <p>{{item.contact}}: {{item.content}}</p>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ResumePreview',
    computed: {
      resume(){
        return this.$store.state.resume
      }
    }
  }
</script>

<style scoped lang="scss">
  $bgc: #fff;
  #resumePreview{
    background-color: $bgc;

    width: 62.5%;
    padding: 30px;
    overflow: auto;
    h1{
      margin: 0;
      font: {
        size: 3em;
      }
    }
    h2{
      display: inline-block;
      margin-bottom: 10px;
      padding: 0 5px;
      background-color: #ccc;
    }
    section[data-name='profile']{
      h2{
        margin: 0;
        padding: 0;
        background-color: $bgc;
      }
    }
    section{
      margin: 30px 0;
      p{
        margin-bottom: 5px;
        white-space: pre-line;
      }
    }
  }
</style>

