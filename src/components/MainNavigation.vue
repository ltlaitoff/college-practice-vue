<template>
	<b-nav card-header>
		<b-nav-item
			v-for="item in navigationData"
			:key="item.id"
			:to="item.path"
			exact
			exact-active-class="active"
			:disabled="!(item.active === undefined)"
			>{{ item.name }}</b-nav-item
		>
	</b-nav>
</template>

<script>
import { routes as navigationData } from '@/router/index'

export default {
	name: 'MainNavigation',
	data() {
		return {
			navigationData: navigationData
		}
	}
}
</script>
