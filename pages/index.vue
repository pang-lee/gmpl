<template>
	<v-app>
		<PostList />
	</v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import PostList from '~/components/Post/PostList.vue'

@Component({
  components: {
	  PostList
  }
})

export default class Index extends Vue
{
	msg=""
}
</script>