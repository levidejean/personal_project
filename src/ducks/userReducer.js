import axios from 'axios';
// CONSTANTS
const GET_USER = 'GET_USER';
const NEW_USER = 'NEW_USER';
// ACTION CREATORS
export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get('/api/me')
  };
}

export function newUser(
  firstName,
  lastName,
  email,
  authid
){
  return{
    type: NEW_USER,
    payload: axios
    .post(`api/info.${authid}`, {
      firstName,
      lastName,
      email
    })
    .then(res => {
      console.log(res);
      return res.data[0];
    })
  }
}
// INITIAL STATE

const initialState = {
  user: {},
  isAuthed: false,
};

// REDUCER

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data,
        isAuthed: true
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        isAuthed: false
      };
      case `${NEW_USER}_PENDING`:
      return {
        ...state,
        isAuthed: true
      };
      case `${NEW_USER}_FULFILLED`:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    default:
      return state;
  }
}
