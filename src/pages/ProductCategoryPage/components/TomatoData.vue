<template>
	<div class="tomato-data-full">
		<vue-markdown :postrender="value => addClassForTags(value)">{{
			tomatoData.topText
		}}</vue-markdown>
		<vue-markdown
			:postrender="value => addClassForTags(value)"
			class="tomato-data-first"
			>{{ tomatoData.firstQuote }}</vue-markdown
		>
		<b-row class="tomato-data-row">
			<b-col
				v-for="item in tomatoData.table"
				:key="item.id"
				class="tomato-data-col"
			>
				<h3 class="tomato-data-title">
					<vue-markdown :postrender="value => addClassForTags(value)">{{
						item.title
					}}</vue-markdown>
				</h3>
				<hr class="tomato-data-divider" />
				<div class="tomato-data-text">
					<vue-markdown :postrender="value => addClassForTags(value)">{{
						item.text
					}}</vue-markdown>
				</div>
			</b-col>
		</b-row>
		<vue-markdown
			:postrender="value => addClassForTags(value)"
			class="tomato-data-second"
			>{{ tomatoData.secondQuote }}</vue-markdown
		>
	</div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import tomatoData from '../data/tomatoData'

export default {
	name: 'TomatoData',
	data() {
		return {
			tomatoData: tomatoData
		}
	},
	components: {
		VueMarkdown
	},
	methods: {
		addClassForTags(value) {
			const replacing = {
				'<p>': '<p class="tomato-data-p">',
				'<strong>': '<strong class="tomato-data-strong">',
				'<blockquote>': '<blockquote class="tomato-data-blockquote">'
			}

			Object.entries(replacing).forEach(([before, after]) => {
				value = value.replaceAll(before, after)
			})

			return value
		}
	}
}
</script>

<style lang="scss" src="../style/TomatoData.scss"/>
