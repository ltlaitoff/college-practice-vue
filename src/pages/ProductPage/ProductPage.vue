<template>
	<div
		v-if="category && product"
		class="product-full"
		:style="{ backgroundImage: `url(${category.productBG})` }"
	>
		<b-container class="container">
			<MainTitle :visibility="false" />
			<button class="back" @click="$router.back()">
				<inline-svg :src="leftArrow" alt="left arrow"></inline-svg>
				Return back
			</button>
			<b-row class="main-row">
				<b-col lg="6" md="12">
					<h2 class="name">
						{{ product.name }} <span class="black">{{ product.type }}</span>
					</h2>

					<AGDivider class="divider" />

					<div
						class="attention"
						v-if="product.attentionText"
						data-testid="attention"
					>
						<b-img
							:src="category.attentionIcon"
							alt="attention icon"
							class="attention-icon"
						/>
						{{ product.attentionText }}
					</div>
				</b-col>
				<b-col class="image" data-testid="mainimage" lg="6" md="12">
					<b-img :src="product.image" alt="product image" class="main-image" />
					<div class="image-wrapper">
						<b-link to="/cart" class="image-button image-cart-link" v-if="added"
							>Go to cart</b-link
						>

						<button
							:class="['image-button', { 'image-button-added': added }]"
							@click="onAddedButtonClick"
						>
							{{ !added ? 'Add to cart' : 'Remove from cart' }}
						</button>
					</div>
				</b-col>
			</b-row>

			<b-row class="info">
				<b-col
					lg="4"
					md="6"
					sm="8"
					cols="8"
					offset-md="0"
					offset-sm="3"
					offset="2"
					class="col info-card"
					v-for="detail in product.details"
					:key="detail.id"
					data-testid="card"
					:data-test-cardid="detail.id"
				>
					<h3 class="info-title">{{ detail.title }}</h3>
					<hr class="info-divider" />
					<vue-markdown
						class="text"
						:postrender="value => addClassForTags(value)"
						data-testid="info-text"
						>{{ detail.text }}</vue-markdown
					>
					<ul class="list" v-for="text in detail.texts" :key="text">
						<li class="item">
							<vue-markdown
								class="text"
								:postrender="value => addClassForTags(value)"
								>{{ text }}</vue-markdown
							>
						</li>
					</ul>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import InlineSvg from 'vue-inline-svg'

import API from '@/api'
import AGDivider from '@/components/AGDivider'
import MainTitle from '@/components/MainTitle'
import getCurrentProductById from './helpers/getCurrentProductById.js'

import {
	loadLeftArrow,
	loadProductImages,
	loadCategoryImages
} from './helpers/loadImages'
import Store from '@/utils/store'

export default {
	name: 'ProductPage',
	components: {
		VueMarkdown,
		InlineSvg,
		MainTitle,
		AGDivider
	},
	data() {
		return {
			category: null,
			product: null,
			added: false
		}
	},
	created() {
		const categoryName = this.$route.params.category
		const productId = this.$route.params.id

		const data = API.getCategoryByMinifyName(categoryName)

		this.category = loadCategoryImages(data)

		this.product = loadProductImages(
			categoryName,
			getCurrentProductById(productId, data)
		)

		this.added = Store.checkProductInStore(
			this.category.name.minify,
			this.product.id
		)
	},
	computed: {
		leftArrow() {
			return loadLeftArrow()
		}
	},

	methods: {
		onAddedButtonClick() {
			if (this.added) {
				Store.removeProductFromCart(this.category.name.minify, this.product.id)
				this.added = false
				return
			}

			Store.addProductInCart(this.category.name.minify, this.product.id)
			this.added = true
		},

		addClassForTags(value) {
			const replacing = {
				'<p>': '<p class="product-data-p">',
				'<strong>': '<strong class="product-data-strong">',
				'<blockquote>': '<blockquote class="product-data-blockquote">'
			}

			Object.entries(replacing).forEach(([before, after]) => {
				value = value.replaceAll(before, after)
			})

			return value
		}
	}
}
</script>

<style>
.product-data-p {
	font-weight: 400;
	font-size: 17px;
	line-height: 162.7%;
	color: var(--text-color);
}

.product-data-strong {
	font-weight: 700;
}
</style>

<style lang="scss" scoped src="./style/ProductPage.scss"/>