<template>
  <div class="home">
    <div class="home_topBar">
      <navMenu />
    </div>
    <div class="Backtop">
      <div class="Backtop_box">
        <img src="../../assets/Home/home_icon_service_nor.png" alt />
        <p>在线客服</p>
      </div>
      <div class="xian"></div>
      <div class="Backtop_box" @click="topBack">
        <img src="../../assets/Home/home_icon_backtop_nor.png" alt />
        <p>TOP</p>
      </div>
    </div>
    <div class="home_wrap">
      <div class="home_wrap_content">
        <h1>我们的产品</h1>
        <ul>
          <li v-for="item in product" :key="item.logo">
            <img :src="item.logo" alt />
            <h1>{{item.title}}</h1>
            <p>{{item.txt}}</p>
            <span>
              <img :src="arrows" alt />
            </span>
          </li>
        </ul>
        <div class="radiu">
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="home_wrap_box">
        <h1>有麦新闻</h1>
        <div class="home_box">
          <div class="box_left"></div>
          <div class="box_right">
            <h1 class="right_title">有麦视频电商项目正式成立</h1>
            <p>有麦视频电商实在原电商产业园模式上的再一次升级。有麦视频电商实在原电商产业园模式上的再一次升级。有麦视频电商实在原电商产业园模式上的再一次升级。有麦视频电商实在原电商产业园模式上的再一次升级。有麦视频电商实在原电商产业园模式上的再一次升级。有麦视频电商实在原电商产业园模式上的再一次升级。有麦视频电商实在原电商产业园模式上的再一次升级。有麦视频电商实在原电商产业园模式上的再一次升级。有麦视频电商实在原电商产业园模式上的再一次升级。</p>
            <div class="find">
              查看更多
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="industry">
      <div class="industry_wrap">
        <h1>产业园</h1>
        <div class="industry_content">
          <div class="industry_content_box">
            <div class="industry_content_txt">
              <h1>有麦（南京科创城）</h1>
              <p>有麦直播基地有麦直播基地有麦直播基地有麦直播基地</p>
              <p>
                <span>2020.05.01</span>
                <span>→</span>
              </p>
            </div>
          </div>
          <div class="industry_content_box">
            <div class="industry_content_txt">
              <h1>有麦（新沂软件谷）</h1>
              <p>有麦直播基地有麦直播基地有麦直播基地有麦直播基地</p>
              <p>
                <span>2020.05.01</span>
                <span>→</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="partner">
      <div class="partner_wrap">
        <h1>合作伙伴</h1>
        <div class="partner_li">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="contact_wrap">
        <div class="contact_left">
          <h1>如果有任何需要，请您联系我们</h1>
          <p>如果您有任何需要，请您联系我们。如果您有任何需要，请您联系我们。如果您有任何需要，请您联系我们。如果您有任何需要，请您联系我们。如果您有任何需要，请您联系我们。如果您有任何需要，请您联系我们。如果您有任何需要，请您联系我们。</p>
        </div>
        <div class="contact_right">
          <input type="text" placeholder="姓名" />
          <input type="text" placeholder="邮箱" />
          <input type="text" placeholder="联系电话" />
          <textarea name id cols="30" rows="10" placeholder="你的问题"></textarea>
          <button>立即联系 →</button>
        </div>
      </div>
    </div>
    <div class="map">
      <div class="map_supernatant">
        <div class="supernatant_box">
          <div class="box_map_left">
            <div class="left_img">
              <img :src="orientation" alt />
            </div>
            <div class="left_txt">
              <h1>工作时间</h1>
              <p>周一 - 周五: 09:00-18:00</p>
            </div>
          </div>
          <div class="box_map_left">
            <div class="left_img">
              <img :src="timer" alt />
            </div>
            <div class="left_txt">
              <h1>地址</h1>
              <p>南京市雨花区科创园D栋4层 电话：025-00000000 邮箱：+++++++++</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerB />
  </div>
</template>

<script>
import navMenu from "../../components/NavMenu/index";
import footerB from "../../components/Footer/index";
import "../../styles/view/Home/index.css";

export default {
  name: "home",
  data() {
    return {
      product: [
        {
          logo: require("../../assets/product/home_icon_qifu.png"),
          title: "有麦企服",
          txt: "有麦MALL集B2B2C于一身，是一个拥有多元化购物方式的线上购物平台"
        },
        {
          logo: require("../../assets/product/home_icon_jiayuan.png"),
          title: "有麦家园",
          txt: "有麦MALL集B2B2C于一身，是一个拥有多元化购物方式的线上购物平台"
        },
        {
          logo: require("../../assets/product/home_icon_jishi.png"),
          title: "有麦集市",
          txt: "有麦MALL集B2B2C于一身，是一个拥有多元化购物方式的线上购物平台"
        },
        {
          logo: require("../../assets/product/home_icon_mall.png"),
          title: "有麦MALL",
          txt: "有麦MALL集B2B2C于一身，是一个拥有多元化购物方式的线上购物平台"
        }
      ],
      arrows: require("../../assets/product/home_icon_link_nor.png"),
      timer: require("../../assets/home_icon_adress.png"),
      orientation: require("../../assets/home_icon_time.png")
    };
  },
  components: {
    navMenu,
    footerB
  },
  created() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res);
    });
  },
  methods:{
    topBack(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style scoped>
</style>