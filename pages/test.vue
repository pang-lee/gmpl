<template>
    <div>
        <h1>Hello</h1>
        <ul>
            <li v-for="character in characters.results" :key="character.id">
                {{character.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import gql from 'graphql-tag'

@Component({
    apollo:{
        characters: gql`
        query getCharacters{
            characters{
                results{
                    id
                    name
                }
            }
        }`
    }    
})
export default class test extends Vue{
    data(){
        return{
            email:'',
            password:''
        }
    }
}
</script>