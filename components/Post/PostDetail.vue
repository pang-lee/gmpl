<template>
    <div>
        <v-btn class="mr-1" depressed :ripple="false" small icon @click.stop="dialog = true">
            <v-icon>{{ expand }}</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" overlay-opacity='0.5' scrollable eager>
            <perfect-scrollbar>
              <v-card>
                  <div class='d-flex justify-end'>
                    <v-btn class="mr-5 mt-2" rounded outlined large nuxt :to="$route.fullPath + '/' + card.id">Join</v-btn>
                    <v-icon class="mr-5 mt-2" @click="dialog = false">{{ clear }}</v-icon>
                  </div>
                <v-card-title>
                    {{ card.title }}
                </v-card-title>
                <v-card-text>
                    {{ card.subtitle }}
                </v-card-text>
                <v-card-actions>
                    <v-card-text>
                        {{ card.description }}
                    </v-card-text>
                </v-card-actions>        
              </v-card>
            </perfect-scrollbar>
        </v-dialog>
    </div>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { main } from '~/store'
import * as icon from '@mdi/js'

@Component
export default class PostDetail extends Vue{
    data(){
        return{
            expand:icon.mdiChevronDown,
            clear:icon.mdiClose,
            dialog: false,
        }
    }

    @Prop({ type:Number, require:true }) index

    @Prop({ type:Object, required: true }) card
}
</script>

<style scoped>
.ps {
  height: auto;
}
</style>