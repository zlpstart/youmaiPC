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
        <li @mouseover="mouseOver" @mouseleave="mouseLeave">
          <router-link to="">产品</router-link>
          <div v-show="product" class="ul_li" @mouseover="mouseOver" @mouseleave="mouseLeave">
            <div>
              <router-link to="/product/serve">有麦企服</router-link>
            </div>
            <div>
              <router-link to="/product/homeland">有麦家园</router-link>
            </div>
            <div>
              <router-link to="/product/market">有麦集市</router-link>
            </div>
            <div>
              <router-link to="/product/mall">有麦MALL</router-link>
            </div>
            <div>
              <router-link to="/product/exploit">有麦开发</router-link>
            </div>
            <div>
              <router-link to="/product/renting">有麦租房</router-link>
            </div>
          </div>
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
      logo: require("../../assets/home_img_logo.png"),
      product:false
    };
  },
  methods: {
    handleCommand(command) {
      
    },
    mouseOver(){
      this.product = true
      console.log(111)
    },
    mouseLeave(){
      this.product = false
      console.log(222)
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

<style scoped>
.navMenu {
    width: 1170px;
    height: 50px;
    margin: auto;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 45px;
    left: 50%;
    transform: translate(-50%,0);
}
.navMenu_logo {
    width: 70px;
    height: 50px;
}
.navMenu_logo img {
    width: 100%;
    height: 100%;
}
.navMenu_li a {
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:white;
}
.navMenu_li a:hover,.router-link-exact-active {
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(4,170,232,1);
}
.ul_li div a:hover {
  font-size: 12px;
  color:rgba(4,170,232,1);
}
.navMenu_li ul {
    display: flex;
    flex: 1; 
}
.navMenu_li li {
    margin-left: 100px;
}
.ul_li {
  width: 90px;
  height: 180px;
  position: absolute;
  margin-left: -25px;
  text-align: center;
  border-radius: 10px;
  margin-top: 0px;
  background: rgba(0, 0, 0, 0.5);
}
.ul_li div a {
  font-size:12px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:28px;
}
.ul_li div {
  width: 100%;
  text-align: center;
  float: none;
  height: auto;
  margin-left: 0;
  margin-top: 0;
  display: block;
  font-size:12px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:28px;
}
</style>