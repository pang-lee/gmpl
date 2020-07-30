<template>
  <v-container fluid>
    <v-row justify="center">
      <v-subheader class="font-italic font-weight-bold">Profile</v-subheader>
      <v-expansion-panels popout focusable>
        <v-expansion-panel v-for="(n, index) in info_item_number" :key="n" hide-actions @click="content(index)">
            <v-expansion-panel-header>
              <v-row align="center" class="spacer" no-gutters>
                <v-col cols="4" sm="2" md="1">
                  <v-avatar size="36px">
                    <img v-if="info_avatar" alt="Avatar" :src="info_avatar">
                    <v-icon v-else :color="message.color" v-text="message.icon"></v-icon>
                  </v-avatar>
                </v-col>
                <v-col class="font-italic font-weight-bold">
                  {{info_name}}
                </v-col>
                <v-col v-if="info_gender" class="hidden-xs-only">
                  &mdash;
                  {{ info_gender }}
                </v-col>
                <v-col v-if="info_email" class="hidden-md-and-down">
                  &mdash;
                  {{ info_email }}
                </v-col>
                <v-col v-if="info_birthday" class="hidden-sm-and-down">
                  &mdash;
                  {{ info_birthday }}
                </v-col>
                <v-col v-if="info_phone" class="hidden-sm-and-down">
                  &mdash;
                  {{ info_phone }}
                </v-col>
              </v-row>
            </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-divider></v-divider>
              <v-card-text>
                <keep-alive>
                  <component :is="current"></component>
                </keep-alive>
              </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Self from './ProfileItem/Self.vue'
import { admin } from '~/store'

@Component({
  components:{
    Self
  }
})
export default class Profile extends Vue {
  data(){
    return {
      current:'',
      menu: false,
      }
    }

    get info_item_number(){
      return admin.info_item_numbers
    }

    get info_avatar(){
      return admin.self_info.avatar
    }

    get info_name(){
      if(admin.self_info.first == null) return admin.self_info.last
      else if(admin.self_info.last == null) return admin.self_info.first
      else if(admin.self_info.first == null && admin.self_info.last == null) return ''
      else return admin.self_info.first + ' ' + admin.self_info.last
    }

    get info_gender(){
      return admin.self_info.gender
    }

    get info_email(){
      return admin.self_info.email
    }

    get info_birthday(){
      return admin.self_info.birthday
    }

    get info_phone(){
      return admin.self_info.phone
    }

  content(index){
    switch(index){
      case 0: return this.current = 'Self'
      break
      // case 1: return this.current = 'test'
      // break
      // case 2: return this.current = 'Notification'
      // break
      // case 3: return this.current = 'Reply'
      // break
      // case 4: return this.current = 'Post'
      // break
      // case 5: return this.current = 'Analysis'
      // break
      default: return this.current = ''
    }
  }

  }
</script>

