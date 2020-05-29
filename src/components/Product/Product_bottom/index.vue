<template>
  <div>
    <div class="download">
      <div class="download_wrap">
        <div class="title">
          <h1>下 载 关 注</h1>
          <div class="xian"></div>
        </div>
        <div class="download_box">
          <div class="download_wrap_left">
            <div class="download_wrap_left_img">
              <div class="download_wrap_left_img_img"></div>
              <p v-if="$route.path == '/product/serve'">有麦企服公众号</p>
              <p v-if="$route.path == '/product/homeland'">有麦家园公众号</p>
              <p v-if="$route.path == '/product/market'">有麦集市公众号</p>
              <p v-if="$route.path == '/product/mall'">有麦Mall公众号</p>
              <p v-if="$route.path == '/product/exploit'">有麦开发公众号</p>
              <p v-if="$route.path == '/product/renting'">有麦租房公众号</p>
            </div>
            <div class="download_wrap_left_img">
              <div class="download_wrap_left_img_img">
                <img src alt />
              </div>
              <p v-if="$route.path == '/product/serve'">有麦企服APP</p>
              <p v-if="$route.path == '/product/homeland'">有麦家园APP</p>
              <p v-if="$route.path == '/product/market'">有麦集市APP</p>
              <p v-if="$route.path == '/product/mall'">有麦MallAPP</p>
              <p v-if="$route.path == '/product/exploit'">有麦开发APP</p>
              <p v-if="$route.path == '/product/renting'">有麦租房APP</p>
            </div>
          </div>
          <div class="download_wrap_right">
            <div class="download_wrap_right_img">
              <img
                src="../../../assets/img_qifu_mobile (1).png"
                v-if="$route.path == '/product/serve'"
                alt
              />
              <img
                src="../../../assets/img_mobile.png"
                v-if="$route.path == '/product/homeland'"
                alt
              />
              <img
                src="../../../assets/img_mobile (1).png"
                v-if="$route.path == '/product/market'"
                alt
              />
              <img
                src="../../../assets/img_mobile_mall.png"
                v-if="$route.path == '/product/mall'"
                alt
              />
              <img
                src="../../../assets/img_mobile (2).png"
                v-if="$route.path == '/product/exploit'"
                alt
              />
              <img
                src="../../../assets/img_mobile (3).png"
                v-if="$route.path == '/product/renting'"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../styles/components/Product/Product_bottom/index.css";

export default {
  name: "serve_show",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.serve_show {
  width: 100%;
  height: 1174px;
  background: white;
}
.show_wrap {
  width: 1170px;
  margin: auto;
}
.show_title {
  margin-top: 74px;
}
.show_title h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.show_img {
  width: 1170px;
  height: 786px;
  margin-top: 127px;
}
.show_img img {
  width: 100%;
  height: 100%;
}
.download {
  width: 100%;
  height: 749px;
  padding: 116px 0 0 0;
  background: rgba(244, 244, 244, 1);
}
.download_wrap {
  width: 1170px;
  margin: auto;
}
.download_wrap_left {
  width: 50%;
  height: 450px;
  display: flex;
}
.download_wrap_right {
  width: 50%;
  height: 450px;
}
.download_box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
}
.download_wrap h1 {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.download_wrap_right_img {
  width: 304px;
  height: 439px;
  margin-left: 293px;
}
.download_wrap_left_img_img {
  width: 200px;
  height: 200px;
  background: url('../../../assets/erweima.png')no-repeat center center;
  background-size: 100%;
}
.download_wrap_left_img:nth-child(2) {
  margin-left: 30px;
}
.download_wrap_left_img p {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-top: 20px;
  text-align: center;
}
.xian {
  width: 100px;
  height: 2px;
  background: rgba(222, 222, 222, 1);
  margin-top: 10px;
  margin-left: 83px;
}
.title {
  display: flex;
}
</style>