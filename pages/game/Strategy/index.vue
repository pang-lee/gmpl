<template>
	<v-app>
		<PostList :select='select'/>
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