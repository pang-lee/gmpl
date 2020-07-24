<template>
	<v-app>
		<PostList :select='select' :card='card' @choosenTopic='selectedTopic'/>
		<!-- active <nuxt-child/> if want to use v-dialog -->
		<!-- <nuxt-child/> -->
	</v-app>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import PostList from '~/components/Post/PostList.vue'
import { auth } from '~/store'
import axios from 'axios'

@Component({
  components: {
	  PostList
  }
})
export default class Index extends Vue{
	data(){
		return {
			topicText: 'Live',
			Watched: []
		}
	}

	async asyncData() {
		const live = await axios.get('https://jsonplaceholder.typicode.com/todos')
		return { Live: live.data }
	}

	get select(){
		return 'Card'
	}

	get card(){
		if(this.topicText == 'Live') return this.Live
		else if(auth.isauthenticated == true && this.topicText == 'Watched') return this.Watched
		else return []
	}

	selectedTopic(item){
		return this.topicText = item.text
	}

	async mounted() {
		const watched = await this.$axios.get('https://jsonplaceholder.typicode.com/users')
		return this.Watched = watched.data
	}
}
</script>

<style scoped>

</style>