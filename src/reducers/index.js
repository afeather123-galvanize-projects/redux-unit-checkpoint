import {posts} from './posts'
import {comments} from './comments'
import { combineReducers } from 'redux';

export const reducer = combineReducers({posts, comments});