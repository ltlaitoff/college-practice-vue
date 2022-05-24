<template>
	<div class="notifications">
		<div class="text">Enable desktop notifications for Agridera</div>
		<button @click.prevent="$emit('yes')" class="button yes">Yes</button>
		<button @click.prevent="$emit('no')" class="button no">No thanks</button>
	</div>
</template>

<script>
export default {
	name: 'PushNotificationsSubscribe'
}
</script>

<style lang="scss" scoped src="../style/PushNotificationsSubscribe.scss"/>


