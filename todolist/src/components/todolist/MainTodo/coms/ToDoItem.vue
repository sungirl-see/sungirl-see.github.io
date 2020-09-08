<template>
    <div :class="['todo-item',todo.completed?'completed':'']">
        <input type="checkbox" v-model="todo.completed">
        <label>{{todo.content}}<i></i>{{todo.nowTime}}</label>
    </div>
</template>

<script>
    export default {
        name: "ToDoItem",
        props:['todo'],
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
    @import '../../../../assets/css/base';
.todo-item{
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    border-top: 1px solid #4e4e4e;
    &:hover{
        button:after{
            content: 'x';
            font-size: 24px;
            color: $red;
            cursor: pointer;
        }
    }
    &.completed{
    label{
        color: #4e4e4e;
        text-decoration: line-through;
    }
}
    label{
        flex: 1;
        transition: color .4s;
        i{
            width: 20px;
            display: inline-block;
        }
    }
    input{
        height: 30px;
        width: 50px;
        border: none;
        outline: none;
        -webkit-appearance: none;
        cursor: pointer;
        &:after{
            content: url("../../../../assets/img/todolist/unchecked.png");
        }
        &:checked:after{
            content: url("../../../../assets/img/todolist/checked.png");
        }
    }
    button{
        -webkit-appearance: none;
        border: none;
        outline: none;
        width: 40px;
        background-color: transparent;
    }
}
</style>