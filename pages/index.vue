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
import { main, auth } from '~/store'

@Component({
  components: {
	  PostList
  }
})
export default class Index extends Vue{
	data(){
		return {
			topicText: 'Live',
		}
	}

	asyncData() {
		return {
			Live: main.getLive,
			Watched: main.getWatched
		}
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
}
</script>

<style scoped>

</style>