<template>
  <client-only>
    <v-container fluid>
      <v-row justify="center">
        <v-subheader class="font-italic font-weight-bold">Friend</v-subheader>
      </v-row>
      <v-divider></v-divider>
      <v-row justify="center">
        <v-col cols="12" sm="5" md="5" lg="5" xl="5">
          <v-text-field v-model="search" :append-icon="search_icon" color="black" placeholder="Search..." single-line hide-details dense></v-text-field>
        </v-col>
      </v-row>
      <v-data-table class="elevation-5 mt-5" :page.sync="page" :headers="headers" :items="content" :search="search" :items-per-page="itemsPerPage" @page-count="pageCount = $event" hide-default-footer></v-data-table>
      <v-pagination class="text-center pt-2 mt-3" v-model="page" :length="pageCount" circle :next-icon="last_page" :prev-icon="first_page"></v-pagination>
    </v-container>
  </client-only>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import * as icon from '@mdi/js'

@Component
export default class Friend extends Vue{
    data () {
      return {
        search_icon:icon.mdiAccountSearchOutline,
        album:icon.mdiAdjust,
        last_page:icon.mdiPageLast,
        first_page:icon.mdiPageFirst,
        search: '',
        page: 1,
        pageCount: 0,
        itemsPerPage: 5,
        headers: [
          { text: 'Dessert (100g serving)', align: 'start', sortable: false, value: 'name'},
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        content: [
          { name: 'Froze Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: '1%'},
          { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: '1%'},
          { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: '7%'},
          { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: '8%'},
          { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, iron: '16%'},
          { name: 'Jelly bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, iron: '0%'},
          { name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: '2%'},
          { name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: '45%'},
          { name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, iron: '22%'},
          { name: 'KitKat', calories: 518, fat: 26.0, carbs: 65, protein: 7, iron: '6%'},
          { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: '1%'},
          { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: '1%'},
          { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: '7%'},
          { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: '8%'},
          { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, iron: '16%'},
          { name: 'Jelly bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, iron: '0%'},
          { name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: '2%'},
          { name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: '45%'},
          { name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, iron: '22%'},
          { name: 'KitKat', calories: 518, fat: 26.0, carbs: 65, protein: 7, iron: '6%'},
        ],
      }
    }
}
</script>