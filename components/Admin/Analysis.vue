<template>
  <v-container fluid>
    <v-row justify="center">
      <v-subheader class="font-italic font-weight-bold">Analysis</v-subheader>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12">
        <ve-line :data="LineData" :settings="chartSettings"></ve-line>  
      </v-col>
      <v-col cols="12">
        <ve-pie :data="PieData"></ve-pie>
      </v-col>
      <v-col cols="12">
        <ve-radar :data="RadarData"></ve-radar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VeLine from 'v-charts/lib/line'
import VePie from 'v-charts/lib/pie'
import VeRadar from 'v-charts/lib/radar'
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components:{
    VeLine,
    VePie,
    VeRadar
  }
})
export default class analysis extends Vue{
  created () {
    this.chartSettings = {
      stack: { '用户': ['访问用户', '下单用户'] },
      area: true
    },
    this.LineData = {
      columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
    },
    this.PieData = {
      columns: ['日期', '访问用户'],
      rows: [
        { '日期': '1/1', '访问用户': 1393 },
        { '日期': '1/2', '访问用户': 3530 },
        { '日期': '1/3', '访问用户': 2923 },
        { '日期': '1/4', '访问用户': 1723 },
        { '日期': '1/5', '访问用户': 3792 },
        { '日期': '1/6', '访问用户': 4593 }
      ]
    },
    this.RadarData = {
      columns: ['日期', '访问用户', '下单用户', '下单率'],
      rows: [
        { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
        { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
        { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
        { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
        { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
        { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
      ]
    }
  }
}
</script>