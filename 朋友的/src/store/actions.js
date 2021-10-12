import {INIT_USER_DATA, REMOVE_USER_INFO} from './actionTypes'
import {setStorageVal, setUser, removeUserData} from '@utils/local'

export const initUserData = data => {
  setStorageVal('token', data.token)
  setStorageVal('isLogin', true)
  setUser('userInfo', JSON.stringify(data))
  return {type: INIT_USER_DATA, data}
}

export const removeUserInfo = () => {
  removeUserData('userInfo', 'token')
  setStorageVal('isLogin', false)
  return { type: REMOVE_USER_INFO }
}