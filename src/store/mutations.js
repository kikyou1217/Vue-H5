//定义常规的方法
const REMBER_ANSWER='REMBER_ANSWER'
const REMBER_NUM='REMBER_NUM'
const INITIALIZE_DATA='INITIALIZE_DATA'

//同步方法，相当于methods
export default{
    //点击下一题,itemNul++,实现跳转或者理解为重新渲染
    [REMBER_NUM](state,num){
        state.itemNum +=num;
    },
    //记录答案
    [REMBER_ANSWER](state,id){
        state.answerid.push(id);
    },
    //初始化信息
    [INITIALIZE_DATA](state){
        state.itemNum=1;
        state.answerid=[];
    }
}