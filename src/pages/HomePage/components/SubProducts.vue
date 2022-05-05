<template>
	<ul class="subproducts">
		<li
			v-for="item in products"
			:key="item.id"
			class="item"
			:data-testid="item.id"
		>
			<b-img :src="item.icon" class="img" />
			<span class="text">{{ item.name }}</span>
		</li>
	</ul>
</template>

<script>
import subProductsData from '../data/subproducts'

export default {
	name: 'SubProducts',
	data() {
		return { products: subProductsData }
	}
}
</script>

<style lang="scss" scoped src="../style/SubProducts.scss"/>