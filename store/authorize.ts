import { Module, Mutation, Action, VuexModule } from 'vuex-module-decorators'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Cookies from 'universal-cookie'
import * as icon from '@mdi/js'

const cookies = new Cookies()
const options = {
  path: '/',
  maxAge: 60 * 60 * 24 * 7,
}

interface StoreType {
    authorize: Authorize
}

Vue.use(Vuex)
const store = new Vuex.Store<StoreType>({})

@Module({ dynamic: true, store: store, name: 'authorize', stateFactory: true, namespaced: true })
export default class Authorize extends VuexModule {
    public form:string = 'Login'

    public token:null = null

    public items:Array<Object> = [ { select:'Login', icon:icon.mdiLogin}, { select:'Register', icon:icon.mdiNotebook} ]

    public get current_form():string{
        return this.form
    }

    public get isauthenticated():boolean{
        return this.token != null
    }

    public get get_items():Array<Object>{
        return this.items
    }

    @Mutation
    public switch_content(index:number):string{
        return index == 0 ? this.form = 'Login' : this.form = 'Register'
    }

    @Mutation
    public set_token(token:null):null{
        return this.token = token
    }

    @Mutation
    public clear_token():null{
        return this.token = null
    }

    @Action({ rawError: true })
    public async authenticate_API(data:object):Promise<any>{
        let URL:string 
        this.context.getters.current_form == 'Register' ? URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.FIREBASE_API : URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.FIREBASE_API
        try{
            const result:any = await axios.post(URL, { ...data, returnSecureToken: true })
            this.context.commit('set_token', result.data.idToken)
            localStorage.setItem('token', result.data.idToken)
            localStorage.setItem('tokenExpiration', String(new Date().getTime() + Number.parseInt(result.data.expiresIn) * 1000))
            cookies.set('jwt', result.data.idToken)
            cookies.set('expirationDate', new Date().getTime() + Number.parseInt(result.data.expiresIn) * 1000)
            setTimeout(()=>{
                cookies.remove('jwt')
                cookies.remove('expirationDate')
                if (process.client) {
                  localStorage.removeItem('token')
                  localStorage.removeItem('tokenExpiration')
                }
            }, Number.parseInt(result.data.expiresIn) * 1000)
        }catch(error){
            console.log(error)
        }
    }

    @Action({ rawError:true })
    public initAuth(req:any):any{
        let token:any
        let expirationDate:any
        if (req) {
            if (!req.headers.cookie) return
            const jwtCookie:string = req.headers.cookie.split(';').find((c:string) => c.trim().startsWith('jwt='))
            if (!jwtCookie) return
            token = jwtCookie.split('=')[1]
            expirationDate = req.headers.cookie.split(';').find((c:string) => c.trim().startsWith('expirationDate=')).split('=')[1]
        } else {
            token = localStorage.getItem('token')
            expirationDate = localStorage.getItem('tokenExpiration')
        }
        if (new Date().getTime() > Number.parseInt(expirationDate) || !token) return this.context.dispatch('logout')
        this.context.commit('set_token', token)
    }

    @Action({ rawError:true })
    public logout():any{
        this.context.commit('clear_token')
        cookies.remove('jwt')
        cookies.remove('expirationDate')
        cookies.remove('restram_accessToken')
        cookies.remove('restream_expires')
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
          localStorage.removeItem('restram_accessToken')
          localStorage.removeItem('restream_expires')
        }            
    }

    @Action({ rawError:true })
    public async forget_password(data:object):Promise<any>{
        try{
            const success:Object = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + process.env.FIREBASE_API, data)
        }catch(error){
            console.log(error)
        }
    }
}