module.exports = {
 getdata(){
   let shopInfo = 
   {
   "shops":[
      {
         "sId":"00",
         "shopName":"荆门众邦特色馆",
         "shopFens":0,
         "homeImg":"assets/images/home-img/goods1.jpg",
         "products":[
         {
            "pId": "0000",
            "pImg":
                [
                    "assets/images/home-img/goods1.jpg",
                     "assets/images/home-img/goods1.jpg","assets/images/home-img/goods1.jpg"],
                     "pZQImg":"assets/images/home-img/goods1.jpg",
                     "pName":"小米CC9 Pro 8GB+128GB",
                     "pPrice":3099,
                     "pAllNum":50,  // 库存
                     "pOutNum":0,   // 销量
                     "pCartNum":0,  // 购物车数量
                     "pLikeChecked":false,     // 是否收藏
                     "checked":false       // 是否选中
               },
               {
                  "pId": "0001",
                  "pImg":["assets/images/home-img/goods2.jpg",
                  "assets/images/home-img/goods2.jpg"],
                  "pZQImg":"assets/images/home-img/goods2.jpg",
                  "pName":"Redmi K20 Pro 尊享版 12GB+512GB",
                  "pPrice":3199,
                  "pAllNum":50,  // 库存
                  "pOutNum":0,   // 销量
                  "pCartNum":0,  // 购物车数量
                  "pLikeChecked":false,     // 是否收藏
                  "checked":false       // 是否选中
               },
               {
                  "pId": "0002",
                  "pImg":["assets/images/home-img/goods3.webp",
                  "assets/images/home-img/goods3.webp"],
                  "pZQImg":"assets/images/home-img/goods3.webp",
                  "pName":"小米9 Pro 5G 12GB+512GB",
                  "pPrice":4299,
                  "pAllNum":50,  // 库存
                  "pOutNum":0,   // 销量
                  "pCartNum":0,  // 购物车数量
                  "pLikeChecked":false,     // 是否收藏
                  "checked":false       // 是否选中
               },
             {
                 "pId": "0003",
                 "pImg":["assets/images/home-img/good5.jpg",
                     "assets/images/home-img/goods5.jpg"],
                 "pZQImg":"assets/images/home-img/good5.jpg",
                 "pName":"小米9 Pro 5G 12GB+512GB",
                 "pPrice":4299,
                 "pAllNum":50,  // 库存
                 "pOutNum":0,   // 销量
                 "pCartNum":0,  // 购物车数量
                 "pLikeChecked":false,     // 是否收藏
                 "checked":false       // 是否选中
             },
         ]
      },
   ]
   }


   return shopInfo;
   }
}
