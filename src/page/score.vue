<template>
    <div>
        <div class='bg_img'>
            <div class='result'><span>{{score}}</span><span>分！</span></div>
            <span class='scoreTips'>{{scoreTips}}</span>
        </div>
        <span class='share_img' @click='showHide'></span>
        <div>
            <span class='title'>关注葡萄之家，获取答案。</span>
            <span class='share_code'></span>
        </div>
        <div class='cover' v-show='flag' @click='showHide'>
            <span class="share_cover"></span>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default{
        name:'score',
        data(){
            return {
                flag: false,
                score:0,
                scoreTips:'',//分数提示
                //正确答案
                rightAnswer:[2,7,12,13,18],
                scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！']
            }
        },
        computed: mapState(['answerid']),
        //一刷新，answerid的答案就全清空了，不知道为啥
        created(){
            this.getScore();
            this.getTips();
            document.body.style.backgroundImage = 'url(/static/img/4-1.4c4bb05.jpg)';
        },
        methods:{
             //获取分数，实际上是要遍历rightAnswer及answerid
            getScore(){
                this.answerid.forEach((item,index)=>{
                    if(item==this.rightAnswer[index]){
                        this.score+=20;
                    }
                })
            },
             //根据索引获取提示
            getTips(){
                if(this.score==0){
                    this.scoreTips='你说，是不是把知识都还给小学老师了？'
                }else{
                    let index=Math.ceil(this.score/20)-1;
                    this.scoreTips=this.scoreTipsArr[index];
                }
            },
            showHide(){
                this.flag=!this.flag;
            }
        }
    }
</script>
<style lang='css'>
    body{
        width: 100%;
        height: 100%;
        background: url(../images/4-1.jpg) no-repeat;
        background-size: 100% 100%;
    }   
    .bg_img{
        background: url(../images/4-2.png);
        background-size: 100% 100%;
        width: 10rem;
        height: 8.8rem;
        margin: 2rem auto 0;
        position: relative;
    }
    .result{
        font-size: 1.5rem;
        text-align: center;
        -webkit-text-stroke: 0.04rem #412318;
        position: absolute;
        top: 4.2rem;
        left: 4rem;
    }
    .result span{
        color: #a51d31;
        font-weight: 900;
        font-family: Tahoma,Helvetica,Arial;
    }
    .scoreTips{
        position: absolute;
        font-size: 0.7rem;
        color: #412318;
        top: 6.3rem;
        left: 2rem;
        width: 7rem;
        text-align: center;
    }
    .share_img{
        background: url(../images/4-3.png);
        background-size: 100% 100%;
        width: 6rem;
        height: 2.5rem;
        position: absolute;
        top: 12rem;
        left: 5.5rem;
    }
    .title{
        font-size: 0.4rem;
        color: #412318;
        position: absolute;
        top: 16rem;
        left: 5.5rem;
    }
    .share_code{
        background: url(../images/4-4.png);
        background-size: 100% 100%;
        width: 6rem;
        height: 5.9rem;
        position: absolute;
        top: 17rem;
        left: 5.2rem;
    }
    .cover{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.6);
    }
    .share_cover{
        background: url(../images/5-2.png);
        background-size: 100% 100%;
        width: 11rem;
        height: 10.3rem;
        position: absolute;
        top: 6rem;
        left: 2.5rem;
    }
</style>