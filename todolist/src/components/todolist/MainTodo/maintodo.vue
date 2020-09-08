<template>
    <div class="main-todo">
        <input type="text"
               class="add-todo"
               v-model="content"
               placeholder="您要做的事"
               autofocus
               @keyup.enter="sure">
        <to-do-item v-for="(item,index) in filterData"
                    :key="index"
                    :todo="item"></to-do-item>
        <to-do-info
                :amount="total"
                @toggoleState="handleToggoleState"
                @handlerClear="HandlerClear"></to-do-info>
    </div>
</template>

<script>
    import ToDoItem from './coms/ToDoItem'
    import ToDoInfo from './coms/ToDoInfo'
    let id=0
    export default {
        name: "maintodo",
        components:{
            ToDoInfo,
            ToDoItem
        },
        data(){
            return{
                todoData:[],
                content:'',
                total:0,
                filter:'所有'
            }
        },
        methods:{
            sure(){
                var time=new Date()
                var hours=time.getHours()
                var minutes=time.getMinutes()
                if(time.getHours()<10){
                    hours='0'+time.getHours()
                }
                if(time.getMinutes()<10){
                    minutes='0'+time.getMinutes()
                }
                if(this.content==='') return false;
                else {
                    this.todoData.unshift({
                        id:id++,
                        content:this.content,
                        nowTime:time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate()+' '+hours+':'+minutes,
                        completed:false
                    });
                    this.content=''
                }
            },
            handleToggoleState(state){
                this.filter=state;
                console.log(state);
            },
            HandlerClear(){
                this.todoData=this.todoData.filter(item=>item.completed==false)
            }
        },
        watch:{
            todoData:{
                // deep:true,
                handler(){
                    this.total=this.todoData.filter(item=>item.completed===false).length
                }
            },
        },
        computed:{
            filterData(){
                switch (this.filter) {
                    case '所有':
                        return this.todoData;
                    case '未完成':
                        return this.todoData.filter(item=>item.completed===false);
                    case '已完成':
                        return this.todoData.filter(item=>item.completed===true);
                    default :
                        return 1;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.main-todo{
    width: 100%;
    box-shadow: 0 0 5px #666;
    .add-todo{
        font-size: 24px;
        border: none;
        outline: none;
        width: 100%;
        padding: 10px 10px 10px 36px;
        box-sizing: border-box;
    }
}
</style>