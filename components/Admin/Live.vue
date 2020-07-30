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
        <h1 class="font-weight-black font-italic"> Restream UserName: {{ restream.username }}  Restream Email: {{ restream.email }} </h1>
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
      restream:{}
    }
  }

  get code(){
    if(this.$route.fullPath.indexOf('code') == -1) return true
    else {
      admin.get_token(this.$route.fullPath.substring(this.$route.fullPath.indexOf('=') + 1, this.$route.fullPath.indexOf('&')))
      this.restream = admin.restreamProfile
      return false
    }
  }
}
</script>

