<template>
  <div class="renting">
    <productTop />
    <div class="renting_about">
      <div class="renting_about_wrap">
        <div class="renting_about_wrap_title">
          <div class="title">
            <h1>关 于 有 麦 租 房</h1>
            <div class="xian"></div>
          </div>
        </div>
        <div class="renting_about_wrap_contet">
          <div class="renting_about_wrap_contet_right"></div>
          <div class="renting_about_wrap_contet_left">
            <p>将传统B2C电商二级分销模式引入办公租赁招商系统中，打造一个真正意义上的全民招商系统。</p>
            <p>用户通过APP转发房源，企业通过链接注册申请入驻园区招商部对接签约，成功后推广人获得推荐佣金奖励。系统实现租房申请、租房审核、合同签订等流程化的全面管理。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="renting_content">
      <div class="renting_content_wrap">
        <div class="renting_content_wrap_title">
          <div class="title">
            <h1>有 麦 租 房 内 容</h1>
            <div class="xian"></div>
          </div>
        </div>
        <div class="renting_content_wrap_img">
          <img src="../../../assets/renting/img_zufang.png" alt />
          <div class="renting_content_wrap_img_box">
            <h1>房源微商</h1>
            <p>提供意向客户，精选推广，快速提升效果</p>
          </div>
          <div class="renting_content_wrap_img_box">
            <h1>房源租赁</h1>
            <p>个性化营销中心，全方位提供租赁服务</p>
          </div>
          <div class="renting_content_wrap_img_box">
            <h1>房源信息</h1>
            <p>一二手皆有，房客源均包，实时更新</p>
          </div>
        </div>
      </div>
    </div>
    <div class="serve_show">
      <div class="show_wrap">
        <div class="show_title show_margin">
          <div class="title">
            <h1>产 品 展 示</h1>
            <div class="xian"></div>
          </div>
        </div>
        <div class="show_img">
          <img src="../../../assets/renting/img_zufang_product.png" alt />
        </div>
      </div>
    </div>
    <productBottom />
  </div>
</template>

<script>
import "../../../styles/view/Product/children/renting.css";
import productBottom from "../../../components/Product/Product_bottom/index";
import productTop from "../../../components/Product/Product_top/index";

export default {
  name: "renting",
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
.renting_about {
  width: 100%;
  margin-top: 245px;
}
.renting_about_wrap {
  width: 1170px;
  margin: auto;
}
.renting_about_wrap_title h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.renting_about_wrap_contet {
  width: 100%;
  margin-top: 68px;
  display: flex;
  justify-content: space-between;
}
.renting_about_wrap_contet_left {
  width: 391px;
}
.renting_about_wrap_contet_left p {
  font-size: 16px;
  line-height: 20px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-top: 20px;
}
.renting_about_wrap_contet_left p:nth-child(1) {
  margin-top: 0;
}
.renting_about_wrap_contet_right {
  width: 700px;
  height: 525px;
  background: url("../../../assets/img_zufang_nor.png");
}
.renting_about_wrap_contet_right img {
  width: 100%;
  height: 100%;
}
.renting_content {
  width: 100%;
  height: 960px;
  margin-top: 90px;
  background: rgba(244, 244, 244, 1);
}
.renting_content_wrap_title h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.renting_content_wrap {
  width: 1170px;
  margin: auto;
  padding-top: 84px;
}
.renting_content_wrap_content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 99px;
}
.renting_content_wrap_content_left {
  width: 268px;
  height: 658px;
}
.renting_content_wrap_content_right {
  width: 268px;
  height: 658px;
}
.renting_content_wrap_content_center {
  width: 635px;
  height: 635px;
}
.renting_content_wrap_content_left_box {
  width: 195px;
}
.renting_content_wrap_content_right_box {
  width: 195px;
}
.renting_content_wrap_content_left_box:nth-child(1) {
  margin-top: 222px;
}
.renting_content_wrap_content_left_box:nth-child(2) {
  margin-top: 233px;
}
.renting_content_wrap_content_left_box h1 {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
  text-align: right;
}
.renting_content_wrap_content_left_box p {
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 18px;
  margin-top: 19px;
}
.renting_content_wrap_content_left_box {
  float: right;
  margin-right: 39px;
}
.renting_content_wrap_content_right_box h1 {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
  text-align: left;
}
.renting_content_wrap_content_right_box p {
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 18px;
  margin-top: 19px;
}
.renting_content_wrap_content_right_box {
  float: right;
  margin-right: 39px;
}
.renting_content_wrap_content_right_box:nth-child(1) {
  margin-top: 222px;
}
.renting_content_wrap_content_right_box:nth-child(2) {
  margin-top: 233px;
}
.renting_content_wrap_img {
  width: 100%;
  height: 656px;
  position: relative;
  margin-top: 99px;
}
.renting_content_wrap_img_box:nth-child(2) {
  position: absolute;
  top: 125px;
  right: 80px;
}
.renting_content_wrap_img_box:nth-child(2) h1 {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
}
.renting_content_wrap_img_box:nth-child(2) p {
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 18px;
  margin-top: 19px;
}
.renting_content_wrap_img_box:nth-child(3) h1 {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 28px;
}
.renting_content_wrap_img_box:nth-child(3) p {
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 18px;
  margin-top: 19px;
}
.renting_content_wrap_img_box:nth-child(4) h1 {
  font-size:18px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:28px;
}
.renting_content_wrap_img_box:nth-child(4) p {
  font-size:13px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:18px;
  margin-top: 19px;
}
.renting_content_wrap_img_box:nth-child(3) {
  position: absolute;
  top: 305px;
  right: 327px;
}
.renting_content_wrap_img_box:nth-child(4) {
  position: absolute;
  top: 485px;
  right: 575px;
}
.show_wrap {
  width: 1170px;
  height: 1078px;
  margin: auto;
}
.show_margin {
  margin-top: 71px;
}
.show_margin .title .xian {
  width:100px;
  height:2px;
  background:rgba(239,239,239,1);
}
.renting_content_wrap_title .title .xian {
  width:100px;
  height:2px;
  background:rgba(222,222,222,1);
}
.show_title h1 {
  font-size:24px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
  /* margin-top: 100px; */
}
.show_img {
    width: 1170px;
    height: 786px;
    margin-top: 127px;
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