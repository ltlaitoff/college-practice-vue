<template>
	<b-navbar-nav card-header>
		<b-nav-item
			v-for="item in navigationItems"
			:key="item.id"
			:to="item.path"
			exact
			exact-active-class="active"
			:disabled="item.active === false"
			>{{ item.name }}</b-nav-item
		>
	</b-navbar-nav>
</template>

<script>
import { routes as navigationData } from '@/router/index'

export default {
	name: 'MainNavigation',

	props: {
		type: {
			type: String,
			required: false,
			default: 'dark'
		}
	},

	data() {
		return {
			navigationData: navigationData
		}
	},

	computed: {
		navigationItems() {
			return this.navigationData.filter(
				item => item.inMenu === undefined || Boolean(item.inMenu) === true
			)
		}
	}
}
</script>

<style lang="scss" scoped src="@/style/MainNavigation.scss"/> 