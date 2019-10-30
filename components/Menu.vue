<template>
    <div class="menu-box">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                ref="leftMenu"
                key="1"
                @close="handleClose">
            <router-link to="/SysHome">
                <el-menu-item index="0" key="0">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">后台管理系统</span>
                </el-menu-item>
            </router-link>
            <el-submenu style="background-color: #f4f9ff" :index="menu.id" v-for="menu in menus"
                        :key="menu.id">
                <template slot="title" >
                    <i class="el-icon-menu"></i>
                    <span>{{menu.name}}</span>
                </template>
                <el-menu-item-group
                        class="list-line"
                        :key="c.id" :index="c.id" v-for="c in menu.children">
                    <el-menu-item :index="c.menuId">
                        <nuxt-link class="second_menu_a" :to="c.url" @click.native="addTags(c)">
                            {{c.name}}
                        </nuxt-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    import Utils from '../assets/js/Utils'

    export default {
        name: "Menu",
        data() {
            return {
                menus: [
                    {id:"2",name:"系统管理",url:"/123",
                        children:[
                            {id:"201",name:"用户管理",url:"/manage/user"},
                            {id:"203",name:"公告管理",url:"/NoticeManage"},
                            {id:"204",name:"班级管理",url:"/GradeManage"}
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
                let visit = this.$store.getters.visitedViews;
                this.$store.dispatch("tags/setActiveIndex", m.url);
                for (let i = 0; i < visit.length; i++) {
                    if (m.name === visit[i].name) {
                        return;
                    }
                }
                this.$store.dispatch("tags/addVisitedViews", m);
            }
        },
        mounted() {
            //定义要传递的函数refreshMemu   用于刷新
            let that = this;
            Utils.$on('refreshMenu', function () {
                that.getMenu();
            })
        },
    }
</script>

<style scoped lang="less">
    .menu-box {
        height: 100%;
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
