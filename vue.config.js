const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	publicPath:
		process.env.NODE_ENV === 'production' ? '/college-practice-vue/' : '/',
	transpileDependencies: true,
	chainWebpack: config => {
		config.module
			.rule('vue')
			.use('vue-loader')
			.tap(() => {
				return {
					transformAssetUrls: {
						video: ['src', 'poster'],
						source: 'src',
						img: 'src',
						image: 'xlink:href',
						'b-avatar': 'src',
						'b-img': 'src',
						'b-img-lazy': ['src', 'blank-src'],
						'b-card': 'img-src',
						'b-card-img': 'src',
						'b-card-img-lazy': ['src', 'blank-src'],
						'b-carousel-slide': 'img-src',
						'b-embed': 'src'
					}
				}
			})
	}
})
