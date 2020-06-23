import resolve from "resolve";

export const GET_USER_INFO = 'GET_USER_INFO';
export const SET_USER_INFO = 'SET_USER_INFO';


export const doLogin = () => {
  return async dispatch => {
    console.log('dispatch login')
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        localStorage.setItem('token', 'token')
        localStorage.setItem('userInfo', JSON.stringify({'name': 'blue'}))
        dispatch({
          type: SET_USER_INFO,
          preload: {userInfo: {'name': 'blue'},token: 'token'},
        });
        resolve({userInfo: {'name': 'blue'},token: 'token'})
      },3000);
    })
  }
}
