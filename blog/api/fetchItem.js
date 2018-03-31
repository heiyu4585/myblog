import axios from "axios/index";


export  default  function indexArtList (id){
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      dataType: 'json',
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      data: {
        "showapi_timestamp": formatterDateTime(),
        "showapi_appid": 60393, //这里需要改成自己的appid
        "showapi_sign": '2dc80bc3efd6461da1bdcb693939dc7b',  //这里需要改成自己的应用的密钥secret
        "page":id,
        "maxResult":"20"

      },
      url: 'http://route.showapi.com/341-1',
    })
      .then(function (response) {
        resolve(response.data.showapi_res_body.contentlist);
      }).catch(err=>{
      console.log(err)
    })
  });
}



