<template>
  <div class="page">
    <h2>Home Page</h2>
    <el-button type="primary" @click="testAxios()">测试Axios调用</el-button>
  </div>
</template>

<script>
import axios from 'axios'
import mock from '@/mock/index.js'
export default {
  name: 'Home',
  methods: {
    testAxios() {
      // axios.get('http://localhost:8080/book').then(
      //   res => {alert(JSON.stringify(res.data))}
      // )

      this.$api.book.bookName().then(function(res){
        if(res.data){
          alert(res.data.name)
        }else{
          alert(res)
        }
      })
    }
  }
}
</script>
