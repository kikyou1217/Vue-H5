<template>
    <section>
        <header class='top_tips'>
            <span v-if="fatherComponent=='home'" class='num_tip'>{{level}}</span>
            <span v-if="fatherComponent=='item'"  class='num_tip'>题目{{itemNum}}</span>
        </header>
        <div v-if="fatherComponent=='home'">
            <div class='home_logo'></div>
            <router-link to="item" class='start button_style'></router-link>
        </div>
        <div v-if="fatherComponent=='item'">
            <div class='back_img item_container_style'>
                <!-- v-for动态生成题目 -->
                <header class='item_title'>{{itemDetail[itemNum-1].topic_name}}</header>
                <!-- 生成li的内容 -->
                <ul class="answer_collection">
                    <li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)">
                        <!-- 根据传入的index,输出答案序号 -->
                        <span class='answer_num' :class="{'hasChoosed':choosedNum==index}">{{chooseType(index)}}</span>
                        <span class='answer_name'>{{item.answer_name}}</span>
                    </li>
                </ul>
                <!-- 下一题或提交的按钮，需要做判断 -->
                <span class='next button_style_else' v-if="itemNum < itemDetail.length" @click='nextItem'></span>
                <span class='submit button_style_else' v-else @click='submitAnswer'></span>
            </div>
        </div>
    </section>
</template>
<script>
    //把sorte中的数据及方法传过来
   import {mapState,mapActions} from 'vuex'
    export default{
        name:'itemcontainer',
        data(){
            return {
                itemId:null,
                choosedNum:null,//选择答案的索引
                choosedId:null, //选择答案id
            }
        },
        // 父向子组件传值props
        props:['fatherComponent'],
        computed: mapState([
            'level',//活动周数
            'itemNum',//第几题
            'itemDetail',
            'timer'//计时器
        ]),
        methods:{
            ...mapActions([
                'addNum','initializeData'
            ]),
            // 对应答案字母
            chooseType: index=>{
                switch(index){
                    case 0 : return 'A';
                    case 1 : return 'B';
                    case 2 : return 'C';
                    case 3 : return 'D';
                }
            },
            // 选择的答案
            choosed(index,id){
                this.choosedNum=index;
                this.choosedId=id;
            },
            //下一题
            nextItem(){
                if(this.choosedNum !=null){
                    //保存答案choosedId,将索引清零(原因是下个item页面在选择是也执行相同的方法)
                    this.choosedNum=null;
                    //保存答案choosedId到store中的answerid中
                    this.addNum(this.choosedId);
                }else{
                    alert('请选择答案')
                }
            },
            submitAnswer(){
                // 跳转至score页面
                if(this.choosedNum !=null){
                    //保存答案choosedId,将索引清零(原因是下个item页面在选择是也执行相同的方法)
                    this.choosedNum=null;
                    this.addNum(this.choosedId);
                    //保存答案choosedId到store中的answerid中
                    this.$router.push('score');
                }else{
                    alert('请选择答案')
                }
            }
        },
        created(){
                //初始化信息
                if(this.fatherComponent == 'home') {
                    this.initializeData();
                    document.body.style.backgroundImage = 'url(../images/1-1.jpg)';
		        }
            }
    }
</script>
<style>
    .top_tips{
        background: url(../images/WechatIMG2.png) no-repeat;
        background-size: 100% 100%;
        width: 3.9rem;
        height: 7.8rem;
        position: absolute;
        top: -2rem;
        right: 1.5rem;
        z-index: 10;
    }
    .num_tip{
        position: absolute;
        top: 5.95rem;
        right: 0.9rem;
        color: #a57c50;
        font-size: 0.65rem;
        font-family: 'Microsoft YaHei';
        text-align: center;
    }
    .home_logo{
        background: url(../images/1-2.png) no-repeat;
        background-size: 100% 100%;
        width: 14rem;
        height: 13rem;
        position: absolute;
        top: 4rem;
        right: 1.3rem;
    }
    .start{
        background: url(../images/1-4.png) no-repeat;
        background-size: 100% 100%;
    }
    .next{
        background: url(../images/2-2.png) no-repeat;
        background-size: 100% 100%;
    }
    .submit{
        background: url(../images/3-1.png) no-repeat;
        background-size: 100% 100%;
    }
    .button_style{
        display: block;
        width: 4.4rem;
        height: 2.3rem;
        position: absolute;
        top: 16.7rem;
        right: 5.6rem;
    }
    .button_style_else{
        display: block;
        width: 4rem;
        height: 2.3rem;
        position: absolute;
        top: 11.7rem;
        right: 4.6rem;
    }
    .back_img{
        background: url(../images/2-1.png) no-repeat;
        background-size: 100% 100%;
    }
    .item_container_style{
        width: 14rem;
        height: 13rem;
        position: absolute;
        top: 4rem;
        right: 1.3rem;
    }
    .item_title{
        color: #fff;
        font-size: 0.7rem;
        position: absolute;
        top: 2.5rem;
        left: 3rem;
    }
    .answer_collection{
        margin-top: 3.7rem;
    }
    .answer_num{
        display: inline-block;
        width: 0.7rem;
        height: 0.7rem;
        border: 1px solid #fff;
        border-radius: 50%;
        font-size: 0.3rem;
        color: #fff;
        text-align: center;
        margin-left: 3rem;
    }
    .answer_name{
        color: #fff;
        font-size: 0.65rem;
        margin-left: 0.2rem;
    }
    .hasChoosed{
        border: 1px solid #ffd400;
        background-color: #ffd400;
        color: #575757;
    }
</style>