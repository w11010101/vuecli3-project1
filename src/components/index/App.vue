<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">开发文档</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/OAuth2">OAuth2</router-link> |
            <router-link to="/OAuth2/Agent?code=111&server_code=222">OAuth2/Agent</router-link> |
            <!-- <a @click="toPageFn('pageA')">pageA</a> |
            <a @click="toPageFn('pageB')">pageB</a> |
            <a @click="toPageFn('page')">page</a> -->
            
            <button @click='changeeditPermission(false)'>editPermission--</button>
            <button @click='changeeditPermission(true)'>editPermission++</button>
            <!--  -->
            <div>editPermission:{{editPermission}}</div>
            <!--  -->
            <ul>
                <li>add:{{permission.add}}</li>
                <li>del:{{permission.del}}</li>
                <li>modify:{{permission.modify}}</li>
                <li>search:{{permission.search}}</li>
            </ul>
            <!--  -->
            <button v-if='permission.add'>add</button>
            <button v-if='permission.del'>del</button>
            <button v-if='permission.modify'>modify</button>
            <button v-if='permission.search'>search</button>
            <!--  -->
          
        </div>
        <router-view />
    </div>
</template>
<script type="text/javascript">
import axios from 'axios'

var cas_login = function(req, res) {
    var ticket = req.param('ticket');
    if (ticket) {
        cas.validate(ticket, function(err, status, username) {
            if (err) {
                // Handle the error
                res.send({ error: err });
            } else {
                // Log the user in
                res.send({ status: status, username: username });
            }
        });
    } else {
        res.redirect('/');
    }
};

// import route from './router';
export default {
    data() {
        return {
            msg: 'asd',
            ClientId: 'V6YhI2Al',
            oauthUrl: '',
            // permission: {
            //     identity: '管理员', // 身份
            //     state: true,
            //     level: 9, // 级别最高9 最低0 
            //     authorization: {    // 授权
            //         menu:[{     
            //             name: '菜单一',
            //             id: 0,
            //             state:true
            //         }],
            //         operation:[     // 4类操作
            //             {
            //                 level:3, // 最高权限
            //                 fun:{
            //                     add:true,
            //                     del:true,
            //                     modify:true,
            //                     search:true,
            //                 }
            //             },
            //             {
            //                 level:2, // 有查看、添加、删除。没有编辑权限，
            //                 fun:{
            //                     add:true,
            //                     del:true,
            //                     modify:false,
            //                     search:true
            //                 }
            //             },
            //             {
            //                 level:1, // 只有查询权限，仅供显示
            //                 fun:{
            //                     add:false,
            //                     del:false,
            //                     modify:false,
            //                     search:true
            //                 }
            //             },
            //             {
            //                 level:0, // 无权
            //                 fun:{
            //                     add:false,
            //                     del:false,
            //                     modify:false,
            //                     search:false
            //                 }
            //             }
            //         ]
            //     }
            // },
            editPermission:3,
            permission:''
        }
    },
    mounted() {
        console.log('app.vue');
        document.cookie = 'a=1;expires=Thu, 18 Dec 2020 12:00:00 GMT;';
        document.cookie = 'b=2;expires=Thu, 18 Dec 2020 12:00:00 GMT;';
        document.cookie = 'c=3;expires=Thu, 18 Dec 2020 12:00:00 GMT;';
        axios({
                method: 'post',
                url: '/user/12345',
                data: {
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                },
                // withCredentials:true,
                // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
                // xsrfCookieName: 'b', // default

                // // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
                // xsrfHeaderName: 'b', // 默认的
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

        this.changeeditPermission()
    },
    methods: {
        toPageFn(url) {
            window.location.href = window.location.origin + '/' + url + '.html'
        },
        onloadFn(event) {
            console.log(event)
            console.log(event.path[0].getAttribute('src'))
        },
        changeeditPermission(type){
            var obj = {
                add:true,
                del:true,
                modify:true,
                search:true,
            }
            type = type == undefined ? true : type;
            type?this.editPermission++:this.editPermission--;
            if(this.editPermissio==3){
                console.log(0);
                // this.permission = 
            }else{
                console.log(1);
                if(this.editPermission<=2){
                    obj.modify = false;
                    if(this.editPermission<=1){
                        obj.add = false;
                        obj.del = false;
                        if(this.editPermission == 0) obj.search = false;
                    }
                }
            }
            this.permission = obj;
            if(this.editPermission>3) this.editPermission = 3;
            else if(this.editPermission<0) this.editPermission = 0;
            
        }
    },
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

iframe {
    position: absolute;
    width: 100%;
    height: 50vh;
    top: 50vh;
    left: 0;
    overflow: hidden;
    border: 0;
}
</style>