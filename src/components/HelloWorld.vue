<template>
  <div class="hello">
    <h1 @click="getData">{{ msg }}</h1>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        msg: 'heheh'
      }
    },
    methods: {
      getData() {
        this.$emit('userinfo', {tooken: true})
      }
    },
    computed: {
      ...mapGetters([
        'userinfo'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
