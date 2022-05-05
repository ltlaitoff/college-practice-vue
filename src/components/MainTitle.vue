<template>
	<h1 :class="['title', { 'visually-hidden': !visibility }]">
		Agridera Seeds and Agriculture Ltd
	</h1>
</template>

<script>
export default {
	props: {
		visibility: {
			type: Boolean,
			required: false,
			default: true
		}
	}
}
</script>

<style lang="scss" scoped src="@/style/MainTitle.scss"/>