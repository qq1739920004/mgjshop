<template>
  <div id="shopcart">
    <navbar class="shop-navbar">
      <!-- 首页顶部 -->
      <div slot="cent">购物车&nbsp ({{ cartLength }})</div>
    </navbar>
    <shopscroll class="shopscroll" ref="scr">
      <shopList
        v-for="(item, index) in cartList"
        :key="index"
        :list="cartList[index]"
        
      ></shopList>
    </shopscroll>
    <boottomnav></boottomnav>
  </div>
</template>

<script>
import navbar from "components/common/tab/navbar.vue"; //导航栏
import shopscroll from "components/common/better-scroll/noloadscroll.vue"; //betterscroll插件
import { mapGetters } from "vuex"; //组件中直接使用vuex里面的计算属性
import shopList from "views/shopcart/shopList/shopList.vue"; //购物车商品的展示
import boottomnav from "views/shopcart/shopboottomnav/shopboottomnav.vue"; //底部导航栏

export default {
  name: "shopcart",
  components: {
    navbar,
    shopscroll,
    shopList,
    boottomnav,
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
  },
  activated() {
    this.$refs.scr.bscroll.refresh();
  },
};
</script>

<style scoped="scoped">
#shopcart {
  height: calc(100vh - 72px);
}
.shop-navbar {
  background-color: pink;
  color: rgba(255, 255, 255);
}
.shopscroll {
  height: calc(100% - 82px);
  overflow: hidden;
}
</style>
