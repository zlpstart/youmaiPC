<template>
  <div class="industrial">
    <div class="industrial_top">
      <navMenu />
    </div>
    <div class="industrial_content">
      <div class="content_box">
        <div class="content_box_txt">
          <div class="xian"></div>
          <h1>南京科创城</h1>
        </div>
      </div>
      <div class="environment">
        <div
          :class="{environment_left:true,environment_left_img1:swiper == 0,environment_left_img2:swiper == 1}"
        >
          <div class="environment_left_btnL" @click="rm"><</div>
          <div class="environment_left_btnR" @click="add">></div>
        </div>
        <div class="environment_right">
          <h1>办公环境</h1>
          <p>集接待、会议、拍摄为一体，打造复合型新概念办公空间。明快自在的接待区、自然温馨的会议室，丰富多元的拍摄区。在各自扮演者重要角色功能的同时，又制造着互动的惊喜。大气自然的装饰，配合简洁明快的色调，凸显朴实而现代的工业风格。</p>
        </div>
      </div>
      <div class="shoot">
        <div class="shoot_box">
          <div class="shoot_right">
            <div class="right_title">
              <h1>拍摄基地</h1>
            </div>
            <div class="right_txt">
              <p>有麦直播基地位于软件谷科创城D1栋内，该基地为有麦平台会员提供共享拍摄道具及场地，基地内有丰富多样的拍摄器材，短视频制作主题房间与创意交流茶吧空间。经过专业筛选，满足各类拍摄需求。</p>
            </div>
          </div>
        </div>
        <div class="shoot_box">
          <div class="shoot_left">
            <div class="right_title">
              <h1>拍摄基地</h1>
            </div>
            <div class="right_txt">
              <p>每个直播间都配备了可以满足直播需求的灯光、网络、制冷采暖设施，免去了传统直播间后期基础搭建环节。直播团队或个人主播可以直接拎包入驻，并且根据自身调性要求进行个性化软装。</p>
              <p>除了直播间，基地还有丰富百变的场景棚，方便主播、短视频达人拍摄有趣的vlog、短视频内容。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="leisure">
        <div class="leisure_box">
          <h1>休闲区</h1>
          <p>休闲空间作为缓解员工紧张工作的休息放松、交流娱乐区域，是办公空间人性化标志设计之一。宽敞舒适的空间搭配丰富的绿化、充足的阳光或柔和的人工光源，营造轻松、愉悦的环境，这对于从事创造性工作的员工来说不无裨益。</p>
        </div>
        <div class="leisure_img">
          <img src="../../assets/img_xiuxian_1.png" alt />
        </div>
        <div class="leisure_img">
          <img src="../../assets/img_xiuxian_2.png" alt />
        </div>
        <div class="leisure_img">
          <img src="../../assets/img_xiuxian_3.png" alt />
        </div>
      </div>
    </div>
    <footerB />
  </div>
</template>

<script>
import navMenu from "../../components/NavMenu/index";
import footerB from "../../components/Footer/index";
import "../../styles/view/Industrial/index.css";

export default {
  name: "industrial",
  data() {
    return {
      swiper: 0
    };
  },
  components: {
    navMenu,
    footerB
  },
  methods: {
    swipers() {
      let timer = setInterval(() => {
        this.swiper++;
        if (this.swiper >= 2) {
          this.swiper = 0;
        }
      }, 5000);
    },
    rm() {
      this.swiper--;
      if (this.swiper < 0) {
        this.swiper = 1;
      }
    },
    add() {
      this.swiper++;
      if (this.swiper > 1) {
        this.swiper = 0;
      }
    }
  },
  mounted() {
    this.swipers();
  }
};
</script>

<style scoped>
.industrial {
  width: 100%;
  height: 100%;
}
.industrial >>> .el-dropdown-menu {
  background: rgba(0, 0, 0, 0) !important;
}
.industrial_top {
  width: 100%;
  height: 474px;
  background: url("../../assets/img_chanye (1).png");
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.industrial_content {
  width: 1170px;
  margin: auto;
}
.content_box {
  width: 100%;
  height: 566px;
  margin-top: 100px;
  background: url("../../assets/img_kechuang (3).png") no-repeat;
  background-size: 100%;
  position: relative;
}
.environment {
  width: 100%;
  height: 420px;
  margin-top: 40px;
  display: flex;
}
.environment_left {
  width: 50%;
  height: 100%;
  background-size: 100%;
  position: relative;
}
.environment_left_btnL {
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  cursor: pointer;
  position: absolute;
  color: white;
  top: 50%;
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  transform: translate(0, -50%);
}
.environment_left_btnR {
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  cursor: pointer;
  position: absolute;
  color: white;
  top: 50%;
  background: rgba(0, 0, 0, 0.7);
  right: 0;
  transform: translate(0, -50%);
}
.environment_left_btnL:hover {
  background: white;
  color: black;
  transition: 1s all;
}
.environment_left_btnR:hover {
  background: white;
  color: black;
  transition: 1s all;
}
.environment_left_img1 {
  background: url("../../assets/img_huanjing.png") no-repeat;
}
.environment_left_img2 {
  background: url("../../assets/img_huanjing (1).png") no-repeat;
}

.environment_right {
  width: 50%;
  height: 100%;
  padding: 49px 47px 20px 30px;
}
.environment_right h1 {
  font-size: 30px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.environment_right p {
  margin-top: 60px;
  font-size: 13px;
  line-height: 17px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.shoot {
  width: 100%;
  height: 1000px;
  margin-top: 42px;
}
.shoot_box:nth-child(1) {
  width: 100%;
  height: 50%;
  background: url("../../assets/img_jidi_1.png");
}
.shoot_box:nth-child(2) {
  width: 100%;
  height: 50%;
  background: url("../../assets/img_jidi_2.png");
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.shoot_right {
  width: 387px;
  height: 500px;
  background: rgba(0, 0, 0, 0.7);
  float: right;
}
.right_title {
  width: 120px;
  height: 134px;
  line-height: 134px;
  margin-left: 206px;
  border-bottom: 1px solid #ffffff;
}
.right_title h1 {
  font-size: 30px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.right_title p {
  font-size: 14px;
  font-family: SimSun;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 132px;
}
.right_txt {
  width: 338px;
  height: 132px;
  font-size: 14px;
  font-family: SimSun;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.right_txt p:nth-child(1) {
  font-size: 14px;
  font-family: SimSun;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-left: 30px;
  margin-top: 48px;
  line-height: 18px;
}
.right_txt p:nth-child(2) {
  font-size: 14px;
  font-family: SimSun;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-left: 30px;
  margin-top: 28px;
  line-height: 18px;
}
.shoot_left {
  width: 387px;
  height: 500px;
  background: rgba(0, 0, 0, 0.7);
  float: left;
}
.leisure {
  width: 100%;
  height: 840px;
  margin-top: 38px;
  margin-bottom: 100px;
}
.leisure_box {
  width: 50%;
  height: 420px;
  float: left;
  padding: 42px 34px 42px 33px;
}
.leisure_box h1 {
  font-size: 30px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(37, 41, 43, 1);
}
.leisure_box p {
  font-size: 13px;
  font-family: Myriad Pro;
  font-weight: 400;
  color: rgba(135, 141, 146, 1);
  line-height: 20px;
  margin-top: 51px;
}
.leisure_img {
  width: 50%;
  height: 420px;
  float: left;
  background: seagreen;
}
.leisure_img img {
  width: 100%;
  height: 100%;
}
.content_box_txt {
  width: 280px;
  height: 175px;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0;
}
.xian {
  width: 109px;
  height: 1px;
  background: rgba(255, 255, 255, 1);
  margin-left: 45px;
  margin-top: 63px;
}
.content_box_txt h1 {
  font-size: 30px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 36px;
  margin-left: 45px;
}
</style>