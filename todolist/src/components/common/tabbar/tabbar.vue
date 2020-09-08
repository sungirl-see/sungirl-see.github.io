<template>
    <div class="tabbar">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/css/tabbar';
</style>