import { GET_DATA_SCC } from '../actions';

export default function (state = [], action) {  
  switch (action.type) {
    
    case GET_DATA_SCC:
      return action.payload.data

    default:
      return state
  }
}