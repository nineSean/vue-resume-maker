<template>
  <div id="app">
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/>
    </main>
  </div>
</template>

<script>
import "./assets/reset.css";
import "normalize.css/normalize.css";

import Topbar from "./components/Topbar";
import ResumePreview from "./components/ResumePreview";
import ResumeEditor from "./components/ResumeEditor";
import icons from "./assets/icons.js"
import store from './store/index.js'

export default {
  name: "app",
  store,
  components: { Topbar, ResumePreview, ResumeEditor },
  created(){
    document.body.insertAdjacentHTML('afterbegin', icons)
  }
};
</script>

<style scoped lang="scss">
#app {
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
svg.icon{
  height: 1em;
  width: 1em;
  fill: currentColor;
  vertical-align: -0.1em;
  font-size: 16px;
}
</style>
