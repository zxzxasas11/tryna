<template>
	<div>
		<div>
			<span>{{teamInfo.name}}</span>
		</div>
		<div>
			<span>球员列表</span>
			<table class="player-table">
				<thead>
					<tr>
						<th></th>
						<th>姓名</th>
						<th>号码</th>
						<th>位置</th>
						<th>合同</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="p in playerList">
						<td></td>
						<td><nuxt-link :to="'/match/player/'+p._id">{{p.nickname}}</nuxt-link></td>
						<td>{{p.number}}</td>
						<td>{{p.position}}</td>
						<td>{{p.contract}}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div>
			<span>比赛记录</span>
			<table class="race-table">
				<thead>
				<tr>
					<th></th>
					<th>开始时间</th>
					<th>得分</th>
					<th>对阵双方</th>
					<th>得分</th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="r in raceList.data">
					<td></td>
					<td>{{r.beginTime}}</td>
					<td>{{r.score.guest[r.score.guest.length-1]}}</td>
					<td>
						<nuxt-link :to="'/match/team/'+r.guest._id">{{r.guest.name}}</nuxt-link>
						vs
						<nuxt-link :to="'/match/team/'+r.host._id">{{r.host.name}}</nuxt-link>
					</td>
					<td>{{r.score.host[r.score.guest.length-1]}}</td>
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
                teamInfo:{},
                playerList:[],
	            raceList:[]
            }
        },
        async asyncData({params}) {
            let {data} = await match.getTeamInfo(params.teamId);
            let playerList = await match.getPlayerList({teamId:params.teamId,pageSize:0});
            let raceList = await match.getRaceList({teamId:params.teamId});
            console.log(raceList);
            return {
                teamInfo:data,
	            playerList:playerList.data,
	            raceList:raceList.data
            }
        },
	    methods:{
     
	    }
    }
</script>

<style scoped>

</style>
