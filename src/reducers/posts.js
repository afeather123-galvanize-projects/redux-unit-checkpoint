import {RECIEVE_POSTS, UPDATE_POST, ADD_POST} from '../actions/posts'

const updatePost = (state, post) => {
    const posts = state.reduce((arr, ele) => {
        console.log(arr)
        if(ele.id === post.id) arr.push(post)
        else arr.push(ele)
        return arr
    }, [])
    return posts
}

export const posts = (state = [], action) => {
    switch(action.type) {
        case RECIEVE_POSTS:
            return [...state, ...action.posts]
        case UPDATE_POST:
            return updatePost(state, action.post)
        case ADD_POST:
            return [...state, action.post]
        default:
            return state
    }
}