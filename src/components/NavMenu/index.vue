<template>
  <div class="navMenu">
    <div class="navMenu_logo">
      <img :src="logo" alt />
    </div>
    <div class="navMenu_li">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/news">新闻</router-link>
        </li>
        <li>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              产品
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="selectS">
              <el-dropdown-item command="a">
                  <router-link to="/product/serve">有麦企服</router-link>
              </el-dropdown-item>
              <el-dropdown-item command="b">
                  <router-link to="/product/homeland">有麦家园</router-link>
              </el-dropdown-item>
              <el-dropdown-item command="c">
                  <router-link to="/product/market">有麦集市</router-link>
              </el-dropdown-item>
              <el-dropdown-item command="d">
                  <router-link to="/product/mall">有麦MALL</router-link>
              </el-dropdown-item>
              <el-dropdown-item command="e">
                  <router-link to="/product/exploit">有麦开发</router-link>
              </el-dropdown-item>
              <el-dropdown-item command="e">
                  <router-link to="/product/renting">有麦租房</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <router-link to="/industrial">产业园</router-link>
        </li>
        <li>
          <router-link to="/recruitment">官方招聘</router-link>
        </li>
        <li>
          <router-link to="/about">关于我们</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "../../styles/components/NavMenu/index.css";

export default {
  name: "navMenu",
  data() {
    return {
      logo: require("../../assets/home_img_logo.png")
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    }
  }
};
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: white;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.selectS a {
    color: black;
}
</style>