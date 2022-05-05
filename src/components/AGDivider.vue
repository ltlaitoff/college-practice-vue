<template>
	<div>
		<ul class="list">
			<li class="item" v-for="item in 5" :key="item">
				<b-img src="@/assets/icons/cross.svg" alt="cross" />
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'AGDivider',
	components: {}
}
</script>

<style lang="scss" scoped src="@/style/AGDivider.scss"/>