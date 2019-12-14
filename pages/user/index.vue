<template>
    <div>
        <button @click="handleLogin">登录</button>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        name: 'homeIndex'
      }
    },
    methods: {
      handleLogin() {
        uni.navigateTo({
          url: '/pages/login/index'
        })
      },
    }
  }
</script>

<style scoped>
</style>  