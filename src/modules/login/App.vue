<template>
  <div class="wrapper">
    <div class="login-container ">
      <div class="alert alert-danger">{{error}}</div>
      <form class="form-signin" method="post" action="/login" style="-webkit-box-shadow: 0 0 14px rgba(0,0,0,.1);-moz-box-shadow: 0 0 14px rgba(0,0,0,.1);box-shadow: 0 0 14px rgba(0,0,0,.1)">
        <h2 class="form-signin-heading">阿尔萨斯平台133333333</h2>
        <div>
          <label class="" for="username">用户名：</label>
          <input id="username" type="text" class="form-control" name="username" placeholder="Login username" required="" autofocus="" />
        </div>
        <div style="padding-top:20px;">
          <label class="" for="password">密码：</label>
          <input id="password" type="password" class="form-control" name="password" placeholder="Password" required=""/>
        </div>
        <label class="checkbox">
          <input type="checkbox" class="colored-success" value="remember-me" id="rememberMe" name="rememberMe" checked>
          <span class="text">Remember me</span>
        </label>
        <button class="btn btn-lg btn-primary btn-block" type="submit"><i class="fa fa-pagelines"></i>&nbsp;&nbsp;登陆&nbsp;&nbsp;</button>
      </form>
    </div>
  </div>

</template>

<script>
  import axios from "axios";
  export default {
    name: 'app',
    components: {
    },
    data() {
      return{
        error:""
      }
    },
    mounted(){
      //   var i =1;
      //   setInterval(function () {
      //       console.log(i++);
      //   },300);
      // axios({
      //   url:"/api/login",
      //   method:"post",
      //   data:{
      //     scene:2,
      //     visitSiteId:2,
      //     pageIndex:this.index,
      //     pageSize:10
      //   },
      //   transformRequest:[data=>{
      //     return "paramJson=" + JSON.stringify(data);
      //   }],
      //   header:{
      //     "X-Requested-with":"XMLHttpRequest"
      //   },
      //   timeout:30000
      // }).then((res)=>{
      //   console.log(res.data)
      // })

    }
      //     beforeCreate: function () {
//         console.group('beforeCreate 创建前状态===============》');
//         console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
//         console.log("%c%s", "color:red","data   : " + this.$data); //undefined
//         console.log("%c%s", "color:red","message: " + this.message)
//     },
//     created: function () {
//         console.group('created 创建完毕状态===============》');
//         console.log("%c%s", "color:red","el     : " + this.$el); //undefined
//         console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
//         console.log("%c%s", "color:red","message: " + this.message); //已被初始化
//     },
//     beforeMount: function () {
//         console.group('beforeMount 挂载前状态===============》');
//         console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
//         console.log(this.$el);
//         console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
//         console.log("%c%s", "color:red","message: " + this.message); //已被初始化
//     },
//     mounted: function () {
//         // GET request for remote image
//
// //         $.ajax({
// //             url: "/api",
// //             method: "post",
// //             contentType:"application/json",
// //             dataType:"json",
// //             Accept:"application/json",
// //             data:JSON.stringify({
// //                 query:
// //                     `
// //                     {
// //                     categories{
// //                       id
// //                       category_name
// //                       category_des
// //                     }
// //                     }
// //                     `
// //             }) ,
// //             success: function (data) {
// //                 console.log(data)
// //             }
// //         })
//
//         // axios({
//         //     method:'post',
//         //     url:'/api',
//         //     data: {
//         //         query:
//         //             `
//         //             {
//         //             categories{
//         //               id
//         //               category_name
//         //               category_des
//         //             }
//         //             }
//         //             `
//         //     }
//         //     ,
//         // })
//         //     .then(function(response) {
//         //         console.log(response)
//         //     });
//     },
//     beforeUpdate: function () {
//         console.group('beforeUpdate 更新前状态===============》');
//         console.log("%c%s", "color:red","el     : " + this.$el);
//         console.log(this.$el);
//         console.log("%c%s", "color:red","data   : " + this.$data);
//         console.log("%c%s", "color:red","message: " + this.message);
//     },
//     updated: function () {
//         console.group('updated 更新完成状态===============》');
//         console.log("%c%s", "color:red","el     : " + this.$el);
//         console.log(this.$el);
//         console.log("%c%s", "color:red","data   : " + this.$data);
//         console.log("%c%s", "color:red","message: " + this.message);
//     },
//     beforeDestroy: function () {
//         console.group('beforeDestroy 销毁前状态===============》');
//         console.log("%c%s", "color:red","el     : " + this.$el);
//         console.log(this.$el);
//         console.log("%c%s", "color:red","data   : " + this.$data);
//         console.log("%c%s", "color:red","message: " + this.message);
//     },
//     destroyed: function () {
//         console.group('destroyed 销毁完成状态===============》');
//         console.log("%c%s", "color:red","el     : " + this.$el);
//         console.log(this.$el);
//         console.log("%c%s", "color:red","data   : " + this.$data);
//         console.log("%c%s", "color:red","message: " + this.message)
//     },
  }
</script>

<style>

</style>
