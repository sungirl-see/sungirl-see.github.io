module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'componentsnetwork': '@/componentsnetwork',
				'network': '@/network',
				'views': '@/views'
			}
		}
	},
	devServer: {
		proxy: {
			'/api':{
				target: 'https://api.jisuapi.com/news/get',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': ''
				}
			},
			'/demo': {
				target: 'http://localhost:8020/demo0706',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/demo': ''
				}
			},
			'/picture':{
				target: 'http://www.czsay.com/squeen/moments/uploadimage2',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/picture': ''
				}
			}
		}
	}
}
