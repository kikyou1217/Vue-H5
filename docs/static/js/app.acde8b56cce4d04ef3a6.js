webpackJsonp([4],{"96gS":function(i,t){},"9tfG":function(i,t){},NHnr:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("7+uW"),n={render:function(){var i=this.$createElement,t=this._self._c||i;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var _=e("VU/8")({name:"App"},n,!1,function(i){e("9tfG")},null,null).exports,c=e("/ocq");a.a.use(c.a);var s,r=new c.a({routes:[{path:"/",component:_,children:[{path:"",component:function(i){return e.e(0).then(function(){return i(e("lyB/"))}.bind(null,e)).catch(e.oe)}},{path:"/item",component:function(i){return e.e(1).then(function(){return i(e("iQm9"))}.bind(null,e)).catch(e.oe)}},{path:"/score",component:function(i){return e.e(2).then(function(){return i(e("RuB8"))}.bind(null,e)).catch(e.oe)}}]}]}),d=e("NYxO"),o=(e("pFYg"),e("fZjL"),e("//Fk"),e("bOdI")),p=e.n(o),w=(s={},p()(s,"REMBER_NUM",function(i,t){i.itemNum+=t}),p()(s,"REMBER_ANSWER",function(i,t){i.answerid.push(t)}),p()(s,"INITIALIZE_DATA",function(i){i.itemNum=1,i.answerid=[]}),s);a.a.use(d.a);var m=new d.a.Store({state:{level:"第一周",itemNum:1,answerid:[],itemDetail:[{topic_id:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"正确答案",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"A是错的",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"D是对的",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"C说的不对",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目五",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"错误答案",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"错误答案",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"错误答案",is_standard_answer:0}]}]},actions:{addNum:function(i,t){var e=i.commit,a=i.state;e("REMBER_ANSWER",t),a.itemNum<a.itemDetail.length&&e("REMBER_NUM",1)},initializeData:function(i){(0,i.commit)("INITIALIZE_DATA")}},mutations:w});e("UAgs"),e("96gS");a.a.config.productionTip=!1,new a.a({el:"#app",router:r,store:m,components:{App:_},template:"<App/>"})},UAgs:function(i,t){var e,a,n,_,c;e=document,a=window,n=e.documentElement,_="orientationchange"in window?"orientationchange":"resize",c=function(){var i=n.clientWidth;i&&(n.style.fontSize=i/320*20+"px")},e.addEventListener&&(a.addEventListener(_,c,!1),e.addEventListener("DOMContentLoaded",c,!1))}},["NHnr"]);
//# sourceMappingURL=app.acde8b56cce4d04ef3a6.js.map