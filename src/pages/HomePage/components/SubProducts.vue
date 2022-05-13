<template>
	<div class="full">
		<ul class="subproducts">
			<li
				v-for="category in categories"
				:key="category.id"
				class="item"
				:data-testid="category.id"
			>
				<b-link
					class="link"
					:to="`products/${category.name.minify}`"
					:disabled="category.disabled"
				>
					<inline-svg :src="category.icon" class="icon"></inline-svg>

					<span class="text">{{ category.name.short }}</span>
				</b-link>
			</li>
		</ul>
	</div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import { getCategories } from '@/api'
import { loadCategoriesImages } from '@/helpers/loadImages'

export default {
	name: 'SubProducts',
	components: {
		InlineSvg
	},
	data() {
		return {
			categories: null
		}
	},
	created() {
		getCategories().then(categories => {
			this.categories = loadCategoriesImages(categories)
		})
	}
}
</script>

<style lang="scss" scoped src="../style/SubProducts.scss"/>