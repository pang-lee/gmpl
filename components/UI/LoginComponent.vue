<template>
  <div>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar flat>
                <v-tabs fixed-tabs background-color="indigo" dark>
                  <v-tab v-for="(item, index) in items" :key='item.select' @click="content(index)">
                    <v-icon>{{item.icon}}</v-icon>{{ item.select }}
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

<script type="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Login from '~/components/Form/Login.vue'
import Register from '~/components/Form/Register.vue'
  
  @Component({
    components:{
      Login,
      Register
    }
  })
  export default class LoginComponent extends Vue{
    data()
    {
      return {
        form:'Login',
        items:[
          { select:'Login', icon:'mdi-login'},{ select:'Register', icon:'mdi-notebook-multiple'}
        ]
      }
    }

    content(index){
      index == 0 ? this.form = 'Login' : this.form = 'Register'
    }
  }
</script>