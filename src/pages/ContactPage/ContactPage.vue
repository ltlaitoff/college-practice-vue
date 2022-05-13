<template>
	<div class="full">
		<PageBG :img="pageBGImage" imgAlt="bg" />
		<b-container class="container">
			<MainTitle :visibility="false" />
			<h2 class="title">Contact us</h2>
			<AGDivider class="divider" />

			<b-form @submit="onSubmit" v-if="data">
				<b-row>
					<b-col lg="4" md="8" offset-md="2" offset-lg="0">
						<b-form-group
							v-for="item in data"
							:key="item.id"
							:id="item.id"
							:label="item.label"
							:label-for="item.inputId"
						>
							<b-form-input
								:id="item.inputId"
								v-model="form[item.vModel]"
								type="text"
								:placeholder="item.placeholder"
								:required="item.required"
							></b-form-input>
						</b-form-group>
					</b-col>

					<b-col
						lg="7"
						offset-lg="1"
						md="8"
						offset-md="2"
						class="flex flex-column content-space-between"
					>
						<b-form-group
							id="input-group-sex"
							label="You are a:"
							label-for="input-sex"
						>
							<b-form-select
								id="input-sex"
								v-model="form.sex"
								:options="sex"
								required
							></b-form-select>
						</b-form-group>

						<b-form-group
							id="input-group-sex-other"
							label="If other, please specify:"
							label-for="input-sex-other"
						>
							<b-form-input
								id="input-sex-other"
								v-model="form.sexOther"
								type="text"
								placeholder="Please specify"
								:disabled="form.sex !== 'other'"
							></b-form-input>
						</b-form-group>

						<b-form-group
							id="input-group-interested"
							label="You are interested in"
							label-for="textarea-interested"
						>
							<b-form-textarea
								id="textarea-interested"
								v-model="form.interested"
								rows="10"
							></b-form-textarea>
						</b-form-group>

						<b-form-group
							id="input-group-code"
							label="You are interested in"
							label-for="input-code"
						>
							<img src="./assets/code.jpg" alt="code" />
							<b-form-input
								id="input-code"
								v-model="code"
								type="text"
								required
							></b-form-input>
						</b-form-group>

						<b-button type="submit" class="button">Send Message</b-button>
					</b-col>
				</b-row>
			</b-form>
		</b-container>

		<div class="address">
			<h3 class="address-title">Our Address</h3>
			<hr class="address-divider" />
			<div class="address-text">
				AGRIDERA Seeds & Agriculture Ltd.<br />P.O Box 103,<br />Gedera
				70750,<br />Israel. Telephone:
				<span class="green">+972 8 944 9222</span>
			</div>
		</div>
	</div>
</template>

<script>
import MainTitle from '@/components/MainTitle'
import AGDivider from '@/components/AGDivider'
import PageBG from '@/components/PageBG'
import { loadPageBG } from './helpers/loadPageBG'
import DATA from './data/data.js'

export default {
	name: 'ContactPage',
	components: {
		MainTitle,
		AGDivider,
		PageBG
	},
	data() {
		return {
			data: DATA,
			form: {
				name: '',
				companyName: '',
				position: '',
				city: '',
				country: '',
				telephone: '',
				email: '',
				sex: '',
				sexOther: '',
				interested: ''
			},
			sex: ['male', 'female', 'other'],
			code: ''
		}
	},
	computed: {
		pageBGImage() {
			return loadPageBG()
		}
	},
	methods: {
		onSubmit(event) {
			event.preventDefault()

			alert(JSON.stringify(this.form))
		}
	}
}
</script>

<style lang="scss">
.form-group label {
	font-weight: normal;
	font-weight: 400;
	font-size: 17px;
	line-height: 150%;
	color: var(--text-color);
}

.form-group option {
	font-weight: normal;
	font-weight: 400;
	font-size: 17px;
	line-height: 150%;
	color: var(--text-color);
}

#input-group-code {
	margin: 0;

	div {
		display: flex;
		column-gap: 25px;
	}
}
</style>

<style lang="scss" scoped src="./style/ContactPage.scss"/>