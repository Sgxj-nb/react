import {INIT_USER_DATA, REMOVE_USER_INFO} from '../actionTypes'
import {getStorageVal, getUser} from '@utils/local'

if (getUser('userInfo')) {
  
}
// let {userId, username, password} = JSON.parse(getUser('userInfo')) || {}
let userInfo = getUser('userInfo') ? JSON.parse(getUser('userInfo')) : {}
let initState = {
  userId: userInfo.userId || '',
  username: userInfo.username || '',
  password: userInfo.password || '',
  token: getStorageVal('token'),
  isLogin: getStorageVal('token') ? true : false
}

export default function initUserData(state = initState, action) {
  const {type, data} = action
  let newState
  switch (type) {
    case INIT_USER_DATA:
      newState = JSON.parse(JSON.stringify(data))
      return newState
    case REMOVE_USER_INFO:
      return newState = {
        userId: '',
        username: '',
        password: '',
        token: '',
        isLogin: false
      }
    default:
      return state
  }
}