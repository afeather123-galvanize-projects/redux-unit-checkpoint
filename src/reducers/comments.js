import {RECIEVE_COMMENTS, ADD_COMMENT} from '../actions/comments'

const recieveComments = (state = {}, action) => {
    return action.comments.reduce(
    (obj, comment) => {
        if(!obj[comment.post_id]) 
            obj[comment.post_id] = [comment]
        else 
            obj[comment.post_id].push(comment)
        return obj
    },
    {...state})
}

const addComment = (state, comment) => {
    const comments = {...state}
    comments[comment.post_id] = [comment, ...state[comment.post_id]]
    return comments
}

export const comments = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_COMMENTS:
            return recieveComments(state,action)
        case ADD_COMMENT:
            return addComment(state, action.comment)
        default:
            return state
    }
}