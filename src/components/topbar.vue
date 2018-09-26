<template>
  <div id ="topbar">
    <h1>简 历</h1>
    <button>保存</button>
    <button>预览</button>
  </div>
</template>

<script>
export default {
  name: "Topbar"
};
</script>

<style scoped lang="scss">
#topbar {
  width: 100%;
  height: 64px;
  margin-bottom: 12px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  background: #ddd;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  > h1 {
    flex-grow: 1;
    font-size: 1.5em;
  }
}
button {
  width: 72px;
  height: 32px;
  margin-left: 16px;
  &:hover {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  &:nth-child(1) {
    color: #fff;
    background: #02af5f;
  }
  &:nth-child(2) {
    color: #222;
    background: #aaa;
  }
}
</style>


