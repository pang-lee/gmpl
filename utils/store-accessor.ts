import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Admin from '~/store/admin'
import Friend from '~/store/friend'
// import Main from '~/store/main'

let admin : Admin
let friend : Friend
// let main : Main

function initialiseStores(store: Store<any>): void {
  // main = getModule(Main, store)
  admin = getModule(Admin, store)
  friend = getModule(Friend, store)
}

// export { initialiseStores, main }
export { initialiseStores, admin, friend}