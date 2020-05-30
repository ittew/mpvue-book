
<template>
  <div>
    <span>index</span>
    <van-button type="primary" @tap="btnHandle">按钮</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    btnHandle (ev) {
      console.log(ev)
      this.$fly.request({
        method: 'post', // post/get 请求方式
        url: 'https://www.baidu.com',
        body: {}
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
