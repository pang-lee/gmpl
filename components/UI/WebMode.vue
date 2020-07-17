<template>
  <div class="hidden-sm-and-down">
    <v-app-bar app clipped-left dark dense>
      <v-icon @click.stop="drawer = !drawer">{{ menu }}</v-icon>
        <v-card width="115" :ripple="false" flat nuxt to="/" class="ml-2">
          <v-icon>{{videogame}}</v-icon>&nbsp;PangTubes
        </v-card>
      <v-spacer/>
        <v-text-field :append-icon-cb="() => {}" placeholder="Search..." single-line :append-icon="search" color="white" hide-details/>
      <v-spacer/>
        <v-btn-toggle group dense>
          <v-card class="mx-2" v-for="web in web" :key="web.text">
            <v-menu v-if="isauth" transition="slide-y-transition" offset-y>
              <template v-slot:activator="{ on: menu }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on: tooltip }">
                    <v-card v-on="{ ...tooltip, ...menu }">
                      <v-badge overlap >
                        <v-icon>{{ web.icon }}</v-icon>
                      </v-badge>
                    </v-card>
                </template>
                <span>{{ web.text }}</span>
                </v-tooltip>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items3" :key="index" @click="test($event, index)">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card>
          <v-card v-if="!isauth" class="mx-2" nuxt to="/login">
            <v-icon>{{ account }}</v-icon>
          </v-card>
          <v-card v-if="isauth">
            <v-menu transition="slide-y-transition" offset-y>
              <template v-slot:activator="{ on: menu, attrs }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on: tooltip }">
                    <v-icon class="mx-2" v-bind="attrs" v-on="{ ...tooltip, ...menu }">{{ drop }}</v-icon>
                  </template>
                  <span>Menu</span>
                </v-tooltip>
              </template>
              <v-list>
                <v-list-item nuxt :to="'/admin/' + user_token">
                  <v-list-item-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                    <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="exit()">
                  <v-icon>{{ logout_icon }}</v-icon>&nbsp;Logout
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card>
        </v-btn-toggle>
    </v-app-bar>
  
    <!-- SideBar -->
    <v-navigation-drawer v-model="drawer" temporary app clipped>
      <perfect-scrollbar>      
        <h1 class="d-flex justify-center font-italic font-weight-bold my-2">Category</h1>
        <v-divider></v-divider>
        <v-list dense>
  	      <v-list-item v-for="item in items" :key="item.text" link nuxt :to="'/category/' + item.text + '/'" @click="side_bar_item(item.text)">
  	        <v-list-item-action>
  	          <v-icon>{{ item.icon }}</v-icon>
  	        </v-list-item-action>
  	        <v-list-item-content>
  	          <v-list-item-title>{{ item.text }}</v-list-item-title>
  	        </v-list-item-content>
  	      </v-list-item>
  	      <v-subheader class="mt-4 greytext textdarken-1">SUBSCRIPTIONS</v-subheader>
  	    </v-list>
      </perfect-scrollbar>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { header, admin, auth } from '~/store'
import * as icon from '@mdi/js'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const options = {
  path: '/',
  maxAge: 60 * 60 * 24 * 7,
}

@Component
export default class WebMode extends Vue{
  data(){
      return{
        account:icon.mdiAccountCircleOutline,
        drop:icon.mdiArrowDownDropCircleOutline,
        logout_icon:icon.mdiLogout,
        menu:icon.mdiMenu,
        videogame:icon.mdiGamepadVariant,
        search:icon.mdiCardSearchOutline,
        drawer:false,
        web:[
            { icon:icon.mdiBellOutline, text:'Notification'},
            { icon:icon.mdiMessageTextOutline, text:'Message'},
            { icon:icon.mdiAccountGroupOutline, text:'Friend'}
        ],
        items3: [
          { title: 'Click Me1'},
          { title: 'Click Me2'},
          { title: 'Click Me3'},
          { title: 'Click Me4'},
        ],
      }
  }

  get user_token(){
    return auth.token
  }

  get isauth(){
    return !auth.isauthenticated && !cookies.get('jwt') ? false : true
  }

  get items(){
    return header.get_sidebar
  }

  side_bar_item(item){
    return header.change_side_bar(item)
  }

  exit(){
    auth.logout()
    this.$router.push('/')
  }
  
  test($event, index){
    console.log($event.target.textContent)
    console.log(index)
  }
}
</script>

<style scoped>
.ps {
  height: 100%;
}
</style>