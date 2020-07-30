import { Module, Mutation, Action, VuexModule, getModule } from 'vuex-module-decorators'
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

    public restream_accessToken:string = ''

    public restream_profile:Object = {}

    public get self_info():any{
        return this.info
    }

    public get select_item():any{
      return this.items
    }

    public get info_item_numbers():number{
      return this.info_item_number
    }

    public get restreamAccess():string{
        return this.restream_accessToken
    }

    public get restreamProfile():Object{
        return this.restream_profile
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
    public set_restreamToken(token:string):string{
        return this.restream_accessToken = token
    }

    @Mutation
    public set_profile(profile:Object):Object{
        return this.restream_profile = profile
    }

    @Action({ rawError:true })
    async get_token(code:String){
        try{
            const OAUTH:string = String(process.env.CSRF_ANYWHERE) + String(process.env.RESTREAM_OAUTH)
            const PROFILE:string = String(process.env.CSRF_ANYWHERE) + String(process.env.RESTREAM_PROFILE)
            const uname:string = String(process.env.RESTREAM_CLIENT)
            const pass:string = String(process.env.RESTREAM_SECRET)
            const oauth:any = await axios.post(OAUTH, Qs.stringify({ grant_type: 'authorization_code', redirect_uri: process.env.BASE_URL + '/admin', code: code }), { auth:{ username: uname, password: pass }, headers:{ 'Content-Type': 'application/x-www-form-urlencoded' } })
            console.log(oauth.data)
            this.context.commit('set_restreamToken', oauth.data.access_token)
            localStorage.setItem('restram_accessToken', oauth.data.access_token)
            localStorage.setItem('restream_expires', String(oauth.data.expires))
            cookies.set('restram_accessToken', oauth.data.access_token)
            cookies.set('restream_expires', oauth.data.expires)
            setTimeout(()=>{
                cookies.remove('restram_accessToken')
                cookies.remove('restream_expires')
                if (process.client) {
                  localStorage.removeItem('restram_accessToken')
                  localStorage.removeItem('restream_expires')
                }
            }, oauth.data.expires)
            const profile:any = await axios.get(PROFILE, { headers:{ authorization: 'Bearer ' + this.context.getters.restreamAccess } })
            this.context.commit('set_profile', profile.data)
            console.log(this.context.getters.restreamProfile)
        }catch(error){
            console.log(error)
        }
      }
}