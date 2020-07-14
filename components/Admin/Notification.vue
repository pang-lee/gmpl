<template>
  <client-only>
    <v-container fluid>
      <v-row justify="center">
        <v-subheader class="font-italic font-weight-bold">Notification</v-subheader>
      </v-row>
      <v-divider></v-divider>
      <v-data-table :headers="headers" :items="content" class="elevation-5 mt-5" :page.sync="page" :search="search" :items-per-page="itemsPerPage" @page-count="pageCount = $event" hide-default-footer>
        <template v-slot:item.calories="{ item }">
          <v-chip :color="getColor(item.calories)" dark>{{ item.calories }}</v-chip>
        </template>
      </v-data-table>
      <v-pagination class="text-center pt-2 mt-3" v-model="page" :length="pageCount" circle :next-icon="last_page" :prev-icon="first_page"></v-pagination>
    </v-container>
  </client-only>
</template>

<script type="text/typescript">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import * as icon from '@mdi/js'

@Component
export default class Notification extends Vue{
  data () {
    return {
      last_page:icon.mdiPageLast,
      first_page:icon.mdiPageFirst,
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 5,
      expanded: [],
      singleExpand: false,
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

  getColor (calories) {
    if (calories > 400) return 'red'
    else if (calories > 200) return 'orange'
    else return 'green'
  }
}
</script>

