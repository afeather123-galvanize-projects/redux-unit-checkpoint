export const RECIEVE_POSTS = 'RECIEVE_POSTS'
export const UPDATE_POST = 'UPVOTE_POST'
export const ADD_POST = 'ADD_POST'

export const fetchPosts = () => {
    return async dispatch => {
        const result = await fetch('http://localhost:8082/api/posts')
        const posts = await result.json()
        dispatch({type:RECIEVE_POSTS, posts})
    }
}

export const upvotePost = (id) => async dispatch => {
    const result = await fetch(`http://localhost:8082/api/posts/votes/increase/${id}`)
    const post = await result.json()
    console.log(post)
    dispatch({type: UPDATE_POST, post})
}

export const downvotePost = (id) => async dispatch => {
    const result = await fetch(`http://localhost:8082/api/posts/votes/decrease/${id}`)
    const post = await result.json()
    console.log(post)
    dispatch({type: UPDATE_POST, post})
}

export const addPost = ({author, content, title, img_url}) => async dispatch => {
    const result = await fetch('http://localhost:8082/api/posts', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({author, content, title, img_url})
    })
    const post = await result.json()
    dispatch({type: ADD_POST, post})
}