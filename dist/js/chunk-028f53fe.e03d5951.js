(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-028f53fe"],{"0c44":function(t,e,s){},1148:function(t,e,s){"use strict";var n=s("a691"),i=s("1d80");t.exports="".repeat||function(t){var e=String(i(this)),s="",o=n(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(s+=e);return s}},"159b":function(t,e,s){var n=s("da84"),i=s("fdbc"),o=s("17c2"),a=s("9112");for(var r in i){var c=n[r],l=c&&c.prototype;if(l&&l.forEach!==o)try{a(l,"forEach",o)}catch(f){l.forEach=o}}},"17c2":function(t,e,s){"use strict";var n=s("b727").forEach,i=s("a640"),o=s("ae40"),a=i("forEach"),r=o("forEach");t.exports=a&&r?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"212f":function(t,e,s){"use strict";var n=s("6606"),i=s.n(n);i.a},"377b":function(t,e,s){"use strict";var n=s("5c8c"),i=s.n(n);i.a},"3c57":function(t,e,s){"use strict";var n=s("96b6"),i=s.n(n);i.a},"3f80":function(t,e,s){},"408a":function(t,e,s){var n=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},4160:function(t,e,s){"use strict";var n=s("23e7"),i=s("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4de4":function(t,e,s){"use strict";var n=s("23e7"),i=s("b727").filter,o=s("1dde"),a=s("ae40"),r=o("filter"),c=a("filter");n({target:"Array",proto:!0,forced:!r||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b");var n=s("ade3");function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}},"5c8c":function(t,e,s){},6606:function(t,e,s){},"6ab7":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detail"}},[s("detail-nav-bar",{ref:"nav",staticClass:"detail-nav",on:{navItemClick:t.navItemClick}}),s("scroll",{ref:"scroll",staticClass:"detail-content",attrs:{"probe-type":3},on:{scroll:t.contentScroll}},[s("detail-swiper",{attrs:{"top-images":t.topImages},on:{swiperImgLoaded:t.newRefresh}}),s("detail-base-info",{attrs:{goods:t.goods}}),s("detail-shop-info",{attrs:{shop:t.shop}}),s("detail-goods-info",{attrs:{"detail-info":t.detailInfo},on:{goodsImgLoaded:t.detailImgLoad}}),s("detail-param-info",{ref:"params",attrs:{"param-info":t.goodsParam}}),s("detail-comment-info",{ref:"comment",attrs:{"comment-info":t.commentInfo}}),s("goods-list",{ref:"recommend",attrs:{goods:t.recommend}})],1),s("detail-bottom-bar",{on:{addToShopcart:t.addToShopcart}}),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],staticClass:"top",nativeOn:{click:function(e){return t.backTopClick(e)}}})],1)},i=[],o=(s("a9e3"),s("5530")),a=s("2f62"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"detail-nav-bar"}},[n("nav-bar",[n("div",{staticClass:"left",attrs:{slot:"left"},on:{click:t.back},slot:"left"},[n("img",{attrs:{src:s("7a74")}})]),n("div",{staticClass:"center",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,s){return n("div",{class:{active:s===t.activeIndex},on:{click:function(e){return t.titleClick(s)}}},[t._v(t._s(e))])})),0)])],1)},c=[],l=s("a7ac"),f={name:"DetailNavBar",data:function(){return{titles:["商品","参数","评论","推荐"],activeIndex:0}},components:{NavBar:l["a"]},methods:{back:function(){this.$router.back()},titleClick:function(t){this.activeIndex=t,this.$emit("navItemClick",t)}},activated:function(){this.activeIndex=0}},d=f,u=(s("e5c2"),s("2877")),m=Object(u["a"])(d,r,c,!1,null,"78a2ca24",null),h=m.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.topImages.length?s("swiper",{staticClass:"detail-swiper"},t._l(t.topImages,(function(e,n){return s("swiper-item",{key:n},[s("img",{attrs:{src:e},on:{load:t.swiperImgLoaded}})])})),1):t._e()],1)},p=[],b=s("dc2c"),g={name:"DetailSwiper",props:{topImages:{type:Array,default:function(){return[]}}},components:{Swiper:b["a"],SwiperItem:b["b"]},data:function(){return{counter:0}},computed:{imgsLen:function(){return this.topImages.length}},methods:{swiperImgLoaded:function(){++this.counter===this.imgsLen&&this.$emit("swiperImgLoaded")}}},_=g,C=(s("212f"),Object(u["a"])(_,v,p,!1,null,"c3b96538",null)),I=C.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goods).length?s("div",{staticClass:"base-info"},[s("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),s("div",{staticClass:"info-price"},[s("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),s("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),s("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))])]),s("div",{staticClass:"info-other"},[s("span",[t._v(t._s(t.goods.columns[0]))]),s("span",[t._v(t._s(t.goods.columns[1]))]),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),s("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return s("span",{key:e,staticClass:"info-service-item"},[s("img",{attrs:{src:t.goods.services[e-1].icon}}),s("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},w=[],y={name:"DetailBaseInfo",props:{goods:{type:Object,default:function(){return{}}}}},j=y,k=(s("3c57"),Object(u["a"])(j,O,w,!1,null,"12dc8212",null)),D=k.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-top"},[s("img",{attrs:{src:t.shop.logo}}),s("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"shop-middle"},[s("div",{staticClass:"shop-middle-item shop-middle-left"},[s("div",{staticClass:"info-sells"},[s("div",{staticClass:"sells-count"},[t._v(" "+t._s(t._f("sellCountFilter")(t.shop.sells))+" ")]),s("div",{staticClass:"sells-text"},[t._v("总销量")])]),s("div",{staticClass:"info-goods"},[s("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),s("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),s("div",{staticClass:"shop-middle-item shop-middle-right"},[s("table",t._l(t.shop.score,(function(e,n){return s("tr",{key:n},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"better",class:{"better-more":e.isBetter}},[s("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-bottom"},[s("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],T=(s("b680"),{name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),E=T,L=(s("377b"),Object(u["a"])(E,x,$,!1,null,"34117dcd",null)),P=L.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailInfo).length?s("div",{staticClass:"goods-info"},[s("div",{staticClass:"info-desc clear-fix"},[s("div",{staticClass:"start"}),s("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),s("div",{staticClass:"end"})]),s("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),s("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(e,n){return s("img",{attrs:{src:e},on:{load:t.imgLoad}})})),0)]):t._e()},B=[],F={name:"DetailGoodsInfo",props:{detailInfo:{type:Object}},computed:{imgsLen:function(){return this.detailInfo.detailImage[0].list.length}},methods:{imgLoad:function(){this.$emit("goodsImgLoaded")}}},N=F,R=(s("d7d4"),Object(u["a"])(N,S,B,!1,null,"06db2da8",null)),G=R.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?s("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,n){return s("table",{key:n,staticClass:"info-size"},t._l(e,(function(e,n){return s("tr",{key:n},t._l(e,(function(e,n){return s("td",{key:n},[t._v(t._s(e))])})),0)})),0)})),s("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,n){return s("tr",[s("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),s("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),0!==t.paramInfo.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},M=[],z={name:"DetailParamInfo",props:{paramInfo:{type:Object,default:function(){return{}}}}},J=z,U=(s("9af0"),Object(u["a"])(J,A,M,!1,null,"16818c14",null)),V=U.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),s("span",[t._v(t._s(t.commentInfo.user.uname))])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("img",{attrs:{src:t}})})),0)])]):t._e()])},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-header"},[s("div",{staticClass:"header-title"},[t._v("用户评价")]),s("div",{staticClass:"header-more"},[t._v(" 更多 "),s("i",{staticClass:"arrow-right"})])])}],q=s("90b9"),H={name:"DetailCommentInfo",props:{commentInfo:{type:Object}},filters:{showDate:function(t){var e=new Date(1e3*t);return Object(q["b"])(e,"yyyy/MM/dd hh:mm:ss")}}},K=H,Q=(s("f132"),Object(u["a"])(K,W,X,!1,null,"64aa2c6d",null)),Y=Q.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[s("div",{staticClass:"bar-item bar-left"},[t._m(0),t._m(1),s("div",{on:{click:t.collect}},[s("i",{staticClass:"icon collect",class:{collected:t.isCollect}}),s("div",[t._v("收藏")])])]),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"shopcart",on:{click:t.addToShopcart}},[t._v("加入购物车")]),s("div",{staticClass:"purchase"},[t._v("购买")])])])},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("i",{staticClass:"icon service"}),s("div",[t._v("客服")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("i",{staticClass:"icon shop"}),s("div",[t._v("店铺")])])}],et={name:"DetailBottomBar",data:function(){return{isCollect:!1}},methods:{collect:function(){this.isCollect=!this.isCollect},addToShopcart:function(){this.$emit("addToShopcart")}}},st=et,nt=(s("bcbd"),Object(u["a"])(st,Z,tt,!1,null,"dc5904ae",null)),it=nt.exports,ot=s("5d17"),at=s("6d719");s("b0c0");function rt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var ct=s("1bab");function lt(t){return Object(ct["a"])({url:"detail",params:{iid:t}})}function ft(){return Object(ct["a"])({url:"/recommend"})}var dt=function t(e,s,n){rt(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.columns=s,this.services=n,this.realPrice=e.lowNowPrice},ut=function t(e){rt(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},mt=function t(e,s){rt(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables},ht=s("eecb"),vt=s("b95e"),pt={name:"Detail",mixins:[ht["a"]],data:function(){return{iid:null,topImages:[],goods:{},shop:{},detailInfo:{},goodsParam:{},commentInfo:{},recommend:[],detailImgDebounce:null,imgLoadedListener:null,navContentOffsetTops:[],navContentDebounce:null,refreshDebounce:null,navCurIdx:0}},components:{DetailNavBar:h,DetailSwiper:I,DetailBaseInfo:D,DetailShopInfo:P,DetailGoodsInfo:G,DetailParamInfo:V,DetailCommentInfo:Y,DetailBottomBar:it,Scroll:ot["a"],GoodsList:at["a"]},created:function(){var t=this;this.iid=this.$route.params.iid,lt(this.iid).then((function(e){var s=e.result;t.topImages=s.itemInfo.topImages,t.goods=new dt(s.itemInfo,s.columns,s.shopInfo.services),t.shop=new ut(s.shopInfo),t.detailInfo=s.detailInfo,t.goodsParam=new mt(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0])})),ft().then((function(e){t.recommend=e.data.list})),this.detailImgDebounce=Object(q["a"])((function(){t.newRefresh(),t.getContentOffsetTops()}),vt["c"]),this.navContentDebounce=Object(q["a"])(this.getContentOffsetTops,vt["c"]),this.refreshDebounce=Object(q["a"])(this.newRefresh,vt["c"]),this.imgLoadedListener=function(){t.refreshDebounce(),t.navContentDebounce()}},methods:Object(o["a"])(Object(o["a"])({},Object(a["b"])(["addGoods"])),{},{newRefresh:function(){this.$refs.scroll.refresh()},navItemClick:function(t){this.newRefresh(),this.$refs.scroll.scrollTo(0,-this.navContentOffsetTops[t],vt["d"])},getContentOffsetTops:function(){this.navContentOffsetTops=[],this.navContentOffsetTops.push(0),this.navContentOffsetTops.push(this.$refs.params.$el.offsetTop),this.navContentOffsetTops.push(this.$refs.comment.$el.offsetTop),this.navContentOffsetTops.push(this.$refs.recommend.$el.offsetTop),this.navContentOffsetTops.push(Number.MAX_VALUE)},detailImgLoad:function(){this.detailImgDebounce()},contentScroll:function(t){for(var e=-t.y,s=this.navContentOffsetTops.length-1,n=0;n<s;n++)this.navCurIdx!==n&&e>=this.navContentOffsetTops[n]&&e<this.navContentOffsetTops[n+1]&&(this.navCurIdx=n,this.$refs.nav.activeIndex=this.navCurIdx);this.backTopListener(t)},addToShopcart:function(){var t=this,e={};e.image=this.topImages[0],e.title=this.goods.title,e.desc=this.goods.desc,e.price=this.goods.realPrice,e.iid=this.iid,this.addGoods(e).then((function(e){t.$toast.show(e,1500)}))}}),mounted:function(){this.$bus.$on("itemImgLoaded",this.imgLoadedListener)},destroyed:function(){this.$bus.$off("itemImgLoaded",this.imgLoadedListener)}},bt=pt,gt=(s("8031"),Object(u["a"])(bt,n,i,!1,null,"6c7d915e",null));e["default"]=gt.exports},"776a":function(t,e,s){},"7a74":function(t,e,s){t.exports=s.p+"img/back.26df9036.svg"},8031:function(t,e,s){"use strict";var n=s("776a"),i=s.n(n);i.a},"96b6":function(t,e,s){},"9af0":function(t,e,s){"use strict";var n=s("d0d5"),i=s.n(n);i.a},"9c6b":function(t,e,s){},b64b:function(t,e,s){var n=s("23e7"),i=s("7b0b"),o=s("df75"),a=s("d039"),r=a((function(){o(1)}));n({target:"Object",stat:!0,forced:r},{keys:function(t){return o(i(t))}})},b680:function(t,e,s){"use strict";var n=s("23e7"),i=s("a691"),o=s("408a"),a=s("1148"),r=s("d039"),c=1..toFixed,l=Math.floor,f=function(t,e,s){return 0===e?s:e%2===1?f(t,e-1,s*t):f(t*t,e/2,s)},d=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},u=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));n({target:"Number",proto:!0,forced:u},{toFixed:function(t){var e,s,n,r,c=o(this),u=i(t),m=[0,0,0,0,0,0],h="",v="0",p=function(t,e){var s=-1,n=e;while(++s<6)n+=t*m[s],m[s]=n%1e7,n=l(n/1e7)},b=function(t){var e=6,s=0;while(--e>=0)s+=m[e],m[e]=l(s/t),s=s%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==m[t]){var s=String(m[t]);e=""===e?s:e+a.call("0",7-s.length)+s}return e};if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(e=d(c*f(2,69,1))-69,s=e<0?c*f(2,-e,1):c/f(2,e,1),s*=4503599627370496,e=52-e,e>0){p(0,s),n=u;while(n>=7)p(1e7,0),n-=7;p(f(10,n,1),0),n=e-1;while(n>=23)b(1<<23),n-=23;b(1<<n),p(1,1),b(2),v=g()}else p(0,s),p(1<<-e,0),v=g()+a.call("0",u);return u>0?(r=v.length,v=h+(r<=u?"0."+a.call("0",u-r)+v:v.slice(0,r-u)+"."+v.slice(r-u))):v=h+v,v}})},bc30:function(t,e,s){},bcbd:function(t,e,s){"use strict";var n=s("9c6b"),i=s.n(n);i.a},d0d5:function(t,e,s){},d7d4:function(t,e,s){"use strict";var n=s("3f80"),i=s.n(n);i.a},dbb4:function(t,e,s){var n=s("23e7"),i=s("83ab"),o=s("56ef"),a=s("fc6a"),r=s("06cf"),c=s("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,s,n=a(t),i=r.f,l=o(n),f={},d=0;while(l.length>d)s=i(n,e=l[d++]),void 0!==s&&c(f,e,s);return f}})},e439:function(t,e,s){var n=s("23e7"),i=s("d039"),o=s("fc6a"),a=s("06cf").f,r=s("83ab"),c=i((function(){a(1)})),l=!r||c;n({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e5c2:function(t,e,s){"use strict";var n=s("bc30"),i=s.n(n);i.a},f132:function(t,e,s){"use strict";var n=s("0c44"),i=s.n(n);i.a}}]);
//# sourceMappingURL=chunk-028f53fe.e03d5951.js.map