import { Store, ActionTree } from 'vuex'
import { ActionContext } from "vuex/types"
import { Context } from "@nuxt/types"
import { initialiseStores } from '~/utils/store-accessor'
import axios from 'axios'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'
export const actions: ActionTree<any, any> = {
    nuxtServerInit: async (context:ActionContext<any, any>, server:Context):Promise<any> => {
        context.commit('main/set_live', [
                { id:'live-1', img:'https://cdn.vuetifyjs.com/images/parallax/material2.jpg', title:'Test for Live-1', subtitle:'1,000 miles of wonder', description:'I am live-1'},
                { id:'live-2', img:'https://cdn.vuetifyjs.com/images/parallax/material.jpg', title:'Test for Live-2', subtitle:'1,000 miles of wonder', description:'I am live-2'},
                { id:'live-3', img:'https://cdn.vuetifyjs.com/images/cards/road.jpg', title:'Top to trips', subtitle:'1,000 miles of wonder', description:'I am thrid'},
                { id:'live-4', img:'https://cdn.vuetifyjs.com/images/cards/plane.jpg', title:'Top western road', subtitle:'1,000 miles of wonder', description:'I am fourth'},
                { id:'live-5', img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title:'Top eastern road trips', subtitle:'1,000 miles of wonder', description:'I am fifth'},
                { id:'live-6', img:'https://cdn.vuetifyjs.com/images/cards/store.jpg', title:'Test for Live-6', subtitle:'1,000 miles of wonder', description:'I am live-6'},
            ])

        context.commit('main/set_watch', [
                { id:'watch-1', img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title:'Top western road trips', subtitle:'1,000 miles of wonder', description:'I am first'},
                { id:'watch-2', img:'https://cdn.vuetifyjs.com/images/cards/house.jpg', title:'Top road trips', subtitle:'1,000 miles of wonder', description:'I am second'},
                { id:'watch-3', img:'https://cdn.vuetifyjs.com/images/cards/road.jpg', title:'Top to trips', subtitle:'1,000 miles of wonder', description:'I am watch-3'},
                { id:'watch-4', img:'https://cdn.vuetifyjs.com/images/cards/plane.jpg', title:'Test for Watch-4', subtitle:'1,000 miles of wonder', description:'I am fourth'},
                { id:'watch-5', img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title:'Top eastern road trips', subtitle:'1,000 miles of wonder', description:'I am watch-5'},
                { id:'watch-6', img:'https://cdn.vuetifyjs.com/images/cards/store.jpg', title:'Test for watch-6', subtitle:'1,000 miles of wonder', description:'I am sixth'},
            ])

        context.commit('main/set_recommend', [
                { id:'recommend-1', img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg', title:'Recommend -1', subtitle:'1,000 miles of wonder', description:'I am first'},
                { id:'recommend-2', img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title:'Recommend -2', subtitle:'1,000 miles of wonder', description:'I am fifth'},
                { id:'recommend-3', img:'https://cdn.vuetifyjs.com/images/cards/store.jpg', title:'Top easten trips', subtitle:'1,000 miles of wonder', description:'I am sixth'},
            ])
        
        context.commit('main/set_hot', [
                { id:'hot-1', img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg', title:'Top western road trips', subtitle:'1,000 miles of wonder', description:'I am first'},
                { id:'hot-2', img:'https://cdn.vuetifyjs.com/images/cards/house.jpg', title:'Top road trips', subtitle:'1,000 miles of wonder', description:'I am second'},
                { id:'hot-3', img:'https://cdn.vuetifyjs.com/images/cards/road.jpg', title:'Hot -3', subtitle:'1,000 miles of wonder', description:'I am thrid'},
                { id:'hot-4', img:'https://cdn.vuetifyjs.com/images/cards/plane.jpg', title:'Top western road', subtitle:'1,000 miles of wonder', description:'I am fourth'},
                { id:'hot-5', img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title:'Hot -5', subtitle:'1,000 miles of wonder', description:'I am fifth'},
                { id:'hot-6', img:'https://cdn.vuetifyjs.com/images/cards/store.jpg', title:'Top easten trips', subtitle:'1,000 miles of wonder', description:'I am sixth'},
            ])
        
        context.commit('main/set_play', [
                { id:'play-1', img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg', title:'Played -1', subtitle:'1,000 miles of wonder', description:'I am first'},
                { id:'play-2', img:'https://cdn.vuetifyjs.com/images/cards/house.jpg', title:'Top road trips', subtitle:'1,000 miles of wonder', description:'I am second'},
            ])

// Below are using jsonplaceholder API

        // const live = await axios.get('https://jsonplaceholder.typicode.com/todos')
        // const watch = await axios.get('https://jsonplaceholder.typicode.com/users')
        // const recommendation = await axios.get('https://jsonplaceholder.typicode.com/albums')
        // const hot = await axios.get('https://jsonplaceholder.typicode.com/comments')
        // const play = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // context.commit('main/set_live', live.data)
        // context.commit('main/set_watch', watch.data)
        // context.commit('main/set_recommend', recommendation.data)
        // context.commit('main/set_hot', hot.data)
        // context.commit('main/set_play', play.data)
    }
};

