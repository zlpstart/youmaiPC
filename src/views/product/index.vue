<template>
    <div class="product">
        <div class="product_top">
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
    components:{
        navMenu,
        footerB
    }
}
</script>