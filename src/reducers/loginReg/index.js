import {
  SET_USER_INFO,
  GET_USER_INFO
} from '../../actions/loginReg'

const initState = {
  token: localStorage.getItem('token') || '',
  userInfo: localStorage.getItem('userInfo') || {}
}

export default (state = initState, action) => {
  switch (action.type) {
      case GET_USER_INFO:
          return {
            ...state,
            user: {
              token: state.user.token,
              userInfo: state.user.userInfo
            }
          }
      case SET_USER_INFO: 
          return {
              ...state,
              ...action.preload,
          }
      default:
          return state
  }
}