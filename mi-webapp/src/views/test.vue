<!--&lt;!&ndash;&lt;!&ndash;<template>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;    <div>分类</div>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;</template>&ndash;&gt;&ndash;&gt;-->

<!--&lt;!&ndash;&lt;!&ndash;<script>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;    export default {&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        name: "category"&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;    }&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;</script>&ndash;&gt;&ndash;&gt;-->

<!--&lt;!&ndash;&lt;!&ndash;<style scoped>&ndash;&gt;&ndash;&gt;-->

<!--&lt;!&ndash;&lt;!&ndash;</style>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="layout">&ndash;&gt;-->

<!--&lt;!&ndash;        &lt;!&ndash; S tab &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="tab">&ndash;&gt;-->
<!--&lt;!&ndash;            <div :key="index" v-for="(item, index) in tabList" :class="['tab-item']">&ndash;&gt;-->
<!--&lt;!&ndash;                <router-link to="" :class="{'link':index == pageNum}">&ndash;&gt;-->
<!--&lt;!&ndash;                    {{item}}&ndash;&gt;-->
<!--&lt;!&ndash;                </router-link>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        &lt;!&ndash; E tab &ndash;&gt;&ndash;&gt;-->

<!--&lt;!&ndash;        &lt;!&ndash; S 内容区域 &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="content1">&ndash;&gt;-->

<!--&lt;!&ndash;            &lt;!&ndash; S 左侧边栏 &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="menu-wrapper" ref="menuWrapper">&ndash;&gt;-->
<!--&lt;!&ndash;                <ul>&ndash;&gt;-->
<!--&lt;!&ndash;                    <li v-for="(item, index) in goodList" class="menu-item border-1px" :class="{'current':currentIndex === index}"&ndash;&gt;-->
<!--&lt;!&ndash;                        @click="selectMenu(index, $event)" :key="index">&ndash;&gt;-->
<!--&lt;!&ndash;                <span class="text">&ndash;&gt;-->
<!--&lt;!&ndash;                  <span  class=" icon" ></span>{{item.title}}&ndash;&gt;-->
<!--&lt;!&ndash;                </span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </li>&ndash;&gt;-->
<!--&lt;!&ndash;                </ul>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            &lt;!&ndash; E 左侧边栏 &ndash;&gt;&ndash;&gt;-->

<!--&lt;!&ndash;            &lt;!&ndash; S 右侧边栏 &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="foods-wrapper" ref="foodWrapper">&ndash;&gt;-->
<!--&lt;!&ndash;                <ul>&ndash;&gt;-->
<!--&lt;!&ndash;                    <li v-for="(item,call) in goodList" class="food-list food-list-hook" :key="call">&ndash;&gt;-->
<!--&lt;!&ndash;                        <h1 class="title">{{item.name}}</h1>&ndash;&gt;-->
<!--&lt;!&ndash;                        <ul>&ndash;&gt;-->
<!--&lt;!&ndash;                            <li v-for="(food,inl) in item.foods" class="food-item"  :key="inl">&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="icon">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <img :src="food.icon" alt="" width="57">&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="content">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <h2 class="name">{{food.name}}</h2>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <p class="desc">{{food.description}}</p>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="extra">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <span class="count">月售{{food.sellCount}}</span><span class="count">好评{{food.rating}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="price">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <span class="now">￥{{food.price}}</span><span class="old"&ndash;&gt;-->
<!--&lt;!&ndash;                                                                                      v-show="food.oldPrice">￥{{food.oldPrice}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="cartControl-wrapper">&ndash;&gt;-->
<!--&lt;!&ndash;                                        &lt;!&ndash; <cartControl :food="food" @increment="incrementTotal"></cartControl> &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </li>&ndash;&gt;-->
<!--&lt;!&ndash;                        </ul>&ndash;&gt;-->
<!--&lt;!&ndash;                    </li>&ndash;&gt;-->
<!--&lt;!&ndash;                </ul>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            &lt;!&ndash; E 右侧边栏 &ndash;&gt;&ndash;&gt;-->

<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        &lt;!&ndash; E 内容区域 &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;    import categoryApi from "../apis/categoryApi";&ndash;&gt;-->
<!--&lt;!&ndash;    import BScroll from 'better-scroll' // 使用better-scrol实现滑动&ndash;&gt;-->
<!--&lt;!&ndash;    export default {&ndash;&gt;-->
<!--&lt;!&ndash;        data () {&ndash;&gt;-->
<!--&lt;!&ndash;            return {&ndash;&gt;-->
<!--&lt;!&ndash;                tabList: ['列表', '详情'],&ndash;&gt;-->
<!--&lt;!&ndash;                pageNum: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                listHeight: [],&ndash;&gt;-->
<!--&lt;!&ndash;                scrolly: 0, // 滚动处始值&ndash;&gt;-->
<!--&lt;!&ndash;                goodList:0 // 模拟一些假数据&ndash;&gt;-->
<!--&lt;!&ndash;            }&ndash;&gt;-->
<!--&lt;!&ndash;        },&ndash;&gt;-->
<!--&lt;!&ndash;        created () {&ndash;&gt;-->
<!--&lt;!&ndash;            // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染&ndash;&gt;-->

<!--&lt;!&ndash;                this._initPageData()&ndash;&gt;-->
<!--&lt;!&ndash;                // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染&ndash;&gt;-->

<!--&lt;!&ndash;            this.$nextTick(()=> {&ndash;&gt;-->
<!--&lt;!&ndash;                this._initScroll()&ndash;&gt;-->
<!--&lt;!&ndash;                this._calculateHeight()&ndash;&gt;-->
<!--&lt;!&ndash;            })&ndash;&gt;-->

<!--&lt;!&ndash;            //this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']&ndash;&gt;-->
<!--&lt;!&ndash;        },&ndash;&gt;-->
<!--&lt;!&ndash;        computed: {&ndash;&gt;-->
<!--&lt;!&ndash;            currentIndex () { //计算到达哪个区域的区间的时候的对应的索引值&ndash;&gt;-->
<!--&lt;!&ndash;                for(let i = 0; i < this.listHeight.length; i++) {&ndash;&gt;-->
<!--&lt;!&ndash;                    let height = this.listHeight[i] //当前menu子块的高度&ndash;&gt;-->
<!--&lt;!&ndash;                    let height2 = this.listHeight[i+1] //下一个menu子块的高度&ndash;&gt;-->
<!--&lt;!&ndash;                    //滚动到底部的时候,height2为undefined,需要考虑这种情况&ndash;&gt;-->
<!--&lt;!&ndash;                    //需要确定是在两个menu子块的高度区间&ndash;&gt;-->
<!--&lt;!&ndash;                    if (!height2 || (this.scrolly >= height && this.scrolly < height2)) {&ndash;&gt;-->
<!--&lt;!&ndash;                        return i //返回这个menu子块的索引&ndash;&gt;-->
<!--&lt;!&ndash;                    }&ndash;&gt;-->
<!--&lt;!&ndash;                }&ndash;&gt;-->
<!--&lt;!&ndash;                return 0&ndash;&gt;-->
<!--&lt;!&ndash;            }&ndash;&gt;-->
<!--&lt;!&ndash;        },&ndash;&gt;-->
<!--&lt;!&ndash;        methods: {&ndash;&gt;-->
<!--&lt;!&ndash;            async _initPageData () {&ndash;&gt;-->
<!--&lt;!&ndash;                let data = await categoryApi.getCategoryInfo()&ndash;&gt;-->
<!--&lt;!&ndash;                this.goodList = data.goodlist&ndash;&gt;-->
<!--&lt;!&ndash;                // eslint-disable-next-line no-console&ndash;&gt;-->
<!--&lt;!&ndash;                console.log(data);&ndash;&gt;-->
<!--&lt;!&ndash;            },&ndash;&gt;-->
<!--&lt;!&ndash;            //初始化scroll区域&ndash;&gt;-->
<!--&lt;!&ndash;            _initScroll () {&ndash;&gt;-->
<!--&lt;!&ndash;                this.menuScroll = new BScroll(this.$refs.menuWrapper, {&ndash;&gt;-->
<!--&lt;!&ndash;                    click: true //结合BScroll的接口使用,是否将click事件传递,默认被拦截了&ndash;&gt;-->
<!--&lt;!&ndash;                })&ndash;&gt;-->
<!--&lt;!&ndash;                this.foodScroll = new BScroll(this.$refs.foodWrapper, {&ndash;&gt;-->
<!--&lt;!&ndash;                    probeType: 3, //结合BScroll的接口使用,3实时派发scroll事件，探针的作用&ndash;&gt;-->
<!--&lt;!&ndash;                    click: true&ndash;&gt;-->
<!--&lt;!&ndash;                })&ndash;&gt;-->
<!--&lt;!&ndash;                //结合BScroll的接口使用,监听scroll事件(实时派发的),并获取鼠标坐标，当滚动时能实时暴露出scroll&ndash;&gt;-->
<!--&lt;!&ndash;                this.foodScroll.on('scroll', (pos) => {&ndash;&gt;-->
<!--&lt;!&ndash;                    this.scrolly = Math.abs(Math.round(pos.y))  //滚动坐标会出现负的,并且是小数,所以需要处理一下，实时取得scrollY&ndash;&gt;-->
<!--&lt;!&ndash;                })&ndash;&gt;-->
<!--&lt;!&ndash;            },&ndash;&gt;-->
<!--&lt;!&ndash;            _calculateHeight() {&ndash;&gt;-->
<!--&lt;!&ndash;                let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook')  //获取每一个food的dom对象&ndash;&gt;-->
<!--&lt;!&ndash;                let height = 0;&ndash;&gt;-->
<!--&lt;!&ndash;               &ndash;&gt;-->
<!--&lt;!&ndash;                this.listHeight.push(height)  //初始化第一个高度为0&ndash;&gt;-->
<!--&lt;!&ndash;                for (let i = 0; i < foodList.length; i++) {&ndash;&gt;-->
<!--&lt;!&ndash;                    let item = foodList[i] //每一个item都是刚才获取的food的每一个dom&ndash;&gt;-->
<!--&lt;!&ndash;                    height += item.clientHeight //主要是为了获取每一个foods内部块的高度&ndash;&gt;-->
<!--&lt;!&ndash;                    this.listHeight.push(height)&ndash;&gt;-->
<!--&lt;!&ndash;                }&ndash;&gt;-->
<!--&lt;!&ndash;            },&ndash;&gt;-->
<!--&lt;!&ndash;            selectMenu (index, event) {&ndash;&gt;-->
<!--&lt;!&ndash;                if (!event._constructed) { //去掉自带的click事件点击，即pc端直接返回&ndash;&gt;-->
<!--&lt;!&ndash;                    return;&ndash;&gt;-->
<!--&lt;!&ndash;                }&ndash;&gt;-->
<!--&lt;!&ndash;                // debugger;&ndash;&gt;-->
<!--&lt;!&ndash;                let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');&ndash;&gt;-->
<!--&lt;!&ndash;                let el = foodList[index];&ndash;&gt;-->
<!--&lt;!&ndash;                //类似jump to的功能,通过这个方法,跳转到指定的dom&ndash;&gt;-->
<!--&lt;!&ndash;                this.foodScroll.scrollToElement(el, 300);&ndash;&gt;-->
<!--&lt;!&ndash;            }&ndash;&gt;-->
<!--&lt;!&ndash;        }&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;<style lang="scss" scoped>&ndash;&gt;-->
<!--&lt;!&ndash;    .layout {&ndash;&gt;-->
<!--&lt;!&ndash;        width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;        .tab {&ndash;&gt;-->
<!--&lt;!&ndash;            width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;            height: 40px;&ndash;&gt;-->
<!--&lt;!&ndash;            display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;            background-color: skyblue;&ndash;&gt;-->
<!--&lt;!&ndash;            .tab-item {&ndash;&gt;-->
<!--&lt;!&ndash;                flex: 1;&ndash;&gt;-->
<!--&lt;!&ndash;                align-self: center; // 弹性子元素剧中&ndash;&gt;-->
<!--&lt;!&ndash;                text-align: center;&ndash;&gt;-->
<!--&lt;!&ndash;                a {&ndash;&gt;-->
<!--&lt;!&ndash;                    color: black;&ndash;&gt;-->
<!--&lt;!&ndash;                    text-decoration: none;&ndash;&gt;-->
<!--&lt;!&ndash;                    -webkit-tap-highlight-color:rgba(0,0,0,0); // 去除a标签点击时高亮背景&ndash;&gt;-->
<!--&lt;!&ndash;                    &.link {&ndash;&gt;-->
<!--&lt;!&ndash;                        color: red;&ndash;&gt;-->
<!--&lt;!&ndash;                    }&ndash;&gt;-->
<!--&lt;!&ndash;                }&ndash;&gt;-->
<!--&lt;!&ndash;            }&ndash;&gt;-->
<!--&lt;!&ndash;        }&ndash;&gt;-->
<!--&lt;!&ndash;        .content1 {&ndash;&gt;-->
<!--&lt;!&ndash;            display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;            position: absolute;&ndash;&gt;-->
<!--&lt;!&ndash;            top: 44px;&ndash;&gt;-->
<!--&lt;!&ndash;            bottom: 46px;&ndash;&gt;-->
<!--&lt;!&ndash;            width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;            overflow: hidden;&ndash;&gt;-->
<!--&lt;!&ndash;            .menu-wrapper {&ndash;&gt;-->
<!--&lt;!&ndash;                flex: 0 0 80px;&ndash;&gt;-->
<!--&lt;!&ndash;                width: 80px;&ndash;&gt;-->
<!--&lt;!&ndash;                background: #f3f5f7;&ndash;&gt;-->
<!--&lt;!&ndash;                .menu-item {&ndash;&gt;-->
<!--&lt;!&ndash;                    display: table;&ndash;&gt;-->
<!--&lt;!&ndash;                    width: 56px;&ndash;&gt;-->
<!--&lt;!&ndash;                    height: 54px;&ndash;&gt;-->
<!--&lt;!&ndash;                    line-height: 14px;&ndash;&gt;-->
<!--&lt;!&ndash;                    padding: 0 12px;&ndash;&gt;-->
<!--&lt;!&ndash;                    &.current {&ndash;&gt;-->
<!--&lt;!&ndash;                        position: relative;&ndash;&gt;-->
<!--&lt;!&ndash;                        z-index: 10;&ndash;&gt;-->
<!--&lt;!&ndash;                        margin-top: -1px;&ndash;&gt;-->
<!--&lt;!&ndash;                        background: #fff;&ndash;&gt;-->
<!--&lt;!&ndash;                        font-weight: 700;&ndash;&gt;-->
<!--&lt;!&ndash;                        .text {&ndash;&gt;-->
<!--&lt;!&ndash;                            &:after{&ndash;&gt;-->
<!--&lt;!&ndash;                                display: none&ndash;&gt;-->
<!--&lt;!&ndash;                            }&ndash;&gt;-->
<!--&lt;!&ndash;                        }&ndash;&gt;-->
<!--&lt;!&ndash;                    }&ndash;&gt;-->
<!--&lt;!&ndash;                    .icon {&ndash;&gt;-->
<!--&lt;!&ndash;                        display: inline-block;&ndash;&gt;-->
<!--&lt;!&ndash;                        width: 12px;&ndash;&gt;-->
<!--&lt;!&ndash;                        height: 12px;&ndash;&gt;-->
<!--&lt;!&ndash;                        vertical-align: top;&ndash;&gt;-->
<!--&lt;!&ndash;                        margin-right: 4px;&ndash;&gt;-->
<!--&lt;!&ndash;                        background-size: 12px 12px;&ndash;&gt;-->
<!--&lt;!&ndash;                        background-repeat: no-repeat;&ndash;&gt;-->
<!--&lt;!&ndash;                        &.decrease {&ndash;&gt;-->
<!--&lt;!&ndash;                            background-image: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=594559231,2167829292&fm=27&gp=0.jpg);&ndash;&gt;-->
<!--&lt;!&ndash;                        }&ndash;&gt;-->
<!--&lt;!&ndash;                        &.discount {&ndash;&gt;-->
<!--&lt;!&ndash;                            background-image: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3044191397,2911599132&fm=27&gp=0.jpg);&ndash;&gt;-->

<!--&lt;!&ndash;                        }&ndash;&gt;-->
<!--&lt;!&ndash;                        &.guarantee {&ndash;&gt;-->
<!--&lt;!&ndash;                            background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1944805937,3724010146&fm=27&gp=0.jpg);&ndash;&gt;-->

<!--&lt;!&ndash;                        }&ndash;&gt;-->
<!--&lt;!&ndash;                        &.invoice {&ndash;&gt;-->
<!--&lt;!&ndash;                            background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=147015573,3182587356&fm=27&gp=0.jpg);&ndash;&gt;-->

<!--&lt;!&ndash;                        }&ndash;&gt;-->
<!--&lt;!&ndash;                        &.special {&ndash;&gt;-->
<!--&lt;!&ndash;                            background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1046983545,2051560208&fm=27&gp=0.jpg);&ndash;&gt;-->

<!--&lt;!&ndash;                        }&ndash;&gt;-->

<!--&lt;!&ndash;                    }&ndash;&gt;-->
<!--&lt;!&ndash;                    .text {&ndash;&gt;-->
<!--&lt;!&ndash;                        display: table-cell;&ndash;&gt;-->
<!--&lt;!&ndash;                        width: 56px;&ndash;&gt;-->
<!--&lt;!&ndash;                        vertical-align: middle;&ndash;&gt;-->
<!--&lt;!&ndash;                        position: relative;&ndash;&gt;-->
<!--&lt;!&ndash;                        font-size: 12px;&ndash;&gt;-->
<!--&lt;!&ndash;                        &:after {&ndash;&gt;-->
<!--&lt;!&ndash;                            display: block;&ndash;&gt;-->
<!--&lt;!&ndash;                            position: absolute;&ndash;&gt;-->
<!--&lt;!&ndash;                            left: 0;&ndash;&gt;-->
<!--&lt;!&ndash;                            bottom: 0;&ndash;&gt;-->
<!--&lt;!&ndash;                            border-top: 1px solid red;&ndash;&gt;-->
<!--&lt;!&ndash;                            width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;                            content: '';&ndash;&gt;-->
<!--&lt;!&ndash;                        }&ndash;&gt;-->
<!--&lt;!&ndash;                    }&ndash;&gt;-->
<!--&lt;!&ndash;                }&ndash;&gt;-->
<!--&lt;!&ndash;            }&ndash;&gt;-->
<!--&lt;!&ndash;            .foods-wrapper {&ndash;&gt;-->
<!--&lt;!&ndash;                flex: 1;&ndash;&gt;-->
<!--&lt;!&ndash;                .food-list {&ndash;&gt;-->
<!--&lt;!&ndash;                    .title {&ndash;&gt;-->
<!--&lt;!&ndash;                        padding-left: 14px;&ndash;&gt;-->
<!--&lt;!&ndash;                        height: 26px;&ndash;&gt;-->
<!--&lt;!&ndash;                        line-height: 26px;&ndash;&gt;-->
<!--&lt;!&ndash;                        border-left: 2px solid #d9dde1;&ndash;&gt;-->
<!--&lt;!&ndash;                        font-size: 12px;&ndash;&gt;-->
<!--&lt;!&ndash;                        color: rgb(147, 153, 159);&ndash;&gt;-->
<!--&lt;!&ndash;                        background: #f3f5f7;&ndash;&gt;-->
<!--&lt;!&ndash;                    }&ndash;&gt;-->
<!--&lt;!&ndash;                    .food-item {&ndash;&gt;-->
<!--&lt;!&ndash;                        display: flex;&ndash;&gt;-->
<!--&lt;!&ndash;                        margin: 18px;&ndash;&gt;-->
<!--&lt;!&ndash;                        padding-bottom: 18px;&ndash;&gt;-->
<!--&lt;!&ndash;                        &:after {&ndash;&gt;-->
<!--&lt;!&ndash;                            display: block;&ndash;&gt;-->
<!--&lt;!&ndash;                            position: absolute;&ndash;&gt;-->
<!--&lt;!&ndash;                            left: 0;&ndash;&gt;-->
<!--&lt;!&ndash;                            bottom: 0;&ndash;&gt;-->
<!--&lt;!&ndash;                            border-top: 1px solid red;&ndash;&gt;-->
<!--&lt;!&ndash;                            width: 100%;&ndash;&gt;-->
<!--&lt;!&ndash;                            content: '';&ndash;&gt;-->
<!--&lt;!&ndash;                        }&ndash;&gt;-->
<!--&lt;!&ndash;                        &:last-child {&ndash;&gt;-->
<!--&lt;!&ndash;                            &:after{&ndash;&gt;-->
<!--&lt;!&ndash;                                display: none&ndash;&gt;-->
<!--&lt;!&ndash;                            }&ndash;&gt;-->
<!--&lt;!&ndash;                        }&ndash;&gt;-->
<!--&lt;!&ndash;                        .icon {&ndash;&gt;-->
<!--&lt;!&ndash;                            flex: 0 0 57px;&ndash;&gt;-->
<!--&lt;!&ndash;                            margin-right: 10px;&ndash;&gt;-->
<!--&lt;!&ndash;                        }&ndash;&gt;-->
<!--&lt;!&ndash;                        .content {&ndash;&gt;-->
<!--&lt;!&ndash;                            flex: 1;&ndash;&gt;-->
<!--&lt;!&ndash;                            .name {&ndash;&gt;-->
<!--&lt;!&ndash;                                margin: 2px 0 8px 0;&ndash;&gt;-->
<!--&lt;!&ndash;                                font-size: 14px;&ndash;&gt;-->
<!--&lt;!&ndash;                                line-height: 14px;&ndash;&gt;-->
<!--&lt;!&ndash;                                height: 14px;&ndash;&gt;-->
<!--&lt;!&ndash;                                color: rgb(7, 17, 27);&ndash;&gt;-->
<!--&lt;!&ndash;                            }&ndash;&gt;-->
<!--&lt;!&ndash;                            .desc, .extra {&ndash;&gt;-->
<!--&lt;!&ndash;                                font-size: 10px;&ndash;&gt;-->
<!--&lt;!&ndash;                                line-height: 10px;&ndash;&gt;-->
<!--&lt;!&ndash;                                color: rgb(147, 153, 159);&ndash;&gt;-->
<!--&lt;!&ndash;                            }&ndash;&gt;-->
<!--&lt;!&ndash;                            .desc {&ndash;&gt;-->
<!--&lt;!&ndash;                                margin-bottom: 8px;&ndash;&gt;-->
<!--&lt;!&ndash;                                line-height: 12px;&ndash;&gt;-->
<!--&lt;!&ndash;                            }&ndash;&gt;-->
<!--&lt;!&ndash;                            .extra {&ndash;&gt;-->
<!--&lt;!&ndash;                                .count {&ndash;&gt;-->
<!--&lt;!&ndash;                                    margin-right: 12px;&ndash;&gt;-->
<!--&lt;!&ndash;                                }&ndash;&gt;-->
<!--&lt;!&ndash;                            }&ndash;&gt;-->
<!--&lt;!&ndash;                            .price {&ndash;&gt;-->
<!--&lt;!&ndash;                                /*font-weight: 700;*/&ndash;&gt;-->
<!--&lt;!&ndash;                                line-height: 24px;&ndash;&gt;-->
<!--&lt;!&ndash;                                .now {&ndash;&gt;-->
<!--&lt;!&ndash;                                    margin-right: 8px;&ndash;&gt;-->
<!--&lt;!&ndash;                                    font-size: 14px;&ndash;&gt;-->
<!--&lt;!&ndash;                                    color: rgb(240, 20, 20);&ndash;&gt;-->
<!--&lt;!&ndash;                                }&ndash;&gt;-->
<!--&lt;!&ndash;                                .old {&ndash;&gt;-->
<!--&lt;!&ndash;                                    font-size: 10px;&ndash;&gt;-->
<!--&lt;!&ndash;                                    color: rgb(147, 153, 159);&ndash;&gt;-->
<!--&lt;!&ndash;                                    text-decoration: line-through;&ndash;&gt;-->
<!--&lt;!&ndash;                                }&ndash;&gt;-->

<!--&lt;!&ndash;                            }&ndash;&gt;-->
<!--&lt;!&ndash;                            .cartControl-wrapper {&ndash;&gt;-->
<!--&lt;!&ndash;                                position: absolute;&ndash;&gt;-->
<!--&lt;!&ndash;                                right: 0;&ndash;&gt;-->
<!--&lt;!&ndash;                                bottom: 12px;&ndash;&gt;-->

<!--&lt;!&ndash;                            }&ndash;&gt;-->

<!--&lt;!&ndash;                        }&ndash;&gt;-->
<!--&lt;!&ndash;                    }&ndash;&gt;-->
<!--&lt;!&ndash;                }&ndash;&gt;-->
<!--&lt;!&ndash;            }&ndash;&gt;-->
<!--&lt;!&ndash;        }&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->



















<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;    <div>分类</div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;    export default {&ndash;&gt;-->
<!--&lt;!&ndash;        name: "category"&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;<style scoped>&ndash;&gt;-->

<!--&lt;!&ndash;</style>&ndash;&gt;-->
<!--<template>-->
<!--    <div class="layout">-->

<!--        &lt;!&ndash; S tab &ndash;&gt;-->
<!--&lt;!&ndash;        <div class="tab">&ndash;&gt;-->
<!--&lt;!&ndash;            <div :key="index" v-for="(item, index) in tabList" :class="['tab-item']">&ndash;&gt;-->
<!--&lt;!&ndash;                <router-link to="" :class="{'link':index == pageNum}">&ndash;&gt;-->
<!--&lt;!&ndash;                    {{item}}&ndash;&gt;-->
<!--&lt;!&ndash;                </router-link>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--        &lt;!&ndash; E tab &ndash;&gt;-->

<!--        &lt;!&ndash; S 内容区域 &ndash;&gt;-->
<!--        <div class="content1">-->

<!--            &lt;!&ndash; S 左侧边栏 &ndash;&gt;-->
<!--            <div class="menu-wrapper" ref="menuWrapper">-->
<!--                <ul>-->
<!--                    <li v-for="(item, index) in goodList" class="menu-item border-1px" :class="{'current':currentIndex === index}"-->
<!--                        @click="selectMenu(index, $event)" :key="index">-->
<!--                <span class="text">-->
<!--                  <span class=" icon" ></span>{{item.name}}-->
<!--                </span>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </div>-->
<!--            &lt;!&ndash; E 左侧边栏 &ndash;&gt;-->

<!--            &lt;!&ndash; S 右侧边栏 &ndash;&gt;-->
<!--            <div class="foods-wrapper" ref="foodWrapper">-->
<!--                <ul>-->
<!--                    <li v-for="(item,call) in goodList" class="food-list food-list-hook" :key="call">-->
<!--                        <h1 class="title">{{item.name}}</h1>-->
<!--                        <ul>-->
<!--                            <li v-for="(food,inl) in item.foods" class="food-item" @click="selectFood(food, $event)" :key="inl">-->
<!--                                <div class="icon">-->
<!--                                    <img :src="food.icon" alt="" width="57">-->
<!--                                </div>-->
<!--                                <div class="content">-->
<!--                                    <h2 class="name">{{food.name}}</h2>-->
<!--                                    <p class="desc">{{food.description}}</p>-->
<!--                                    <div class="extra">-->
<!--                                        <span class="count">月售{{food.sellCount}}</span><span class="count">好评{{food.rating}}</span>-->
<!--                                    </div>-->
<!--                                    <div class="price">-->
<!--                                        <span class="now">￥{{food.price}}</span><span class="old"-->
<!--                                                                                      v-show="food.oldPrice">￥{{food.oldPrice}}</span>-->
<!--                                    </div>-->
<!--                                    <div class="cartControl-wrapper">-->
<!--                                        &lt;!&ndash; <cartControl :food="food" @increment="incrementTotal"></cartControl> &ndash;&gt;-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </div>-->
<!--            &lt;!&ndash; E 右侧边栏 &ndash;&gt;-->

<!--        </div>-->
<!--        &lt;!&ndash; E 内容区域 &ndash;&gt;-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    import BScroll from 'better-scroll' // 使用better-scrol实现滑动-->
<!--    export default {-->
<!--        data () {-->
<!--            return {-->
<!--                tabList: ['列表', '详情'],-->
<!--                pageNum: 0,-->
<!--                listHeight: [],-->
<!--                scrolly: 0, // 滚动处始值-->
<!--                goodList: [-->
<!--                    {-->
<!--                        "name": "热销榜",-->
<!--                        "type": -1,-->
<!--                        "foods": [-->
<!--                            {-->
<!--                                "name": "皮蛋瘦肉粥",-->
<!--                                "price": 10,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "咸粥",-->
<!--                                "sellCount": 229,-->
<!--                                "rating": 100,-->
<!--                                "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "很喜欢的粥",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 1,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "扁豆焖面",-->
<!--                                "price": 14,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 188,-->
<!--                                "rating": 96,-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 1,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "info": "",-->
<!--                                "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "葱花饼",-->
<!--                                "price": 10,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 124,-->
<!--                                "rating": 85,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 1,-->
<!--                                        "text": "没啥味道",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 1,-->
<!--                                        "text": "很一般啊",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "牛肉馅饼",-->
<!--                                "price": 14,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 114,-->
<!--                                "rating": 91,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 1,-->
<!--                                        "text": "难吃不推荐",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "招牌猪肉白菜锅贴/10个",-->
<!--                                "price": 17,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 101,-->
<!--                                "rating": 78,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 1,-->
<!--                                        "text": "不脆,不好吃",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "南瓜粥",-->
<!--                                "price": 9,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "甜粥",-->
<!--                                "sellCount": 91,-->
<!--                                "rating": 100,-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "红豆薏米美肤粥",-->
<!--                                "price": 12,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "甜粥",-->
<!--                                "sellCount": 86,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "八宝酱菜",-->
<!--                                "price": 4,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 84,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "红枣山药糙米粥",-->
<!--                                "price": 10,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 81,-->
<!--                                "rating": 91,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "糊塌子",-->
<!--                                "price": 10,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 80,-->
<!--                                "rating": 93,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            }-->
<!--                        ]-->
<!--                    },-->
<!--                    {-->
<!--                        "name": "单人精彩套餐",-->
<!--                        "type": 2,-->
<!--                        "foods": [-->
<!--                            {-->
<!--                                "name": "红枣山药粥套餐",-->
<!--                                "price": 29,-->
<!--                                "oldPrice": 36,-->
<!--                                "description": "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",-->
<!--                                "sellCount": 17,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            }-->
<!--                        ]-->
<!--                    },-->
<!--                    {-->
<!--                        "name": "冰爽饮品限时特惠",-->
<!--                        "type": 1,-->
<!--                        "foods": [-->
<!--                            {-->
<!--                                "name": "VC无限橙果汁",-->
<!--                                "price": 8,-->
<!--                                "oldPrice": 10,-->
<!--                                "description": "",-->
<!--                                "sellCount": 15,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "还可以",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            }-->
<!--                        ]-->
<!--                    },-->
<!--                    {-->
<!--                        "name": "精选热菜",-->
<!--                        "type": -1,-->
<!--                        "foods": [-->
<!--                            {-->
<!--                                "name": "娃娃菜炖豆腐",-->
<!--                                "price": 17,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 43,-->
<!--                                "rating": 92,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "菜量还可以,味道还可以",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "手撕包菜",-->
<!--                                "price": 16,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 29,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "香酥黄金鱼/3条",-->
<!--                                "price": 11,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 15,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            }-->
<!--                        ]-->
<!--                    },-->
<!--                    {-->
<!--                        "name": "爽口凉菜",-->
<!--                        "type": -1,-->
<!--                        "foods": [-->
<!--                            {-->
<!--                                "name": "八宝酱菜",-->
<!--                                "price": 4,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 84,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "拍黄瓜",-->
<!--                                "price": 9,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 28,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            }-->
<!--                        ]-->
<!--                    },-->
<!--                    {-->
<!--                        "name": "精选套餐",-->
<!--                        "type": -1,-->
<!--                        "foods": [-->
<!--                            {-->
<!--                                "name": "红豆薏米粥套餐",-->
<!--                                "price": 37,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",-->
<!--                                "sellCount": 3,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "皮蛋瘦肉粥套餐",-->
<!--                                "price": 31,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 12,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            }-->
<!--                        ]-->
<!--                    },-->
<!--                    {-->
<!--                        "name": "果拼果汁",-->
<!--                        "type": -1,-->
<!--                        "foods": [-->
<!--                            {-->
<!--                                "name": "蜜瓜圣女萝莉杯",-->
<!--                                "price": 6,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 1,-->
<!--                                "rating": "",-->
<!--                                "info": "",-->
<!--                                "ratings": [],-->
<!--                                "icon": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "加多宝",-->
<!--                                "price": 6,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 7,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "VC无限橙果汁",-->
<!--                                "price": 8,-->
<!--                                "oldPrice": 10,-->
<!--                                "description": "",-->
<!--                                "sellCount": 15,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "还可以",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            }-->
<!--                        ]-->
<!--                    },-->
<!--                    {-->
<!--                        "name": "小吃主食",-->
<!--                        "type": -1,-->
<!--                        "foods": [-->
<!--                            {-->
<!--                                "name": "扁豆焖面",-->
<!--                                "price": 14,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 188,-->
<!--                                "rating": 96,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 1,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "葱花饼",-->
<!--                                "price": 10,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 124,-->
<!--                                "rating": 85,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 1,-->
<!--                                        "text": "没啥味道",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 1,-->
<!--                                        "text": "很一般啊",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "牛肉馅饼",-->
<!--                                "price": 14,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 114,-->
<!--                                "rating": 91,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 1,-->
<!--                                        "text": "难吃不推荐",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "招牌猪肉白菜锅贴/10个",-->
<!--                                "price": 17,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 101,-->
<!--                                "rating": 78,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 1,-->
<!--                                        "text": "不脆,不好吃",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "糊塌子",-->
<!--                                "price": 10,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 80,-->
<!--                                "rating": 93,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            }-->
<!--                        ]-->
<!--                    },-->
<!--                    {-->
<!--                        "name": "特色粥品",-->
<!--                        "type": -1,-->
<!--                        "foods": [-->
<!--                            {-->
<!--                                "name": "皮蛋瘦肉粥",-->
<!--                                "price": 10,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "咸粥",-->
<!--                                "sellCount": 229,-->
<!--                                "rating": 100,-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "很喜欢的粥",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 1,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "南瓜粥",-->
<!--                                "price": 9,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "甜粥",-->
<!--                                "sellCount": 91,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "红豆薏米美肤粥",-->
<!--                                "price": 12,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "甜粥",-->
<!--                                "sellCount": 86,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "红枣山药糙米粥",-->
<!--                                "price": 10,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "",-->
<!--                                "sellCount": 81,-->
<!--                                "rating": 91,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "鲜蔬菌菇粥",-->
<!--                                "price": 11,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "咸粥",-->
<!--                                "sellCount": 56,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": ""-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            },-->
<!--                            {-->
<!--                                "name": "田园蔬菜粥",-->
<!--                                "price": 10,-->
<!--                                "oldPrice": "",-->
<!--                                "description": "咸粥",-->
<!--                                "sellCount": 33,-->
<!--                                "rating": 100,-->
<!--                                "info": "",-->
<!--                                "ratings": [-->
<!--                                    {-->
<!--                                        "username": "3******c",-->
<!--                                        "rateTime": 1469281964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "2******3",-->
<!--                                        "rateTime": 1469271264000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    },-->
<!--                                    {-->
<!--                                        "username": "3******b",-->
<!--                                        "rateTime": 1469261964000,-->
<!--                                        "rateType": 0,-->
<!--                                        "text": "",-->
<!--                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"-->
<!--                                    }-->
<!--                                ],-->
<!--                                "icon": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",-->
<!--                                "image": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"-->
<!--                            }-->
<!--                        ]-->
<!--                    }-->
<!--                ] // 模拟一些假数据-->
<!--            }-->
<!--        },-->
<!--        created () {-->
<!--            // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染-->

<!--            this.$nextTick(()=> {-->
<!--                this._initScroll()-->
<!--                this._calculateHeight()-->
<!--            })-->

<!--            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']-->
<!--        },-->
<!--        computed: {-->
<!--            currentIndex () { //计算到达哪个区域的区间的时候的对应的索引值-->
<!--                for(let i = 0; i < this.listHeight.length; i++) {-->
<!--                    let height = this.listHeight[i] //当前menu子块的高度-->
<!--                    let height2 = this.listHeight[i+1] //下一个menu子块的高度-->
<!--                    //滚动到底部的时候,height2为undefined,需要考虑这种情况-->
<!--                    //需要确定是在两个menu子块的高度区间-->
<!--                    if (!height2 || (this.scrolly >= height && this.scrolly < height2)) {-->
<!--                        return i //返回这个menu子块的索引-->
<!--                    }-->
<!--                }-->
<!--                return 0-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            //初始化scroll区域-->
<!--            _initScroll () {-->
<!--                this.menuScroll = new BScroll(this.$refs.menuWrapper, {-->
<!--                    click: true //结合BScroll的接口使用,是否将click事件传递,默认被拦截了-->
<!--                })-->
<!--                this.foodScroll = new BScroll(this.$refs.foodWrapper, {-->
<!--                    probeType: 3, //结合BScroll的接口使用,3实时派发scroll事件，探针的作用-->
<!--                    click: true-->
<!--                })-->
<!--                //结合BScroll的接口使用,监听scroll事件(实时派发的),并获取鼠标坐标，当滚动时能实时暴露出scroll-->
<!--                this.foodScroll.on('scroll', (pos) => {-->
<!--                    this.scrolly = Math.abs(Math.round(pos.y))  //滚动坐标会出现负的,并且是小数,所以需要处理一下，实时取得scrollY-->
<!--                })-->
<!--            },-->
<!--            _calculateHeight() {-->
<!--                let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook')  //获取每一个food的dom对象-->
<!--                let height = 0;-->
<!--                let foodLis = document.getElementsByClassName("menu-item")-->
<!--                // eslint-disable-next-line no-console-->
<!--                console.log(foodLis);-->
<!--                this.listHeight.push(height)  //初始化第一个高度为0-->
<!--                for (let i = 0; i < foodList.length; i++) {-->
<!--                    let item = foodList[i] //每一个item都是刚才获取的food的每一个dom-->
<!--                    height += item.clientHeight //主要是为了获取每一个foods内部块的高度-->
<!--                    this.listHeight.push(height)-->
<!--                }-->
<!--            },-->
<!--            selectMenu (index, event) {-->
<!--                if (!event._constructed) { //去掉自带的click事件点击，即pc端直接返回-->
<!--                    return;-->
<!--                }-->
<!--                // debugger;-->
<!--                let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');-->
<!--                let el = foodList[index];-->
<!--                // eslint-disable-next-line no-console-->
<!--                console.log(el);-->
<!--                //类似jump to的功能,通过这个方法,跳转到指定的dom-->
<!--               this.foodScroll.scrollToElement(el, 0);-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--    .layout {-->
<!--        width: 100%;-->
<!--        .tab {-->
<!--            width: 100%;-->
<!--            height: 40px;-->
<!--            display: flex;-->
<!--            background-color: skyblue;-->
<!--            .tab-item {-->
<!--                flex: 1;-->
<!--                align-self: center; // 弹性子元素剧中-->
<!--                text-align: center;-->
<!--                a {-->
<!--                    color: black;-->
<!--                    text-decoration: none;-->
<!--                    -webkit-tap-highlight-color:rgba(0,0,0,0); // 去除a标签点击时高亮背景-->
<!--                    &.link {-->
<!--                        color: red;-->
<!--                    }-->
<!--                }-->
<!--            }-->
<!--        }-->
<!--        .content1 {-->
<!--            display: flex;-->
<!--            position: absolute;-->
<!--            top: 44px;-->
<!--            bottom: 46px;-->
<!--            width: 100%;-->
<!--            overflow: hidden;-->
<!--            .menu-wrapper {-->
<!--                flex: 0 0 80px;-->
<!--                width: 80px;-->
<!--                background: #f3f5f7;-->
<!--                .menu-item {-->
<!--                    display: table;-->
<!--                    width: 56px;-->
<!--                    height: 54px;-->
<!--                    line-height: 14px;-->
<!--                    padding: 0 12px;-->
<!--                    &.current {-->
<!--                        position: relative;-->
<!--                        z-index: 10;-->
<!--                        margin-top: -1px;-->
<!--                        background: #fff;-->
<!--                        font-weight: 700;-->
<!--                        .text {-->
<!--                            &:after{-->
<!--                                display: none-->
<!--                            }-->
<!--                        }-->
<!--                    }-->
<!--                    .icon {-->
<!--                        display: inline-block;-->
<!--                        width: 12px;-->
<!--                        height: 12px;-->
<!--                        vertical-align: top;-->
<!--                        margin-right: 4px;-->
<!--                        background-size: 12px 12px;-->
<!--                        background-repeat: no-repeat;-->
<!--                        &.decrease {-->
<!--                            background-image: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=594559231,2167829292&fm=27&gp=0.jpg);-->
<!--                        }-->
<!--                        &.discount {-->
<!--                            background-image: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3044191397,2911599132&fm=27&gp=0.jpg);-->

<!--                        }-->
<!--                        &.guarantee {-->
<!--                            background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1944805937,3724010146&fm=27&gp=0.jpg);-->

<!--                        }-->
<!--                        &.invoice {-->
<!--                            background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=147015573,3182587356&fm=27&gp=0.jpg);-->

<!--                        }-->
<!--                        &.special {-->
<!--                            background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1046983545,2051560208&fm=27&gp=0.jpg);-->

<!--                        }-->

<!--                    }-->
<!--                    .text {-->
<!--                        display: table-cell;-->
<!--                        width: 56px;-->
<!--                        vertical-align: middle;-->
<!--                        position: relative;-->
<!--                        font-size: 12px;-->
<!--                        &:after {-->
<!--                            display: block;-->
<!--                            position: absolute;-->
<!--                            left: 0;-->
<!--                            bottom: 0;-->
<!--                            border-top: 1px solid red;-->
<!--                            width: 100%;-->
<!--                            content: '';-->
<!--                        }-->
<!--                    }-->
<!--                }-->
<!--            }-->
<!--            .foods-wrapper {-->
<!--                flex: 1;-->
<!--                .food-list {-->
<!--                    .title {-->
<!--                        padding-left: 14px;-->
<!--                        height: 26px;-->
<!--                        line-height: 26px;-->
<!--                        border-left: 2px solid #d9dde1;-->
<!--                        font-size: 12px;-->
<!--                        color: rgb(147, 153, 159);-->
<!--                        background: #f3f5f7;-->
<!--                    }-->
<!--                    .food-item {-->
<!--                        display: flex;-->
<!--                        margin: 18px;-->
<!--                        padding-bottom: 18px;-->
<!--                        &:after {-->
<!--                            display: block;-->
<!--                            position: absolute;-->
<!--                            left: 0;-->
<!--                            bottom: 0;-->
<!--                            border-top: 1px solid red;-->
<!--                            width: 100%;-->
<!--                            content: '';-->
<!--                        }-->
<!--                        &:last-child {-->
<!--                            &:after{-->
<!--                                display: none-->
<!--                            }-->
<!--                        }-->
<!--                        .icon {-->
<!--                            flex: 0 0 57px;-->
<!--                            margin-right: 10px;-->
<!--                        }-->
<!--                        .content {-->
<!--                            flex: 1;-->
<!--                            .name {-->
<!--                                margin: 2px 0 8px 0;-->
<!--                                font-size: 14px;-->
<!--                                line-height: 14px;-->
<!--                                height: 14px;-->
<!--                                color: rgb(7, 17, 27);-->
<!--                            }-->
<!--                            .desc, .extra {-->
<!--                                font-size: 10px;-->
<!--                                line-height: 10px;-->
<!--                                color: rgb(147, 153, 159);-->
<!--                            }-->
<!--                            .desc {-->
<!--                                margin-bottom: 8px;-->
<!--                                line-height: 12px;-->
<!--                            }-->
<!--                            .extra {-->
<!--                                .count {-->
<!--                                    margin-right: 12px;-->
<!--                                }-->
<!--                            }-->
<!--                            .price {-->
<!--                                /*font-weight: 700;*/-->
<!--                                line-height: 24px;-->
<!--                                .now {-->
<!--                                    margin-right: 8px;-->
<!--                                    font-size: 14px;-->
<!--                                    color: rgb(240, 20, 20);-->
<!--                                }-->
<!--                                .old {-->
<!--                                    font-size: 10px;-->
<!--                                    color: rgb(147, 153, 159);-->
<!--                                    text-decoration: line-through;-->
<!--                                }-->

<!--                            }-->
<!--                            .cartControl-wrapper {-->
<!--                                position: absolute;-->
<!--                                right: 0;-->
<!--                                bottom: 12px;-->

<!--                            }-->

<!--                        }-->
<!--                    }-->
<!--                }-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</style>-->


<template>
    <div class="container">
        <div class="wrapper">
            <div class="section" style="height:500px;width:100%" v-for="(item, index) in list" :key="index" :style="{'height':index==0?'1000px':'500px'}">
                <div style="width:100%;height:100%;font-size:30px;text-align:center;font-weight:bold;color:#fff;" :style="{'background':item.backgroundcolor}">{{item.name}}</div>
            </div>
        </div>
        <div id="nac" style="height:500px;"></div>
        <nav style="position:fixed;right:30px;top:300px;">
            <a class="nav1" v-for="(item, index) in navList" :key="index" @click="jump(index)" :class="index==0?'current':''">{{item}}</a>
        </nav>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        data(){
            return {
                scroll: '',
                list: [
                    {
                    name: "第一条",
                    backgroundcolor: "#90B2A3"
                }, {
                    name: "第二条",
                    backgroundcolor: "#A593B2"
                }, {
                    name: "第三条",
                    backgroundcolor: "#A7B293"
                }, {
                    name: "第四条",
                    backgroundcolor: "#0F2798"
                }, {
                    name: "第五条",
                    backgroundcolor: "#0A464D"
                }],
                navList: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            dataScroll: function () {
                this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            },
            jump(index) {
                let jump = document.getElementsByClassName('section');
            //     // 获取需要滚动的距离
                let total = jump[index].offsetTop;
            //     // Chrome
            //     document.body.scrollTop = total;
            //     // Firefox
                document.documentElement.scrollTop = total;
            //     // Safari
            //     window.pageYOffset = total;
            //     // $('html, body').animate({
            //     // 'scrollTop': total
            //     // }, 400);
            },
            loadSroll: function () {
                var self = this;
                // eslint-disable-next-line no-undef
                var $navs = $(".nav1");
                var sections = document.getElementsByClassName('section');
                for (var i = sections.length - 1; i >= 0; i--) {
                    if (self.scroll >= sections[i].offsetTop - 100) {
                        $navs.eq(i).addClass("current").siblings().removeClass("current")
                        break;
                    }
                }
            }
        },
        watch: {
            scroll: function () {
                this.loadSroll()
            }
        },
        mounted() {
            window.addEventListener('scroll', this.dataScroll);
        }
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }
    .nav1 {
        display: block;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #eee;
        margin: 10px 0;
    }
    .current {
        color: #fff;
        background: red;
    }
</style>