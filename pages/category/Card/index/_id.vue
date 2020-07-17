<template>
    <client-only>
        <v-dialog v-model="dialogcomment" overlay-opacity='0.5' persistent scrollable eager>
            <perfect-scrollbar>
              <v-card>
                <v-btn class="mt-2" @click="comment_back()" icon large absolute right>
                  <v-icon>{{ clear }}</v-icon>
                </v-btn>
                <v-card-title>
                  <p>Comment</p>
                </v-card-title>
                <v-card-text>
                    <Disqus />
                </v-card-text>
              </v-card>
            </perfect-scrollbar>
        </v-dialog>
    </client-only>
</template>

<script>
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'
import * as icon from '@mdi/js'
import { main } from '~/store'

@Component
export default class comment extends Vue{
  data(){
    return{
      clear:icon.mdiClose,
    }
  }

  get dialogcomment(){
    return main.comment_dialog
  }

  comment_back(){
    this.$router.go(-1)
    return main.close_dialog()
  }
}
</script>