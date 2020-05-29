<template>
  <div class="serve_li">
    <div class="li_box">
      <div class="box_img">
        <img src="../../../assets/Product_top/chanye_icon_zhihui.png" alt />
      </div>
      <div class="box_txt">
        <h1>智慧</h1>
        <p>立足于客户特色和需求本身，紧随潮流，提供个性化服务。</p>
      </div>
    </div>
    <div class="li_box">
      <div class="box_img">
        <img src="../../../assets/Product_top/chanye_icon_gaoxiao.png" alt />
      </div>
      <div class="box_txt">
        <h1>高效</h1>
        <p>充分利用互联网技术，构建响应快、动态化、全要素的创业服务平台。</p>
      </div>
    </div>
    <div class="li_box">
      <div class="box_img">
        <img src="../../../assets/Product_top/chanye_icon_lianjie.png" alt />
      </div>
      <div class="box_txt">
        <h1>连接</h1>
        <p>成为众创新媒体及电商创客人才与思想的聚成地。</p>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../styles/components/Product/Product_top/index.css'

export default {};
</script>

<style scoped>
.serve_li {
    width:1110px;
    height:260px;
    background:rgba(255,255,255,1);
    box-shadow:0px 8px 32px 0px rgba(0, 0, 0, 0.06);
        position: absolute;
    top: 349px;
    left: 50%;
    transform: translate(-50%,0);
    margin: auto;
    display: flex;
    justify-content: space-between;
}
.li_box {
    width: 370px;
    height: 133px;
    margin-top: 60px;
    border-right: 1px solid #DEDEDE; 
    display: flex;
    justify-content: space-between;
    padding: 26px 57px 37px 35px;
}
.li_box:nth-last-child(1){
  border: none;
}
.box_img {
    width: 47px;
    height: 47px;
    margin-top: 18px;
}
.box_img img {
    width: 100%;
    height: 100%;
}
.box_txt h1 {
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.box_txt p {
    font-size:13px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:18px;
    margin-top: 20px;
}
.box_txt {
  width: 195px;
}
</style>