<template>
    <div>
        <div class="top">
            <ul>
                <li v-for="i in item" @click="open(i)">{{i.name}}</li>
            </ul>
        </div>
        <div class="data-box">
            <div class="left">
                <ul class="team-ul">
                    <li v-for="t in teams">
                        <nuxt-link :to="{path:'/match',query:{team:t._id}}">{{t.name}}</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="right">
                <div>{{common.formatTime(new Date(),"YYYY-MM-DD")}}</div>
                <div class="race-box">
                    <div v-for="r in races" class="single">
                        <span>{{common.formatTime(r.beginTime,"HH:mm")}}</span>
                        <span>{{r.score.guest[r.score.guest.length-1]}}</span>
                        <span>
                            <nuxt-link :to="'/match/team/'+r.guest._id">{{r.guest.name}}</nuxt-link>
                            vs
                            <nuxt-link :to="'/match/team/'+r.host._id">{{r.host.name}}</nuxt-link>
                        </span>
                        <span>{{r.score.host[r.score.host.length-1]}}</span>
                        <span>
                            <nuxt-link :to="'/match/'+r._id">数据统计</nuxt-link>
                        </span>
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
            },
            getRace(params){
                match.getRaceList(params).then(res=>{
                    this.races = res.data;
                })
            },
            
        },
        watch:{
            '$route.query.team'(data){
                this.getRace({teamId:data});
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
    .team-ul{
        li{
            background-color: #f4f4f4;
            height:40px;
            line-height: 40px;
            cursor: pointer;
            margin: 1px 0 ;
            &:hover{
                color:#0cf;
            }
            a{
                display: inline-block;
                width:100%;
                height:100%;
            }
        }
    }
    
    .race-box{
        .single{
            span:first-child,span:last-child{
                width:20%;
            }
            span:last-child{
                text-align: right;
            }
            span{
                display: inline-block;
            }
        }
    }
</style>
