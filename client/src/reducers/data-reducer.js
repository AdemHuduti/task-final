import { GET_DATA_SA } from '../actions';

export default function (state = [], action) {
  
  switch (action.type) {
    case GET_DATA_SA:
      return action.payload.data

    default:
      return state
  }
}