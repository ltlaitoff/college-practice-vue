<template>
	<div class="full">
		<MainTitle :visibility="false" />
		<PageBG :img="pagebg" />
		<b-container class="container" v-if="categoryData">
			<h2 class="title">{{ categoryData.name.full }}</h2>
			<AGDivider class="divider" />
			<component :is="getData" class="data" />
			<b-card-group class="group" v-if="categoryData.products">
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
import API from '@/api'
import pagesData from './data/pagesInfo'
import { loadPageBG, loadProductsImages } from './helpers/loadImages'

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
			pagebg: null,
			pageData: null,
			categoryData: null
		}
	},
	created() {
		this.pagebg = loadPageBG(this.category)
		this.pageData = pagesData[this.category]

		const category = API.getCategoryByMinifyName(this.category)

		this.categoryData = {
			...category,
			products: loadProductsImages(this.category, category.products)
		}
	},
	computed: {
		getData() {
			return this.pageData.component
		}
	}
}
</script>

<style lang="scss" scoped src="./style/CategoryPage.scss"/>