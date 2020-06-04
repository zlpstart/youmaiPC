<template>
  <div class="home">
    <div class="home_topBar">
      <div class="home_topBar_txt_wrap">
        <div class="home_topBar_txt">
          <h1>欢迎来到有麦官网</h1>
          <p>满足个性化、多样化孵化需求，开启以短视频、直播经济为主体的新零售时代</p>
        </div>
      </div>
      <navMenu />
    </div>
    <div class="home_wrap">
      <div class="home_wrap_content">
        <h1>我们的产品</h1>
        <ul v-if="swiper == 0">
          <router-link to="/product/serve">
            <li @mousemove="move" @mouseleave="leave">
              <img src="../../assets/product/home_icon_qifu.png" alt />
              <h1>有麦企服</h1>
              <p>全智能化企业运营平台，提供客服、基础服务和增值服务支持</p>
              <span>
                <img src="../../assets/product/home_icon_link_nor.png" alt v-if="hov" />
                <img src="../../assets/home_icon_link_hover.png" alt v-else />
              </span>
            </li>
          </router-link>
          <router-link to="/product/homeland">
            <li @mousemove="move1" @mouseleave="leave1">
              <img src="../../assets/product/home_icon_jiayuan.png" alt />
              <h1>有麦家园</h1>
              <p>提供社交化平台，供所有在孵企业和短视频爱好者交流作品和发布需求</p>
              <span>
                <img src="../../assets/product/home_icon_link_nor.png" alt v-if="hov1" />
                <img src="../../assets/home_icon_link_hover.png" alt v-else />
              </span>
            </li>
          </router-link>
          <router-link to="/product/market">
            <li @mousemove="move2" @mouseleave="leave2">
              <img src="../../assets/product/home_icon_jishi.png" alt />
              <h1>有麦集市</h1>
              <p>通过有麦网直播短视频交易平台，搜集并整合资源成为自媒体创作中心，办公、创作的聚集地</p>
              <span>
                <img src="../../assets/product/home_icon_link_nor.png" alt v-if="hov2" />
                <img src="../../assets/home_icon_link_hover.png" alt v-else />
              </span>
            </li>
          </router-link>
          <router-link to="/product/mall">
            <li @mousemove="move3" @mouseleave="leave3">
              <img src="../../assets/product/home_icon_mall.png" alt />
              <h1>有麦MALL</h1>
              <p>集B2B2C于一身，是一个拥有多元化购物方式的线上购物平台。 平台属于垂直化电商，主要销售摄影类器材与直播类器材</p>
              <span>
                <img src="../../assets/product/home_icon_link_nor.png" alt v-if="hov3" />
                <img src="../../assets/home_icon_link_hover.png" alt v-else />
              </span>
            </li>
          </router-link>
        </ul>
        <ul v-if="swiper == 1">
          <router-link to="/product/exploit">
            <li @mousemove="move4" @mouseleave="leave4">
              <img src="../../assets/home_icon_kaifa.png" alt />
              <h1>有麦开发</h1>
              <p>有麦官方团队打造，是专注于短视频与直播领域的软件开发平台，提供短视频行业的技术解决方案</p>
              <span>
                <img src="../../assets/product/home_icon_link_nor.png" alt v-if="hov4" />
                <img src="../../assets/home_icon_link_hover.png" alt v-else />
              </span>
            </li>
          </router-link>
          <router-link to="/product/renting">
            <li @mousemove="move5" @mouseleave="leave5">
              <img src="../../assets/home_icon_zufang.png" alt />
              <h1>有麦租房</h1>
              <p>将传统B2C电商二级分销模式引入办公租赁招商系统中，打造一个真正意义上的全民招商系统</p>
              <span>
                <img src="../../assets/product/home_icon_link_nor.png" alt v-if="hov5" />
                <img src="../../assets/home_icon_link_hover.png" alt v-else />
              </span>
            </li>
          </router-link>
        </ul>
        <div class="radiu">
          <ul class="radiu_li_li">
            <li :class="{radiu_radiosss:swiper == 0}" @click="radiu1"></li>
            <li :class="{radiu_radiosss:swiper == 1}" @click="radiu2"></li>
          </ul>
        </div>
      </div>
      <div class="home_wrap_box">
        <h1>有麦新闻</h1>
        <div class="home_box">
          <div class="box_left">
            <img :src="showNews.pc_img_small" alt />
          </div>
          <div class="box_right">
            <h1 class="right_title">{{showNews.title}}</h1>
            <p class="zlp_p" v-for="item in showNews.content" :key="item">{{item}}</p>
            <div class="find" @click="pushNews">
              <p>查看更多</p>
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
              <p>南京雨花台区南京软件谷科创城D区D1栋4层</p>
              <p>
                <span>2020.05</span>
              </p>
            </div>
          </div>
          <div class="industry_content_box">
            <div class="industry_content_txt">
              <h1>有麦（新沂软件谷）</h1>
              <p>有麦（新沂软件谷）敬请期待</p>
              <p>
                <span>2020.05</span>
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
          <img src="../../assets/IMG_LOGO_PAR (2).png" alt />
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="contact_wrap">
        <div class="contact_left">
          <h1>如果有任何需要，请您联系我们</h1>
          <p>江苏有麦科技服务有限公司</p>
          <p>地址：南京雨花台区南京软件谷科创城D区D1栋4层</p>
          <p>商务合作</p>
          <p>电话：025-57796391</p>
          <p>邮箱：fuwu@iyoumai.net</p>
        </div>
        <div class="contact_right">
          <input type="text" v-model="relform.name" placeholder="姓名" />
          <input type="text" v-model="relform.email" placeholder="邮箱" />
          <input type="text" v-model="relform.phone" placeholder="联系电话" />
          <textarea v-model="relform.issue" cols="30" rows="10" placeholder="你的问题"></textarea>
          <button @click="call">立即联系 →</button>
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
              <p>江苏省南京市雨花台区大周路88号科创园D1栋4层</p>
              <p>电话：025-57796391</p>
              <p>邮箱：fuwu@iyoumai.net</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Alert" v-if="okAlert">
      <div class="Alert_wrap">
        <div class="Alert_wrap_img">
          <img src="../../assets/icon_sucess.png" alt />
        </div>
        <div class="Alert_wrap_txt">
          <h1>您的问题已提交！</h1>
          <p>我们将在两个工作日内给您回复，请耐心等待，谢谢</p>
          <button @click="close">知道了</button>
        </div>
        <div class="close" @click="closeAlert">
          <img src="../../assets/icon_close.png" alt />
        </div>
      </div>
    </div>
    <footerB />
  </div>
</template>

<script>
import navMenu from "../../components/NavMenu/index";
import footerB from "../../components/Footer/index";
import { sendForm } from "../../api/home/index";
import { getNews } from "./../../api/News/index";
import "../../styles/view/Home/index.css";

export default {
  name: "home",
  data() {
    return {
      hov: true,
      hov1: true,
      hov2: true,
      hov3: true,
      hov4: true,
      hov5: true,
      product: [
        {
          logo: require("../../assets/product/home_icon_qifu.png"),
          title: "有麦企服",
          txt: "全智能化企业运营平台，提供客服、基础服务和增值服务支持"
        },
        {
          logo: require("../../assets/product/home_icon_jiayuan.png"),
          title: "有麦家园",
          txt: "提供社交化平台，供所有在孵企业和短视频爱好者交流作品和发布需求"
        },
        {
          logo: require("../../assets/product/home_icon_jishi.png"),
          title: "有麦集市",
          txt:
            "通过有麦网直播短视频交易平台，搜集并整合资源成为自媒体创作中心，办公、创作的聚集地 "
        },
        {
          logo: require("../../assets/product/home_icon_mall.png"),
          title: "有麦MALL",
          txt:
            "集B2B2C于一身，是一个拥有多元化购物方式的线上购物平台。 平台属于垂直化电商，主要销售摄影类器材与直播类器材"
        }
      ],
      product2: [
        {
          logo: require("../../assets/home_icon_kaifa.png"),
          title: "有麦开发",
          txt:
            "有麦官方团队打造，是专注于短视频与直播领域的软件开发平台，提供短视频行业的技术解决方案"
        },
        {
          logo: require("../../assets/home_icon_zufang.png"),
          title: "有麦租房",
          txt:
            "将传统B2C电商二级分销模式引入办公租赁招商系统中，打造一个真正意义上的全民招商系统"
        }
      ],
      arrows: require("../../assets/product/home_icon_link_nor.png"),
      arrows2: require("../../assets/home_icon_link_hover.png"),
      timer: require("../../assets/home_icon_adress.png"),
      orientation: require("../../assets/home_icon_time.png"),
      swiper: 0,
      timers: null,
      relform: {
        name: "",
        email: "",
        phone: "",
        issue: ""
      },
      okAlert: false,
      showNews: {}
    };
  },
  components: {
    navMenu,
    footerB
  },
  created() {},
  mounted() {
    this.setI(),
      getNews().then(res => {
        this.showNews = res.data.data.recommend;
      });
  },
  methods: {
    topBack() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    setI() {
      let timer = setInterval(() => {
        this.swiper++;
        if (this.swiper >= 2) {
          this.swiper = 0;
        }
      }, 5000);
      return timer;
    },
    leave() {
      this.hov = true;
    },
    leave1() {
      this.hov1 = true;
    },
    leave2() {
      this.hov2 = true;
    },
    leave3() {
      this.hov3 = true;
    },
    leave4() {
      this.hov4 = true;
    },
    leave5() {
      this.hov5 = true;
    },
    move() {
      this.hov = false;
    },
    move1() {
      this.hov1 = false;
    },
    move2() {
      this.hov2 = false;
    },
    move3() {
      this.hov3 = false;
    },
    move4() {
      this.hov4 = false;
    },
    move5() {
      this.hov5 = false;
    },
    radiu1() {
      this.swiper = 0;
    },
    radiu2() {
      this.swiper = 1;
    },
    phone(e) {
      const myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(e)) {
        return false;
      } else {
        return true;
      }
    },
    email(e) {
      const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (reg.test(e)) {
        return true;
      } else {
        return false;
      }
    },
    call() {
      if (
        this.relform.name != "" &&
        this.relform.email != "" &&
        this.relform.phone != "" &&
        this.relform.issue != ""
      ) {
        const para = {
          name: this.relform.name,
          email: this.relform.email,
          phone: this.relform.phone,
          problem: this.relform.issue
        };
        let a = this.phone(para.phone);
        let b = this.email(para.email);
        if (a && b) {
          let jsonA = JSON.stringify(para);
          sendForm(jsonA).then(res => {
            console.log(res.data.status);
            if (res.data.status == 200) {
              this.okAlert = true;
            } else {
              this.$message.error("提交失败");
            }
          });
        } else {
          this.$message({
            message: "手机号或邮箱有误",
            type: "warning"
          });
        }
      } else {
        this.$message({
          message: "您输入的信息不完善",
          type: "warning"
        });
      }
    },
    closeAlert() {
      this.okAlert = false;
    },
    close() {
      this.okAlert = false;
    },
    pushNews() {
      this.$router.push("/news");
    }
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
}
.home_topBar {
  width: 100%;
  height: 1079px;
  background: url("../../assets/home_banner_nor (1).png");
  overflow: hidden;
  background-size: cover;
  background-position: center;
  position: relative;
  background-repeat: no-repeat;
}
.home_wrap {
  width: 1170px;
  margin: 0 auto;
  margin-top: 183px;
}
.home_wrap_content h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.home_wrap_content ul li {
  width: 270px;
  height: 330px;
  margin-top: 91px;
  position: relative;
  cursor: pointer;
  margin-right: 29px;
}
.home_wrap_content ul li:hover {
  box-shadow: 0px 3px 61px 9px rgba(0, 0, 0, 0.06);
}
.home_wrap_content ul {
  display: flex;
}
.home_wrap_content ul li img {
  width: 60px;
  height: 60px;
  margin-top: 47px;
  margin-left: 105px;
}
.home_wrap_content ul li h1 {
  margin-top: 42px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  padding: 0 16px 0 22px;
}
.home_wrap_content ul li p {
  margin-top: 26px;
  font-size: 16px;
  line-height: 20px;
  font-family: Microsoft YaHei;
  font-weight: normal;
  color: rgba(102, 102, 102, 1);
  padding: 0 16px 0 22px;
}
.home_wrap_content ul li span {
}
.home_wrap_content ul li span img {
  width: 13px;
  height: 10px;
  position: absolute;
  top: 294px;
  margin-left: 0;
  margin-top: 0;
  left: 247px;
}
.radiu .radiu_li_li .radiu_radiosss {
  width: 11px;
  height: 11px;
  background: #04aae8;
  border-radius: 50%;
}
.radiu ul {
  display: flex;
  justify-content: center;
}
.radiu ul li {
  width: 11px;
  height: 11px;
  background: #ccedfa;
  border-radius: 50%;
}
.radiu_radiosss {
}
.radiu_hover {
  background: #04aae8;
}
.home_wrap_box {
  width: 100%;
  margin-top: 151px;
}
.home_wrap_box h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.home_box {
  width: 100%;
  height: 391px;
  margin-top: 115px;
  display: flex;
  justify-content: space-between;
}
.box_left {
  width: 458px;
  height: 391px;
}
.box_left img {
  width: 100%;
  height: 100%;
}
.box_right {
  width: 712px;
  height: 391px;
  background: rgba(248, 248, 248, 1);
  padding: 0 64px 0 39px;
  position: relative;
}
.box_right h1 {
  width: 100%;
  margin-top: 38px;
  font-size: 25px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.find {
  width: 218px;
  height: 50px;
  background: white;
  padding: 0 30px;
  line-height: 50px;
  box-sizing: border-box;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: absolute;
  top: 293px;
  left: 447px;
}
.zlp_p {
  width: 100%;
  height: 135px;
  text-overflow: ellipsis;
  margin-top: 35px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 26px;
  overflow: hidden;
}
.find span {
  margin-left: 61px;
  color: #00aff0;
}
.find {
  display: flex;
}
.industry {
  width: 100%;
  height: 910px;
  margin-top: 251px;
  background: url("../../assets/home_img_bg.png");
}
.industry_wrap {
  width: 1170px;
  height: 100%;
  padding-top: 143px;
  box-sizing: border-box;
  margin: auto;
}
.industry_wrap h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.industry_content {
  margin-top: 145px;
  display: flex;
  justify-content: space-between;
}
.industry_content_box:nth-child(1) {
  width: 540px;
  height: 300px;
  position: relative;
  background: url("../../assets/img_kechuang.png");
}
.industry_content_box:nth-child(2) {
  width: 540px;
  height: 300px;
  position: relative;
  background: url("../../assets/img_xinyi.png");
}
.industry_content_box img {
  width: 100%;
  height: 100%;
}
.industry_content_txt {
  width: 100%;
  height: 186px;
  position: absolute;
  background: white;
  top: 207px;
  padding: 18px 20px 21px 20px;
  left: 29px;
}
.industry_content_txt h1 {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.industry_content_txt p:nth-child(2) {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
  margin-top: 26px;
}
.industry_content_txt p:nth-child(2) {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
}
.industry_content_txt p:nth-child(3) span {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #666666;
}
.industry_content_txt p:nth-child(3) {
  margin-top: 75px;
  display: flex;
  justify-content: space-between;
}
.industry_content_txt p:nth-child(3) span:nth-child(2) {
  color: #00aff0;
}
.partner {
  height: 486px;
  padding-top: 114px;
}
.partner_wrap {
  width: 1170px;
  margin: auto;
}
.partner_wrap h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.partner_li ul {
  display: flex;
  justify-content: space-between;
}
.partner_li img {
  margin-top: 30px;
}
.partner_li ul li {
  margin-top: 72px;
  width: 264px;
  height: 53px;
}
.contact {
  width: 100%;
  height: 722px;
  background: #f6f6f6;
}
.contact_wrap {
  width: 1170px;
  margin: auto;
  display: flex;
  justify-content: center;
  height: 722px;
  padding-top: 120px;
}
.contact_left {
  width: 479px;
}
.contact_left h1 {
  font-size: 40px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
  margin-top: 75px;
}
.contact_left p {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 18px;
  margin-top: 10px;
}
.contact_left p:nth-child(2) {
  margin-top: 93px;
}
.contact_right {
  width: 370px;
  margin-left: 122px;
  height: 482px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 11px 40px 0px rgba(0, 0, 0, 0.1);
  padding: 0 60px 40px 60px;
}
.contact_right textarea {
  padding: 9px;
  color: #666666;
}
.contact_right input {
  width: 250px;
  border: none;
  color: #666666;
  border-bottom: 1px #dadada solid;
  outline: none;
  padding: 9px;
  margin-top: 31px;
}
.contact_right textarea {
  color: #666666;
}
input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #999999;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #999999;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #999999;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #999999;
}
textarea {
  color: #999999;
}
textarea::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #999999;
}
textarea:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #999999;
}
textarea::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #999999;
}
textarea::-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #999999;
}
.contact_right textarea {
  width: 250px;
  height: 118px;
  border: none;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #666666;
  border-bottom: 1px #dadada solid;
  resize: none;
  margin-top: 38px;
  outline: none;
}
.contact_right button {
  width: 250px;
  height: 50px;
  background: rgba(0, 175, 240, 1);
  color: white;
  text-align: center;
  line-height: 50px;
  border: none;
  margin-top: 40px;
}
.map {
  width: 100%;
  height: 722px;
}
.map_supernatant {
  width: 100%;
  height: 270px;
  background: rgba(0, 0, 0, 1);
  opacity: 0.8;
  padding-top: 78px;
}
.supernatant_box {
  width: 950px;
  margin: auto;
  display: flex;
}
.box_map_left {
  width: 272px;
  height: 61px;
  display: flex;
  justify-content: space-between;
}
.box_map_left:nth-child(2) {
  margin-left: 315px;
}
.left_txt h1 {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.left_txt p {
  width: 400px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
}
.left_txt p:nth-child(2) {
  margin-top: 22px;
}
.left_txt {
  margin-left: 28px;
}
.Backtop {
  width: 92px;
  height: 180px;
  position: fixed;
  top: 200px;
  right: 0;
}
.Backtop_box {
  width: 100%;
  height: 90px;
  background: #04aae8;
  padding-top: 23px;
  display: table;
  cursor: pointer;
  box-sizing: border-box;
}
.map {
  background: url("../../assets/img_map (4).png") center no-repeat;
  background-size: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  position: relative;
  background-repeat: no-repeat;
}
.xian {
  width: 24px;
  height: 1px;
  background: rgba(255, 255, 255, 1);
  margin: auto;
}
.Backtop_box p {
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 26px;
  text-align: center;
}
.Backtop_box img {
  width: 30px;
  height: 30px;
  margin: auto;
  margin-left: 31px;
}
.Alert {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
}
.Alert_wrap {
  width: 590px;
  height: 392px;
  background: rgba(255, 255, 255, 1);
  border-radius: 0px 0px 2px 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.Alert_wrap_img {
  width: 78px;
  height: 78px;
  margin: auto;
  margin-top: 40px;
}
.Alert_wrap_img img {
  width: 100%;
  height: 100%;
}
.Alert_wrap_txt {
  text-align: center;
  margin-top: 38px;
}
.Alert_wrap_txt h1 {
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin-top: 38px;
}
.Alert_wrap_txt p {
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin-top: 30px;
}
.Alert_wrap_txt button {
  width: 180px;
  height: 40px;
  border: 1px solid rgba(0, 175, 240, 1);
  border-radius: 2px;
  cursor: pointer;
  font-size: 20px;
  background: white;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 36px;
  margin-top: 68px;
}
.close {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
.close img {
  width: 100%;
  height: 100%;
}
.home_topBar_txt_wrap {
  width: 100%;
  height: 100%;
}
.home_topBar_txt {
  width: 1170px;
  margin: auto;
  margin-top: 338px;
}
.home_topBar_txt h1 {
  font-size: 60px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.home_topBar_txt p {
  font-size: 20px;
  width: 600px;
  font-family: Microsoft YaHei;
  margin-top: 91px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 28px;
}
/* .home_topBar */
</style>