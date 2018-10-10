<template>
  <div id="app">
    <LoginAndSignUp v-if="!true" />
    <div id="resume" v-else>
      <header>
        <Topbar/>
      </header>
      <main>
        <ResumeEditor/>
        <ResumePreview/>
      </main>
    </div>
  </div>
</template>

<script>
import "./assets/reset.css";
import "normalize.css/normalize.css";

import Topbar from "./components/Topbar";
import ResumePreview from "./components/ResumePreview";
import ResumeEditor from "./components/ResumeEditor";
import LoginAndSignUp from "./components/LoginAndSignUp";
import icons from "./assets/icons.js";
import store from "./store/index.js";
import AV from "./lib/leancloud.js"

export default {
  name: "app",
  data(){
    return {
    }
  },
  store,
  components: { Topbar, ResumePreview, ResumeEditor, LoginAndSignUp},
  created() {
    document.body.insertAdjacentHTML("afterbegin", icons);
    let state = localStorage.getItem("state");
    if (state) {
      this.$store.commit("initState", JSON.parse(state));
    }
  },
  computed: {
    id(){
      return this.$store.state.user.id
    },
  }
};
</script>

<style scoped lang="scss">
#app {
  >#resume{
    flex-grow: 1;
    max-width: 1440px;
    min-width: 1024px;
    height: 100vh;
    margin: 0 auto;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font: 18px/1.5 "STHeitiSC-Light", sans-serif;
    color: #333;
    background-color: #545;
    > header {
      width: 100%;
    }
    > main {
      width: 100%;
      flex-grow: 1;
      display: flex;
      justify-content: space-around;
    }
  }
}
svg.icon {
  height: 1em;
  width: 1em;
  fill: currentColor;
  vertical-align: -0.1em;
  font-size: 16px;
}
</style>
