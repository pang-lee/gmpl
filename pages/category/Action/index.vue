<template>
	<v-app>
		<PostList :select='select'/>
		<!-- active <nuxt-child/> if want to use v-dialog -->
		<!-- <nuxt-child/> -->
	</v-app>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import PostList from '~/components/Post/PostList.vue'
import { header } from '~/store'

@Component({
  components: {
	  PostList
  }
})
export default class Index extends Vue{
	get select(){
		return header.side_bar_select
	}
}
</script>

<style scoped>

</style>