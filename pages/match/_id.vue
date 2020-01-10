<template>
	<div>
		<span>这里是查询单场比赛数据的地方</span>
		<div>
			<span>{{raceInfo.guest.name}}</span>
			<span>vs</span>
			<span>{{raceInfo.host.name}}</span>
		</div>
		<div>开始时间:{{raceInfo.beginTime}}</div>
		<div>
			<table>
				<tr>
					<th></th>
					<th v-for="(a,index) in raceInfo.score.host">{{index+1}}</th>
				</tr>
				<tr>
					<td>{{raceInfo.guest.name}}</td>
					<td v-for="b in raceInfo.score.guest">{{b}}</td>
				</tr>
				<tr>
					<td>{{raceInfo.host.name}}</td>
					<td v-for="c in raceInfo.score.host">{{c}}</td>
				</tr>
			</table>
		</div>
		<div>
			<div>客队数据</div>
			<table>
				<!--<tr>
					<th></th>
					<th v-for="(g,key) in raceInfo.player_statistics.guest[0].data">{{key|getKey}}</th>
				</tr>-->
				<tr v-for="(a,index) in guestData" :key="a._id">
					<td>{{a.playerId.nickname}}</td>
					<td></td>
					<!--<td>{{gg.playerId.nickname}}</td>-->
				</tr>
			</table>
		</div>
		<div>
			<div>主队数据</div>
		</div>
	</div>
</template>

<script>
    import match from "../../api/match";
    import dataNoun from '../../assets/js/dataNoun';
    export default {
        name: "_id",
	    data(){
            return{
                raceInfo:{},
	            guestData:[],
	            hostDara:[]
            }
	    },
	    filters:{
            getKey(data){
                for(let i in dataNoun){
	                if(data===i){
	                    return dataNoun[i];
	                }
                }
            }
	    },
        async asyncData({params,route}) {
            let {data} = await match.getOneRace(params.id);
            console.log(data);
            return {
                raceInfo:data,
                guestData:data.player_statistics.guest,
                hostData:data.player_statistics.host,
            }
        },
    }
</script>

<style scoped>

</style>
