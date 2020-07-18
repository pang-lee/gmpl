<template>
  <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-italic font-weight-bold display-3">Comment</h1>
    </v-card-title>
    <v-divider></v-divider>
    <v-sheet elevation="10">
      <v-card-text>
        <client-only>
          <Disqus :pageConfig='pageConfig' />
        </client-only>
      </v-card-text>
    </v-sheet>
  </v-card>

<!-- 
  The below are using v-dialog to pop out the comment broad but fill with cannot use ajax. 
  If find how to do, need to change the folder structure to nested route in page folder.
  
  ==> Here are how to do:

    change the comment folder to index folder.
    activate the <nuxt-child/> in index.vue.
    change the PostButton route to $route.fullPath + card.id
    activate the below commented part.
-->

  <!-- <client-only>
    <v-dialog v-model="dialogcomment" overlay-opacity='0.5' persistent scrollable eager>
        <perfect-scrollbar>
          <v-card>
            <v-btn class="mt-2" @click="comment_back()" icon large absolute right>
              <v-icon>{{ clear }}</v-icon>
            </v-btn>
            <v-card-title>
              <p>Comment</p>
            </v-card-title>
            <v-card-text>
              <Disqus :pageConfig='pageConfig' />
            </v-card-text>      
          </v-card>
        </perfect-scrollbar>
    </v-dialog>        
  </client-only> -->
</template>

<script>
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'
import * as icon from '@mdi/js'
import { main } from '~/store'

@Component
export default class comment extends Vue{
    get pageConfig(){
    return {
      title: main.identity_of_card.title,
      url: process.env.BASE_URL + this.$route.fullPath,
      identifier: main.identity_of_card.id,
      category_id: main.identity_of_card.description
    }
  }

// Below are the v-dialog Disqus needed information, need to be activated if want to use dialog type of comment

  // data(){
  //   return{
  //     clear:icon.mdiClose,
  //   }
  // }

  // get dialogcomment(){
  //   return main.comment_dialog
  // }

  // comment_back(){
  //   this.$router.go(-1)
  //   console.log(this.$disqus)
  //   return main.close_dialog()
  // }
}
</script>