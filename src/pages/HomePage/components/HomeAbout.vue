<template>
	<div class="about">
		<b-container class="container">
			<div class="group">
				<b-card
					v-for="item in data"
					:key="item.id"
					:img-src="item.img"
					:img-alt="item.title"
					:img-right="!item.reversed"
					:img-left="item.reversed"
					class="card"
				>
					<b-card-title>
						<h3 class="title">{{ item.title }}</h3>
					</b-card-title>

					<AGDivider class="divider" />

					<b-card-text>
						<div class="text">{{ item.text }}</div>
					</b-card-text>
				</b-card>
			</div>
		</b-container>
	</div>
</template>

<script>
import AGDivider from '@/components/AGDivider'
import HomeAboutDate from '../data/homeabout'
import { loadHomeAboutImages } from '../helpers/loadHomeAboutImages'

export default {
	name: 'HomeAbout',
	components: {
		AGDivider
	},
	data() {
		return {
			data: loadHomeAboutImages(HomeAboutDate)
		}
	}
}
</script>

<style lang="scss" scoped src="../style/HomeAbout.scss"/>