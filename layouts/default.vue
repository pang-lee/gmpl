<template>
	<v-app>
		<v-content>
			<nuxt/>
			<HeaderComponent/>
		</v-content>
	</v-app>
</template>

<script type="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import HeaderComponent from '~/components/UI/HeaderComponent.vue'

	@Component
	({
		components:{
			HeaderComponent
		}
	})
	export default class Default extends Vue
	{
		msg="123456"
	}
</script>