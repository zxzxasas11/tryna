<template>
	<div class="box">
		<div class="category-single" v-for="c in categoryList">
			<span>{{c.name}}</span>
			<div class="category-second" v-for="cc in c.children">
				<span>{{cc.name}}</span>
				<div class="category-third" >
					<ul>
						<li v-for="ccc in cc.children">
							<nuxt-link :to="'/plate/'+ccc._id">{{ccc.name}}</nuxt-link>
						</li>
					</ul>
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
                categoryList:[],
                
            }
        },
        created() {
            this.getData();
            
        },
	    mounted(){
	    },
        methods: {
            getData() {
                category.getCategory({}).then(res => {
                    this.categoryList = res.data;
                })
            },
        }
    }
</script>

<style scoped lang="less">
	.box{
		width:95%;
		margin: 0 auto;
		column-count: 2;
		column-gap: 10%;
		.category-single{
			break-inside: avoid;
			border:1px solid #ddd;
			box-sizing: border-box;
			margin:10px 0;
			&>span{
				font-weight: bold;
				font-size:1.5rem;
			}
			.category-second{
				padding:0 10px;
				margin:10px 0;
				&>span{
					font-size:1.2rem;
				}
				.category-third{
					padding:0 10px;
					color:#004b9a;
					ul{
						display: flex;
						flex-flow: wrap;
						li{
							flex:1;
							max-width:25%;
						}
					}
				}
			}
		}
	}
</style>
