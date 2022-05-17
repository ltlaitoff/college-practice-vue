<template>
	<div class="full">
		<MainTitle :visibility="false" />
		<PageBG :img="getBGImage" />
		<b-container class="container">
			<b-card-group v-if="categories" columns class="group">
				<b-card
					v-for="item in categories"
					:key="item.id"
					no-body
					class="card"
					:data-test-id="item.id"
				>
					<b-link
						:to="`products/${item.name.minify}`"
						:disabled="item.disabled"
					>
						<b-card-img
							:src="item.image"
							:alt="item.name.minify"
							top
						></b-card-img>
					</b-link>

					<b-card-body class="body">
						<b-link
							:to="`products/${item.name.minify}`"
							:disabled="item.disabled"
						>
							<b-card-title class="title">{{ item.name.short }}</b-card-title>
						</b-link>

						<hr class="divider" />

						<b-list-group flush class="list">
							<b-link
								v-for="product in item.products"
								:key="product.id"
								:to="`products/${item.name.minify}/${product.id}`"
								:data-test-id="product.id"
							>
								<b-list-group-item class="list-item">{{
									product.name
								}}</b-list-group-item>
							</b-link>
						</b-list-group>
					</b-card-body>
				</b-card>
			</b-card-group>
		</b-container>
	</div>
</template>

<script>
import API from '@/api'
import { loadCategoriesImages } from '@/helpers/loadImages'
import MainTitle from '@/components/MainTitle.vue'
import PageBG from '@/components/PageBG.vue'

export default {
	name: 'ProductsPage',
	components: {
		MainTitle,
		PageBG
	},
	data() {
		return {
			categories: loadCategoriesImages(API.getCategories())
		}
	},
	computed: {
		getBGImage() {
			return require('@/assets/images/products-bg.jpg')
		}
	}
}
</script>

<style lang="scss" scoped src="./style/ProductsPage.scss"/>