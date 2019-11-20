<template>
	<div>
		<div>控制中心</div>
		<el-select v-model="value" placeholder="请选择" @change="changeType">
			<el-option label="今日" value="1"></el-option>
			<el-option label="本月"  value="2"></el-option>
			<el-option label="自定义时间" value="3"></el-option>
		</el-select>
		<el-date-picker
				v-if="value==='3'"
				v-model="value1"
				type="daterange"
				@change="dateChange"
				range-separator="至"
				start-placeholder="开始日期"
				end-placeholder="结束日期">
		</el-date-picker>
		<ul class="control-box">
			<li>
				<div class="num">{{info.user}}</div>
				<div>{{value|dateFilter}}注册</div>
			</li>
			<li>
				<div class="num">{{info.post}}</div>
				<div>{{value|dateFilter}}发帖</div>
			</li>
			<li>
				<div class="num">{{info.comments}}</div>
				<div>{{value|dateFilter}}新增回复</div>
			</li>
			<li>
				<div class="num">{{info.active}}</div>
				<div>{{value|dateFilter}}活跃用户</div>
			</li>
			<li>
				<div class="num">{{info.active}}</div>
				<div>{{value|dateFilter}}总收藏数</div>
			</li>
			<li>
				<div class="num">{{info.active}}</div>
				<div>{{value|dateFilter}}最多帖子</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import log from '../../api/log';
    export default {
        data(){
            return{
                info:{},
	            value:"1",
	            value1:""
            }
        },
        async asyncData({params}) {
            let {data} = await log.getCount({});
            return {
                info: data
            }
        },
	    filters:{
            dateFilter(data){
                switch (data) {
	                case "1":
	                    return "今日";
	                case "2":
	                    return "本月";
	                case "3":
	                    return "区间";
                }
            }
	    },
	    methods:{
            changeType(){
            
            },
		    async getLog(params){
                await log.getCount(params);
		    },
            dateChange(){
                this.getLog({startTime:this.value1[0],endTime:this.value1[1]});
            }
	    }
	    
    }
</script>

<style scoped lang="less">
	.control-box{
		margin:10px 0;
		display: flex;
		justify-content: flex-start;
		flex-flow: wrap;
		li{
			min-width: 25%;
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
