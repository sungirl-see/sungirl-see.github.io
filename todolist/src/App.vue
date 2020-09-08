<template>
  <div id="app">
    <tabbar>

      <tab-bar-item path="/home" >
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/active_home.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/person">
        <img slot="item-icon" src="./assets/img/tabbar/person.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/active_person.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tabbar>
    <router-view/>
  </div>
</template>

<script>
import tabbar from './components/common/tabbar/tabbar'
import TabBarItem from './components/common/tabbar/TabBarItem'
export default {
  name: 'App',
  components: {
    tabbar,
    TabBarItem,

  }
}
</script>

<style scoped >

</style>
