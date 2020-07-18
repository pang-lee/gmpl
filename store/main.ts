import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators'
import * as icon from '@mdi/js'

@Module({ name: 'main', stateFactory: true, namespaced: true })
export default class Main extends VuexModule {
    public items:Array<Object> =  [ { icon: icon.mdiVideoVintage, text: 'LIVE' }, { icon: icon.mdiClockCheck, text: 'Watched' }, { icon: icon.mdiStarCircle, text: 'Recommend' }, { icon: icon.mdiFire, text: 'Hot' }, { icon: icon.mdiLayersTriple, text: 'Played' }]

    public card:Array<Object> = []

    public comment:Boolean = false

    public selected_card:Object = {}

    public get item_of_game():Array<Object>{
        return this.items
    }

    public get item_of_game_content():Array<Object>{
        return this.card
    }

    public get comment_dialog(){
        return this.comment
    }

    public get identity_of_card():Object{
        return this.selected_card
    }

    @Mutation
    public set_card(game:Array<Object>):Array<Object>{
        return this.card = game
    }

    @Mutation
    public show_dialog():Boolean{
        return this.comment = true
    }

    @Mutation 
    public close_dialog():Boolean{
        return this.comment = false
    }

    @Mutation
    public set_selected_card(card:Object):Object{
        return this.selected_card = card
    }
}