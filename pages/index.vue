<template>
	<div class="box">
		<div class="main">
			<!--<div class="article-single">
			
			</div>-->
		</div>
		<div class="introduction">
		</div>
	</div>
</template>

<script>

    export default {
        data() {
            return {
            }
        },
        created() {
            console.log("---------------------");
        },
        methods: {
            /*async asyncData ({ params }) {
                return await categoryFunction.getAll()
                    .then((res) => {
                        console.log(res);
                        return { title: res.data.data }
                    })
            },*/
        }
    }
</script>

<style scoped lang="less">
	.box{
		width:100%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		/*column-count: 2;
		column-gap: 10%;*/
		.main{
			//column-width: 400px;
			border:1px solid #ddd;
			box-sizing: border-box;
			flex:1;
		}
		.introduction{
			flex:1;
			margin:0 40px;
			border:1px solid #ddd;
			box-sizing: border-box;
			//column-width: 200px;
		}
	}
</style>
