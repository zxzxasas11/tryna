<template>
    <div class="menu-box">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                ref="leftMenu"
                key="1"
                @close="handleClose">
            <nuxt-link to="/SysHome">
                <el-menu-item index="0" key="0">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">后台管理系统</span>
                </el-menu-item>
            </nuxt-link>
            <el-submenu style="background-color: #f4f9ff" :index="menu.id" v-for="menu in menus"
                        :key="menu.id">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{menu.name}}</span>
                </template>
                <el-menu-item-group
                        class="list-line"
                        :key="m.id" :index="m.id" v-for="m in menu.children">
                    <el-menu-item :index="m.id">
                        <div class="second_menu_a" :to="m.url" @click="addTags(m)">
                            {{m.name}}
                        </div>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    import Utils from '~/assets/js/Utils'
    export default {
        name: "Menu",
        data() {
            return {
                menus: [
                    {id:'01',name:"系统管理",url:"",children:[
                            {id:"0101",name:"用户管理",url:"/manage/user"},
                            {id:"0102",name:"分类管理",url:"/manage/plate"},
                            {id:"0103",name:"日志管理",url:"/manage/log"},
                            {id:"0104",name:"权限管理",url:"/manage/authority"},
                            {id:"0105",name:"角色管理",url:"/manage/role"},
                            {id:"0106",name:"数据监控",url:"/manage/control"},
                        ]
                    },
                    {id:'02',name:"模块管理",url:"",children:[
                            {id:"0201",name:"帖子管理",url:"/manage/post"},
                            {id:"0202",name:"我的板块",url:"/manage/myPlate"},
                        ]
                    },
                    {id:'03',name:"比赛管理",url:"",children:[
                            {id:"0301",name:"比赛项目",url:"/manage/match/project"},
                            {id:"0302",name:"队伍名单",url:"/manage/match/team"},
                            {id:"0303",name:"选手名单",url:"/manage/match/player"},
                            {id:"0304",name:"赛程",url:"/manage/match/raceList"},
                        ]
                    },
                ]
            }
        },
        methods: {
            handleOpen() {

            },
            handleClose() {

            },
            addTags(m) {
                /*let visit = this.$store.getters.visitedViews;
                this.$store.commit("tags/set_active_index",m.url);
                for (let i = 0; i < visit.length; i++) {
                    if (m.name === visit[i].name) {
                        return;
                    }
                }*/
                this.$router.push(m.url);
                //this.$store.commit("tags/add_visit",m);
            }
        },
        mounted() {
            //定义要传递的函数refreshMemu   用于刷新
            /*let that = this;
            Utils.$on('refreshMenu', function () {
                that.getMenu();
            })*/
        },
    }
</script>

<style scoped lang="less">
    .menu-box {
        height: 100%;
        min-height:400px;
        text-align: left;

        ul {
            height: 100%;
        }
    }

    .second_menu_a {
        display: block;
        width: 100%;
        height: 100%;
    }
    /*.el-menu-item-group__title {
        padding: 0 !important;

    }

    .list-line {
        background-color: #f4f9ff;
        border-bottom: 1px solid #e8e8e8;
        height: 50px;
        line-height: 50px;
    }*/
</style>
