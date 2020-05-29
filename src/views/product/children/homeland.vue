<template>
  <div class="homeland">
    <productTop />
    <div class="homeland_home">
      <div class="homeland_home_wrap">
        <div class="homeland_home_wrap_title">
          <div class="title">
            <h1>关 于 有 麦 家 园</h1>
            <div class="xian"></div>
          </div>
        </div>
        <div class="homeland_home_wrap_content">
          <div class="homeland_home_wrap_content_box">
            <div class="homeland_home_wrap_content_box_img">
              <img src="../../../assets/homeland/img_jiayuan_ab.png" alt />
            </div>
            <div class="homeland_home_wrap_content_box_txt">
              <h1>有 麦 家 园</h1>
              <p>有麦新媒体产业园的建设将大力促进新媒体领域人员、电子商务领域人员，积极转化科技成果，致力于打造在家门口的创业就业以及整合吃住玩乐一体式的“互联网+社区”，带动企业竞争力和实现多方合作共赢。</p>
            </div>
          </div>
          <div class="homeland_home_wrap_content_box">
            <div class="homeland_home_wrap_content_box_txt">
              <h1>有 麦 家 园</h1>
              <p>使用在线工单程序，智能便捷的提供多元化服务需求，为有麦短视频产业园内入驻企业提供如“企业申报、物业服务、办公需求对接、场地扩建租赁”等系列线下服务。</p>
            </div>
            <div class="homeland_home_wrap_content_box_img">
              <img src="../../../assets/homeland/img_jiayuan_about.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="homeland_details">
      <div class="homeland_details_wrap">
        <div class="homeland_details_title">
          <div class="title">
            <h1>有 麦 家 园 内 容</h1>
            <div class="xian"></div>
          </div>
        </div>
        <div class="homeland_details_img">
          <div class="homeland_details_img_left">
            <div class="homeland_details_img_left_box">
              <h1>圈子</h1>
              <p>兴趣互动社区，划分圈子多向互动</p>
            </div>
            <div class="homeland_details_img_left_box">
              <h1>教学</h1>
              <p>针对咨询疑问，专门教程讲解</p>
            </div>
            <div class="homeland_details_img_left_box">
              <h1>达人</h1>
              <p>有麦家园中的活跃分子,草根用户的舞台</p>
            </div>
          </div>
          <div class="homeland_details_img_center"></div>
          <div class="homeland_details_img_right">
            <div class="homeland_details_img_left_box">
              <h1>活动</h1>
              <p>不定期举办活动，活跃家园气氛</p>
            </div>
            <div class="homeland_details_img_left_box">
              <h1>话题</h1>
              <p>超话让志同道合的人相聚在此,分享快乐,结交同好知音</p>
            </div>
            <div class="homeland_details_img_left_box">
              <h1>知识</h1>
              <p>行业资讯，新闻资讯</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="serve_show">
      <div class="show_wrap">
        <div class="show_title">
          <div class="title">
            <h1>产 品 展 示</h1>
            <div class="xian"></div>
          </div>
        </div>
        <div class="show_img">
          <img src="../../../assets/img_jiayuan_zhanshi .png" alt />
        </div>
      </div>
    </div>
    <productBottom />
  </div>
</template>

<script>
import "../../../styles/view/Product/children/homeland.css";
import productBottom from "../../../components/Product/Product_bottom/index";
import productTop from "../../../components/Product/Product_top/index";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    productBottom,
    productTop
  }
};
</script>

<style scoped>
.homeland {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
}
.homeland_home {
  width: 100%;
  margin-bottom: 112px;
  margin-top: 256px;
}
.homeland_home_wrap {
  width: 1170px;
  margin: auto;
}
.homeland_home_wrap_title h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.homeland_home_wrap_content {
  width: 100%;
  margin-top: 42px;
}
.homeland_home_wrap_content_box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.homeland_home_wrap_content_box_img {
  width: 50%;
  height: 585px;
}
.homeland_home_wrap_content_box_txt {
  width: 50%;
  height: 585px;
  padding: 142px 83px 20px 83px;
  background: white;
  box-shadow:0px -3px 61px 9px rgba(0, 0, 0, 0.06);
}
.homeland_home_wrap_content_box_txt h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  text-align: center;
  color: rgba(51, 51, 51, 1);
}
.homeland_home_wrap_content_box_txt p:nth-child(2) {
  margin-top: 79px;
}
.homeland_home_wrap_content_box_txt p {
  line-height: 25px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.homeland_details {
  width: 100%;
  height: 960px;
  padding-top: 83px;
  background: rgba(244, 244, 244, 1);
}
.homeland_details_wrap {
  width: 1170px;
  margin: auto;
}
.homeland_details_title h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
}
.homeland_details_img {
  width: 1170px;
  margin: auto;
  margin-top: 96px;
  height: 679px;
  display: flex;
  justify-content: space-between;
}
.homeland_details_img_left {
  text-align: right;
  position: relative;
  width: 195px;
}
.homeland_details_img_left_box {
  width: 195px;
}
.homeland_details_img_center {
  width: 773px;
  height: 680px;
  background: url("../../../assets/homeland/img_jiayuan_con.png") center center;
}
.homeland_details_img_left_box h1 {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
}
.homeland_details_img_left_box p {
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 18px;
  margin-top: 19px;
}
.homeland_details_img_right {
  text-align: left;
  position: relative;
}
.homeland_details_img_left .homeland_details_img_left_box:nth-child(1) {
  position: absolute;
  left: 90px;
  top: 50px;
}
.homeland_details_img_left .homeland_details_img_left_box:nth-child(2) {
  position: absolute;
  left: 0px;
  top: 280px;
}
.homeland_details_img_left .homeland_details_img_left_box:nth-child(3) {
  position: absolute;
  left: 90px;
  top: 545px;
}
.homeland_details_img_right {
  width: 195px;
}
.homeland_details_img_right .homeland_details_img_left_box:nth-child(1) {
  position: absolute;
  left: -90px;
  top: 50px;
}
.homeland_details_img_right .homeland_details_img_left_box:nth-child(2) {
  position: absolute;
  left: 0px;
  top: 280px;
}
.homeland_details_img_right .homeland_details_img_left_box:nth-child(3) {
  position: absolute;
  left: -90px;
  top: 545px;
}
.show_wrap {
  width: 1170px;
  margin: auto;
  margin-top: 100px;
}
.show_title h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.serve_show {
  width: 100%;
  height: 1174px;
}
.show_img {
  margin-top: 99px;
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
.homeland_details_title .xian {
  background:rgba(222,222,222,1);
}
</style>