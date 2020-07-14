import { Store, ActionTree } from 'vuex'
import { ActionContext } from "vuex/types"
import { Context } from "@nuxt/types"
import { initialiseStores } from '~/utils/store-accessor'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'
export const actions: ActionTree<any, any> = {
    nuxtServerInit: async (context:ActionContext<any, any>, server:Context):Promise<any> => {
        return await context.commit('main/set_card', [
            { id:'1', img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg', title:'Top western road trips', subtitle:'1,000 miles of wonder', description:'I am first'},
            { id:'2', img:'https://cdn.vuetifyjs.com/images/cards/house.jpg', title:'Top road trips', subtitle:'1,000 miles of wonder', description:'I am second'},
            { id:'3', img:'https://cdn.vuetifyjs.com/images/cards/road.jpg', title:'Top to trips', subtitle:'1,000 miles of wonder', description:'I am thrid'},
            { id:'4', img:'https://cdn.vuetifyjs.com/images/cards/plane.jpg', title:'Top western road', subtitle:'1,000 miles of wonder', description:'I am fourth'},
            { id:'5', img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title:'Top eastern road trips', subtitle:'1,000 miles of wonder', description:'I am fifth'},
            { id:'6', img:'https://cdn.vuetifyjs.com/images/cards/store.jpg', title:'Top easten trips', subtitle:'1,000 miles of wonder', description:'I am sixth'},
        ])
    }
};

