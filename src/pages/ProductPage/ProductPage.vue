<template>
	<div
		v-if="category && product"
		class="product-full"
		:style="{ backgroundImage: `url(${category.productBG})` }"
	>
		<b-container class="container">
			<MainTitle :visibility="false" />
			<button class="back" @click="$router.back()">
				<b-img src="@/assets/icons/arrow-left.svg" alt="left arrow" />
				Return back
			</button>
			<b-row>
				<b-col>
					<h2 class="name">
						{{ product.name }} <span class="black">{{ product.type }}</span>
					</h2>

					<AGDivider class="divider" />

					<div
						class="attention"
						v-if="product.attentionText"
						data-testid="attention"
					>
						<img
							:src="category.attentionIcon"
							alt="attention icon"
							class="attention-icon"
						/>
						{{ product.attentionText }}
					</div>
				</b-col>
				<b-col class="image" data-testid="mainimage">
					<img :src="product.image" alt="product image" class="main-image" />
					<button class="download" @click="downloadAlert">
						<b-img src="@/assets/icons/pdf.svg" alt="pdf icon"></b-img>
						Download
					</button>
				</b-col>
			</b-row>

			<b-row class="info">
				<b-col
					class="col info-card"
					cols="6"
					v-for="info in product.info"
					:key="info.id"
					data-testid="card"
					:data-test-cardid="info.id"
				>
					<h3 class="info-title">{{ info.title }}</h3>
					<hr class="info-divider" />
					<vue-markdown
						class="text"
						:postrender="value => addClassForTags(value)"
						data-testid="info-text"
						>{{ info.text }}</vue-markdown
					>
					<ul class="list" v-for="text in info.texts" :key="text">
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
import { getCategoryByMinifyName } from '@/api'
import AGDivider from '@/components/AGDivider'
import MainTitle from '@/components/MainTitle'
import getCurrentProductById from './helpers/getCurrentProductById.js'
import { getCategoryImages, getProductImages } from './helpers/getImages'

export default {
	name: 'ProductPage',
	components: {
		VueMarkdown,
		MainTitle,
		AGDivider
	},
	data() {
		return {
			category: null,
			product: null
		}
	},
	created() {
		const categoryName = this.$route.params.category
		const productId = this.$route.params.id

		getCategoryByMinifyName(categoryName).then(data => {
			this.category = getCategoryImages(data)

			this.product = getProductImages(getCurrentProductById(productId, data))
		})
	},
	computed: {
		downloadAlert() {
			return () => window.alert('В данный момент функция не доступна')
		}
	},

	methods: {
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