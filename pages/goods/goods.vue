<template>
	<view>
		<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		<view class="isOver" v-if="flag">------我是有底线的------</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				pageindex: 1,
				goods: [],
				flag: false,
			}
		},
		components:{"goods-list":goodsList},
		methods: {
			//获取商品列表数据
			async getGoodsList(){
				const res = await this.$myRuquest({
					url: '/api/getgoods?pageindex='+this.pageindex
				})
				this.goods=[...this.goods,...res.data.message]
				
			},
			goGoodsDetail(id){
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id='+id
				})
			}
		},
		onLoad () {
			this.getGoodsList()
		},
		onReachBottom(){
			if(this.goods.length<10) return this.flag = true
			console.log('chudi')
			this.pageindex++
			this.getGoodsList()
		},
		onPullDownRefresh(){
			this.pageindex = 1
			this.goods = []
			this.flag = false

		}
	}
</script>

<style lang="scss">
	.goods_list {
		background: #eee;
	}
	.isOver{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 28rpx;
	}
</style>
