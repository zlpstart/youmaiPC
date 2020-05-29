<template>
  <div class="market">
    <productTop />
    <div class="market_about">
      <div class="market_about_wrap">
        <div class="market_about_wrap_title">
          <div class="title">
            <h1>关 于 有 麦 集 市</h1>
            <div class="xian"></div>
          </div>
        </div>
        <div class="market_about_wrap_box">
          <div class="market_about_wrap_box_left" style="margin-top:2px">
            <img src="../../../assets/market/img_jishi.png" alt />
          </div>
          <div class="market_about_wrap_box_right">
            <p>有麦集市包括集市办公，集市创作以及有麦网。是通过有麦网直播短视频交易平台，搜集并整合资源成为自媒体创作中心，办公、创作的聚集地。</p>
            <p>集市办公：公司提供社保及保底工资，招募市面大量的设计开发人员，参与到集市，将每一个技术工种都转化成可与在孵企业对接的业务的工种，在线上自由交易，在线下便捷沟通，为企业解决各种设计开发需求的同时，每一个集市办公人员也都可以赚取更多的劳务费用。</p>
            <p>集市创作：为每一个单位与个体提供一个舒适便捷的开发设计交流地，同时提供各种硬件设施租赁与共享，为拍摄创作助。</p>
            <p>有麦网：为有麦集市提供线上交易保障，更多的单位与个人可以在APP上找寻需求对接方。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="market_show">
      <div class="market_show_wrap">
        <div class="market_show_wrap_box">
          <h1>有 麦 集 市</h1>
          <p>通过有麦网直播短视频交易平台，搜集并整合资源成为自媒体创作中心，办公、创作的聚集地。</p>
        </div>
      </div>
    </div>
    <div class="market_content">
      <div class="market_content_wrap">
        <div class="market_content_wrap_title">
          <div class="title">
            <h1>有 麦 集 市 内 容</h1>
            <div class="xian"></div>
          </div>
        </div>
        <div class="market_content_wrap_img">
          <div class="market_content_wrap_img_left">
            <div class="market_content_wrap_img_left_box">
              <h1>需求发布</h1>
              <p>客户通过集市发布个性化需求</p>
            </div>
            <div class="market_content_wrap_img_left_box">
              <h1>需求交易</h1>
              <p>线上自由交易，集市办公人员赚取劳务费</p>
            </div>
          </div>
          <div class="market_content_wrap_img_center"></div>
          <div class="market_content_wrap_img_right">
            <div class="market_content_wrap_img_right_box">
              <h1>投资对接</h1>
              <p>单位与个人可以在APP上找寻对接方</p>
            </div>
            <div class="market_content_wrap_img_right_box">
              <h1>服务商城</h1>
              <p>为每一个单位与个体提供舒适便捷的开发设计交流地</p>
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
          <img src="../../../assets/zlp_.png" alt />
        </div>
      </div>
    </div>
    <productBottom />
  </div>
</template>

<script>
import productTop from "../../../components/Product/Product_top/index";
import productBottom from "../../../components/Product/Product_bottom/index";
import "../../../styles/view/Product/children/market.css";

export default {
  name: "market",
  data() {
    return {};
  },
  components: {
    productTop,
    productBottom
  }
};
</script>

<style scoped>
.market {
    width: 100%;
    margin-top: 256px;
}
.market_about {
    width: 100%;
    height: 706px;
}
.market_about_wrap {
    width: 1170px;
    height: 100%;
    margin: auto;
}
.market_about_wrap_title {
    width: 100%;
    margin-bottom: 68px;
}
.market_about_wrap_title h1 {
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
}
.market_about_wrap_box {
    width: 100%;
    margin-top: 131px;
    display: flex;
    justify-content: space-between;
}
.market_about_wrap_box_left {
    width: 50%;
    height: 614px;
}
.market_about_wrap_box_left img {
    width:468px;
    height:612px;
    margin-left: 47px;
}
.market_about_wrap_box_right {
    width: 50%;
    margin-left: 272px;
}
.market_about_wrap_box_right p:nth-child(1){
    margin-top: 0;
}
.market_about_wrap_box_right p {
    font-size:16px;
    font-family:Microsoft YaHei;
    line-height: 20px;
    font-weight:400;
    color:rgba(102,102,102,1);
    margin-top: 20px;
}
.market_show {
    width:100%;
    height:420px;
    background:url('../../../assets/banner_jishi.png')no-repeat center center;
    opacity:0.85;
    padding-top: 110px;
    margin-top: 63px;
}
.market_show_wrap {
    width: 1170px;
    margin: auto;
}
.show_wrap {
  width: 1170px;
  margin: auto;
  margin-top: 100px;
}
.show_title h1 {
  font-size:24px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
}
.market_show_wrap_box {
    width: 391px;
}
.market_show_wrap_box p {
  font-size:16px;
  line-height: 20px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(255,255,255,1);
}
.market_show h1 {
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(255,255,255,1);
}
.market_show p {
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    margin-top: 48px;
    letter-spacing:3px;
}
.market_content {
    width: 100%;
    height: 1211px;
}
.market_content_wrap {
    width: 1170px;
    padding-top: 120px;
    margin: auto;
}
.market_content_wrap_title h1 {
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
}
.market_content_wrap_img {
    width: 100%;
    height: 650px;
    margin-top: 143px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 175px;
    position: relative;
}
.market_content_wrap_img img {
    width: 100%;
    height: 100%;
}
.market_content_wrap_img_left {
    width: 195px;
}
.market_content_wrap_img_right {
    width: 195px;
}
.market_content_wrap_img_center {
    width: 755px;
    height: 731px;
    background: url('../../../assets/img_youmaijishi_nor (1).png')center center;
}
.market_content_wrap_img_left_box h1 {
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.market_content_wrap_img_left_box p {
    margin-top: 19px;
    font-size:13px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:18px;
}
.market_content_wrap_img_right_box h1 {
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.market_content_wrap_img_right_box p {
    font-size:13px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:18px;
}
.market_content_wrap_img_left_box {
    width: 195px;
}
.market_content_wrap_img_left .market_content_wrap_img_left_box:nth-child(1) {
    position: absolute;
    top: 40px;
    left: 150px;
}
.market_content_wrap_img_left .market_content_wrap_img_left_box:nth-child(2) {
    position: absolute;
    top: 590px;
    left: 150px;
}
.market_content_wrap_img_right .market_content_wrap_img_right_box:nth-child(1) {
    position: absolute;
    top: 70px;
    left: 1000px;
}
.market_content_wrap_img_right .market_content_wrap_img_right_box:nth-child(2) {
    position: absolute;
    top: 650px;
    left: 1000px;
}
.show_img {
  margin-top: 146px;
}
.serve_show {
  height: 1100px;
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