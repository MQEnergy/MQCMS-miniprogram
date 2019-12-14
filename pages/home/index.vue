<template>
  <view class="container">
    <view class="header">
      <tui-tabs :tabs="tabs" :isFixed="true" :currentTab="currentTab>2?0:currentTab" @change="change" itemWidth="33.3333%"></tui-tabs>
    </view>
    <!-- tag -->
    <view class="tag-list-view">
      <tui-list-view class="tui-list-view">
        <tui-list-cell @click="detail" :arrow="true" class="tui-list">
          <view class="tui-list-cell-name">热门标签</view>
          <view class="tui-right">查看更多</view>
        </tui-list-cell>
      </tui-list-view>
      
      <view class="tui-flex">
        <view class="tui-center tui-col-6">
          <tui-list-view class="tui-list-view">
            <tui-list-cell @click="detail" class="tui-msg">
              <view class="tui-msg-box">
                <image src="/static/images/avatar_1.jpg" class="tui-msg-pic" mode="widthFix"></image>
                <view class="tui-msg-item">
                  <view class="tui-msg-name">#双十一晒单赢免单</view>
                  <view class="tui-msg-content">213123内容</view>
                </view>
              </view>
            </tui-list-cell>
          </tui-list-view>
        </view>
        <view class="tui-center tui-col-6">
          <tui-list-view class="tui-list-view">
            <tui-list-cell @click="detail" class="tui-msg">
              <view class="tui-msg-box">
                <image src="/static/images/avatar_1.jpg" class="tui-msg-pic" mode="widthFix"></image>
                <view class="tui-msg-item">
                  <view class="tui-msg-name">#双十一晒单赢免单</view>
                  <view class="tui-msg-content">324545内容</view>
                </view>
              </view>
            </tui-list-cell>
          </tui-list-view>
        </view>
      </view>
      <view class="tui-flex">
        <view class="tui-center tui-col-6">
          <tui-list-view class="tui-list-view">
            <tui-list-cell @click="detail" class="tui-msg">
              <view class="tui-msg-box">
                <image src="/static/images/avatar_1.jpg" class="tui-msg-pic" mode="widthFix"></image>
                <view class="tui-msg-item">
                  <view class="tui-msg-name">#双十一晒单赢免单</view>
                  <view class="tui-msg-content">213123内容</view>
                </view>
              </view>
            </tui-list-cell>
          </tui-list-view>
        </view>
        <view class="tui-center tui-col-6">
          <tui-list-view class="tui-list-view">
            <tui-list-cell @click="detail" class="tui-msg">
              <view class="tui-msg-box">
                <image src="/static/images/avatar_1.jpg" class="tui-msg-pic" mode="widthFix"></image>
                <view class="tui-msg-item">
                  <view class="tui-msg-name">#双十一晒单赢免单</view>
                  <view class="tui-msg-content">324545内容</view>
                </view>
              </view>
            </tui-list-cell>
          </tui-list-view>
        </view>
      </view>
    </view>
    
    <!-- 瀑布流 -->
    <list />
  </view>
</template>

<script>
  import tuiTabs from "@/components/tui-tabs/tui-tabs"
  import tuiListView from "@/components/list-view/list-view"
  import tuiListCell from "@/components/list-cell/list-cell"
  import list from './list'
  
  export default {
    components: {
      tuiTabs,
      tuiListView,
      tuiListCell,
      list
    },
    data() {
      return {
        name: 'test',
        currentTab: 1,
        tabs: [
          {
            name: "关注"
          },
          {
            name: "推荐"
          },
          {
            name: "最新"
          }
        ],
      }
    },
    methods: {
      change(e) {
        this.currentTab = e.index
      },
      detail() {
      
      }
    }
  }
</script>

<style scoped>
  .tui-msg::after {
    left: 154upx !important
  }
  .tui-msg-box {
    display: flex;
    align-items: center;
  }
  .tui-msg-pic {
    width: 70upx;
    height: 70upx;
    border-radius: 50%;
    display: block;
    margin-right: 20upx;
  }
  .tui-msg-item {
    max-width: 500upx;
    min-height: 70upx;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .tui-msg-name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 26upx;
    line-height: 1;
    color: #262b3a;
    text-align: left;
  }

  .tui-msg-content {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 26upx;
    line-height: 1;
    color: #9397a4;
    text-align: left;
  }
  .tui-title {
    padding: 50upx 30upx 30upx 30upx;
    font-size: 30upx;
    color: #333;
    box-sizing: border-box;
    font-weight: bold;
    clear: both;
  }
  .tui-right {
    margin-left: auto;
    margin-right: 34upx;
    font-size: 26upx;
    line-height: 1;
    color: #999;
  }
 
</style>
<style>
  .tag-list-view .tui-list-content::before {
    border-top: none !important;
  }
  .tag-list-view .tui-list-content::after {
    border-bottom: none !important;
  }
  .tag-list-view .tui-list-cell-name {
    color: #333;
    font-size: 30upx;
    box-sizing: border-box;
    font-weight: bold;
    clear: both;
  }
</style>