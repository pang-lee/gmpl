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
      	<v-tabs v-model="tab" grow show-arrows :prev-icon="prev" :next-icon="next" center-active>
      	  <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
      	  <v-tab v-for="(item, index) in items" :key="index"  @click="change_content(index)">
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

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Self from '~/components/Admin/ProfileItem/Self.vue'
import { admin, auth } from '~/store'
import * as icon from '@mdi/js'
import Profile from '~/components/Admin/Profile.vue'
import Friend from '~/components/Admin/Friend.vue'
import Notification from '~/components/Admin/Notification.vue'
import Reply from '~/components/Admin/Reply.vue'
import Post from '~/components/Admin/Post.vue'
import Analysis from '~/components/Admin/Analysis.vue'

@Component({
  components:{
    Profile,
    Friend,
    Notification,
    Reply,
    Post,
    Analysis
  },
  middleware:['check-auth', 'admin']
})
export default class User extends Vue {
  data () {
    return { 
      tab:null,
      current:'Profile',
      prev:icon.mdiChevronLeft,
      next:icon.mdiChevronRight,
    }
  }

  get items(){
    return admin.select_item
  }

  get FullName(){
    if(admin.self_info.first == null) return admin.self_info.last
    else if(admin.self_info.last == null) return admin.self_info.first
    else if(admin.self_info.first == null && admin.self_info.last == null) return ''
    else return admin.self_info.first + ' ' + admin.self_info.last
  }

  logout(){
    auth.logout()
    this.$router.push('/')
  }

  test(){
    admin.user_info()
  }

  change_content(index){
    switch(index){
      case 0: return this.current = 'Profile'
      break
      case 1: return this.current = 'Notification'
      break
      case 2: return this.current = 'Reply'
      break
      case 3: return this.current = 'Friend'
      break
      case 4: return this.current = 'Post'
      break
      case 5: return this.current = 'Analysis'
      break
      default: return this.current = 'Profile'
    }
  }

  // created() {
  //   admin.user_info() 
  // }
}
</script>

