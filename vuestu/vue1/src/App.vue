<template>
  <div >
    <!-- <h1>{{message}}</h1> -->
    <!-- <element-view></element-view> -->
    <!-- 引入empview视图 -->
    <!-- <emp-view></emp-view> -->

    <!-- 通过router-view来动态加载不同的组件 -->
    <router-view></router-view>

  </div>
</template>
// template部分：模板部分，由它来生成html代码

<script>
// import ElementView from './views/element/ElementView.vue'
// import EmpView from './views/tlias/EmpView.vue'
export default {
  components: {  },
  data(){
    return{
      message:"hello vue"
    }
  },
  // data部分：数据部分，返回一个对象，里面包含了数据
  methods:{

  }
}
</script>
// scitpt部分：控制模版的数据来源和行为

<style>
</style>
// style部分：css样式部分