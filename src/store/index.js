import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: {
      username: '',
      id: ''
    },
    preview: false,
    selected: 'profile',
    resume: {
      config: [
        {field: 'profile', icon: 'id'},
        {field: 'workHistory', icon: 'work'},
        {field: 'education', icon: 'book'},
        {field: 'projects', icon: 'heart'},
        {field: 'awards', icon: 'cup'},
        {field: 'contacts', icon: 'phone'}
      ],
      profile: {
        name: '赖霄',
        age: 29,
        city: '广州',
        title: 'Web前端开发'
      },
      workHistory: [
        {company: 'xx', content: 'my first job is'},
        {company: 'al', content: 'my second job is'}
      ],
      education: [
        {school: 'xx', content: 'bechelor'},
        {school: 'xx', content: 'master'}
      ],
      projects: [
        {name: 'website xxx', content: 'xxxx'},
        {name: 'website xxx', content: 'xxxx'}
      ],
      awards: [
        {name: 'award A', content: 'xxxxx'},
        {name: 'award B', content: 'xxxxx'}
      ],
      contacts: [
        {contact: 'phone', content: '18779778355'},
        {contact: 'wechat', content: 'vipatlx'}
      ]
    }
  },
  mutations: {
    switchTab (state, payload) {
      state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updataResume (state, {path, value}) {
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    initState (state, payload) {
      Object.assign(state, payload) // 必须用assign不改变state的引用
    },
    setUser (state, payload) {
      Object.assign(state.user, payload)
    },
    togglePreview (state, payload) {
      state.preview = payload
    }
  }
})

export default store
