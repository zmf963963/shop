<template>
	<view class="good_detail">
		<swiper indicator-dots>
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>${{info.sell_price}}</text>
				<text>${{info.market_price}}</text>
			</view>
			<view class="goods_name">{{info.title}}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：{{info.goods_no}}</view>
			<view>库存：{{info.stock_quantity}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">内容</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				swipers: [],
				info: []
			}
		},
		methods: {
			async getSwipers () {
				const res = await this.$myRuquest({
					url:'/api/getthumimages/'+this.id
				})
				
				this.swipers = res.data.message
			},
			async getDetailInfo(){
				const res = await this.$myRuquest({
					url: '/api/goods/getinfo/'+this.id
				})
				this.info= res.data.message[0]
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getDetailInfo()
			this.getSwipers()	
		},
	}
</script>

<style lang="scss">
.good_detail{
	swiper{
		height: 700rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.box1{
		padding: 10px;
		.price{
			font-size: 35rpx;
			color: $shop-color;
			line-height: 80rpx;
			text:nth-child(2){
				color: #ccc;
				font-size: 25rpx;
				text-decoration: line-through;
				margin-left: 20rpx;
			}
		}
		.goods_name{
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}
	.box2{
		padding: 0 10px;
		font-size: 32rpx;
		line-height: 70rpx;
	}
	.box3{
		.tit{
			font-size: 32rpx;
			padding-left: 10px;
			border-bottom: 1px solid #eee;
			line-height: 70rpx;
		}
		.content{
			padding: 10px;
			font-size: 28px;
			color: #333;
		}
	}
	.line{
		background: #eee;
		width: 750rpx;
		height: 10rpx;
	}
}
</style>
