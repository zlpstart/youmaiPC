<template>
  <div class="about">
    <div class="about_top">
      <navMenu />
    </div>
    <div class="about_content">
      <div class="backdrop">
        <h1>背 景 介 绍</h1>
        <p>江苏有麦科技服务有限公司成立于2020年4月17日。由原南京电商产业园孵化团队全资成立，其将与软件谷现有的科创城共同打造“有麦电商视频产业园”。现公司以打造新媒体内容生产基地、网络直播孵化基地等多功能为一体的智慧服务型产业园为主，为创客提供短视频拍摄基地、直播路演基地、众创传媒管理、办公及生活配套设施等服务，专注于从事新媒体产业，基于“互联、流量、智能、数据”发展多元文化的孵化，构筑海量数字内容产业的新媒体从业者与线下企业实现获客、产品销售高效价值变现平台。</p>
      </div>
    </div>
    <div class="about_list">
      <div class="about_wrap">
        <div class="list_box">
          <div class="box_img">
            <img src="../../assets/img_linian.png" alt />
          </div>
          <div class="box_title">
            <h1>企业理念</h1>
          </div>
          <div class="box_list">
            <ul>
              <li>
                <span>成就他人</span>
              </li>
              <li>
                <span>成就自我</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="list_box">
          <div class="box_img">
            <img src="../../assets/img_fuwu.png" alt />
          </div>
          <div class="box_title">
            <h1>服务理念</h1>
          </div>
          <div class="box_list">
            <ul>
              <li>
                <span>创意支持</span>
              </li>
              <li>
                <span>跟随潮流</span>
              </li>
              <li>
                <span>互动链接</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="list_box">
          <div class="box_img">
            <img src='../../assets/img_hexin.png' alt />
          </div>
          <div class="box_title">
            <h1>核心使命</h1>
          </div>
          <div class="box_list">
            <ul>
              <li>
                <span>让您的产品与世界连麦</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="list_box">
          <div class="box_img">
            <img src="../../assets/img_jiazhi.png" alt />
          </div>
          <div class="box_title">
            <h1>价值观</h1>
          </div>
          <div class="box_list">
            <ul>
              <li>
                <span>创意创新</span>
              </li>
              <li>
                <span>开放协作</span>
              </li>
              <li>
                <span>共创共赢</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="advantage">
      <div class="advantage_wrap">
        <div class="advantage_title">
          <h1>我 们 的 优 势</h1>
        </div>
        <div class="advantage_list">
          <div class="advantage_box">
            <div class="advantage_box_img">
              <img src="../../assets/img_zhaunye.png" alt />
            </div>
            <div class="advantage_box_txt">
              <p>专业的技术团队</p>
            </div>
          </div>
          <div class="advantage_box">
            <div class="advantage_box_img">
              <img src="../../assets/img_yitihua.png" alt />
            </div>
            <div class="advantage_box_txt">
              <p>一体化服务平台</p>
            </div>
          </div>
          <div class="advantage_box">
            <div class="advantage_box_img">
              <img src="../../assets/img_yingxiao.png" alt />
            </div>
            <div class="advantage_box_txt">
              <p>全方位整合营销</p>
            </div>
          </div>
          <div class="advantage_box">
            <div class="advantage_box_img">
              <img src="../../assets/img_siwei.png" alt />
            </div>
            <div class="advantage_box_txt">
              <p>网络化制作思维</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about_bottom">
        <footerB />
    </div>
  </div>
</template>

<script>
import navMenu from "../../components/NavMenu/index";
import footerB from '../../components/Footer/index'
import "../../styles/view/About/index.css";

export default {
  name: "about",
  data() {
    return {};
  },
  components: {
    navMenu,
    footerB
  }
};
</script>

<style scoped>
.about_top {
    width: 100%;
    height: 474px;
    background: url('../../assets/banner_aboutus.png');
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.about_content {
    width: 1170px;
    margin: auto;
}
.backdrop {
    width: 100%;
    height: 527px;
    padding: 119px 0;
}
.backdrop h1 {
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
}
.backdrop p {
    margin-top: 47px;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:26px;
}
.about_list {
    width: 100%;
    height:580px;
    background:rgba(244,244,244,1);
    display: flex;
    justify-content: space-between;
    padding-top: 79px;
    padding-bottom: 71px;
}
.about_wrap {
    width: 1170px;
    margin: auto;
    display: flex;
    justify-content: space-between;
}
.list_box {
    width:270px;
    height:430px;
    background:rgba(255,255,255,1);
}
.box_img {
    width: 100%;
    height: 152px;
    background: red;
}
.box_img img {
    width: 100%;
    height: 100%;
}
.box_title {
    width: 100%;
    margin-top: 28px;
}
.box_title h1 {
    font-size:18px;
    font-family:Microsoft YaHei;
    margin-left: 10px;
    font-weight:400;
    color:rgba(62,62,62,1);
    line-height:35px;
}
.box_list {
    width: 100%;
    margin-top: 39px;
}
.box_list ul {
    list-style: initial;
    color: #00AFF0;
}
.box_list ul li span {
    color: black;
}
.box_list ul li {
    margin-left: 30px;
    margin-top: 15px;
}
.box_list ul li span {
  margin-left: -5px;
}
.advantage {
    width: 100%;
    height: 687px;
    padding: 120px 0 113px 0;
}
.advantage_list {
    margin-top: 115px;
    display: flex;
    justify-content: space-between;
}
.advantage_wrap {
    width: 1170px;
    margin: auto;
}
.advantage_title h1 {
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
}
.advantage_box {
    width: 270px;
    text-align: center;
}
.advantage_box_img {
    width: 270px;
    height: 270px;
    background: red;
}
.advantage_box_img img {
    width: 100%;
    height: 100%;
}
.advantage_box_txt p {
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(62,62,62,1);
    margin-top: 27px;
}
</style>