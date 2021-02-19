<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view>联系电话：110 (点击拨打)</view>
			<view>地址： 重庆渝北区</view>
		</view>
		<map class="map" longitude="106.557647" latitude="29.615472"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:106.557647,
				latitude:29.615472,
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
		
	}
</style>
