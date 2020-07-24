<template>
  <v-card>
	  <v-card-title class="text-center justify-center py-6">
    	<h1 class="font-italic font-weight-bold display-3">{{ select }}</h1>
    </v-card-title>
    <v-divider></v-divider>
    <v-sheet elevation="10">
     	<v-tabs v-model="tab" grow show-arrows :prev-icon="prev" :next-icon="next" center-active>         
        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
          <v-tab v-for="(item, index) in item_option" :key="index" @click="topic(item)">
    	      <v-icon>{{ item.icon }}</v-icon>&nbsp;{{ item.text }}
          </v-tab>
    	</v-tabs>
    </v-sheet>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item, index) in item_option" :key="index" eager>
        <v-container>
          <v-card v-if="empty" flat>
            <v-card-title class="d-flex justify-center font-weight-bold font-italic">Oops...</v-card-title>
            <v-card-actions class="d-flex justify-center font-italic red--text">Plaese Login</v-card-actions>
          </v-card>
          <v-row v-else>
            <v-col v-for="(card, index) in card" :key="index">
              <v-card  class="mx-auto" max-width="265" shaped hover>
                <v-menu bottom origin="center center" offset-x transition="scale-transition">
                <template v-slot:activator="{ on }">
                    <v-icon v-on="on" class="ml-5" small>{{ horiz }}</v-icon>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
                </v-menu>
                <nuxt-link :to="$route.fullPath + 'game/' + card.id" no-prefetch class="router_color">
                <v-img :src="card.img" height="200px"></v-img>
                <v-card-title>
                  {{ card.title }}
                </v-card-title>
                <v-card-subtitle>
                  {{ card.subtitle }}
                </v-card-subtitle>
                </nuxt-link>
                <v-divider></v-divider>
                <v-card-actions>
                <PostButton :card='card'/>
                <v-spacer/>
                <PostDetail :index='index' :card='card'/>
                </v-card-actions>
              </v-card>
            </v-col>
            <reply v-if="isauth" />
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import reply from '~/components/Admin/Reply.vue'
import PostButton from '~/components/Post/PostButton.vue'
import PostDetail from '~/components/Post/PostDetail.vue'
import { main, auth } from '~/store'
import * as icon from '@mdi/js'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const options = {
  path: '/',
  maxAge: 60 * 60 * 24 * 7,
}

@Component({
  components:{
    PostButton,
    PostDetail,
    reply
  }
})
export default class PostList extends Vue{
  data () {
    return {
        tab:null,
        item_option:[],
        prev:icon.mdiChevronLeft,
        next:icon.mdiChevronRight,
        horiz:icon.mdiDotsHorizontal,
        items: [
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me 2' },
        ],
      }
  }

  @Prop({ type: String, required: true }) select

  @Prop({ type: Array, required: true }) card

  get empty(){
    return this.card.length == 0 ? true : false
  }

  get isauth(){
    return !auth.isauthenticated && !cookies.get('jwt') ? false : true
  }
  
  topic(item){
    return this.$emit('choosenTopic', item)
  }

  mounted() {
    return this.select == 'Card' ? this.item_option = main.item_of_game.slice(0, 2) : this.item_option = main.item_of_game.slice(2)
  }
}
</script>

<style scoped>
.router_color{
  color:#000000;
  text-decoration:none;
}
</style>