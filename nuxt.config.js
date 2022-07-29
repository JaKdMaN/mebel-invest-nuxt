export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	target: 'static',
	head: {
		title: 'mebel-invest-nuxt',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		script: [{
			src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
		}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/css/main',
		'swiper/dist/css/swiper.css'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: './plugins/vue-awesome-swiper.js', ssr: false },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/google-fonts'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		'bootstrap-vue/nuxt',
		[
			'@nuxtjs/firebase',
			{
				config: {
					apiKey: "AIzaSyDjqGGUxMrZpYpSIc27YovYq8gwCm7YYIs",
					authDomain: "mebel-invest-base.firebaseapp.com",
					databaseURL: "https://mebel-invest-base-default-rtdb.europe-west1.firebasedatabase.app",
					projectId: "mebel-invest-base",
					storageBucket: "mebel-invest-base.appspot.com",
					messagingSenderId: "848013634645",
					appId: "1:848013634645:web:76b5ce8043922f4c7e78dc"
				},
				services: {
					auth: true
				}
			}
		]
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
