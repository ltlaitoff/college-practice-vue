<template>
	<div class="home">
		<HomePromo />
		<SubProducts />
		<HomeAbout />
		<MainActivities>
			<h2 class="title">Agridedisra's main activities</h2>
		</MainActivities>
	</div>
</template>

<script>
import HomePromo from './components/HomePromo.vue'
import SubProducts from './components/SubProducts.vue'
import HomeAbout from './components/HomeAbout.vue'
import MainActivities from '@/components/MainActivities.vue'

export default {
	name: 'HomePage',
	components: {
		HomePromo,
		SubProducts,
		HomeAbout,
		MainActivities
	}
}
</script>
