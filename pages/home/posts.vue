<template>
  <view class="container">
    <view class="product-list">
      <!--商品列表-->
      <view class="pro-item" @tap="detail" v-for="(item,index) in productList" :key="index">
        <image :src="'../../static/images/product/'+item.img+'.jpg'" class="pro-img" mode="widthFix" />
        <view class="pro-content">
          <view class="pro-tit">{{item.name}}</view>
          <view class="tui-footer">
            <view class="tui-msg-box">
              <image src="/static/images/avatar_1.jpg" class="tui-msg-pic" mode="widthFix"></image>
              <view class="tui-msg-item">
                <view class="tui-msg-name">姓名1</view>
              </view>
            </view>
            <tui-icon name="like-fill" color="#f54f46" :size="20" class="tui-l-icon"></tui-icon>
          </view>
        </view>
      </view>
      <!--商品列表-->
    </view>
    <!--加载loadding-->
    <tui-loadmore :visible="loadding" :index="3" type="primary"></tui-loadmore>
    <tui-nomore :visible="!pullUpOn"></tui-nomore>
    <!--加载loadding-->
  </view>
</template>

<script>
  import tuiLoadmore from "@/components/loadmore/loadmore"
  import tuiNomore from "@/components/nomore/nomore"
  import tuiIcon from "@/components/icon/icon"
  import tuiTag from '@/components/tag/tag'

  export default {
    components: {
      tuiLoadmore,
      tuiNomore,
      tuiIcon,
      tuiTag
    },
    data() {
      return {
        pageIndex: 1,
        productList: [{
          img: 1,
          name: "利物浦官方 独家出品纪念版沙发",
          sale: 599,
          factory: 899,
          payNum: 2342
        },
          {
            img: 2,
            name: "好看好养活的绿色养眼小盆栽，超级实惠",
            sale: 29,
            factory: 69,
            payNum: 999
          },
          {
            img: 3,
            name: "利物浦官方 独家出品大红床上用品三件套",
            sale: 299,
            factory: 699,
            payNum: 666
          },
          {
            img: 4,
            name: "利物浦官方 独家出品花花碎花床上用品三件套",
            sale: 1599,
            factory: 2899,
            payNum: 236
          },
          {
            img: 5,
            name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
            sale: 599,
            factory: 899,
            payNum: 2399
          }, {
            img: 1,
            name: "独家出品纪念版沙发",
            sale: 599,
            factory: 899,
            payNum: 2342
          },
          {
            img: 2,
            name: "好看好养活的绿色养眼小盆栽，超级实惠",
            sale: 29,
            factory: 69,
            payNum: 999
          },
          {
            img: 3,
            name: "利物浦官方 独家出品大红床上用品三件套",
            sale: 299,
            factory: 699,
            payNum: 666
          },
          {
            img: 4,
            name: "利物浦官方 独家出品花花碎花床上用品三件套",
            sale: 1599,
            factory: 2899,
            payNum: 236
          },
          {
            img: 5,
            name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
            sale: 599,
            factory: 899,
            payNum: 2399
          }
        ],
        loadData: [{
          img: 1,
          name: "利物浦官方 独家出品纪念版沙发",
          sale: 599,
          factory: 899,
          payNum: 2342
        },
          {
            img: 2,
            name: "好看好养活的绿色养眼小盆栽，超级实惠",
            sale: 29,
            factory: 69,
            payNum: 999
          },
          {
            img: 3,
            name: "利物浦官方 独家出品大红床上用品三件套",
            sale: 299,
            factory: 699,
            payNum: 666
          },
          {
            img: 4,
            name: "利物浦官方 独家出品花花碎花床上用品三件套",
            sale: 1599,
            factory: 2899,
            payNum: 236
          },
          {
            img: 5,
            name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
            sale: 599,
            factory: 899,
            payNum: 2399
          }, {
            img: 1,
            name: "利物浦官方 独家出品纪念版沙发",
            sale: 599,
            factory: 899,
            payNum: 2342
          },
          {
            img: 2,
            name: "好看好养活的绿色养眼小盆栽，超级实惠",
            sale: 29,
            factory: 69,
            payNum: 999
          },
          {
            img: 3,
            name: "大红床上用品三件套",
            sale: 299,
            factory: 699,
            payNum: 666
          },
          {
            img: 4,
            name: "利物浦官方 独家出品花花碎花床上用品三件套",
            sale: 1599,
            factory: 2899,
            payNum: 236
          },
          {
            img: 5,
            name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
            sale: 599,
            factory: 899,
            payNum: 2399
          }
        ],
        loadding: false,
        pullUpOn: true
      }
    },
    methods: {
      detail(e) {
        uni.navigateTo({
          url: '../extend-view/productDetail/productDetail'
        })
      }
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
      //延时为了看效果
      setTimeout(() => {
        this.productList = this.loadData;
        this.pageIndex = 1;
        this.pullUpOn = true;
        this.loadding = false;
        uni.stopPullDownRefresh();
        this.tui.toast("刷新成功")
      }, 200)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
      if (!this.pullUpOn) return;
      this.loadding = true;
      if (this.pageIndex == 3) {
        this.loadding = false;
        this.pullUpOn = false
      } else {
        this.productList = this.productList.concat(this.loadData);
        this.pageIndex = this.pageIndex + 1;
        this.loadding = false
      }
    }
  }
</script>

<style>
  .container {
    padding-bottom: env(safe-area-inset-bottom);
  }
  
  .product-list {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 30upx 30upx 0 30upx;
    background: #fff;
  }
  
  .pro-item {
    background: #fff;
    box-sizing: border-box;
    width: 49%;
    position: relative;
    margin-bottom: 2%;
  }
  
  .pro-item::after {
    content: '';
    position: absolute;
    height: 200%;
    width: 200%;
    border: 1upx solid #eaeef1;
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    left: 0;
    top: 0;
  }
  
  .pro-img {
    width: 100%;
    display: block;
    height: 350upx !important;
  }
  
  .pro-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20upx;
    height: 200upx;
  }
  
  .pro-tit {
    /* font-size:  */
    color: #2e2e2e;
    font-size: 26upx;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  
  .pro-price {
    padding-top: 18upx;
  }
  
  .sale-price {
    font-size: 34upx;
    font-weight: 500;
    color: #ea1500;
  }
  
  .factory-price {
    font-size: 24upx;
    color: #a0a0a0;
    text-decoration: line-through;
    padding-left: 12upx;
  }
  
  .pro-pay {
    padding-top: 10upx;
    font-size: 24upx;
    color: #656565;
  }

  .tui-footer {
    padding-top: 60upx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 10;
    height: 44upx;
    padding: 30rpx 0rpx;
  }

  .tui-btn {
    background: none;
    padding: 0;
    margin: 0;
    display: inline;
  }
  
  .tui-msg-box {
    display: flex;
    align-items: center;
  }
  .tui-msg-pic {
    width:40upx;
    height: 40upx;
    border-radius: 50%;
    display: block;
    margin-right: 10upx;
  }
  
  .tui-msg-item {
    max-width: 500upx;
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

</style>
