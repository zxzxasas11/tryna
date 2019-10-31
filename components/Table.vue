<template>
    <div>
        <!--表格开始-->
        <div class="table">
            <template>
                <!--highlight-current-row=true-->
                <!--header-cell-style="background-color:#73b3fc;color:#ffffff"
                row-style="background-color:#edf5ff"
                cell-style="border-right:1px solid #d2d2d2;border-bottom:1px solid #d2d2d2"-->
                <el-table
                        @row-click="rowClick"
                        :data="tableData"
                        border
                        style="width: 100%"
                        :height="tableHeight">
                    <!--固定两列 多选 序号-->
                    <el-table-column type="selection">
                    </el-table-column>
                    <el-table-column label="序号"
                        width="50"
                    >
                        <template slot-scope="scope">{{scope.$index+1+(currentPage-1)*pageSize}}</template>
                    </el-table-column>
                    <!--固定两列结束-->
                    <!--循环出其他列-->
                    <el-table-column style="background-color:#73b3fc;color:#fff;" v-for="(item,key) in tableKey"
                                     sortable
                                     :show-overflow-tooltip=true
                                     :key="key"
                                     :prop="item.value"
                                     :label="item.name">
                        <template slot-scope="scope">{{scope.row[item.value]|filterItem(item.filter)}}</template>
                    </el-table-column>
                    <!--操作按钮-->
                    <el-table-column
                            v-if="btn_group!=null"
                            width="250"
                            label="操作"
                            show-overflow-tooltip>
                        <template slot-scope="scope">
                            <el-button
                                :type="btn.type"
                                :key="btn.name"
                                v-for="btn in btn_group"
                                v-if="btn.value===scope.row[btn.item]"
                                @click="select(btn.method,scope.row,scope.$index)">
                                {{btn.name}}
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
        <!--表格结束-->
        <!--分页开始-->
        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    layout="total, prev, pager, next, jumper"
                    :total="totalSize">
            </el-pagination>
        </div>
        <!--分页结束-->
    </div>
</template>

<script>
    export default {
        name: "Table",
        data() {
            return {
                currentPage: 1,
                pageSize: 10,
            }
        },
        props: ['tableData', 'tableKey', 'totalSize', 'btn_group', 'navHeight'],
        created() {
        },
        filters:{
            filterItem(data,value){
                let rdata = data;
                if(value){
                    rdata = value[data];
                }
                return rdata;
            }
        },
        mounted(){
            this.tableHeight = document.body.clientHeight - 140 - this.navHeight;
        },
        methods: {
            handleSizeChange(val) {
                this.pageSize = val;
                this.$parent.changePageSize();
            },
            // 翻页
            handleCurrentChange(val) {
                this.currentPage = val;
                this.$parent.changeCurrentPage(val);
            },
            select(method, val, index) {
                this.$emit(method, val);//
            },
            rowClick(row, column) {
                if (column.label === "操作") {           //如果点击的是操作那一列，则不做任何处理;
                    return false;
                }
                this.$emit("rowClick", row);
            }
        }
    }
</script>

<style scoped>
    .block {
        border: 1px solid #ebeef5;
        height: 38px;
    }

    .el-table--border th {
        background-color: #73b3fc !important;
        color: #ffffff !important;
    }
</style>
