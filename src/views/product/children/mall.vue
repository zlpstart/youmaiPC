<template>
  <div class="mall">
    <productTop />
    <div class="mall_about">
      <div class="mall_about_title">
        <div class="title">
          <h1>关 于 有 麦 M A L L</h1>
          <div class="xian"></div>
        </div>
      </div>
      <div class="mall_about_content">
        <div class="mall_about_content_logo">
          <img src="../../../assets/mall/mall_icon_shoo.png" alt />
        </div>
        <div class="mall_about_content_txt">
          <p>集B2B2C于一身，是一个拥有多元化购物方式的线上购物平台。平台属于垂直化电商们主要销售摄影类器材与直播类器材。有麦MALL以此为核心，项目宗旨为拍客、主播与企业提供一个线上交易平台。</p>
          <p>企业提供带货产品，通过平台上传短视频。拍客与主播通过平台获取带货产品的相关信息，拍成创意短视频或直播间带货销售，成功后获取企业佣金。同时企业可以通过线上投资平台投资拍客与主播，资金用于场地建设、器材购买、网络推广等，产生收益后以股权回报。</p>
        </div>
      </div>
    </div>
    <div class="mall_bottom_content">
      <div class="mall_bottom_content_box">
        <div class="mall_bottom_content_txt">
          <div class="title">
            <h1>有 麦 M A L L 内 容</h1>
            <div class="xian"></div>
          </div>
          <p>商城产品包括“数码相机、摄像机、麦克风、补光灯、摄影棚、灯具、云台、脚架”等，商城采用商之翼平台旗下产品打造，销售模式丰富，包含“拼团、预售、秒杀、直播带货、微商”等众多功能。</p>
          <p>商城软件将在“小程序、微信公众号、安卓市场、苹果市场”多平台上线。</p>
          <p>商城后期主要服务于大量园区内孵化企业与有麦会员，为他们提供一个专业的摄影摄像器材类供货商城。</p>
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
          <img src="../../../assets/mall/img_mall_product.png" alt />
        </div>
      </div>
    </div>
    <productBottom />
  </div>
</template>

<script>
import "../../../styles/view/Product/children/mall.css";
import productBottom from "../../../components/Product/Product_bottom/index";
import productTop from "../../../components/Product/Product_top/index";

export default {
  name: "mall",
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
.mall {
    width: 100%;
}
.mall_about {
    width: 1170px;
    margin: auto;
    margin-bottom: 294px;
}
.mall_about_title h1 {
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
}
.mall_about_content {
    width: 100%;
    height: 419px;
    background: url('../../../assets/bg_mall.png')no-repeat center center;
}
.mall_about_content_logo {
    width: 46px;
    height: 44px;
    margin: auto;
    margin-top: 75px;
    margin-bottom: 92px;
}
.mall_about_content_logo img {
    width: 100%;
    height: 100%;
}
.mall_about_content_txt {
    width: 888px;
    margin: auto;
}
.mall_about_content_txt p {
    margin-top: 20px;
    font-size:16px;
    line-height: 25px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
}
.mall_about_content_txt p:nth-child(1){
    margin-top: 0;
}
.mall_bottom_content {
    width: 100%;
    height: 739px;
    margin-bottom: 185px;
}
.mall_bottom_content_box {
    width:1375px;
    height:739px;
    background: url('../../../assets/img_mall_nor.png');
    float: right;
}
.mall_bottom_content_txt {
    width:800px;
    height:295px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 24px 0px rgba(0, 0, 0, 0.06);
    margin-top: 222px;
    margin-left: -170px;
    padding: 41px 75px 0 75px;
}
.mall_bottom_content_txt h1 {
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
}
.mall_bottom_content_txt p:nth-child(2) {
    margin-top: 47px;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
}
.mall_bottom_content_txt p {
    font-size:16px;
    line-height: 20px;
    margin-top: 15px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
}

.show_wrap {
  width: 1170px;
  height: 1078px;
  margin: auto;
  margin-top: 100px;
}
.show_title h1 {
  font-size:24px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
}
.show_img {
    width: 1170px;
    height: 786px;
    margin-top: 127px;
}
.serve_show {
  margin-top: 100px;
}
.mall {
  margin-top: 261px;
}
.xian {
  width: 100px;
  height: 2px;
  background: rgba(239, 239, 239, 1);
  margin-top: 10px;
  margin-left: 10px;
}
.title {
  display: flex;
}
</style>