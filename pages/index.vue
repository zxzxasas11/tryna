<template>
	<div class="box">
		<div class="main">123
		</div>
		<div class="introduction">456
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
        },
	    mounted(){
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
