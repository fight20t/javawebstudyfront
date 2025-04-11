<template>
  <div>
    <!-- 引入页面布局 -->
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-header style="font-size: 40px; background-color: rgb(238, 241, 246)"
        >tlias 智能学习辅助系统</el-header
      >
      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-message"></i>系统信息管理</template
              >
<!-- 在这里，为对应的图标添加跳转功能 -->
              <el-menu-item index="1-1">
                <router-link to="/emp">员工管理</router-link>
                </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/ele">组件案例</router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-main>
            <!-- 表单 -->
            <el-form
              :inline="true"
              :model="searchForm"
              class="demo-form-inline"
            >
              <el-form-item label="姓名">
                <el-input
                  v-model="searchForm.userId"
                  placeholder="姓名"
                ></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-select v-model="searchForm.completed" placeholder="是否完成">
                  <el-option label="女" value="1"></el-option>
                  <el-option label="男" value="2"></el-option>
                </el-select>
              </el-form-item>
              <!-- 根据入职日期的范围查询 -->
                <el-form-item label="入职时间">
                    <el-date-picker
                    v-model="searchForm.entrydate"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    
                    ></el-date-picker>
                </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item>
            </el-form>

            <!-- 表格 -->
            <el-table :data="tableData" border>
              <el-table-column prop="name" label="姓名" width="140">
              </el-table-column>
              <el-table-column prop="image" label="图像" width="120">
                <template slot-scope="scope">
                    <img  :src="scope.row.image" width="50px" height="50px">
                </template>
              </el-table-column>
              <el-table-column  label="性别" width="120">
                <template slot-scope="scope">
                    {{scope.row.gender==1?"女":"男"}}
                </template>
              </el-table-column>
              <el-table-column prop="job" label="职位" width="140">
              </el-table-column>
              <el-table-column prop="entrydate" label="入职时间" width="120">
              </el-table-column>
              <el-table-column prop="updatetime" label="最后操作时间" width="140">
              </el-table-column>
              <el-table-column  label="操作" >
                <el-button type="primary" size="mini">编辑</el-button>
                <el-button type="danger" size="mini">删除</el-button>
              </el-table-column>
            </el-table>
<br><br>
            <!-- 分页条 -->
            <!-- 带有背景颜色的分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      layout="sizes,prev, pager, next,total"
      :total="1000"
    >
    </el-pagination>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      searchForm:{
        name:"",
        gender:"",
        entrydate:[]
      }
    };
  },
  methods: {
    onsubmit:function(){
        alert("查询数据");
    },
    handleSizeChange: function (val) {
      alert("every page has " + val + " items");
    },
    handleCurrentChange: function (val) {
      alert("now is at the " + val + " page");
    }
  },
  mounted() {
    //发送异步请求，获取数据
    axios.get("https://mock.apifox.cn/m1/3128855-0-default/emp/list").then((result) => {
      // console.log(result.data);
      this.tableData = result.data.data;
    });
  },
};
</script>


<style>
</style>