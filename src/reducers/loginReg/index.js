import {
  SET_USER_INFO,
  GET_USER_INFO
} from '../../actions/loginReg'

const initState = {
  token: '',
  userInfo: {}
}

export default (state = initState, action) => {
  switch (action.type) {
      case GET_USER_INFO:
          return {
            user: {
              token: state.user.token,
              userInfo: state.user.userInfo
            }
          }
      case SET_USER_INFO: 
          return {
              user: {
                token: action.token,
                userInfo: action.userInfo
              }
          }
      default:
          return state
  }
}