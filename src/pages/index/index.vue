
<template>
  <div class="home">
    <SearchBar />
  </div>
</template>

<script>
import { get, post } from '../../utils/request'
import SearchBar from '../../components/home/SearchBar'
export default {
  components: {
    SearchBar
  },
  methods: {
    btnHandle (ev) {
      console.log(ev)
      get('https://www.baidu.com').then(res => {
        console.log(res)
      })
      post('https://www.baidu.com').then(res => {
        console.log(res)
      })
      // this.$fly.request({
      //   method: 'post', // post/get 请求方式
      //   url: 'https://www.baidu.com',
      //   body: {}
      // }).then(res => {
      //   console.log(res)
      // })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
