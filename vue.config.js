const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	publicPath:
		process.env.NODE_ENV === 'production' ? '/college-practice-vue/' : '/',
	transpileDependencies: true,
	pwa: {
		name: 'Agridera',
		themeColor: '#57984c',
		msTileColor: '#324950',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black',
		iconPaths: {
			faviconSVG: 'img/icons/favicon.svg',
			favicon32: 'img/icons/32x32.png',
			favicon16: 'img/icons/16x16.png',
			appleTouchIcon: null,
			maskIcon: null,
			msTileImage: null
		},
		manifestOptions: {
			name: 'Agridera seeds & agriculture',
			short_name: 'Agridera',
			description: 'Agridera Seeds and Agriculture Ltd',
			icons: [
				{
					src: './img/icons/16x16.png',
					sizes: '16x16',
					type: 'image/png'
				},
				{
					src: './img/icons/24x24.png',
					sizes: '24x24',
					type: 'image/png'
				},
				{
					src: './img/icons/32x32.png',
					sizes: '32x32',
					type: 'image/png'
				},
				{
					src: './img/icons/64x64.png',
					sizes: '64x64',
					type: 'image/png'
				},
				{
					src: './img/icons/128x128.png',
					sizes: '128x128',
					type: 'image/png'
				},
				{
					src: './img/icons/256x256.png',
					sizes: '256x256',
					type: 'image/png'
				},
				{
					src: './img/icons/512x512.png',
					sizes: '512x512',
					type: 'image/png'
				}
			],
			start_url:
				process.env.NODE_ENV === 'production' ? '/college-practice-vue/' : '/',
			display: 'standalone',
			theme_color: '#324950',
			background_color: '#57984c'
		}
	},
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
