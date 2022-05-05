<template>
	<div class="promo">
		<div class="content">
			<MainTitle class="title" />
			<b-button class="button">read more</b-button>
		</div>
	</div>
</template>

<script>
import MainTitle from '@/components/MainTitle.vue'

export default {
	name: 'HomePromo',
	components: {
		MainTitle
	}
}
</script>

<style lang="scss" scoped src="../style/HomePromo.scss"/>