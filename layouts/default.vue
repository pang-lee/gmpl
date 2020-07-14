<template>
	<v-app>
		<v-content>
			<nuxt/>
			<webmode />
			<mobilemode />
		</v-content>
	</v-app>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import webmode from '~/components/UI/WebMode.vue'
import mobilemode from '~/components/UI/MobileMode.vue'

@Component({
	components:{
		webmode,
		mobilemode
	}
})
export default class Default extends Vue{

}
</script>

<style scoped>

</style>