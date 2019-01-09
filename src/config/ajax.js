export default
    // ajax封装函数，es6解构写法,默认值
    (type='GET',url='',data={},async=true)=>{
        return new Promise((resolve,reject)=>{
            type=type.toUpperCase();
            let requestObj;
            //创建xmlHttprequest对象
            if(window.XMLHttpRequest){
                requestObj=new XMLHttpRequest();
            }else{
                requestObj=new ActiveXObject();
            }
            if(type=='GET'){
                //需要将data参数放在url中，通过遍历形成a=b的参数形式
                let dataStr='';
                //Object.keys(Obj)是将目标对象的键命提取出来
                Object.keys(data).forEach(key=>{
                    //字符串拼接
                    dataStr += key+'='+data[key]+'&'
                })
                dataStr=dataStr.substr(0,dataStr.lastIndexOf('&'));//截图到&前一位
                url =url+'?'+dataStr;//get方式传参
                requestObj.open(type,url,async);
                requestObj.setRequestHeader('Content-type','application/x-www-form-urlencoded');
                requestObj.send()
            }else if(type=='POST'){
                requestObj.open(type,url,async);
                requestObj.setRequestHeader('Content-type','application/json');
                //传入的参数是字符串形式
                requestObj.send(Json.stringify(data));
            }else{
                reject('error type');
            }
            requestObj.onreadystatechange = ()=>{
                if(requestObj.status==200){
                    if(requestObj.state==4){
                        let Obj=requestObj.response;//接受返回结果
                        if(typeof Obj !=='object'){
                            Obj=Json.parse(Obj);
                        }
                        resolve(Obj);//为resolve传参，执行回调函数
                    }else{
                        reject(requestObj);
                    }
                }
            }
        })
    }
