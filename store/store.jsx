import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import Reducers from "./reducers/reducers";

import { posts } from "./reducers/posts";
import { modal } from "./reducers/modal";
import { chat } from "./reducers/chat";
const RootReducers = combineReducers({
  posts,
  modal,
  chat,
  Reducers,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));