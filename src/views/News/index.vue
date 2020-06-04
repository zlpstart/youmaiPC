<template>
  <div class="news">
    <div class="news_top">
      <navMenu />
    </div>
    <div class="news_content">
      <div class="content_left">
        <h1>{{showNews.title}}</h1>
        <div class="content_wrap">
          <p>{{showNews.create_time}}</p>
          <div class="wrap_img">
            <img :src="showNews.pc_img_small" alt />
          </div>
          <div class="wrap_txt">
            <p
              v-for="item in showNews.content"
              :key="item"
            >{{item}}</p>
          </div>
        </div>
        <div class="wrap_bottom">
          <p>
            关键词：
            <span>有麦电商</span>
          </p>
        </div>
      </div>
      <div class="content_news_right">
        <h1>其他新闻</h1>
        <div
          class="right_box"
          @click="getNewsPush(item.id)"
          v-for="item in newsList"
          :key="item.id"
        >
          <div class="news_box_img">
            <img :src="item.pc_img_big" alt />
          </div>
          <div class="box_txt">
            <h1>{{item.title}}</h1>
            <p>{{item.create_time}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="news_bottom">
      <footerB />
    </div>
  </div>
</template>

<script>
import "../../styles/view/News/index.css";
import { getNews } from "../../api/News/index";
import navMenu from "../../components/NavMenu/index";
import footerB from "../../components/Footer/index";
import { getNewsContent } from "../../api/News/index";

export default {
  name: "news",
  data() {
    return {
      showNews: {},
      newsList: [],
      timer: ""
    };
  },
  mounted() {
    getNews().then(res => {
      this.showNews = res.data.data.recommend;
      this.newsList = res.data.data.Norecommend;
    });
  },
  methods: {
    getNewsPush(e) {
      const para = {
        id: e
      };
      let a = JSON.stringify(para);
      getNewsContent(a).then(res => {
        console.log(res)
        this.showNews = res.data.data;
      })
    }
  },
  components: {
    navMenu,
    footerB
  }
};
</script>

<style scoped>
.news {
  width: 100%;
  height: 100%;
}
.news_top {
  width: 100%;
  height: 473px;
  background: url("../../assets/banner_news.png");
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.news_content {
  width: 1170px;
  margin: auto;
  margin-top: 115px;
  display: flex;
  justify-content: space-between;
}
.content_left {
  width: 770px;
}
.content_left h1 {
  font-size: 30px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(62, 62, 62, 1);
}
.content_wrap {
  width: 770px;
  margin-top: 37px;
  padding-bottom: 92px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.content_wrap p {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(102, 102, 102, 1);
}
.wrap_img {
  width: 100%;
  height: 460px;
  margin-top: 19px;
}
.wrap_img img {
  width: 100%;
  height: 100%;
}
.wrap_txt {
  margin-top: 37px;
}
.wrap_txt p {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(62, 62, 62, 1);
  line-height: 32px;
  text-indent: 35px;
}
.wrap_bottom {
  margin-bottom: 140px;
}
.wrap_bottom p {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(62, 62, 62, 1);
  margin-top: 38px;
  line-height: 32px;
}
.wrap_bottom span {
  width: 38px;
  color: #00aff0;
}
.content_news_right {
  width: 341px;
  margin-top: 28px;
}
.content_news_right {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(62, 62, 62, 1);
  line-height: 28px;
}
.right_box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  cursor: pointer;
}
.right_box:nth-child(2) {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 47px;
}
.news_box_img {
  width: 149px;
  height: 108px;
}
.news_box_img img {
  width: 100%;
  height: 100%;
}
.box_txt {
  width: 162px;
}
.box_txt h1 {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(62, 62, 62, 1);
  line-height: 28px;
}
.box_txt p {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 35px;
  margin-top: 27px;
}
.news_bottom {
  width: 100%;
}
</style>