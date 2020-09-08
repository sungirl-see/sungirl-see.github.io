<template>
   <div>
      <van-cell class="outer" v-for="(item,index) in list" :key="index" @click="show = true">
              <van-button type="primary" :text="item" />
      </van-cell>
       <van-overlay :show="show" @click="show = false">
           <div class="wrapper" @click="show = false" @click.stop>
                <div class="block">
                     <van-swipe class="my-swipe" style="background-color: pink" :autoplay="3000">
                         <van-swipe-item v-for="(item,index) in list" :key="index">
                            {{item}}
                         </van-swipe-item>
                    </van-swipe>
                  </div>
           </div>
       </van-overlay>
   </div>

</template>

<script>

    export default {
        name: "Home",
       data(){
           return{
               img:require('../../assets/img/show/back.png'),
               show: false,
               list:['第一','第二','第三'],
           }
       },
      methods:{
         showPopup() {
            this.show=true;
         },
      },
    }
</script>

<style scoped>
   .outer{
      height: 100%;
      background-color: powderblue;
      text-align: center;
   }
   .wrapper {
       align-items: center;
       justify-content: center;
       height: 100%;
   }

   .block{
       height: 100%;
       /*background-color: #fff;*/
       color: red;
   }
   .my-swipe .van-swipe-item {
       width: 100%;
       color: #fff;
       font-size: 20px;
       line-height: 150px;
       text-align: center;
       background-color: #39a9ed;
   }
</style>