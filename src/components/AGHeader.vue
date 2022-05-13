<template>
	<header class="header">
		<b-container class="hcontainer">
			<b-navbar toggleable="lg" type="light" class="navbar">
				<b-navbar-brand href="/"
					><b-img
						src="@/assets/images/logo.png"
						alt="logo"
						fluid
						:class="checkOnHomePage ? 'logo-promo' : 'logo'"
				/></b-navbar-brand>

				<b-navbar-toggle target="nav-collapse" />

				<b-collapse id="nav-collapse" is-nav>
					<div :class="['wrapper', { 'wrapper-promo': checkOnHomePage }]">
						<b-navbar-nav class="search-nav">
							<b-nav-form
								class="search-wrapper"
								@submit.prevent="onSearchSubmit()"
							>
								<b-form-input
									v-model="searchInput"
									size="sm"
									class="search"
									placeholder="Search"
								></b-form-input>
								<b-button size="sm" class="button" type="submit">
									<b-icon icon="search" />
								</b-button>
							</b-nav-form>
						</b-navbar-nav>

						<MainNavigation class="navigation" />
					</div>
				</b-collapse>
			</b-navbar>
		</b-container>
	</header>
</template>

<script>
import MainNavigation from '@/components/MainNavigation'

export default {
	name: 'AGHeader',
	components: { MainNavigation },
	data() {
		return {
			searchInput: ''
		}
	},
	computed: {
		checkOnHomePage() {
			return this.$route.path === '/'
		}
	},
	methods: {
		onSearchSubmit() {
			console.log(
				'%cAGHeader.vue line:56 searchInprut',
				'color: #007acc;',
				this.searchInput
			)

			this.searchInput = ''
		}
	}
}
</script>

<style lang="scss" scoped src="@/style/AGHeader.scss">
</style>