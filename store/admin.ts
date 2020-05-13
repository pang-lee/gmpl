import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';

@Module({ name: 'admin', stateFactory: true, namespaced: true })
export default class Admin extends VuexModule {
    public info:any = [
        {
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            first: 'John',
            last:'Leider',
            gender: 'Male',
            email: 'thankyou@yahoo.com.tw',
            birthday: new Date().toISOString().substr(0, 10),
            phone:'0987654321',
        }
      ]

    public get self_info():any{
        return this.info
    }
    
    @Mutation
    public fill_first(first:string):string{
        return this.info[0].first = first
    }

    @Mutation
    public fill_last(last:string):string{
        return this.info[0].last = last
    }
    
    @Mutation
    public fill_gender(gender:string):string{
        return this.info[0].gender = gender
    }

    @Mutation
    public fill_phone(phone:string):string{
        return this.info[0].phone = phone
    }

    @Mutation
    public fill_email(email:string):string{
        return this.info[0].email = email
    }

    @Mutation
    public fill_date(date:string):string{
        return this.info[0].birthday = date
    }
}