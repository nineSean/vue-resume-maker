<template>
  <section class="loginAndSignUp">
    <section class="login-and-signup">
      <h2>Vue Resume Maker</h2>
      <form>
        <div class="input-box">
          <input type="text" class="username" required v-model="username">
          <label for="">Username</label>
        </div>
        <div class="input-box">
          <input type="password" class="password" required v-model="password">
          <label for="">Password</label>
        </div>
        <div class="form-action">
          <input type="submit" value="Login" @click.prevent="login">
          <input type="submit" value="Sign Up"  @click.prevent="signUp">
        </div>
      </form>
      <div class="tip" v-show="errorMessage">Tips: {{errorMessage}}</div>
    </section>
    <ParticlesJS />
  </section>
</template>

<script>
  import ParticlesJS from "./ParticlesJS"
  import AV from "../lib/leancloud.js"
  import getAVUser from "../lib/getAVUser.js"

  export default {
    name: "LoginAndSignUp",
    components: { ParticlesJS },
    data(){
      return {
        username: '',
        password: '',
        errorMessage: ''
      }
    },
    methods: {
      signUp(){
        // 新建 AVUser 对象实例
        var user = new AV.User()
        // 设置用户名
        user.setUsername(this.username)
        // 设置密码
        user.setPassword(this.password)
        user.signUp().then((loggedInUser) => {
          this.login()
        }, (error) => {
          console.log(error.rawMessage)
          this.errorMessage = error.rawMessage
        })
      },
      login(){
        AV.User.logIn(this.username, this.password).then((loggedInUser) => {
          this.$store.commit('setUser', getAVUser(loggedInUser))
        }, (error) => {
          this.errorMessage = error.rawMessage
        })
      }
    },
    computed: {
    }
  }
</script>

<style scoped lang="scss">
.loginAndSignUp{
  >.login-and-signup{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 360px;
    padding: 20px;
    border-radius: 10px;
    color: #fff;
    font: {
      size: 16px;
      family: sans-serif;
    };
    letter-spacing: 1px;
    background-color: rgba(0, 0, 0, .8);
    z-index: 999;
    transition: box-shadow 2s;
    &:hover{
      box-shadow: 0 25px 60px #000;
    }
    >h2{
      text-align: center;
      margin-top: 30px;
      margin-bottom: 40px;
    }
    .input-box{
      position: relative;
      >label{
        position: absolute;
        left: 0;
        top: 18px;
        font-size: 18px;
        color: #fff;
        color: RGBA(54, 156, 202, 1.00);
        pointer-events: none;
        transition: .5s;
      }
      >input{
        width: 100%;
        height: 2.5em;
        margin-top: 8px;
        margin-bottom: 20px;
        padding: 20px 0;
        font-size: 1em;
        color: #fff;
        outline: none;
        background-color: transparent;
        border: none;
        border-bottom: 1.5px solid rgba(54, 156, 202, .8);
        &:focus+label, &:valid+label{
          top: 0;
          font-size: 12px;
          color: #fff;
        }
      }
    }
    .form-action{
      $h: 2em;
      width: 80%;
      height: $h;
      margin: 15px auto;
      border-radius: $h;
      background-color: RGBA(54, 156, 202, 1.00);
      display: flex;
      justify-content: center;
      align-items: stretch;
      overflow: hidden;
      >input{
        width: 50%;
        border: none;
        color: #fff;
        font-size: 1em;
        background-color: transparent;
        cursor: pointer;
        &:nth-child(1){
          border-right: .5px solid #fff;
        }
        &:nth-child(2){
          border-left: .5px solid #fff;
        }
      }
    }
  }
  .tip{
    position: absolute;
    left: 10px;
    top: 85%;
  }
}
</style>
