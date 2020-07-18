<template>
  
  <div>
    <SocialChat class="contact-color" :attendants="attendants">
    <p class="font-weight-black font-italic" slot="header">Choose one of your friend below to chat.</p>
    <template v-slot:button="{ open }">
      <v-icon v-show="!open">{{ contact }}</v-icon>
      <v-icon v-show="open">{{ clear }}</v-icon>
    </template>
    <small class="font-weight-black font-italic" slot="footer">Contact With Your Friend</small>
    </SocialChat>
  </div>

  <!-- <client-only>
    <v-container fluid>
      <v-row justify="center">
        <v-subheader class="font-italic font-weight-bold">Reply</v-subheader>
      </v-row>
      <v-divider></v-divider>
      <v-row justify="center">
        <v-col cols="12" sm="5" md="5" lg="5" xl="5">
          <v-text-field v-model="search" :append-icon="search_icon" color="black" placeholder="Search..." single-line hide-details dense></v-text-field>
        </v-col>
      </v-row>
      <v-data-table class="elevation-5 mt-5" :headers="headers" :items="content" :page.sync="page" :search="search" :items-per-page="itemsPerPage" single-expand :expanded.sync="expanded" :expand-icon="expand" item-key="name" show-expand @page-count="pageCount = $event" hide-default-footer>
        <template v-slot:expanded-item="{ headers }">
          <td :colspan="headers.length">
            <v-card>
              <p>test</p>
            </v-card>
          </td>
        </template>
      </v-data-table>
      <v-pagination class="text-center pt-2 mt-3" v-model="page" :length="pageCount" circle :next-icon="last_page" :prev-icon="first_page"></v-pagination>
    </v-container>
  </client-only> -->
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { SocialChat } from 'vue-social-chat'
import * as icon from '@mdi/js'

@Component({
  components:{
    SocialChat    
  }
})
export default class Reply extends Vue{
  data(){
    return{
      contact: icon.mdiCommentSearchOutline,
      clear:icon.mdiClose,
      attendants: [
        {
          app: 'line',
          label: 'Friend',
          name: 'Shih-Pang',
          username: '李世邦(Pang)',
          avatar: {
            src: 'https://cdn.vuetifyjs.com/images/john.jpg',
            alt: 'Alan Ktquez avatar'
          }
        },
        {
          app: 'wechat',
          label: 'Friend',
          name: 'Shih-Pang',
          id: 'leebond88',
          avatar: {
            src: 'https://cdn.vuetifyjs.com/images/john.jpg',
            alt: 'Alan Ktquez avatar'
          }
        },
        {
          app: 'messenger',
          label: 'Friend',
          name: 'Shih-Pang',
          id: '100002239369512',
          avatar: {
            src: 'https://cdn.vuetifyjs.com/images/john.jpg',
            alt: 'Alan Ktquez avatar'
          }
        },
        {
          app: 'twitter',
          label: 'Friend',
          name: 'Shih-Pang',
          id: '1271779384618127361',
          avatar: {
            src: 'https://cdn.vuetifyjs.com/images/john.jpg',
            alt: 'Avatar Support Alan Ktquez'
          }
        }
      ]
    }
  }

  // data () {
  //   return {
  //       search_icon:icon.mdiCommentSearchOutline,
  //       expand:icon.mdiChevronDown,
  //       last_page:icon.mdiPageLast,
  //       first_page:icon.mdiPageFirst,
  //       search: '',
  //       page: 1,
  //       pageCount: 0,
  //       itemsPerPage: 5,
  //       expanded: [],
  //       headers: [
  //         { text: 'Dessert (100g serving)', align: 'start', sortable: false, value: 'name'},
  //         { text: 'Calories', value: 'calories' },
  //         { text: 'Fat (g)', value: 'fat' },
  //         { text: 'Carbs (g)', value: 'carbs' },
  //         { text: 'Protein (g)', value: 'protein' },
  //         { text: 'Iron (%)', value: 'iron' },
  //       ],
  //       content: [
  //         { name: 'Froze Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: '1%'},
  //         { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: '1%'},
  //         { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: '7%'},
  //         { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: '8%'},
  //         { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, iron: '16%'},
  //         { name: 'Jelly bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, iron: '0%'},
  //         { name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: '2%'},
  //         { name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: '45%'},
  //         { name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, iron: '22%'},
  //         { name: 'KitKat', calories: 518, fat: 26.0, carbs: 65, protein: 7, iron: '6%'},
  //         { name: 'FroYogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: '1%'},
  //         { name: 'Ice sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: '1%'},
  //         { name: 'Ecuater', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: '7%'},
  //         { name: 'Cuppateke', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: '8%'},
  //         { name: 'currybread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, iron: '16%'},
  //         { name: 'Jolly bond', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, iron: '0%'},
  //         { name: 'apple', calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: '2%'},
  //         { name: 'zumbra', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: '45%'},
  //         { name: 'x-ray', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, iron: '22%'},
  //         { name: 'tiktok', calories: 518, fat: 26.0, carbs: 65, protein: 7, iron: '6%'},
  //       ],
  //   }
  // }
}
</script>

<style scoped>
.contact-color{
  --vsc-bg-button: #2196F3;
  --vsc-outline-color: transparent;
  --vsc-border-color-bottom-header: #6D4C41;
  --vsc-border-color-top-footer: #9E9E9E;
}
</style>