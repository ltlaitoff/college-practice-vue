
<template>
	<div>
		<ul class="list">
			<li class="item" v-for="item in 5" :key="item">
				<inline-svg :src="cross" alt="cross" />
			</li>
		</ul>
	</div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import dividerLoadSvg from '@/helpers/dividerLoadSvg'

export default {
	name: 'AGDivider',
	components: {
		InlineSvg
	},
	data() {
		return {
			cross: dividerLoadSvg()
		}
	}
}
</script>

<style lang="scss" scoped src="@/style/AGDivider.scss"/>