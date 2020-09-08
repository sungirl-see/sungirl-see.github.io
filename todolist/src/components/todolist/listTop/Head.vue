<template>
    <div>
        <header class="header">
            <h1>ToDoList</h1>
        </header>
    </div>

</template>

<script>
    export default {
        name: "Head",
        data(){
            return{

            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/css/base";
.header{
    text-align: center;
    h1{
        font-size: 100px;
        font-weight: 100;
        color: $red;
        text-shadow: 5px 5px 5px rgba(0,0,0,.1);
    }
}
</style>