<template>
	<div class="home">
		<MainNavigation />

		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import MainNavigation from '@/components/MainNavigation.vue'

export default {
	name: 'HomePage',
	components: {
		HelloWorld,
		MainNavigation
	}
}
</script>
