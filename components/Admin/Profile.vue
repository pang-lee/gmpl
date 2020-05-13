<template>
  <client-only>
    <v-container fluid>
      <v-row justify="center">
        <v-subheader class="font-italic font-weight-bold">Profile</v-subheader>

        <v-expansion-panels popout focusable>
          <v-expansion-panel v-for="(message, i) in information" :key="i" hide-actions @click="content(i)">
            <v-expansion-panel-header>
              <v-row align="center" class="spacer" no-gutters>
                <v-col cols="4" sm="2" md="1">
                  <v-avatar size="36px">
                    <img v-if="message.avatar" alt="Avatar" src="https://cdn.vuetifyjs.com/images/john.jpg">
                    <v-icon v-else :color="message.color" v-text="message.icon"></v-icon>
                  </v-avatar>
                </v-col>
                <v-col class=".display-2 text-truncate .font-italic font-weight-bold">
                  {{ message.first }} {{ message.last }}
                </v-col>
                <v-col v-if="message.gender" class=".display-2 text-truncate hidden-sm-and-down">
                  &mdash;
                  {{ message.gender }}
                </v-col>

                <v-col v-if="message.email" class=".display-2 text-truncate hidden-md-and-down">
                  &mdash;
                  {{ message.email }}
                </v-col>

                <v-col v-if="message.birthday" class=".display-2 text-truncate hidden-sm-and-down">
                  &mdash;
                  {{ message.birthday }}
                </v-col>
                <v-col v-if="message.phone" class=".display-2 text-truncate hidden-sm-and-down">
                  &mdash;
                  {{ message.phone }}
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
  </client-only>
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

    get information(){
      return admin.self_info
    }

    set information(admin){
      return admin
    }

  content(i){
    switch(i){
      case 0: return this.current = 'Self'
      break
      // case 1: return this.current = 'Friend'
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

