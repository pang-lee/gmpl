import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators'
import * as icon from '@mdi/js'

@Module({ name: 'main', stateFactory: true, namespaced: true })
export default class Main extends VuexModule {
    public items:Array<Object> =  [ { icon: icon.mdiVideoVintage, text: 'LIVE' }, { icon: icon.mdiClockCheck, text: 'Watched' }, { icon: icon.mdiStarCircle, text: 'Recommend' }, { icon: icon.mdiFire, text: 'Hot' }, { icon: icon.mdiLayersTriple, text: 'Played' }]

    public card:Array<Object> = []

    public get item_of_game():Array<Object>{
        return this.items
    }

    public get item_of_game_content():Array<Object>{
        return this.card
    }

    @Mutation
    public set_card(game:Array<Object>):Array<Object>{
        return this.card = game
    }
}