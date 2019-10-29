<template>
	<div class="box">
		<div class="category-single" v-for="c in categoryList">
			<span>{{c.name}}</span>
			<div class="category-second" v-for="cc in c.children">
				<span>{{cc.name}}</span>
				<div class="category-third" v-for="ccc in cc.children">
					<span>
						<nuxt-link :to="'/plate/'+ccc._id">{{ccc.name}}</nuxt-link>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import category from "../api/category";
    export default {
        data() {
            return {
                categoryList:[]
            }
        },
        created() {
            this.getData();
        },
	    mounted(){
	    },
        methods: {
            getData(){
                category.getCategory({}).then(res=>{
                    this.categoryList = res.data;
                })
            }
        }
    }
</script>

<style scoped lang="less">
	.box{
		width:100%;
		margin: 0 auto;
		column-count: 2;
		column-gap: 10%;
		.category-single{
			break-inside: avoid;
			width:100%;
			.category-second{
				padding:0 10px;
				.category-third{
					padding:0 10px;
				}
			}
		}
	}
</style>
