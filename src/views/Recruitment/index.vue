<template>
  <div class="Recruitment">
    <div class="Recruitment_top">
      <navMenu />
    </div>
    <div class="Recruitment_content">
      <div class="Recruitment_introduce">
        <div class="title">
          <h1>公 司 介 绍</h1>
          <div class="xian"></div>
        </div>
        <p>“江苏有麦科技服务有限公司”以打造新媒体内容生产基地、网络直播孵化基地等多功能为一体的智慧服务型产业园为主，为创客提供短视频拍摄基地、直播路演基地、众创传媒管理、办公及生活配套设施等服务，专注于从事新媒体产业，基于“互联、流量、智能、数据”发展多元文化的孵化，构筑海量数字内容产业的新媒体从业者与线下企业实现获客、产品销售高效价值变现平台。</p>
      </div>
    </div>
    <div class="post">
      <div class="post_wrap">
        <div class="title">
          <h1>招 聘 职 位</h1>
          <div class="xian"></div>
        </div>
        <div class="post_list">
          <div class="post_li" @click="pushDetails(item.id)" v-for="(item) in lists" :key="item.id">
            <ul>
              <li>{{item.position_name}}</li>
              <li>{{item.address}}</li>
              <li>{{item.department}}</li>
              <li>招聘{{item.recruit_num}}人</li>
              <li>→</li>
            </ul>
          </div>
        </div>
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
import { getRecruitList } from "../../api/Recruitment/index";
import "../../styles/view/Recruitment/index.css";

export default {
  name: "Recruitment",
  data() {
    return {
      lists: []
    };
  },
  components: {
    navMenu,
    footerB
  },
  methods: {
    pushDetails(e) {
      this.$router.push(`/details/${e}`);
    }
  },
  mounted() {
    getRecruitList()
      .then(res => {
        this.lists = res.data.data;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.Recruitment_top {
  width: 100%;
  height: 474px;
  background: url("../../assets/img_zhaopin_banner.png");
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.Recruitment_content {
  width: 100%;
  height: 527px;
  padding-top: 119px;
}
.Recruitment_introduce {
  width: 1170px;
  height: 100%;
  margin: auto;
}
.Recruitment_introduce h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.Recruitment_introduce p {
  font-size: 16px;
  font-family: SimSun;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-top: 47px;
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
  cursor: pointer;
}
.post_li ul {
  display: flex;
  }
  .post_li ul li {
    flex: 1;
    overflow: hidden;
    text-align: center;
    text-overflow:ellipsis;
    white-space: nowrap
  }
  .post_li ul li:nth-child(1) {
    text-align: left;
  }
/* .post_li ul li:nth-child(1){
  width: 260px;
  margin-left: 50px;
  height: 90px;
}
.post_li ul li:nth-child(2){
  height: 90px;
  width: 260px;
}
.post_li ul li:nth-child(3){
  height: 90px;
  width: 260px;
}
.post_li ul li:nth-child(4){
  height: 90px;
  width: 260px;
} */
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
  padding-top: 100px;
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
.title {
  display: flex;
}
</style>