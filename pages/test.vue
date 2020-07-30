<template>
    <div>
        <h1>Hello</h1>
        <ul>
            <li v-for="character in characters.results" :key="character.id">
                {{character.name}}
            </li>
        </ul>

  <v-btn href='https://api.restream.io/loginForm?response_type=code&client_id=d5276986-193d-4a4b-8003-2e27eb0dad9a&redirect_uri=http://localhost:3000/test&state=fj1iro2jro12ijoi1'>get API</v-btn>

  <v-btn @click="send()">get access_token</v-btn>

  <v-btn @click="profile()">get profile</v-btn>

  </div>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import gql from 'graphql-tag'
import Qs from 'qs'

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

    async send(){
        try{
            const result = await this.$axios.post('https://cors-anywhere.herokuapp.com/https://api.restream.io/oauth/token', Qs.stringify({
                    grant_type: 'authorization_code',
                    redirect_uri: 'http://localhost:3000/test',
                    code: 'f310a0d2f258844e6d90240f6054048d2b7ed665'
                }),
                {
                    auth:{ username: 'd5276986-193d-4a4b-8003-2e27eb0dad9a', password: '7e4906a4-705f-4e8c-8f97-da79f174d1e5' },
                    header:{ 'Content-Type': 'application/x-www-form-urlencoded' }                
                })
            console.log(result.data)
        }catch(error){
            console.log(error)
        }
    }

    async profile(){
        try{
            const result = await this.$axios.get('https://cors-anywhere.herokuapp.com/https://api.restream.io/v2/user/profile', {
                headers:{
                    authorization: 'Bearer 7800f4eba2e6731945639e10b74611ecfbc57a0a'
                }
            })
            console.log(result.data)
        }catch(error){
            console.log(error)
        }
    }
}
</script>