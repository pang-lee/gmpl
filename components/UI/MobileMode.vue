<template>
  <div class="hidden-md-and-up">
    <v-container>
      <v-row>
        <v-app-bar app clipped-left dark dense>
          <v-col>
            <v-icon @click.stop="drawer = !drawer">{{ menu_icon }}</v-icon>            
          </v-col>
          <v-col>
            <v-btn icon depressed text small nuxt to="/">
              <v-icon>{{ videogame }}</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn icon depressed text small @click="find()">
              <v-icon>{{ search }}</v-icon>
            </v-btn>
          </v-col>
          <v-col v-for="(mobile, index) in mobile" :key="index">
            <v-badge v-if="isauth" overlap dot>
              <v-btn icon depressed text small>
                <v-icon>{{ mobile }}</v-icon>
              </v-btn>
            </v-badge>
          </v-col>
          <v-col v-if="!isauth">
            <v-btn icon depressed text small nuxt to="/login">
              <v-icon>{{ account }}</v-icon>
            </v-btn>
          </v-col>
          <v-col v-if="isauth">
            <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon depressed text small v-bind="attrs" v-on="on">
                  <v-icon>{{ drop }}</v-icon>
                </v-btn>
              </template>
              <v-card>
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
              </v-card>
            </v-menu>
          </v-col>      
        </v-app-bar>
      </v-row>
    </v-container>


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
import * as icon from '@mdi/js'
import { header, admin, auth } from '~/store'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const options = {
  path: '/',
  maxAge: 60 * 60 * 24 * 7,
}

@Component
export default class MobileMode extends Vue{
  data(){
      return{
        account:icon.mdiAccountCircleOutline,
        setting:icon.mdiCogOutline,
        logout_icon:icon.mdiLogout,
        menu_icon:icon.mdiMenu,
        drop:icon.mdiArrowDownDropCircleOutline,
        menu: false,
        videogame:icon.mdiGamepadVariant,
        search:icon.mdiCardSearchOutline,
        drawer:false,
        mobile:[
          icon.mdiBellOutline, icon.mdiMessageTextOutline, icon.mdiAccountGroupOutline
        ]
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

  get isauth(){
    return !auth.isauthenticated && !cookies.get('jwt') ? false : true
  }

  side_bar_item(item){
    return header.change_side_bar(item)
  }

  find(){
    Swal.fire({
      title: 'Search',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          })
        }
    })
  }

  exit(){
    auth.logout()
    this.$router.push('/')
  }

}
</script>

<style scoped>
.ps {
  height: 100%;
}
</style>