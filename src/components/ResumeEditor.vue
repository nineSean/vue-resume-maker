<template>
  <div id="resumeEditor">
    <ul class="nav">
      <li v-for='(item, index) in resume.config' @click='selected=item.field' :class='{active: item.field===selected}' >
        <svg class="icon">
          <use :xlink:href="`#icon-${item.icon}`"></use>
        </svg>
      </li>
    </ul>
    <ul class="panels">
      <li v-for='item in resume.config' v-show='item.field===selected'>
        <div v-if='resume[item.field] instanceof Array'>
          <div class="subItem" v-for='subItem in resume[item.field]'>
            <div class="resumeField" v-for='(value,key) in subItem'>
              <label for="">{{key}}</label>
              <input type="text" v-model=subItem[key]>
            </div>
            <hr>
          </div>
        </div>
        <div v-else class="resumeField" v-for='(value,key) in resume[item.field]'>
          <label for="">{{key}}</label>
          <input type="text" v-model=resume[item.field][key]>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ResumeEditor',
    data(){
      return {
        selected: 'profile',
        resume: {
          config:[
            {field: 'profile', icon: 'id'},
            {field: 'working history', icon: 'work'},
            {field: 'education', icon: 'book'},
            {field: 'projects', icon: 'heart'},
            {field: 'awards', icon: 'cup'},
            {field: 'contacts', icon: 'phone'},
          ],
          profile: {
            name: 'sean',
            city: 'guangzhou',
            title: 'frond-end developer'
          },
          'working history': [
            {company: 'xx', content: 'my first job is'},
            {company: 'al', content: 'my second job is'},
          ],
          education: [
            {school: 'xx', content: 'bechelor'},
            {school: 'xx', content: 'master'},
          ],
          projects: [
            {name: 'website xxx', content: 'xxxx'},
            {name: 'website xxx', content: 'xxxx'},
          ],
          awards: [
            {name: 'award A', content: 'xxxxx'},
            {name: 'award B', content: 'xxxxx'},
          ],
          contacts: [
            {contact: 'phone', content: '18779778355'},
            {contact: 'wechat', content: 'vipatlx'},
          ],
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  #resumeEditor{
    background-color: #fff;

    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    width: 35%;
    display: flex;
    align-items: stretch;
    overflow: auto;
    >.nav{
      width: 80px;
      padding: 12px 0;
      background-color: #ccc;
      color: white;
      >li{
        width: 80px;
        height: 48px;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ccc;
        &.active{
          background-color: #fff;
          color: black;
        }
      }
    }
    >.panels{
      flex-grow: 1;
      position: relative;
      >li{
        position: absolute;
        left: 0;
        top: 0;
        padding: 24px;
        width: 100%;
        .resumeField{
          margin-top: 10px;
          >label{
            display: block;
          }
          >input{
            outline: none;
            width: 100%;
            padding: 10px;
            margin: 10px auto;
            border: 1px solid #ccc;
            box-shadow: inset 0px 0px 5px 1px rgba(0,0,0,.3);
          }
        }
      }
    }
  }
  svg.icon{
    width: 24px;
    height: 24px;
  }
  hr{
    margin: 30px 0;
  }
</style>

