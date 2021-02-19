const BASE_URL = 'http://localhost:8082'
export const myRequest = (options)=>{
	return new Promise((resolve)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.method || 'GET',
			data:options.data || {},
			success: (res)=>{
				if(res.data.status !== 0){
					return uni.showToast({
						title:'数据获取失败'
					})
					
				}
				resolve(res)
			},
			fail: (err)=>{
				uni.showToast({
					title:'接口请求失败'
				})
				reject(err)
			}
		})
	})
}