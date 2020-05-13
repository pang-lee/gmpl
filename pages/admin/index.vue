<template>
  <v-app>
    <client-only>
      <info />
    </client-only>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import info from '~/components/Admin/Info.vue';
    
	@Component({
    components:{
      info
    }
  })
	export default class AdminIndex extends Vue{
    
  }
</script>

<style scoped>

</style>
