<template>
  <client-only>
    <v-card>
      <v-card-title class="text-center justify-center py-6">
        <v-avatar size="62">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
        </v-avatar>
        <p class="font-italic font-weight-bold ma-4">{{ FullName }}</p>
      </v-card-title>
      <v-divider></v-divider>

      <v-sheet elevation="10">
      	<v-tabs v-model="tab" grow show-arrows center-active>
      	  <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
      	  <v-tab v-for="(item, index) in items" :key="item" @click="content(index)"> 
      	    {{ item }}
      	  </v-tab>
      	</v-tabs>
    	</v-sheet>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="n in items.length" :key="n">
          <keep-alive>
            <component :is="current"></component>
          </keep-alive>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </client-only>
</template>

<script type="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { admin } from '~/store'
import Profile from './Profile.vue'
import Friend from './Friend.vue'
import Notification from './Notification.vue'
import Reply from './Reply.vue'
import Post from './Post.vue'
import Analysis from './Analysis.vue'

@Component
({
    components:{
      Profile,
      Friend,
      Notification,
      Reply,
      Post,
      Analysis
    }
})
export default class Info extends Vue{
  data () {
    return {
        current:'Profile',
        tab:null,
        items: [
            'Profile', 'Friend', 'Notification', 'Reply', 'Post', 'Analysis'
        ]
      }
    }

  get FullName(){
    if(admin.info[0].first == null) return admin.info[0].last
    else if(admin.info[0].last == null) return admin.info[0].first
    else if(admin.info[0].first == null && admin.info[0].last == null) return ''
    else return admin.info[0].first + ' ' + admin.info[0].last
  }
  
  content(index){
    switch(index){
      case 0: return this.current = 'Profile'
      break
      case 1: return this.current = 'Friend'
      break
      case 2: return this.current = 'Notification'
      break
      case 3: return this.current = 'Reply'
      break
      case 4: return this.current = 'Post'
      break
      case 5: return this.current = 'Analysis'
      break
      default: return this.current = 'Profile'
    }
  }
  
}
</script>