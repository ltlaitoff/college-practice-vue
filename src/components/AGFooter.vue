<template>
	<footer class="footer">
		<div class="top">
			<b-container class="container">
				<b-navbar>
					<MainNavigation class="navigation" />
				</b-navbar>
				<AGSocial />
			</b-container>
		</div>
		<div class="bottom">AGRIDERA SEEDS & AGRICULTURE LTD. © 2020</div>
	</footer>
</template>

<script>
import AGSocial from '@/components/AGSocial.vue'
import MainNavigation from '@/components/MainNavigation.vue'

export default {
	components: {
		AGSocial,
		MainNavigation
	}
}
</script>

<style lang="scss" scoped src="@/style/AGFooter.scss"/>