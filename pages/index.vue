<template>
	<div class="box">
		<div class="column-box" v-for="l in list">
			<div class="title">{{l.name}}</div>
			<div class="hot"></div>
			<div class="column-list">
				<ul>
					<li v-for="c in l.column">
						<nuxt-link v-if="c.url==='application'" to="/FGO/list">{{c.name}}</nuxt-link>
						<nuxt-link v-else :to="'/column/'+c._id">{{c.name}}</nuxt-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
    import categoryFunction from '~/api/category'

    export default {
        data() {
            return {
                meta:
                    [
                        {name: 'keywords',content: '首页'},
                    ],
				list:[]
            }
        },
        created() {
            this.getCategory();
        },
        methods: {
            /*async asyncData ({ params }) {
                return await categoryFunction.getAll()
                    .then((res) => {
                        console.log(res);
                        return { title: res.data.data }
                    })
            },*/
            getCategory() {
                categoryFunction.getAll().then(res => {
                    this.list = res.data.data;
                })
            }
        }
    }
</script>

<style scoped lang="less">
	/*.container {
		margin: 0 auto;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.title {
		font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		display: block;
		font-weight: 300;
		font-size: 100px;
		color: #35495e;
		letter-spacing: 1px;
	}
	
	.subtitle {
		font-weight: 300;
		font-size: 42px;
		color: #526488;
		word-spacing: 5px;
		padding-bottom: 15px;
	}
	
	.links {
		padding-top: 15px;
	}*/
	
	.box {
		column-count: 2;
		-moz-column-count: 2;
		column-width: 400px;
		column-gap: 20px;
		margin: 0 auto;
		
		.column-box {
			break-inside: avoid;
			width: 100%;
			overflow: auto;
			//padding:1%;
			.title {
				text-align: left;
				font-weight: bold;
				clear: both;
				height: 40px;
				border: 1px solid #ddd;
				font-size: 20px;
				line-height: 40px;
				box-shadow: 0 0 2px #787878;
			}
			
			.column-list {
				ul {
					li {
						float: left;
						width: 33%;
						text-align: left;
					}
				}
			}
		}
	}
</style>
