<template>
	<ul class="social">
		<li
			v-for="item in socialData"
			:key="item.id"
			class="item"
			data-testid="item"
		>
			<b-link class="link" src="" disabled
				><b-img :src="item.icon" class="icon"
			/></b-link>
		</li>
	</ul>
</template>

<script>
import socialData from '@/data/social'

export default {
	data() {
		return {
			socialData: socialData
		}
	}
}
</script>

<style lang="scss" scoped src='@/style/AGSocial.scss' />
