<template>
  <view class="container user-container">
    <view class="tui-flex">
      <view class="tui-center tui-col-4">
        <tui-list-view class="tui-list-view">
          <tui-list-cell @click="detail" class="tui-list">
            <image src="/static/images/avatar_1.jpg" class="tui-msg-pic" mode="widthFix"></image>
          </tui-list-cell>
        </tui-list-view>
      </view>
      <view class="tui-center tui-col-8" style="padding-top: 60upx">
        <view class="tui-flex">
          <view class="tui-center tui-col-4">
            <view class="user-header-right-cell" style="font-weight: bold">123123</view>
            <view class="user-header-right-cell" style="color: #666">获赞</view>
          </view>
          <view class="tui-center tui-col-4">
            <view class="user-header-right-cell" style="font-weight: bold">123123</view>
            <view class="user-header-right-cell" style="color: #666">关注</view>
          </view>
          <view class="tui-center tui-col-4">
            <view class="user-header-right-cell" style="font-weight: bold">123123</view>
            <view class="user-header-right-cell" style="color: #666">粉丝</view>
          </view>
        </view>
      </view>
    </view>
    <view style="padding: 26rpx 30rpx; padding-bottom: 0rpx">张三 ID：12312312312</view>
    <view style="padding: 26rpx 30rpx; color: #7a7a7a; font-size: 26rpx">个人简历个人简历个人简历个人简历个人简历个人简历个人简历个人简历个人简历个人简历个人简历个人简历</view>
    <tui-tabs :tabs="tabs" :currentTab="currentTab>2?0:currentTab" @change="change" itemWidth="33.3333%"></tui-tabs>
    
    <view class="user-item-list" style="margin-top: 26rpx; padding: 0rpx 30rpx; ">
      <view class="tui-flex" style="overflow: hidden; margin-bottom: 2px;">
        <view class="tui-center tui-col-4" style="padding: 0 1px; overflow: hidden; height: 240rpx">
          <image src="/static/images/avatar_1.jpg" style="width: 100%; height: 100% !important;" mode="widthFix"></image>
        </view>
        <view class="tui-center tui-col-4" style="padding: 0 1px; overflow: hidden; height: 240rpx">
          <image src="/static/images/avatar_1.jpg" style="width: 100%; height: 100% !important;" mode="widthFix"></image>
        </view>
        <view class="tui-center tui-col-4" style="padding: 0 1px; overflow: hidden; height: 240rpx">
          <image src="/static/images/avatar_1.jpg" style="width: 100%; height: 100% !important;" mode="widthFix"></image>
        </view>
      </view>
      <view class="tui-flex" style="overflow: hidden; margin-bottom: 2px;">
        <view class="tui-center tui-col-4" style="padding: 0 1px; overflow: hidden; height: 240rpx">
          <image src="/static/images/avatar_1.jpg" style="width: 100%; height: 100% !important;" mode="widthFix"></image>
        </view>
        <view class="tui-center tui-col-4" style="padding: 0 1px; overflow: hidden; height: 240rpx">
          <image src="/static/images/avatar_1.jpg" style="width: 100%; height: 100% !important;" mode="widthFix"></image>
        </view>
        <view class="tui-center tui-col-4" style="padding: 0 1px; overflow: hidden; height: 240rpx">
          <image src="/static/images/avatar_1.jpg" style="width: 100%; height: 100% !important;" mode="widthFix"></image>
        </view>
      </view>
    </view>
    
  </view>
</template>

<script>
  import tuiTabs from "@/components/tui-tabs/tui-tabs"
  import tuiListView from "@/components/list-view/list-view"
  import tuiListCell from "@/components/list-cell/list-cell"
  export default {
    components: {
      tuiTabs,
      tuiListView,
      tuiListCell,
    },
    data() {
      return {
        name: 'userIndex',
        currentTab: 0,
        tabs: [
          {
            name: "作品(121)"
          },
          {
            name: "收藏(122)"
          },
          {
            name: "商品(345)"
          }
        ],
      }
    },
    methods: {
      handleLogin() {
        uni.navigateTo({
          url: '/pages/login/index'
        })
      },
      change(e) {
        this.currentTab = e.index
      },
      detail() {
      
      }
    }
  }
</script>

<style>
  @import "../../static/css/user.css";
  .user-item-list image {
    height: 100% !important;
  }
</style>  