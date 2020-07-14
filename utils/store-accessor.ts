import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Admin from '~/store/admin'
import Friend from '~/store/friend'
import Main from '~/store/main'
import Header from '~/store/header'
import Auth from '~/store/authorize'

let admin : Admin
let friend : Friend
let main : Main
let header : Header
let auth : Auth

function initialiseStores(store: Store<any>): void {
  main = getModule(Main, store)
  admin = getModule(Admin, store)
  friend = getModule(Friend, store)
  header = getModule(Header, store)
  auth = getModule(Auth, store)
}

export { initialiseStores, admin, friend, main, header, auth }