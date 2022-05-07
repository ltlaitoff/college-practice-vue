<template v-slot="pageData">
	<vue-markdown class="text" :postrender="value => addClassForTags(value)">{{
		wheatData.text
	}}</vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import wheatData from '../data/wheatData'

export default {
	name: 'WheatData',
	data() {
		return {
			wheatData: wheatData
		}
	},
	components: {
		VueMarkdown
	},
	methods: {
		addClassForTags(value) {
			const replacing = {
				'<p>': '<p class="wheat-data-p">',
				'<strong>': '<strong class="wheat-data-strong">',
				'<blockquote>': '<blockquote class="wheat-data-blockquote">'
			}

			Object.entries(replacing).forEach(([before, after]) => {
				value = value.replaceAll(before, after)
			})

			return value
		}
	}
}
</script>

<style lang="scss" src="../style/WheatDate.scss"/>
