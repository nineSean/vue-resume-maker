<template>
  <div id="resumePreview">
    {{resume}}
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
  #resumePreview{
    background-color: #fff;

    width: 62.5%;
  }
</style>

