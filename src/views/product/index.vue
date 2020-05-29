<template>
    <div class="product">
        <div :class="{product_top:true,background_Serve:$route.path == '/product/serve',background_Homeland:$route.path == '/product/homeland',background_zufang:$route.path == '/product/renting',background_jishi:$route.path == '/product/market',background_kaifa:$route.path == '/product/exploit',background_mall:$route.path == '/product/mall'}">
            <navMenu />
        </div>
        <router-view />
        <div class="product_bottom">
            <footerB />
        </div>
    </div>
</template>

<script>
import navMenu from '../../components/NavMenu/index'
import footerB from '../../components/Footer/index'
// import product from '../../components/Product/index'
import '../../styles/view/Product/index.css'

export default {
    name:"product",
    data(){
        return {
             
        }
    },
    mounted(){
        console.log(this.$route.path)
    },
    components:{
        navMenu,
        footerB
    }
}
</script>

<style scoped>
.product_top {
    width: 100%;
    height: 474px;
}
/* 企服 */
.background_Serve{
    background: url('../../assets/img_qiye.png')center;
    z-index: 0;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
/* 家园 */
.background_Homeland{
    background: url('../../assets/img_jiayuan.png');
    z-index: 0;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
/* 租房 */
.background_zufang {
    background: url('../../assets/img_zufang.png')center;
    z-index: 0;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
/* 集市 */
.background_jishi {
    z-index: 0;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background: url('../../assets/img_jishi.png') center;
}
/* 开发 */
.background_kaifa {
    z-index: 0;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background: url('../../assets/img_kaifa (1).png');
}
/* mall */
.background_mall {
    z-index: 0;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background: url('../../assets/img_mall.png');
}
.product_bottom {
    width: 100%;
}
</style>