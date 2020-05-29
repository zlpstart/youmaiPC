<template>
  <div>
    <div class="footerB">
      <div class="footer_wrap">
        <div class="footer_box">
          <h1>关于我们</h1>
          <p>为创客提供短视频拍摄基地、直播路演基地、众创传媒管理、办公及生活配套设施等服务，专注于从事新媒体产业</p>
          <img src="../../assets/img_logo_yewei.png" alt="">
        </div>
        <div class="footer_boxT">
          <h1>我们的产品</h1>
          <ul>
            <li>
              <router-link to>有麦企服</router-link>
            </li>
            <li>
              <router-link to>有麦家园</router-link>
            </li>
            <li>
              <router-link to>有麦集市</router-link>
            </li>
            <li>
              <router-link to>有麦MALL</router-link>
            </li>
            <li>
              <router-link to>有麦开发</router-link>
            </li>
            <li>
              <router-link to>有麦租房</router-link>
            </li>
          </ul>
        </div>
        <div class="footer_boxTT">
          <h1>有麦产业园</h1>
          <div class="footer_minbox">
            <div class="footer_img">
              <img src="../../assets/img_ruanjian.png" alt />
            </div>
            <div class="footer_p">
              <p>南京科创城</p>
              <p>江苏省南京市雨花台区大周路</p>
            </div>
          </div>
          <div class="footer_minbox">
            <div class="footer_img">
              <img src="../../assets/img_xinyi.png" alt />
            </div>
            <div class="footer_p">
              <p>（明发）新沂软件谷</p>
              <p>江苏省新沂市</p>
            </div>
          </div>
        </div>
        <div class="footer_contact">
          <h2>帮助与支持</h2>
          <h1>025-57796391</h1>
          <div class="footer_input">
            <input type="text" placeholder="Email" />
            <button>→</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_wrapbox">
      <div class="footer_bottom">
        <p>© 苏ICP备20030431号</p>
        <ul>
          <li>
            <router-link to="/news">新闻</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/industrial">产业园</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/recruitment">官方招聘</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/about">关于我们</router-link>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import '../../styles/components/Footer/index.css'

export default {
  name: "footerB",
  data() {
    return {};
  }
};
</script>

<style scoped>
.footerB {
    width:100%;
    height:369px;
    background:rgba(38,38,38,1);
    padding-top: 79px;
}
.footer_wrap {
    width: 1170px;
    margin: auto;
    display: flex;
    justify-content: space-between;
}
.footer_box {
    width: 269px;
}
.footer_box img {
  margin-top: 97px;
}
.footer_box h1 {
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(230,230,230,1);
    line-height:24px;
}
.footer_box p {
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(154,154,154,1);
    line-height:24px;
    margin-top: 27px;
}
.footer_boxT ul {
    margin-top: 27px;
}
.footer_boxT h1{
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(230,230,230,1);
}
.footer_boxT ul li a {
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(154,154,154,1);
    line-height:24px;
}
.footer_boxTT {
    color: white;
}
.footer_boxTT h1 {
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(230,230,230,1);
    line-height:24px;
}
.footer_minbox {
    margin-top: 27px;
    display: flex;
}
.footer_p {
    margin-left: 20px;
}
.footer_p p {
  font-size:14px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(230,230,230,1);
  line-height:24px;
}
.footer_p p:nth-child(2){
    margin-top: 10px;
}
.footer_minbox:nth-child(1){
    border-bottom: 1px #3E3E3E solid;
}
.footer_contact h2 {
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(230,230,230,1);
    line-height:24px;
}
.footer_contact h1 {
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:26px;
    margin-top: 27px;
}
.footer_input {
    display: flex;
    justify-content: center;
    margin-top: 22px;
}
.footer_input input {
    width:155px;
    height:36px;
    background:rgba(63,63,63,1);
    border-radius:2px;
    border: none;
    padding-left: 20px;
}
.footer_input button {
    width:45px;
    height:36px;
    color: white;
    background:rgba(0,175,240,1);
    border-radius:2px;
    border: none;
}
.footer_bottom ul li {
    float: left;
    margin-left: 20px;
}
.footer_bottom ul {
    margin-top: 35px;
}
.footer_wrapbox {
    width: 100%;
    line-height: 93px;
    background: #262626;
    border-top: 1px solid #3E3E3E;
}
.footer_bottom {
    width: 1170px;
    margin: auto;
    font-size:12px;
    height: 93px;
    line-height: 93px;
    font-family:Oxygen;
    font-weight:400;
    color:rgba(154,154,154,1);
    line-height:24px;
    background: #262626;
}
.footer_bottom p {
    float: left;
    margin-top: 35px;
}
.footer_bottom ul {
    float: left;
    margin-left: 327px;
    background: #262626;
}
.clear {
    clear: both;
}
.footer_img {
    width:70px;
    height:59px;
}
.footer_img img {
  width: 100%;
  height: 100%;
}
.footer_bottom a {
  font-size:12px;
  font-family:Oxygen;
  font-weight:400;
  color:rgba(154,154,154,1);
  line-height:24px;
}
</style>