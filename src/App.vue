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

export default {
  name: "app",
  data() {
    return {
      text: "welcome"
    };
  },
  components: { Topbar, ResumePreview, ResumeEditor }
};
</script>

<style lang="scss">
body {
  background-color: #545;

  font: 20px/1.5 "STHeitiSC-Light", sans-serif;
  display: flex;
  justify-content: space-around;
  > #app {
    flex-grow: 1;
    max-width: 1440px;
    min-width: 1024px;
    height: 100vh;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
</style>
