<template>
  <div class="serve">
    <productTop />
    <div class="serve_about">
      <div class="about_title">
        <h1>有 关 有 麦 企 服</h1>
      </div>
      <div class="about_content">
        <div class="content_left">
          <p>有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集</p>
          <p>有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集</p>
          <p>有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集有麦企服是集</p>
        </div>
        <div class="content_right"></div>
      </div>
    </div>
    <div class="serve_details">
      <div class="details_wrap">
        <h1>有 麦 企 服 内 容</h1>
        <div class="details_maxbox">
          <div class="details_left">
            <img src="../../../assets/serve/img_qifu.png" alt />
          </div>
          <div class="details_right">
            <div class="right_boxs">
              <div class="boxs_img">
                <img src="../../../assets/serve/con_icon_touzi_nor.png" alt />
              </div>
              <div class="boxs_txt">
                <h1>投融资服务</h1>
                <p>为更好地帮助企业创业项目发展，为创业者搭建各种投融资渠道，积极引进投资机构，发挥创业项目与投资机构间的沟通桥梁作用</p>
              </div>
            </div>
            <div class="right_boxs">
              <div class="boxs_img">
                <img src="../../../assets/serve/con_icon_gongguan.png" alt />
              </div>
              <div class="boxs_txt">
                <h1>市场公关</h1>
                <p>协助孵化企业树立企业形象，向政府，新闻媒体等推荐孵化企业，推荐申请各种创新计划和国家中小型企业创新基金等。</p>
              </div>
            </div>
            <div class="right_boxs">
              <div class="boxs_img">
                <img src="../../../assets/serve/con_icon_gongshang.png" alt />
              </div>
              <div class="boxs_txt">
                <h1>工商服务</h1>
                <p>为企业提供工商注册，工商变更，证照年检，异常处理税务代办等工商服务。</p>
              </div>
            </div>
            <div class="right_boxs">
              <div class="boxs_img">
                <img src="../../../assets/serve/con_icon_jishu .png" alt />
              </div>
              <div class="boxs_txt">
                <h1>技术服务</h1>
                <p>提供域名注册，网页制作和发布，电子邮件数据备份，访问统计，技术试验，技术检测等技术创新与服务。</p>
              </div>
            </div>
            <div class="right_boxs">
              <div class="boxs_img">
                <img src="../../../assets/serve/con_icon_renlibu.png" alt />
              </div>
              <div class="boxs_txt">
                <h1>人力资源</h1>
                <p>通过培训班，研讨会等方式培训创业者及员工，协助企业的制定人力资源发展计划和招聘新员工。</p>
              </div>
            </div>
            <div class="right_boxs">
              <div class="boxs_img">
                <img src="../../../assets/serve/con_icon_zhengce.png" alt />
              </div>
              <div class="boxs_txt">
                <h1>政策导入</h1>
                <p>帮助孵化企业落实财税，创新，人才，金融，外贸，海关等优惠政策。</p>
              </div>
            </div>
            <div class="right_boxs">
              <div class="boxs_img">
                <img src="../../../assets/serve/con_icon_falv.png" alt />
              </div>
              <div class="boxs_txt">
                <h1>法律事务</h1>
                <p>提供合同撰写修改，法律文书起草，案件委托，法律法规，律师律所查询等法律服务。</p>
              </div>
            </div>
            <div class="right_boxs">
              <div class="boxs_img">
                <img src="../../../assets/serve/con_icon_zhishi.png" alt />
              </div>
              <div class="boxs_txt">
                <h1>知识产权服务</h1>
                <p>协助孵化企业办理专利，商标，版权等的代理，转让，登记，鉴定，评估，认定，咨询，检索等活动。</p>
              </div>
            </div>
            <div class="right_boxs">
              <div class="boxs_img">
                <img src="../../../assets/serve/caiwuguanli (1).png" alt />
              </div>
              <div class="boxs_txt">
                <h1>财务管理</h1>
                <p>提供风险评估，资本预算，财务报表分析，长期计划与财务预测服务。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="serve_show">
      <div class="show_wrap">
        <div class="show_title">
          <h1>产 品 展 示</h1>
        </div>
        <div class="show_img">
          <img src="../../../assets/serve/img_product.png" alt />
        </div>
      </div>
    </div>
    <productBottom />
  </div>
</template>

<script>
import "../../../styles/view/Product/children/serve.css";
import productBottom from "../../../components/Product/Product_bottom/index.vue";
import productTop from "../../../components/Product/Product_top/index";

export default {
  name: "serve",
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