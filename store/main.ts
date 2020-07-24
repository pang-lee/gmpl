import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import * as icon from '@mdi/js'

@Module({ name: 'main', stateFactory: true, namespaced: true })
export default class Main extends VuexModule {
    public items:Array<Object> =  [ { icon: icon.mdiVideoVintage, text: 'Live' }, { icon: icon.mdiClockCheck, text: 'Watched' }, { icon: icon.mdiStarCircle, text: 'Recommend' }, { icon: icon.mdiFire, text: 'Hot' }, { icon: icon.mdiLayersTriple, text: 'Played' }]

    public live:Array<Object> = []

    public watched:Array<Object> = []

    public recommend:Array<Object> = []

    public hot:Array<Object> = []

    public played:Array<Object> = []

    public selected_card:Object = {}

    public get item_of_game():Array<Object>{
        return this.items
    }

    public get getLive():Array<Object>{
        return this.live
    }

    public get getWatched():Array<Object>{
        return this.watched
    }

    public get getRecommend():Array<Object>{
        return this.recommend
    }

    public get getHot():Array<Object>{
        return this.hot
    }

    public get getPlayed():Array<Object>{
        return this.played
    }

    public get identity_of_card():Object{
        return this.selected_card
    }

    @Mutation
    public set_live(liveApi:Array<Object>):Array<Object>{
        return this.live = liveApi
    }

    @Mutation 
    public set_watch(watchApi:Array<Object>):Array<Object>{
        return this.watched = watchApi
    }

    @Mutation
    public set_recommend(recommendApi:Array<Object>):Array<Object>{
        return this.recommend = recommendApi
    }

    @Mutation
    public set_hot(hotApi:Array<Object>):Array<Object>{
        return this.hot = hotApi
    }

    @Mutation
    public set_play(playApi:Array<Object>):Array<Object>{
        return this.played = playApi
    }

    @Mutation
    public set_selected_card(card:Object):Object{
        return this.selected_card = card
    }
}

// Below are setup the comment dialog

    // public comment:Boolean = false

    // public get comment_dialog(){
    //     return this.comment
    // }

    // @Mutation
    // public show_dialog():Boolean{
    //     return this.comment = true
    // }

    // @Mutation 
    // public close_dialog():Boolean{
    //     return this.comment = false
    // }