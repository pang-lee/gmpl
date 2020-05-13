<template>
	<div>
		<LoginComponent />
	</div>
</template>

<script type="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import LoginComponent from '~/components/UI/LoginComponent.vue'

@Component({
	components:
	{
		LoginComponent
	}
})

export default class Login extends Vue
{
	
}
</script>