import { Module, Mutation, Action, VuexModule, getModule } from 'vuex-module-decorators'
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

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
        // avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
        // first: '',
        // last:'',
        // gender: '',
        // email: '',
        // birthday: new Date().toISOString().substr(0, 10),
        // phone:'',

        avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
        first: 'John',
        last:'Leider',
        gender: 'Male',
        email: 'thankyou@yahoo.com.tw',
        birthday: new Date().toISOString().substr(0, 10),
        phone:'0987654321',
    }
      
    public info_item_number:number = 1

    public current:string = 'Profile'

    public items:Array<String> = ['Profile', 'Notification', 'Reply', 'Friend', 'Post', 'Analysis']


    public get self_info():any{
        return this.info
    }

    public get cur_item():string{
      return this.current
    }

    public get select_item():any{
      return this.items
    }

    public get info_item_numbers():number{
      return this.info_item_number
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

    // @Action({ rawError:true })
    // public user_info():Promise<any>{
        // return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' + process.env.FIREBASE_API, 4BqcOPpg8EVSSHPxZwzGsrh7Ao13)
        //     .then((success)=>console.log(success))
        //     .catch((error)=>console.log(error))
    // }
}