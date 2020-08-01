<template>
  <v-container fluid>
    <v-row justify="center">
      <v-subheader class="font-italic font-weight-bold">Restream</v-subheader>
    </v-row>
    <v-divider></v-divider>
    <v-row justify="center">
      <v-btn v-if="code" class="mt-4" outlined text x-large href='https://api.restream.io/loginForm?response_type=code&client_id=d5276986-193d-4a4b-8003-2e27eb0dad9a&redirect_uri=http://localhost:3000/admin&state=fj1iro2jro12ijoi1'>
        Live Stream On Restream&nbsp;<v-icon>{{ stream }}</v-icon>
      </v-btn>
      <v-card v-else>
        <v-col>
          <v-list>
            <v-subheader class="d-flex justify-center">Restream UserName:&nbsp;&nbsp;{{ restream.username }}</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item v-for="chan in channel" :key="chan.id">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ chan.displayName }} - <a :href="chan.url">{{ chan.url }}</a>
                    <v-switch inset class="ml-3" v-model="chan.enabled" :label="`Status: ${chan.enabled == true ? 'active' : 'inactive'}`" @click="switchStatus(chan.enabled, chan.id)"></v-switch>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import * as icon from '@mdi/js'
import { admin } from '~/store'

@Component
export default class Restream extends Vue{
  data(){
    return{
      stream:icon.mdiVideoBox,
      restream:{},
      channel:[]
    }
  }

  get code(){
    if(this.$route.fullPath.indexOf('code') == -1) return true
    else{
      admin.get_token(this.$route.fullPath.substring(this.$route.fullPath.indexOf('=') + 1, this.$route.fullPath.indexOf('&')))
      this.restream = admin.restreamProfile
      this.channel = admin.restreamChannel
      return false
    }
  }

  switchStatus(status, identifier){
    if(status == false) return admin.change_status({ state:true, id:identifier })
    else return admin.change_status({ state:false, id:identifier })
  }

}
</script>

