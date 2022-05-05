<template>
	<div class="home">
		<HomePromo />
		<SubProducts />
	</div>
</template>

<script>
import HomePromo from './components/HomePromo.vue'
import SubProducts from './components/SubProducts.vue'

export default {
	name: 'HomePage',
	components: {
		HomePromo,
		SubProducts
	}
}
</script>
