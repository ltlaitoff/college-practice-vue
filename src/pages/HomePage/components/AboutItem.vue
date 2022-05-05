<template>
	<b-container>
		<b-row class="item">
			<b-col :class="reversed ? 'order-2' : 'order-1'" data-testid="1">
				<div class="content">
					<h3 class="title">{{ title }}</h3>
					<AGDivider class="divider" />
					<div class="text">{{ text }}</div>
				</div>
			</b-col>
			<b-col :class="reversed ? 'order-1' : 'order-2'" data-testid="2"
				><b-img class="img" :src="img"
			/></b-col>
		</b-row>
	</b-container>
</template>

<script>
import AGDivider from '@/components/AGDivider'

export default {
	name: 'AboutItem',
	props: {
		reversed: {
			type: Boolean,
			require: false,
			default: false
		},
		img: {
			type: String,
			require: true,
			default: ''
		},
		title: {
			type: String,
			require: true,
			default: ''
		},
		text: {
			type: String,
			require: true,
			default: ''
		}
	},
	components: {
		AGDivider
	}
}
</script>

<style lang="scss" scoped src="../style/AboutItem.scss"/>