import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { AppRouter } from "./routers/AppRouter";
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import postReducer from './reducers/post'
import userReducer from './reducers/user'
import detailReducer from "./reducers/postDetail";

const reducer = combineReducers({
  posts:postReducer,
  user:userReducer,
  post:detailReducer,
})
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
    </React.StrictMode>,
  document.getElementById("root")
);
