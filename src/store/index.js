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
        {field: 'workHistory', icon: 'work', structure: {company: '', content: ''}},
        {field: 'education', icon: 'book', structure: {school: '', content: ''}},
        {field: 'projects', icon: 'heart', structure: {name: '', content: ''}},
        {field: 'awards', icon: 'cup', structure: {name: '', content: ''}},
        {field: 'contacts', icon: 'phone', structure: {contact: '', content: ''}}
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
    updateResume (state, {path, value}) {
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
    },
    deleteSubItem (state, {key, i}) {
      state.resume[key].splice(i, 1)
      localStorage.setItem('state', JSON.stringify(state))
    },
    addSubItem (state, payload) {
      let array = state.resume.config
      let length = array.length
      let item = state.resume[payload]
      for (let i = 0; i < length; i++) {
        if (array[i]['field'] === payload) {
          item.push({...array[i].structure}) // 必须要复制过structure
          break
        }
      }
      localStorage.setItem('state', JSON.stringify(state))
    }
  }
})

export default store
