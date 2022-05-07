<template>
	<div class="full">
		<MainTitle :visibility="false" />
		<PageBG :img="getBGImage" imgAlt="productsBg" />
		<b-container class="container">
			<b-card-group v-if="products" columns class="group">
				<b-card
					v-for="item in products"
					:key="item.id"
					no-body
					class="card"
					:data-test-id="item.id"
				>
					<b-link
						:to="`products/${item.categoryMinifyName}`"
						:disabled="item.disabled"
					>
						<b-card-img
							:src="item.categoryImage"
							:alt="item.categoryMinifyName"
							top
						></b-card-img>
					</b-link>

					<b-card-body class="body">
						<b-link
							:to="`products/${item.categoryMinifyName}`"
							:disabled="item.disabled"
						>
							<b-card-title class="title">{{
								item.categoryShortName
							}}</b-card-title>
						</b-link>

						<hr class="divider" />

						<b-list-group flush class="list">
							<b-link
								v-for="product in item.products"
								:key="product.id"
								:to="`products/${item.categoryMinifyName}/${product.id}`"
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
import { getProducts } from '@/api'
import getImages from './helpers/getImages'
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
			products: null
		}
	},
	created() {
		getProducts().then(data => (this.products = getImages(data)))
	},
	computed: {
		getBGImage() {
			return require('@/assets/images/products-bg.jpg')
		}
	}
}
</script>

<style lang="scss" scoped src="./style/ProductsPage.scss"/>