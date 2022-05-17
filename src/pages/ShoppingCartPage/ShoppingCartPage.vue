<template>
	<div class="cart">
		<b-container>
			<div class="products" v-if="products">
				<b-card-group
					v-for="[category, productList] in Object.entries(products)"
					:key="category"
					deck
					:class="['group', { 'not-bottom-border': productList.length === 0 }]"
				>
					<b-card class="card" v-for="product in productList" :key="product.id">
						<b-card-img class="card-image" :src="product.image" left />

						<b-card-body class="card-body">
							<div class="card-wrapper">
								<div class="card-text-wrapper">
									<b-card-title class="card-title">{{
										product.name
									}}</b-card-title>
									<b-card-text class="card-text">{{
										product.type
									}}</b-card-text>
								</div>
								<b-button
									class="card-button"
									@click="crossClick(category, product.id)"
								>
									<b-icon icon="x" class="card-icon"></b-icon>
								</b-button>
							</div>
						</b-card-body>
					</b-card>
				</b-card-group>
			</div>

			<b-form @submit="onSubmit" @reset="onReset" v-if="formShow">
				<b-form-group
					class="form-group"
					id="input-group-fullname"
					label="Your FullName:"
					label-for="input-fullname"
				>
					<b-form-input
						class="form-input"
						id="input-fullname"
						v-model="form.fullname"
						placeholder="Enter fullname"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group
					class="form-group"
					id="input-group-email"
					label="Email Email:"
					label-for="input-email"
					description="We'll never share your email with anyone else."
				>
					<b-form-input
						class="form-input"
						id="input-email"
						v-model="form.email"
						type="email"
						placeholder="Enter email"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group
					class="form-group"
					id="input-group-address"
					label="Your Address:"
					label-for="input-address"
				>
					<b-form-input
						class="form-input"
						id="input-address"
						v-model="form.address"
						placeholder="Enter address"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group
					class="form-group"
					id="input-group-telephone"
					label="Your Telephone:"
					label-for="input-telephone"
				>
					<b-form-input
						class="form-input"
						id="input-telephone"
						type="tel"
						v-model="form.telephone"
						placeholder="Enter telephone"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group
					class="form-group"
					id="input-group-checkTheOrderWithOperator"
					label="Check the order with the operator?"
					label-for="input-checkTheOrderWithOperator"
				>
					<b-form-select
						class="form-select"
						id="input-checkTheOrderWithOperator"
						v-model="form.checkTheOrderWithOperator"
						:options="[false, true]"
						:default="false"
						required
					></b-form-select>
				</b-form-group>

				<b-button type="submit" variant="primary">Submit</b-button>
				<b-button type="reset" variant="danger">Reset</b-button>
			</b-form>
			{{
				formShow === false
					? JSON.stringify({ products: cart, contact: form })
					: ''
			}}
		</b-container>
	</div>
</template>

<script>
import Store from '@/utils/store'
import { getProducts } from './helpers/getProducts'
import { loadProductsImages } from './helpers/loadProductsImages'

export default {
	name: 'ShoppingCartPage',
	data() {
		return {
			cart: Store.getCart(),
			formShow: true,
			form: {
				fullname: '',
				email: '',
				address: '',
				telephone: '',
				checkTheOrderWithOperator: false
			}
		}
	},

	computed: {
		products() {
			return loadProductsImages(getProducts(this.cart))
		}
	},
	methods: {
		onSubmit() {
			this.formShow = false
		},
		onReset() {
			this.form.fullname = ''
			this.form.email = ''
			this.form.address = ''
			this.form.telephone = ''
			this.form.checkTheOrderWithOperator = false
		},
		crossClick(categoryName, productId) {
			console.log('%cShoppingCart.vue line:64 cross', 'color: #007acc;')
			Store.removeProductFromCart(categoryName, productId)
		}
	},
	watch: {
		cart: function () {
			console.log(
				'%cShoppingCart.vue line:59 card watcher',
				'color: #007acc;',
				this.cart
			)
			this.products = loadProductsImages(getProducts(this.cart))
			console.log(
				'%cShoppingCart.vue line:59 this.products',
				'color: #007acc;',
				this.products
			)
		}
	}
}
</script>

<style lang="scss" scoped src="./style/ShoppingCartPage.scss"/>

