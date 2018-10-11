<template>
  <div id="resumePreview" :class="{previewed: preview}">
    <button v-show="preview" @click="exitPreview">退出预览</button>
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
      },
      preview(){
        return this.$store.state.preview
      }
    },
    methods: {
      exitPreview(){
        this.$store.commit('togglePreview', !this.$store.state.preview)
      },
      isEmpty(item){
        return Object.keys(item).every(key => {
          return item[key] === ''
        })
      }
    },
    watch: {
      // resume.workHistory: function(){

      // }
    },
  }
</script>

<style scoped lang="scss">
  $bgc: #fff;
  #resumePreview{
    background-color: $bgc;

    position: relative;
    width: 62.5%;
    padding: 30px;
    overflow: auto;
    &.previewed{
      position: absolute;
      margin: 100px auto;
      overflow: inherit;
    }
    >button{
      position: absolute;
      right: 5px;
      top: -40px;
      width: 100px;
      height: 32px;
      margin-left: 16px;
      &:hover {
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      }
    }
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

