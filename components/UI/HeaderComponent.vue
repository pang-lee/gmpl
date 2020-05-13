<template>
  <div>
    <v-container>
      <v-row>
        <v-app-bar app clipped-left dark dense>
          <v-btn tile icon @click.stop="drawer = !drawer">
            <v-icon>mdi-view-headline</v-icon>
          </v-btn>
          <v-col>
            <v-card width="115" :ripple="false" flat dark nuxt to="/">
              <v-icon class="mr-1">mdi-newspaper</v-icon>
              <span>PangTubes</span>
            </v-card>
          </v-col>
          <v-col>
            <v-text-field :append-icon-cb="() => {}" placeholder="Search..." single-line append-icon="mdi-card-search" color="white" hide-details/>
          </v-col>
          <v-spacer/>

          <!-- Show when Web mode -->
          <v-btn-toggle group dense class="hidden-sm-and-down">
            <v-card class="mx-2" dark nuxt to="/login">
         	    <v-icon>mdi-account-circle</v-icon>
            </v-card>
            <v-card class="mx-2" dark v-for="web in web" :key="web.text">
              <v-menu transition="slide-y-transition" offset-y>
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
                  <v-list-item v-for="(item, index) in items3" :key="index" @click="test">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card>
          </v-btn-toggle>

          <!-- Show when mobile mode -->
          <div class="hidden-md-and-up">
            <v-menu transition="scale-transition" origin="center center">
              <template v-slot:activator="{ on }">
                <v-btn rounded dark v-on="on">
                  <v-icon>mdi-layers-triple-outline</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item nuxt to="/login">
                  <v-list-item-title>
                    <v-icon>mdi-account-circle</v-icon>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item v-for="mobile in mobile" :key="mobile" nuxt to="/admin">
                  <v-list-item-title>
                    <v-badge overlap dot>
                      <v-icon>
                        {{ mobile }}
                      </v-icon>
                    </v-badge>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
       </div>
      </v-app-bar>
      </v-row>
    </v-container>

<!-- Sidebar -->
      <v-navigation-drawer v-model="drawer" temporary app clipped>
        <v-list dense>
    	    <v-list-item v-for="item in items" :key="item.text" link>
    	      <v-list-item-action>
    	        <v-icon>{{ item.icon }}</v-icon>
    	      </v-list-item-action>
    	      <v-list-item-content>
    	        <v-list-item-title>
    	          {{ item.text }}
    	        </v-list-item-title>
    	      </v-list-item-content>
    	    </v-list-item>
    	    <v-subheader class="mt-4 greytext textdarken-1">SUBSCRIPTIONS</v-subheader>
    	    <v-list>
    	      <v-list-item v-for="item in items2" :key="item.text" link>
    	        <v-list-item-avatar>
    	          <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
    	        </v-list-item-avatar>
    	        <v-list-item-title v-text="item.text" />
    	      </v-list-item>
    	    </v-list>
    	    <v-list-item class="mt-4" link>
    	      <v-list-item-action>
    	        <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
    	      </v-list-item-action>
    	      <v-list-item-title class="greytext textdarken-1">Browse Channels</v-list-item-title>
    	    </v-list-item>
    	    <v-list-item link>
    	      <v-list-item-action>
    	        <v-icon color="grey darken-1">mdi-settings</v-icon>
    	      </v-list-item-action>
    	      <v-list-item-title class="greytext textdarken-1">Manage Subscriptions</v-list-item-title>
    	    </v-list-item>
    	  </v-list>
      </v-navigation-drawer>

  </div>
</template>

<script type="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
// import  { main }  from '~/store'

@Component
export default class HeaderComponent extends Vue
{
    data()
    {
        return {
            drawer: false,
            web:[
              { icon:'mdi-bell', text:'Notification'},
              { icon:'mdi-message-text', text:'Message'},
              { icon:'mdi-account-settings', text:'Friend'}
            ],
            mobile:[
              'mdi-bell', 'mdi-message-text', 'mdi-account-settings'
            ],
            items: 
            [
              { icon: 'mdi-trending-up', text: 'Most Popular' },
              { icon: 'mdi-youtube-subscription', text: 'Subscriptions' },
              { icon: 'mdi-history', text: 'History' },
              { icon: 'mdi-playlist-play', text: 'Playlists' },
              { icon: 'mdi-clock-outline', text: 'Watch Later' },
            ],
            items2: 
            [
              { picture: 28, text: 'Joseph' },
              { picture: 38, text: 'Apple' },
              { picture: 48, text: 'Xbox Ahoy' },
              { picture: 58, text: 'Nokia' },
              { picture: 78, text: 'MKBHD' },
            ],
            items3: [
              { title: 'Click Me1' },
              { title: 'Click Me2' },
              { title: 'Click Me3' },
              { title: 'Click Me4' },
            ],
        }
    }

    test()
    {
      console.log("test click")
    }

}
</script>
