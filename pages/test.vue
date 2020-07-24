<template>
    <div>
        <h1>Hello</h1>
        <ul>
            <li v-for="character in characters.results" :key="character.id">
                {{character.name}}
            </li>
        </ul>

  <v-btn @click="send()">123456</v-btn>

  <v-btn @click="ajax()">789456</v-btn>

  </div>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { auth } from '~/store'
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
            password:'',
            attendants: [{
                app: 'whatsapp',
                label: 'Technical support',
                name: 'Alan Ktquez',
                number: '5581983383532',
                avatar: {
                  src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
                  alt: 'Alan Ktquez avatar'
                }
              },
            ]
        }
    }

    send(){
        this.$axios.get('https://api.restream.io/loginForm?response_type=code&client_id=d5276986-193d-4a4b-8003-2e27eb0dad9a&redirect_uri=localhost:3000&state=fj1iro2jro12ijoi1')
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
    }

    ajax(){
        this.$axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((result) => console.log(result.data[0]))
        .catch((error) => console.log(error))
    }
}
</script>