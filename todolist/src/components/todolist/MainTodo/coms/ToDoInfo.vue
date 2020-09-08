<template>
    <div class="todo-info">
        <div class="total">未完成事件：<span>{{amount}}</span></div>
        <div class="tabs">
            <a v-for="item in states"
               :key="item"
               :class="state===item?'active':''"
               @click="toggoleState(item)">{{item}}</a>
        </div>
        <button type="button" class="clear" @click="clear">清除</button>
    </div>
</template>

<script>
    export default {
        name: "ToDoInfo",
        props:['amount'],
        data(){
            return{
                states:['所有','未完成','已完成'],
                state:'所有'
            }
        },
        methods: {
            toggoleState(state) {
                this.state=state
                this.$emit('toggoleState',state)
            },
            clear(){
                this.$emit('handlerClear')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../../assets/css/base';
.todo-info{
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    line-height: 40px;
    border-top: 1px solid rgba(0,0,0,.1);
    .total{
        color: $red;
    }
    .tabs{
        display: flex;
        justify-content: space-between;
        width: 200px;
        a{
            border: 1px solid $red;
            border-radius: 5px;
            padding: 0 10px;
            text-decoration: none;
            cursor: pointer;
            &.active{
                background-color: $green;
                color: #fff;
            }
        }
    }
    .clear{
        padding: 0 10px;
        background-color: $lightg;
        border-radius: 5px;
        color: #fff;
        -webkit-appearance: none;
        outline: none;
    }
}
</style>