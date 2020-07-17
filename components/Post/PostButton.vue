<template>
  <div>
    <v-btn depressed :ripple="false" text small @click="clickLike">
      <v-icon id="like" :style="LikeStyle">{{ favorite }}</v-icon>
    </v-btn>
    <v-btn depressed color="blue darken-1" :ripple="false" text small nuxt :to="$route.fullPath + card.subtitle" @click="dialog()">
      <v-icon id="comment">{{ comment }}</v-icon>
    </v-btn>

    <!-- @click="dialogcomment = true" -->
    <!-- <v-btn depressed color="blue darken-1" :ripple="false" text small @click="comment_area()">
      <v-icon id="comment">{{ comment }}</v-icon>
    </v-btn> -->
    <!-- <v-dialog v-model="dialogcomment" overlay-opacity='0.5' scrollable eager>
      <perfect-scrollbar>
        <v-card>
          <v-btn class="mt-2" @click="dialogcomment = false" icon large absolute right>
            <v-icon>{{ clear }}</v-icon>
          </v-btn>
          <v-card-title>
            <p>Comment</p>
          </v-card-title>
          <v-card-text>
            <client-only>
              <div class='comments'>
                <Disqus shortname='gmpl-1' ref='disqus'  />
              </div>
            </client-only>
          </v-card-text>      
        </v-card>
      </perfect-scrollbar>
    </v-dialog> -->
    <v-btn depressed color="teal accent-4" :ripple="false" text small @click="dialogshare = true">
      <v-icon id="share">{{ share }}</v-icon>
    </v-btn>
    <v-dialog v-model="dialogshare" overlay-opacity='0.5' scrollable eager>
      <perfect-scrollbar>
        <v-card>
          <v-btn class="mt-2" @click="dialogshare = false" icon large absolute right>
            <v-icon>{{ clear }}</v-icon>
          </v-btn>
          <v-card-title>
            <p>Share</p>
          </v-card-title>
          <v-card-text>
            <p>123456</p>
          </v-card-text>
          <v-card-actions>
            <v-card-text>
              <p>Hello</p>
            </v-card-text>
          </v-card-actions>        
        </v-card>
      </perfect-scrollbar>
    </v-dialog>
    <v-btn depressed :ripple="false" text small @click="clickBookMark">
      <v-icon id="bookmark" :style="BookMarkStyle">{{bookmark}}</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'
import { Disqus } from 'vue-disqus'
import { main } from '~/store'
import * as icon from '@mdi/js'

@Component({
  components: {
    Disqus
  }
})
export default class PostList extends Vue{
  data () {
    return {
      favorite:icon.mdiHeartOutline,
      comment:icon.mdiCommentTextMultipleOutline,
      share:icon.mdiShareAllOutline,
      clear:icon.mdiClose,
      bookmark:icon.mdiBookmarkMultipleOutline,
      LikeStyle:{color:'#90A4AE'},
      BookMarkStyle:{color:'#90A4AE'},
      dialogshare: false,
    }
  }

  @Prop({type:Object, required: true}) card

  clickLike(event) {
    this.LikeStyle.color == '#90A4AE' ? this.LikeStyle.color = '#F44336' : this.LikeStyle.color = '#90A4AE'
    console.log(event.target);
  }

  clickBookMark(event){
    this.BookMarkStyle.color == '#90A4AE' ? this.BookMarkStyle.color = '#E040FB' : this.BookMarkStyle.color = '#90A4AE'
  }

  dialog(){
    return main.show_dialog()
  }
}
</script>

<style scoped>
.ps {
  height: auto;
}
</style>