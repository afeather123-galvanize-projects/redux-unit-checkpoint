export const RECIEVE_COMMENTS = 'RECIEVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'

export const fetchComments = () => {
    return async dispatch => {
        const result = await fetch('http://localhost:8082/api/comments')
        const comments = await result.json()
        dispatch({type: RECIEVE_COMMENTS, comments})
    }
}

export const addComment = (post_id, content) => async dispatch => {
    const result = await fetch('http://localhost:8082/api/comments', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({content, post_id})
    })
    const comment = await result.json()
    console.log(comment)
    dispatch({type: ADD_COMMENT, comment})
}