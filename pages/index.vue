<template>
	<v-app>
		<PostList :select='select'/>
		<nuxt-child/>
	</v-app>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import PostList from '~/components/Post/PostList.vue'

@Component({
  components: {
	  PostList
  }
})
export default class Index extends Vue{
	get select(){
		return 'Card'
	}
}
</script>

<style scoped>

</style>