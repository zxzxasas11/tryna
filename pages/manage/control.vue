<template>
	<div>
		<div>控制中心</div>
		<ul class="control-box">
			<li>
				<div class="num">{{info.user}}</div>
				<div>今日注册</div>
			</li>
			<li>
				<div class="num">{{info.post}}</div>
				<div>今日发帖</div>
			</li>
			<li>
				<div class="num">{{info.comments}}</div>
				<div>今日新增回复</div>
			</li>
			<li>
				<div class="num">{{info.active}}</div>
				<div>今日活跃用户</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import log from '../../api/log';
    export default {
        data(){
            return{
                info:{}
            }
        },
        async asyncData({params}) {
            let {data} = await log.getCount({});
            console.log(data);
            return {
                info: data
            }
        },
    }
</script>

<style scoped lang="less">
	.control-box{
		margin:10px 0;
		display: flex;
		justify-content: flex-start;
		flex-flow: wrap;
		li{
			max-width: 25%;
			flex:1;
			text-align: center;
			.num{
				width: 25%;
				box-sizing: border-box;
			}
			div{
				margin:0 auto;
			}
		}
	}
</style>
