<template>
	<div class="about">
		<AboutItem
			v-for="item in data"
			:key="item.id"
			:title="item.title"
			:text="item.text"
			:img="item.img"
			:reversed="item.reversed ? item.reversed : false"
		/>
	</div>
</template>

<script>
import AboutItem from './AboutItem.vue'
import HomeAboutDate from '../data/homeabout'

export default {
	name: 'HomeAbout',
	components: {
		AboutItem
	},
	data() {
		return {
			data: HomeAboutDate
		}
	}
}
</script>

<style lang="scss" scoped src="../style/HomeAbout.scss"/>