import {combineReducers} from "redux";
import {list} from './list'

const rootReducer = combineReducers({
  clicked: false,
  books: list,
})
export default rootReducer;
