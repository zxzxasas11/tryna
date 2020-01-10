<template>
	<div>
		<span>这里展示单个球员信息</span>
		<div>
			<span>姓名:{{playerInfo.nickname}}</span>
			<span>英文名:{{playerInfo.name}}</span>
		</div>
		<div>
			<span>号码:{{playerInfo.number}}</span>
			<span>位置:{{playerInfo.position}}</span>
		</div>
		<div>
			<span>身高:{{playerInfo.height}}</span>
			<span>体重:{{playerInfo.weight}}</span>
		</div>
		<div>
			<span>合同:{{playerInfo.contract}}</span>
		</div>
		
		<div>个人数据</div>
		<div>
			<span>得分:{{avgData.score.toFixed(1)}}</span>
			<span>篮板:{{avgData.rebound.toFixed(1)}}</span>
			<span>助攻:{{avgData.assistance.toFixed(1)}}</span>
			<span>抢断:{{avgData.steal.toFixed(1)}}</span>
			<span>盖帽:{{avgData.block.toFixed(1)}}</span>
		</div>
		
		<div>近期比赛数据</div>
		<div>
			<table>
				<thead>
					<tr>
						<th>姓名</th>
						<th>客队</th>
						<th>主队</th>
						<th>上场时间</th>
						<th>得分</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="r in raceList">
						<td><nuxt-link :to="'/match/player/'+playerInfo._id">{{playerInfo.nickname}}</nuxt-link></td>
						<td><nuxt-link :to="'/match/team/'+r.guest._id">{{r.guest.name}}</nuxt-link></td>
						<td><nuxt-link :to="'/match/team/'+r.host._id">{{r.host.name}}</nuxt-link></td>
						<td>{{r.data.time}}</td>
						<td>{{r.data.score}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
    import match from "../../../api/match";

    export default {
        data(){
            return{
                playerInfo:{},
                avgData:{},
	            raceList:[]
            }
        },
	    filters:{
            fix(data){
                return data;
            }
	    },
        async asyncData({params}) {
            let { data } =await match.getPlayerInfo(params.playerId);
            let aa = await match.getPlayerAvgData(params.playerId,{});
            let bb = await match.getPlayerRaceList(params.playerId,{});
            return {
                playerInfo:data,
	            avgData:aa.data[0],
	            raceList:bb.data
            }
        },
    }
</script>

<style scoped lang="less">

</style>
