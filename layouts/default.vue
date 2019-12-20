<template>
	<div style="height:100%">
		<navHeader></navHeader>
		<nuxt/>
	</div>
</template>
<script>
	import navHeader from "~/components/navHeader";
    export default {
        components:{navHeader},
        data(){
            return{
                path:"ws://192.168.31.226:8888",
                socket:"",
                so:[],
                mess:""
            }
        },
        created() {

        },
        mounted(){
            //this.init();
        },
        methods: {
            init: function () {
                if(typeof(WebSocket) === "undefined"){
                    alert("您的浏览器不支持socket")
                }else{
                    // 实例化socket
                    this.socket = new WebSocket(this.path);
                    this.common.setWs(this.socket);
                    // 监听socket连接
                    this.socket.onopen = this.open;
                    // 监听socket错误信息
                    this.socket.onerror = this.error;
                    // 监听socket消息
                    this.socket.onmessage = this.getMessage
                }
            },
            open: function () {
                console.log("socket连接成功");
            },
            error: function () {
                console.log("连接错误");
            },
            getMessage: function (msg) {
                alert(msg.data);
                //this.$store.dispatch("/socket/setSocket",JSON.parse(msg.data));
            },
            send: function (params) {
                this.socket.send(params)
            },
            close: function () {
                console.log("socket已经关闭")
            },
        },
        destroyed () {
            // 销毁监听
            //this.socket.onclose = this.close
        },
	    watch: {
            /*'$store.getters.getSocket': {
                handler: function(newer, older) {
                    //解释一下为什么这里我放了判断，因为我的需求使然，我存在vuex中的是userID，一个用户只有一个id，但可能会提交多条数据，watch只在数据发生变动的时候才执行操作，所以上面我每次都将store里面的数据置空操作。
                    if (newer == null) {
                        return
                    } else {
                        //this.getList() // methods中定义好的获取数据列表的方法
                        console.log(newer);
                    }
                },
                deep: true // 开启深度监听
            }*/
        }
    }
</script>
<style>
	html {
		font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif;
		font-size: 16px;
		word-spacing: 1px;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
		height:100%;
	}
	
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
	}
</style>
