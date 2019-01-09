<template>
    <div>
        <itemcontainer father-component='home'></itemcontainer>
    </div>
</template>
<script>
    // 导入子组件itemcontainer
    import itemcontainer from '../components/itemcontainer'
    export default{
        name:'home',
        components:{
            itemcontainer
        }
    }
</script>
<style>
</style>

  