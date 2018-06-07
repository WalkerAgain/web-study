<template>
  <div class="hello">
    哈哈哈哈哈，我的第一个vue文件
    <router-link to="/about">Go to 关于</router-link>
    <router-link to="/doctor">Go to doctor</router-link>
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
