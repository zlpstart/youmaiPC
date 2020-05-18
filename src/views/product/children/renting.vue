<template>
  <div class="renting">
    <productTop />
    <div class="renting_about">
      <div class="renting_about_wrap">
        <div class="renting_about_wrap_title">
          <h1>关 于 有 麦 租 房</h1>
        </div>
        <div class="renting_about_wrap_contet">
          <div class="renting_about_wrap_contet_left">
            <p>有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集</p>
            <p>有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集</p>
            <p>有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集</p>
          </div>
          <div class="renting_about_wrap_contet_right">
          </div>
        </div>
      </div>
    </div>
    <div class="renting_content">
      <div class="renting_content_wrap">
        <div class="renting_content_wrap_title">
          <h1>有 麦 租 房 内 容</h1>
        </div>
        <div class="renting_content_wrap_img">
            <img src="../../../assets/renting/img_zufang.png" alt />
        </div>
      </div>
    </div>
    <div class="serve_show">
      <div class="show_wrap">
        <div class="show_title">
          <h1>产 品 展 示</h1>
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