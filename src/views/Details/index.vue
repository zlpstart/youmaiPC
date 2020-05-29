<template>
  <div class="Recruitment">
    <div class="Recruitment_top">
      <navMenu />
    </div>
    <div class="Recruitment_content">
      <div class="Recruitment_introduce">
        <div class="title">
          <h1>岗 位 职 责</h1>
          <div class="xian"></div>
        </div>
        <p
          v-for="item in duty"
          :key="item.id"
        >
          {{item}}
        </p>
      </div>
    </div>
    <div class="Recruitment_content">
      <div class="Recruitment_introduce">
        <div class="title">
          <h1>任 职 要 求</h1>
          <div class="xian"></div>
        </div>
        <p
          v-for="item in requirement"
          :key="item.id"
        >
          {{item}}
        </p>
      </div>
    </div>
    <div class="phone">
      <div class="phone_wrap">
        <div class="title">
          <h1>招 聘 专 线</h1>
          <div class="xian"></div>
        </div>
        <div class="phone_list">
          <div class="phone_li">
            <div class="li_img">
              <img src="../../assets/icon_email (1).png" alt />
            </div>
            <div class="li_txt">
              <p>邮 箱 地 址：</p>
              <h1>fuwu@iyoumai.net</h1>
            </div>
          </div>
          <div class="phone_li">
            <div class="li_img">
              <img src="../../assets/icon_phone (1).png" alt />
            </div>
            <div class="li_txt">
              <p>公 司 热 线：</p>
              <h1>025-57796391</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Recruitment_bottom">
      <footerB />
    </div>
  </div>
</template>

<script>
import navMenu from "../../components/NavMenu/index";
import footerB from "../../components/Footer/index";
import {RecruitDuty} from '../../api/Details/index'
import "../../styles/view/Recruitment/index.css";

export default {
  name: "Recruitment",
  data() {
    return {
      duty:[],
      requirement:[]
    };
  },
  components: {
    navMenu,
    footerB
  },
  mounted(){
    console.log(this.$route.params.id)
    const para = {
        id:Number(this.$route.params.id)
    }
    let a = JSON.stringify(para)
    RecruitDuty(a).then(res => {
      this.duty = res.data.data.duty
      this.requirement = res.data.data.requirement
    })
  }
}
</script>

<style scoped>
.Recruitment_top {
  width: 100%;
  height: 474px;
  background: url("../../assets/banner_aboutus.png") no-repeat;
  background-size: 100%;
}
.Recruitment_content {
  width: 100%;
  height: 477px;
  padding-top: 119px;
}
.Recruitment_content:nth-child(3){
    padding-top: 0;
    height: 357px;
}
.Recruitment_introduce {
  width: 1170px;
  height: 100%;
  margin: auto;
  margin-bottom: 110px;
}
.Recruitment_introduce h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.Recruitment_introduce p:nth-child(2) {
  margin-top: 48px;
}
.Recruitment_introduce p {
  font-size: 16px;
  font-family: SimSun;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-top: 10px;
  line-height: 26px;
}
.post {
  width: 100%;
  padding: 54px 0 70px 0;
  background: rgba(244, 244, 244, 1);
}
.post_wrap {
  width: 1170px;
  margin: auto;
}
.post_wrap h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.post_list {
  margin-top: 65px;
}
.post_li {
  width: 100%;
  height: 91px;
  line-height: 91px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.post_li ul {
  display: flex;
  justify-content: space-between;
}
.post_li ul li {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.post_li ul li:nth-child(1) {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.post_li ul li:nth-last-child(1) {
  color: rgba(0, 175, 240, 1);
}
.phone {
  width: 100%;
  height: 499px;
}
.phone_wrap {
  width: 1170px;
  margin: auto;
}
.phone_wrap h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.phone_list {
  width: 100%;
  margin-top: 63px;
  display: flex;
}
.phone_list .phone_li:nth-child(2) {
  margin-left: 297px;
}
.li_img {
  width: 74px;
  height: 74px;
}
.li_img img {
  width: 100%;
  height: 100%;
}
.li_txt {
  margin-top: 43px;
}
.li_txt p {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
}
.li_txt h1 {
  color: #333333;
  font-size: 18px;
  margin-top: 10px;
}
.xian {
  width: 100px;
  height: 2px;
  background: rgba(239, 239, 239, 1);
  margin-top: 10px;
  margin-left: 83px;
}
/* .post_wrap .title .xian {
  background: white;
} */
.title {
  display: flex;
}
</style>