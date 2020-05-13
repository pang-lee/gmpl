import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';

@Module({ name: 'main', stateFactory: true, namespaced: true })
export default class Main extends VuexModule {
  
}