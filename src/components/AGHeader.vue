<template>
	<b-container>
		<header class="header">
			<b-link to="/"
				><b-img src="@/assets/logo.png" fluid class="logo"
			/></b-link>
			<div class="wrapper">
				<div class="search-wrapper">
					<b-form-input type="search" class="search" placeholder="Search" />
					<b-button class="button" variant="light">
						<b-icon icon="search" />
					</b-button>
				</div>

				<MainNavigation class="navigation" />
			</div>
		</header>
	</b-container>
</template>

<script>
import MainNavigation from '@/components/MainNavigation'
import { BIcon } from 'bootstrap-vue'

export default {
	name: 'AGHeader',
	components: { MainNavigation, BIcon }
}
</script>

<style lang="scss" scoped src="@/style/AGHeader.scss">
</style>