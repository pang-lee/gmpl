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
import { header, auth, main } from '~/store'
import axios from 'axios'

@Component({
  components: {
	  PostList
  }
})
export default class Index extends Vue{
	data(){
		return {
			topicText: 'Recommend'
		}
	}

	asyncData() {
		return {
			Recommend: main.getRecommend,
			Hot: main.getHot,
			Played: main.getPlayed
		}
	}

	get select(){
		return header.side_bar_select
	}

	get card(){
		if(this.topicText == 'Recommend') return this.Recommend
		else if(this.topicText == 'Hot') return this.Hot
		else if(auth.isauthenticated == true && this.topicText == 'Played') return this.Played
		else return []
	}

	selectedTopic(item){
		return this.topicText = item.text
	}
}
</script>

<style scoped>

</style>