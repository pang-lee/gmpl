import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Admin from '~/store/admin'
import Main from '~/store/main'
import Header from '~/store/header'
import Auth from '~/store/authorize'

let admin : Admin
let main : Main
let header : Header
let auth : Auth

function initialiseStores(store: Store<any>): void {
  main = getModule(Main, store)
  admin = getModule(Admin, store)
  header = getModule(Header, store)
  auth = getModule(Auth, store)
}

export { initialiseStores, admin, main, header, auth }