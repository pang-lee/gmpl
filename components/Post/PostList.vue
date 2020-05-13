<template>
  <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3">BASiL</h1>
    </v-card-title>
    <v-divider></v-divider>
    <v-sheet elevation="10">
    	<v-tabs v-model="tab" grow show-arrows center-active>
    	  <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
    	  <v-tab v-for="(item, index) in items" :key="item"  @click="Content(index)">
    	    {{ item }}
    	  </v-tab>
    	</v-tabs>
    </v-sheet>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="n in items.length" :key="n">
        <v-container>
          <v-row>
            <v-col v-for="(card, index) in cards" :key="index">
              <v-card class="mx-auto" max-width="265" shaped hover>
                <v-btn icon small class="ml-5">
                  <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
                <v-img :src="card.img" height="200px"></v-img>
                <v-card-title>
                  {{card.title}}
                </v-card-title>
    	          <v-card-subtitle>
                  {{card.subtitle}}
                </v-card-subtitle>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="red" depressed text small>
                  	  <v-icon>mdi-heart-multiple</v-icon>
                    </v-btn>
                    <v-btn color="blue" depressed text small>
                  	  <v-icon>mdi-comment-plus</v-icon>
                    </v-btn>
                    <v-btn color="teal accent-4" depressed text small>
                      <v-icon>mdi-share-all</v-icon>
                    </v-btn>
                    <v-btn color="purple" depressed text small>
                      <v-icon>mdi-bookmark-multiple-outline </v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon @click.stop="show = !show" small>
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text>
                      {{card.description}}
                    </v-card-text>
                  </div>
                </v-expand-transition>
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

@Component
export default class PostList extends Vue{
  data () {
    return {
        show:false,
        tab:null,
        items: [
          'Appetizers', 'Entrees', 'Deserts', 'Cocktails', 'test1', 'test2', 'soac2'
        ],
        cards: [
        { img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg', title:'Top western road trips', subtitle:'1,000 miles of wonder', description:'I am first'},
        { img:'https://cdn.vuetifyjs.com/images/cards/house.jpg', title:'Top road trips', subtitle:'1,000 miles of wonder', description:'I am second'},
        { img:'https://cdn.vuetifyjs.com/images/cards/road.jpg', title:'Top to trips', subtitle:'1,000 miles of wonder', description:'I am thrid'},
        { img:'https://cdn.vuetifyjs.com/images/cards/plane.jpg', title:'Top western road', subtitle:'1,000 miles of wonder', description:'I am fourth'},
        { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title:'Top eastern road trips', subtitle:'1,000 miles of wonder', description:'I am fifth'},
        { img:'https://cdn.vuetifyjs.com/images/cards/store.jpg', title:'Top easten trips', subtitle:'1,000 miles of wonder', description:'I am sixth'},
        ]
      }
    }

  Content(index){
    console.log(index)
  }

  }
</script>
