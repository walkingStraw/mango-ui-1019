<template>
  <div class="container">
      <!-- 导航菜单栏 -->
      <nav-bar></nav-bar>
      <!-- 头部区域 -->
      <head-bar></head-bar>
      <!-- 主内容区域 -->
      <main-content></main-content>
  </div>
</template>

<script>
import HeadBar from "./HeadBar"
import NavBar from "./NavBar"
import MainContent from "./MainContent"
import axios from 'axios'
import mock from '@/mock/index.js'
export default {
  name: 'Home',
  components: {
    HeadBar, NavBar, MainContent
  },
  methods: {
    testAxios() {
      // axios.get('http://localhost:8080/book').then(
      //   res => {alert(JSON.stringify(res.data))}
      // )

      this.$api.book.bookName().then(function(res){
        if(res.data){
          alert('mock输出'+ res.data.name)
        }else{
          alert('http输出' + res)
        }
      })
    }
  }
}
</script>
