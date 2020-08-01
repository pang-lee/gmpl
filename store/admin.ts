import { Module, Mutation, Action, VuexModule } from 'vuex-module-decorators'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Qs from 'qs'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const options = {
  path: '/',
  maxAge: 60 * 60 * 24 * 7,
}

interface info{
  avatar:string,
  first:string,
  last:string,
  gender:string,
  email:string,
  birthday:string,
  phone:string,
}

interface StoreType {
    admin: Admin
}

Vue.use(Vuex)
const store = new Vuex.Store<StoreType>({})

@Module({ name: 'admin', stateFactory: true, namespaced: true, dynamic: true, store: store })
export default class Admin extends VuexModule {

    public info:info = {
        avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
        first: 'John',
        last:'Leider',
        gender: 'Male',
        email: 'thankyou@yahoo.com.tw',
        birthday: new Date().toISOString().substr(0, 10),
        phone:'0987654321',
    }
      
    public info_item_number:number = 1

    public items:Array<String> = ['Profile', 'Live', 'Friend', 'Post', 'Analysis']

    public restream_profile:Object = {}

    public restream_channel:Array<Object> = []

    public get self_info():any{
        return this.info
    }

    public get select_item():any{
      return this.items
    }

    public get info_item_numbers():number{
      return this.info_item_number
    }

    public get restreamProfile():Object{
        return this.restream_profile
    }

    public get restreamChannel():Array<Object>{
        return this.restream_channel
    }

    @Mutation
    public fill_first(first:string):string{
        return this.info.first = first
    }

    @Mutation
    public fill_last(last:string):string{
        return this.info.last = last
    }
    
    @Mutation
    public fill_gender(gender:string):string{
        return this.info.gender = gender
    }

    @Mutation
    public fill_phone(phone:string):string{
        return this.info.phone = phone
    }

    @Mutation
    public fill_email(email:string):string{
        return this.info.email = email
    }

    @Mutation
    public fill_date(date:string):string{
        return this.info.birthday = date
    }

    @Mutation
    public set_profile(profile:Object):Object{
        return this.restream_profile = profile
    }

    @Mutation
    public set_channel(channel:Array<Object>):Array<Object>{
        return this.restream_channel = channel
    }

    @Action({ rawError:true })
    async get_token(code:String):Promise<any>{
        if(!(localStorage.getItem('restram_accessToken') && cookies.get('restram_accessToken'))){
            try{
                const OAUTH:string = String(process.env.CSRF_ANYWHERE) + String(process.env.RESTREAM_OAUTH)
                const uname:string = String(process.env.RESTREAM_CLIENT)
                const pass:string = String(process.env.RESTREAM_SECRET)
                const oauth:any = await axios.post(OAUTH, Qs.stringify({ grant_type: 'authorization_code', redirect_uri: process.env.BASE_URL + '/admin', code: code }), { auth:{ username: uname, password: pass }, headers:{ 'Content-Type': 'application/x-www-form-urlencoded' } })
                localStorage.setItem('restram_accessToken', oauth.data.access_token)
                localStorage.setItem('restream_expires', String(new Date().getTime() + Number.parseInt(oauth.data.expires)))
                cookies.set('restram_accessToken', oauth.data.access_token)
                cookies.set('restream_expires', new Date().getTime() + Number.parseInt(oauth.data.expires))
                setTimeout(()=>{
                    cookies.remove('restram_accessToken')
                    cookies.remove('restream_expires')
                    if (process.client) {
                      localStorage.removeItem('restram_accessToken')
                      localStorage.removeItem('restream_expires')
                    }
                }, oauth.data.expires)
                this.context.dispatch('get_profile', cookies.get('restram_accessToken'))
                this.context.dispatch('get_channel', cookies.get('restram_accessToken'))
            }catch(error){
                console.log(error)
            }
        }else{
            this.context.getters.restreamProfile
            this.context.getters.restreamChannel
        }
    }

    @Action({ rawError:true })
    public async get_profile(token:string):Promise<any>{
        try{
            const PROFILE:string = String(process.env.CSRF_ANYWHERE) + String(process.env.RESTREAM_PROFILE)
            const profile:any = await axios.get(PROFILE, { headers:{ authorization: 'Bearer ' + token } })
            this.context.commit('set_profile', profile.data)
        }catch(error){
            console.log("profile error " + error)
        }
    }

    @Action({ rawError:true })
    public async get_channel(token:string):Promise<any>{
        try{
            const CHANNEL:string = String(process.env.CSRF_ANYWHERE) + String(process.env.RESTREAM_CHANNEL)
            const channel:any = await axios.get(CHANNEL, { headers:{ authorization: 'Bearer ' + token } })
            this.context.commit('set_channel', channel.data)
            console.log(this.context.getters.restreamChannel)
        }catch(error){
            console.log("channel error " + error)
        }
    }

    @Action({ rawError:true })
    public async change_status({ state, id }:any):Promise<any>{
        try{
            const STATUS:string = String(process.env.CSRF_ANYWHERE) + String(process.env.RESTREAM_STATUS)
            const status:any = await axios.patch(STATUS + id, JSON.stringify({ active:state }), { headers:{ authorization: 'Bearer ' + cookies.get('restram_accessToken'), 'Content-Type': 'application/json' } })
            console.log(status)
        }catch(error){
            console.log("status error " + error)
        }
    }
}