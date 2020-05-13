<template>
<client-only>
    <vue-editor v-model="content" />
</client-only>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Notification extends Vue{
  data(){
    return {
      content: "<h1>Some initial content</h1>"
    }
  }
};
</script>
