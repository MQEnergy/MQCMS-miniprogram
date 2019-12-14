<template>
  <view class="container" v-if="!hasLogin">
    <view class="logo">
      <view class="logo-class">
        <image src="/static/images/mqcms-logo.png"></image>
      </view>
    </view>
    <view class="top">
      <view class="main">
        <h5>使用以下功能需要先登录授权</h5>
        <text>
          ● 查看喜欢的帖子；
        </text>
      </view>
    </view>
    <button open-type="getUserInfo" lang="zh_CN" @tap="handleOauth" size="50%" class="now">立即登录</button>
    <button type="default" lang="zh_CN" @tap="handleRedirect" size="50%" class="now">拒绝</button>
  </view>
</template>

<script>
  import { Login } from "@/api/login"
  import { mapState, mapMutations} from 'vuex'

  export default {
    data () {
      return {
        currentProviderName: '', // 当前提供者的名称 微信：weixin
        navTo: ''
      }
    },
    onLoad(option) {
      this.navTo = option.navTo;
    },
    onReady() {
      this.initProvider();
    },
    computed: mapState(['forcedLogin', 'hasLogin']),
    methods: {
      ...mapMutations(['login']),
      initProvider() {
        if (this.hasLogin) {
          uni.reLaunch({
            url: '/pages/home/index',
          });
          return false;
        }
        uni.getProvider({
          service: 'oauth',
          success: (res) => {
            if (res.provider && res.provider.length) {
              this.currentProviderName = res.provider[0];
            } else {
              this.currentProviderName = 'weixin';
            }
          },
          fail: (err) => {
            this.currentProviderName = 'weixin';
            console.error('获取服务供应商失败：' + JSON.stringify(err));
          }
        });
      },
      handleOauth() {
        uni.login({
          provider: this.currentProviderName,
          success: (res) => {
            uni.getUserInfo({
              provider: this.currentProviderName,
              success: (info) => {
                uni.showLoading();
                Login({
                    code: res.code,
                    avatar_url: info.userInfo.avatarUrl,
                    city: info.userInfo.city,
                    country: info.userInfo.country,
                    gender: info.userInfo.gender,
                    language: info.userInfo.language,
                    nick_name: info.userInfo.nickName,
                    province: info.userInfo.province,
                    version: '1.4.0'
                  }).then(data => {
                    info.userInfo.token = res.token;
                    info.userInfo.realName = res.info.user_name;
                    this.toMain(info.userInfo);
  
                  }).finally(() => {
                    uni.hideLoading()
                  });
              }
            });
          },
          fail: (err) => {
            uni.showModal({
              title: '授权失败',
              content: '授权登录失败' + JSON.stringify(err),
              showCancel: false,
            });
          },
          complete: (res) => {
            uni.hideLoading()
          }
        });
      },
      handleRedirect() {
        if(this.navTo) {
          uni.reLaunch({
            url: '/pages/home/index',
          });
        } else {
          uni.navigateBack();
        }
        return false;
      },
      toMain(userInfo) {
        this.login(userInfo);
        /**
         * 强制登录时使用reLaunch方式跳转过来
         * 返回首页也使用reLaunch方式
         */
        if (this.forcedLogin) {
          if(this.navTo) {
            uni.reLaunch({
              url: '/pages/home/index?navTo=' + this.navTo,
            });
          } else {
            uni.reLaunch({
              url: '/pages/home/index',
            });
          }
        } else {
          uni.navigateBack();
        }
      }
    }
  }
</script>

<style>
    @import '../../static/css/login.css';
</style>
