<template>
	<div id="app">
		<AGHeader />
		<router-view />
		<AGFooter />
	</div>
</template>

<script>
import AGHeader from '@/components/AGHeader'
import AGFooter from '@/components/AGFooter'
export default {
	components: {
		AGHeader,
		AGFooter
	}
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
