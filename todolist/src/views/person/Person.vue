<template>
    <div class="row bgImg" :style="{backgroundImage:'url('+albumpic_big+')'}">
        <p class="open" @click="clickToggle" v-show="!isShow">点我换壁纸</p>
        <div class="col-lg-2 col-md-2 col-sm-auto col-xs-auto wallpaper" v-show="isShow">
            <p>
                <span @click="toggleWallpaper(index)"
                      v-for="(item,index) in wallpaperImg"
                      :key="item"
                      class="toggle">{{item}}</span>
            </p>
            <button type="button" class="btn btn-success" @click="conserve">保存</button>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <Head></Head>
            <main-to-do></main-to-do>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-auto col-xs-auto"></div>
    </div>
</template>

<script>
    import Head from '../../components/todolist/listTop/Head'
    import MainToDo from '../../components/todolist/MainTodo/maintodo'
    export default {
        name: "Person",
        components:{
            Head,
            MainToDo,
        },
        data(){
            return{
                wallpaperImg:['小清新','柠檬','夏日饮品','树叶','天空'],
                albumpic_big:require("../../assets/img/todolist/bgm.jpg"),
                toggleImg:[require("../../assets/img/todolist/blue.jpg"),
                           require("../../assets/img/todolist/flowers.jpg"),
                           require("../../assets/img/todolist/summer.jpg"),
                           require("../../assets/img/todolist/tree.jpg"),
                           require("../../assets/img/todolist/cloud.jpg")
                          ],
                isShow:false
            }
        },
        methods:{
            //点击其他地方
            
            //点击文字
            toggleWallpaper(index){
                this.albumpic_big=this.toggleImg[index]
                localStorage.setItem('img',this.albumpic_big)
            },
            //点击换壁纸
            clickToggle(){
                this.isShow=!this.isShow
            },
            //保存
            conserve(){
                this.isShow=!this.isShow
                localStorage.setItem('img',this.albumpic_big)
            }
        },
        mounted() {
            this.albumpic_big=localStorage.getItem('img')
            console.log(localStorage.getItem('img'))
        }
    }
</script>

<style scoped lang="scss">
    .bgImg {
        background-image: url("../../assets/img/todolist/bgm.jpg");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        .open {
            position: relative;
            height: 100px;
            text-align: center;
            writing-mode: tb-rl;
            cursor: pointer;
            background-color: rgba(72,61,139,.3);
            color: #fff;
        }
        .wallpaper{
            height: 220px;
            background-color: rgba(204,204,204,.5);
            display: block;
            position: relative;
            p{
                margin-left: 30px;
                margin-top: 10px;
                display: block;
                .toggle{
                    color: azure;
                    cursor: pointer;
                    display: block;
                &:hover{
                    background-color: antiquewhite;
                }
                }
            }
            .btn{
                margin-left: 30px;
            }
        }
    }

</style>