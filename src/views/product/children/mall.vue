<template>
  <div class="mall">
    <productTop />
    <div class="mall_about">
      <div class="mall_about_title">
        <h1>关 于 有 麦 M A L L</h1>
      </div>
      <div class="mall_about_content">
        <div class="mall_about_content_logo">
          <img src="../../../assets/mall/mall_icon_shoo.png" alt />
        </div>
        <div class="mall_about_content_txt">
          <p>有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall</p>
          <p>有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall</p>
        </div>
      </div>
    </div>
    <div class="mall_bottom_content">
      <div class="mall_bottom_content_box">
        <div class="mall_bottom_content_txt">
          <h1>有 麦 M A L L 内 容</h1>
          <p>有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall有麦mall</p>
        </div>
      </div>
    </div>
    <div class="serve_show">
      <div class="show_wrap">
        <div class="show_title">
          <h1>产 品 展 示</h1>
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
</style>