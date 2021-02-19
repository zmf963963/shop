<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view @click="leftClickHandle(index,item.id)" 
			:class="active===index?'active':''" 
			v-for="(item,index) in cates" 
			:key="item.id">
			{{item.title}}
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in secondData" :key="item.id">
				<image :src="item.img_url"></image>
				<text>{{item.title}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active:0,
				secondData:[]
			}
		},
		methods: {
			async getPicsCate(){
				const res = await this.$myRuquest({
					url: '/api/getimgcategory'
				})
				this.cates = res.data.message
				this.leftClickHandle(0,this.cates[0].id)
			},
			async leftClickHandle(index,id){
				this.active = index
				//获取右侧的数据
				const res = await this.$myRuquest({
					url:'/api/getimages/'+id
				})
				this.secondData = res.data.message
			}
		},
		onLoad(){
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		display: flex;
		height: 100%;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
		}
		view{
			height: 50px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		.active{
			background: $shop-color;
			color: #fff;
		}
		.right{
			height: 100%;
			width: 520rpx;
			margin: 0 auto;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text:{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
