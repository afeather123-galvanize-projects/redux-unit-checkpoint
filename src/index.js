import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import {store} from './store'
import {Provider} from 'react-redux'
import { fetchPosts } from './actions/posts';
import { fetchComments } from './actions/comments';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

store.dispatch(fetchPosts())
store.dispatch(fetchComments())