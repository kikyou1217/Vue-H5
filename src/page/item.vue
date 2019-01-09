<template>
        <itemcontainer father-component='item'>111</itemcontainer>
</template>
<script>
     // 导入子组件itemcontainer
     import itemcontainer from '../components/itemcontainer'
     export default{
        name:'item',
        components:{
            itemcontainer
        }
    }
</script>
<style>
</style>