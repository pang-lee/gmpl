import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';

@Module({ name: 'friend', stateFactory: true, namespaced: true })
export default class friend extends VuexModule {
    public status:string = 'ON-LINE'

    public access_status:Array<String> = [ 'ON-LINE', 'OFF-LINE']

    public get get_status():string{
        return this.status
    }

    public get get_access_status():Array<String>{
        return this.access_status
    }

    @Mutation
    public set_status(value:string):string{
        return this.status = value
    }
}