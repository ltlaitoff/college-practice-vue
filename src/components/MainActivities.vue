
<template>
	<div class="main">
		<b-container class="container">
			<slot class="slot" data-testid="slot" />
			<AGDivider class="divider" />
			<b-row class="list">
				<b-col v-for="item in data" :key="item.id" class="item">
					<b-img :src="item.icon" class="img" />
					<h3 class="item-title">{{ item.title }}</h3>
					<div class="item-divider" />
					<div class="item-text">{{ item.text }}</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import AGDivider from '@/components/AGDivider'
import mainActivitiesData from '@/data/mainActivities'
import { loadMainActivitiesImages } from '@/helpers/loadImages'

export default {
	name: 'MainActivities',
	components: {
		AGDivider
	},
	data() {
		return {
			data: loadMainActivitiesImages(mainActivitiesData)
		}
	}
}
</script>

<style lang="scss" scoped src="@/style/MainActivities.scss"/>