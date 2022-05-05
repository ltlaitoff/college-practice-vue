<template>
	<div class="home">
		<HomePromo />
		<SubProducts />
		<HomeAbout />
	</div>
</template>

<script>
import HomePromo from './components/HomePromo.vue'
import SubProducts from './components/SubProducts.vue'
import HomeAbout from './components/HomeAbout.vue'

export default {
	name: 'HomePage',
	components: {
		HomePromo,
		SubProducts,
		HomeAbout
	}
}
</script>
