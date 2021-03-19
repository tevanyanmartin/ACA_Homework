import { createStore } from 'redux'
import { initialState } from './initialState'

export const CHANGE_USER_DATA = 'CHANGE_USER_DATA'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

function reducer(state = initialState, action) {
   
   switch (action.type) {
      case LOGIN:
         return {
            ...state,
            username: action.payload.username,
            image: action.payload.image,
            isLogin:true
         }
      default:
         break;
   }
   return {
      ...state,

   }
}

const store = createStore(reducer)



export default store
