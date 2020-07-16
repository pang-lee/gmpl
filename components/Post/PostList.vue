<template>
  <v-card>
	  <v-card-title class="text-center justify-center py-6">
    	<h1 class="font-italic font-weight-bold display-3">{{ select }}</h1>
    </v-card-title>
    <v-divider></v-divider>
    <v-sheet elevation="10">
     	<v-tabs v-model="tab" grow show-arrows :prev-icon="prev" :next-icon="next" center-active>         
        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
          <v-tab v-for="(item, index) in item_option" :key="index">
    	      <v-icon>{{ item.icon }}</v-icon>&nbsp;{{ item.text }}
          </v-tab>
    	</v-tabs>
    </v-sheet>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item, index) in item_option" :key="index" eager>
        <v-container>
          <v-row>
            <v-col v-for="(card, index) in per_item_content" :key="index">
              <v-card class="mx-auto" max-width="265" shaped hover>
                <v-menu bottom origin="center center" offset-x transition="scale-transition">
                <template v-slot:activator="{ on }">
                    <v-icon v-on="on" class="ml-5" small>{{horiz}}</v-icon>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
                </v-menu>
                <nuxt-link :to="$route.fullPath + '/' + card.id" no-prefetch class="router_color">
                <v-img :src="card.img" height="200px"></v-img>
                <v-card-title>
                  {{card.title}}
                </v-card-title>
                <v-card-subtitle>
                  {{card.subtitle}}
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
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script type="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import PostButton from '~/components/Post/PostButton.vue'
import PostDetail from '~/components/Post/PostDetail.vue'
import { main } from '~/store'
import * as icon from '@mdi/js'

@Component({
  components:{
    PostButton,
    PostDetail
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

  @Prop({type: String, required: true}) select

  get per_item_content(){
    return main.item_of_game_content
  }
  get showable(){
    return main.show
  }

  // show_description(index){
  //   console.log("show_des index" + index)
  //   return main.show_or_not(index)
  // }

  created(){
    this.select == 'Card' ? this.item_option = main.item_of_game.slice(0, 2) : this.item_option = main.item_of_game.slice(2)
  }
}
</script>

<style scoped>
.router_color{
  color:#000000;
  text-decoration:none;
}
</style>