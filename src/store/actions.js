import ajax from '../config/ajax.js'
export default{
    addNum({commit,state},id){
        //记录答案id
        commit("REMBER_ANSWER",id);
        if(state.itemNum<state.itemDetail.length){
              //下一题
        commit('REMBER_NUM',1);
        }
    },
    //初始化信息
    initializeData({commit}){
        commit('INITIALIZE_DATA');
    }
}