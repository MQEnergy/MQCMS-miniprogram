<template>
  <view class="container">
    <home v-if="current == 0" />
    <user v-if="current == 2"/>
    <tui-tabbar :tabBar="tabBar2" :hump="true" :unlined="true" backgroundColor="#F7F7F7" :current="current" @click="tabbarSwitch"></tui-tabbar>
  </view>
</template>

<script>
  import tuiTabbar from "@/components/tui-tabbar/tui-tabbar"
  import home from './home/index'
  import user from './user/index'
  
  export default {
    components: {
      tuiTabbar,
      home,
      user
    },
    data() {
      return {
        current: 0,
        tabBar2: [{
          "pagePath": "/pages/home/index",
          "text": "首页",
          "iconPath": "/static/images/navbar/home.png",
          "selectedIconPath": "/static/images/navbar/home_active.png"
        },
          {
            "pagePath": "",
            "text": "",
            "iconPath": "/static/images/navbar/release.png",
            "hump": true,
            "selectedIconPath": "/static/images/navbar/release.png"
          },
          {
            "pagePath": "/pages/user/index",
            "text": "我",
            "iconPath": "/static/images/navbar/user.png",
            "selectedIconPath": "/static/images/navbar/user_active.png",
            "num": 2,
            "isDot": true,
            "verify": true
          }
        ]
      }
    },
    methods: {
      tabbarSwitch(e) {
        let isLogin = true
        if(e.verify && !isLogin) {
          this.tui.toast("您还未登录，请先登录")
        }else{
          this.current = e.index
        }
      }
    }
  }
</script>

<style>

</style>
