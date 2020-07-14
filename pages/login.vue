<template>
	<div>
		<v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
        	<v-card class="elevation-12">
        	  <v-toolbar flat>
        	  <v-tabs fixed-tabs background-color="indigo" dark>
              <v-tabs-slider color="cyan accent-2"></v-tabs-slider>
        	    <v-tab v-for="(item, index) in items" :key='item.select' @click="content(index)">
        	      <v-icon>{{item.icon}}</v-icon>&nbsp;{{ item.select }}
        	    </v-tab>
        	  </v-tabs>
        	  </v-toolbar>
        	  <v-card-text>
        	    <keep-alive> 
        	      <component :is="form"></component>
        	    </keep-alive>
        	  </v-card-text>
        	</v-card>
        </v-col>
      </v-row>
    </v-container>
	</div>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Login from '~/components/Form/Login.vue'
import Register from '~/components/Form/Register.vue'
import { auth } from '~/store'
  
  @Component({
    components:{
      Login,
      Register
    }
  })
  export default class LoginComponent extends Vue{
    get form(){
      return auth.current_form
    }

    get items(){
      return auth.get_items
    }

    content(index){
      return auth.switch_content(index)
    }
  }
</script>