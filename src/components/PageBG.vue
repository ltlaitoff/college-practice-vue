<template>
	<b-img class="bg" :src="img" :alt="imgAlt" />
</template>

<script>
export default {
	name: 'PageBG',
	props: {
		img: {
			type: String,
			required: true
		},
		imgAlt: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" src="@/style/PageBG.scss"/>
