<template>
	<div class="full">
		<PageBG
			:img="require('@/assets/images/products-bg.jpg')"
			alt="productsBg"
		/>
		<b-container class="container">
			<div class="products" v-if="products">
				<MainTitle :visibility="false" />

				<b-card-group columns class="group">
					<b-card v-for="item in products" :key="item.id" no-body class="card">
						<b-link
							:to="`products/${item.categoryMinifyName}`"
							:disabled="item.disabled"
						>
							<b-card-img
								:src="loadImage(item.categoryImage)"
								:alt="item.categoryImage"
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
								>
									<b-list-group-item class="list-item">{{
										product.name
									}}</b-list-group-item>
								</b-link>
							</b-list-group>
						</b-card-body>
					</b-card>
				</b-card-group>
			</div>
		</b-container>
	</div>
</template>

<script>
import { getProducts } from '@/api'

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
		getProducts().then(data => (this.products = data))
	},
	methods: {
		loadImage(image) {
			return require(`@/assets/images/${image}CategoryImage.jpg`)
		}
	}
}
</script>

<style lang="scss" scoped src="./style/ProductsPage.scss"/>