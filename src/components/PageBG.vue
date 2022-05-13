<template>
	<div class="bg" :style="{ backgroundImage: `url(${img})` }" />
</template>

<script>
export default {
	name: 'PageBG',
	props: {
		img: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" src="@/style/PageBG.scss"/>
