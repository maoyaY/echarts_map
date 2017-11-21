<template>
  <div id="app">
    <router-link to="/index">点击去主页</router-link>
    <router-link to="/login">点击去登录页</router-link>
    <div class="container">
      <router-view/>
      <mapchart ></mapchart>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import mapchart from 'components/map.vue'
  export default {
    name: 'app',
    computed: {
      ...mapGetters([
        'userinfo'
      ])
    },
    created() {
    },
    components: {
      mapchart
    }
  }
</script>

<style>
</style>
