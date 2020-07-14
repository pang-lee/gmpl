import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import * as icon from '@mdi/js'

@Module({ name: 'header', stateFactory: true, namespaced: true })
export default class Header extends VuexModule {
    public sidebar_item:Array<Object> = [
            { icon: icon.mdiSword, text: 'Action' },
            { icon: icon.mdiCompassOutline, text: 'Adventure' },
            { icon: icon.mdiPackageVariant, text: 'Arcade' },
            { icon: icon.mdiCheckerboard, text: 'Board' },
            { icon: icon.mdiCardsPlayingOutline, text: 'Card' },
            { icon: icon.mdiDiceMultipleOutline, text: 'Casino' },
            { icon: icon.mdiLaravel, text: 'Casual' },
            { icon: icon.mdiSchoolOutline, text: 'Educational' },
            { icon: icon.mdiMusicCircleOutline, text: 'Music' },
            { icon: icon.mdiPuzzleOutline, text: 'Puzzle' },
            { icon: icon.mdiFlagCheckered, text: 'Racing' },
            { icon: icon.mdiGuyFawkesMask, text: 'Role' },
            { icon: icon.mdiVoicemail, text: 'Simulation' },
            { icon: icon.mdiTrophyOutline, text: 'Sports' },
            { icon: icon.mdiKlingon, text: 'Strategy' },
            { icon: icon.mdiPoliceBadgeOutline, text: 'Trivia' },
            { icon: icon.mdiVectorLink, text: 'Word' },
          ]

    public side_bar:string = ''

    public get get_sidebar():Array<Object>{
        return this.sidebar_item
    }

    public get side_bar_select():string{
        return this.side_bar
    }

    @Mutation
    public change_side_bar(item:string):string{
        return this.side_bar = item
    }
}