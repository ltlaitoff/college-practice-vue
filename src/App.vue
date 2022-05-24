<template>
	<div id="app">
		<AGHeader />
		<router-view />
		<AGFooter />
		<PushNotificationsSubscribe
			v-if="showPushNotificationsSubscribe"
			@yes="subscribeToNotifications"
			@no="subscribeToNotifications"
		/>
	</div>
</template>

<script>
import AGHeader from '@/components/AGHeader'
import AGFooter from '@/components/AGFooter'
import PushNotificationsSubscribe from '@/components/PushNotificationsSubscribe'

export default {
	components: {
		AGHeader,
		AGFooter,
		PushNotificationsSubscribe
	},
	data() {
		return {
			showPushNotificationsSubscribe: true
		}
	},

	mounted() {
		this.showPushNotificationsSubscribe = Notification.permission === 'default'

		self.addEventListener('push', this.notificationRegistration)
		if (this.showPushNotificationsSubscribe === false) {
			this.testNotification()
		}
	},

	beforeUnmounted() {
		self.removeEventListener('push', this.notificationRegistration)
	},

	methods: {
		testNotification() {
			return setTimeout(() => {
				new Notification('Test notification', { body: 'test' })
			}, 3000)
		},

		notificationRegistration(e) {
			const notification = e.data.text()
			self.registration.showNotification(notification, {})
		},

		subscribeToNotifications() {
			if (navigator.serviceWorker) {
				navigator.serviceWorker.ready.then(() => {
					if ('PushManager' in window) {
						this.askPermission()
					}
				})
			}
		},

		notSubscribeToNotifications() {
			this.askPermission()
		},

		askPermission() {
			return new Promise((resolve, reject) => {
				const permissionResult = Notification.requestPermission(result => {
					resolve(result)
				})

				if (permissionResult) {
					permissionResult.then(resolve, reject)
				}
			}).then(permissionResult => {
				this.showPushNotificationsSubscribe = false

				if (permissionResult !== 'granted') {
					/* eslint-disable-next-line */
					throw new Error("We weren't granted permission.")
				}

				this.testNotification()
			})
		}
	}
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
