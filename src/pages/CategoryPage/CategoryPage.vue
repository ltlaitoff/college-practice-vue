<template>
	<div class="full">
		<MainTitle :visibility="false" />
		<PageBG :img="pageData.bg" imgAlt="productCategoryPage" />
		<b-container class="container" v-if="categoryData">
			<h2 class="title">{{ categoryData.categoryFullName }}</h2>
			<AGDivider class="divider" />
			<component :is="getData" class="data" />
			<b-card-group class="group" columns v-if="categoryData.products">
				<b-card
					v-for="item in categoryData.products"
					:key="item.id"
					class="card"
					:data-testid="item.id"
					no-body
				>
					<b-link :to="`/products/${category}/${item.id}`" class="link">
						<b-card-img :src="item.image" :alt="item.name" top class="image" />

						<b-card-body class="body">
							<b-card-title class="card-title">{{ item.name }}</b-card-title>
							<b-card-text class="text">{{ item.type }}</b-card-text>
						</b-card-body>
					</b-link>
				</b-card>
			</b-card-group>
		</b-container>
	</div>
</template>

<script>
import MainTitle from '@/components/MainTitle'
import PageBG from '@/components/PageBG'
import AGDivider from '@/components/AGDivider'
import { getCategoryByMinifyName } from '@/api'
import { getCategoryProductsImages } from '@/helpers/getImages'
import pagesData from './data/pagesInfo'

export default {
	name: 'CategoryPage',
	components: {
		MainTitle,
		PageBG,
		AGDivider
	},
	data() {
		return {
			category: this.$route.params.category,
			pageData: null,
			categoryData: null
		}
	},
	created() {
		this.pageData = pagesData[this.category]

		getCategoryByMinifyName(this.category).then(
			value =>
				(this.categoryData = {
					...value,
					products: getCategoryProductsImages(value.products)
				})
		)
	},
	computed: {
		getData() {
			return this.pageData.component
		}
	}
}
</script>

<style lang="scss" scoped src="./style/CategoryPage.scss"/>