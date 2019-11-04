<template>
    <div class="tree-box">
        <i class=" trigger el-icon-arrow-left" :class="showOrHide?'rorate':'nororate'" @click="trigger"></i>
        <el-button @click="save">保存</el-button>
        <div>{{treeName}}</div>
        <!--empty-text=""-->
        <el-tree
                :data="treeData"
                show-checkbox
                default-expand-all
                node-key="_id"
                empty-text=""
                ref="tree"
                highlight-current
                :props="defaultProps">
        </el-tree>

    </div>
</template>

<script>
    import Utils from '../assets/js/Utils'
    export default {
        name: "Tree",
        data(){
            return{
                treeData:[],
                defaultProps: {
                    children: 'children',
                    label: 'name'     //
                },
                check:"",
                roleId:"",
                sendChecked:[]
            }
        },
        props:['treeName'],
        computed:{
            showOrHide(){ return this.$parent.treeSwitch}
        },
        methods:{
            getTree(){
                this.$post("/Menu/getAll").then(response=>{
                    let tree = this.common.listToTree(response.data,"0","menuPid","menuId");
                    this.treeData=tree;
                });
            },
            setCheckedKeys(obj){
                this.$refs.tree.setCheckedKeys(obj);
            },
            save(){
                this.$emit("save",this.$refs.tree.getCheckedKeys());
                /*let arr=this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys());
                this.$emit("save",arr);
                let data= this.$refs.tree.getCheckedKeys(this.check);
                for(let i in this.sendChecked){
                    if(this.sendChecked[i].menu_pid==="0"){
                        data.push(this.sendChecked[i].menu_id);
                    }
                }
                //数组去重
                let temp = [];
                for(let j in data){
                    if(temp.indexOf(data[j]) === -1){
                        temp.push(data[j]);
                    }
                }
                temp = temp.join(",");
                let obj = {};
                obj.menuId=temp;
                obj.roleId=this.roleId;
                this.$post("/Role/saveRoleMenu",obj).then(()=>{
                    this.$message({
                        type: 'success',
                        message: '保存成功!'
                    });
                    //接收在menu中定义的refreshMenu方法
                    Utils.$emit('refreshMenu');
                    //that.$refs.leftMenu.getMenu();
                });*/
            },
            trigger(){
                this.$parent.treeSwitch=!this.$parent.treeSwitch;
            }
        },
    }
</script>

<style scoped lang="less">
    .tree-box{
        position: relative;
        text-align:right;
        height:100%;
        overflow: auto;
        .trigger{
            font-size:30px;
            position: absolute;
            left:-15px;
            z-index:999;
            cursor: pointer;
        }
    }
    .rorate{transform: rotate(180deg);transition: 0.5s}
    .nororate{transform: rotate(0deg);transition: 0.5s}

</style>
