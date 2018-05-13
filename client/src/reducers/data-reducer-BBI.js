import { GET_DATA_BBI } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case GET_DATA_BBI:
      return action.payload.data

    default:
      return state
  }
}