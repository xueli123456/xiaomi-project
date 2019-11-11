<template>
    <div>
        <cart-header></cart-header>
        <cart-empty></cart-empty>
        <cart-list ></cart-list>
        <cart-guess :data="list" @pAll=" goUrl(pid)"></cart-guess>
        <cart-footer  @cAll="shopSelectAll" v-if="cartInfo.products" :data="cartInfo"></cart-footer>
    </div>
</template>
<script>
    import header from '../components/cart/header';
    import empty from '../components/cart/empty';
    import guess from '../components/cart/guess';
    import cartList from "../components/cart/cartList";
    import cartFooter from  '../components/cart/footer'
    import { mapGetters } from 'vuex'
    import productApi from '../apis/productApi'
    export default {
        name: "cart",
        data(){
            return {
                list: []
            }
        },
        components:{
            "cart-header":header,
            "cart-empty":empty,
            "cart-guess":guess,
            "cart-list":cartList,
            "cart-footer":cartFooter
        },
        computed: {
            ...mapGetters({
                cartInfo: 'GETCART'
            })
        },
        methods: {
            /**
             * 页面的数据加载
             **/
            // async _initPageData () {
            //   let data = await cartApi.getCartInfoByUserId()
            //   this.cartInfo = data
            // },
            /**
             * 单选状态的改变
             */
            productSelectAll (pid) {
                console.log(pid)
                // eslint-disable-next-line no-unused-vars
                this.cartInfo.products.every((product) => {
                    return product.checked === true
                })
            },

            /**
             * 增加数量
             * @param sid
             * @param pid
             */
            updateNum ( pid, flag) {
                console.log( pid)
                if (flag === 'add') {
                    this.cartInfo.products[pid].num++
                } else {
                    if (this.cartInfo.products[pid].num <= 1) {
                        this.cartInfo.products[pid].num = 1
                    } else {
                        this.cartInfo.products[pid].num--
                    }
                }
            },
            /**
             * 统计cart总价格
             * @private
             */
            _countCartPrice () {
                let total = 0
                // eslint-disable-next-line no-unused-vars
                this.cartInfo.products.forEach((product, pid) => {
                        if (product.checked) {
                            total += product.price * product.num
                        }
                })

                return total
            },
            async _initPageData () {
                let data = await productApi.getProductList()
                this.list = data
                console.log(data)
            },
            goUrl (i) {
                this.$router.push('/goods?id=' + i)
            }
        },
        beforeMount () {
            // this._initPageData()
            this._initPageData()
            this.$store.dispatch('INITCART')
        },
        mounted () {
            this.$bus.$on('num', this.updateNum)
        },
        watch: {
            cartInfo: {
                // eslint-disable-next-line no-unused-vars
                handler (n) {
                    let total = this._countCartPrice()
                    console.log(total)
                    if (total >= 8000 && this.flag) {
                        this.flag = false
                        console.log('send 100 cent')
                    }
                },
                deep: true
            }
        }
    }
</script>

<style scoped>


</style>