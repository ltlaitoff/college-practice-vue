<template>
	<div class="full">
		<b-container class="hcontainer">
			<header class="header">
				<b-link to="/"
					><b-img
						src="@/assets/images/logo.png"
						fluid
						:class="checkOnHomePage ? 'logo-promo' : 'logo'"
				/></b-link>
				<div :class="['wrapper', { 'wrapper-promo': checkOnHomePage }]">
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
	</div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation'
import { BIcon } from 'bootstrap-vue'

export default {
	name: 'AGHeader',
	components: { MainNavigation, BIcon },
	computed: {
		checkOnHomePage() {
			return this.$route.path === '/'
		}
	}
}
</script>

<style lang="scss" scoped src="@/style/AGHeader.scss">
</style>