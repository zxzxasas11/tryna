<template>
    <div>
        <div class="top">
            <ul>
                <li v-for="i in item" @click="open(i)">{{i.name}}</li>
            </ul>
        </div>
        <div class="data-box">
            <div class="left">
                <ul>
                    <li v-for="t in teams" :class="t._id===$route.query.team?'active-class':''" @click="changeTeam(t)">{{t.name}}</li>
                </ul>
            </div>
            <div class="right">
                <div class="race-box">
                    <div v-for="r in races.data">
                        <span>{{r.score.guest[r.score.guest.length-1]}}</span>
                        <span>{{r.guest.name}}vs{{r.host.name}}</span>
                        <span>{{r.score.host[r.score.host.length-1]}}</span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    import match from "../../api/match";
    export default {
        data(){
            return{
                item:[],
                teams:[],
                races:[]
            }
        },
        async asyncData({params,route}) {
            console.log(route.query.team);
            
            let {data} = await match.getRaceItemList({});
            let aa = await match.getTeamList({itemId:data[0]._id});
            let bb ;
            if(route.query.team){
                bb = await match.getRaceList({teamId:route.query.team});
            }else{
                bb = await match.getRaceList({itemId:data[0]._id});
            }
            return {
                item: data,
                teams:aa.data,
                races:bb.data
            }
        },
        methods:{
            changeTeam(t){
                this.$router.push({path:"/match",query:{team:t._id}});
                this.getRace({teamId:this.$route.query.team});
            },
            getRace(params){
                match.getRaceList(params).then(res=>{
                    console.log(res);
                    this.races = res.data;
                })
            }
        }
        
    }
</script>

<style scoped lang="less">
    .active-class{
        color:red
    }
    .data-box{
        display: flex;
        .left{width:200px;}
        .right{width:100%;}
    }
</style>
