import React from 'react'
import {Row, Col} from 'reactstrap';
import { PostContainer } from '../containers/PostContainer';

const Posts = ({posts, search}) => {
    posts = sortAlgorithm(posts, 1,0.0000001)
    posts = search ? posts.filter(ele => ele.title.toLowerCase().includes(search.toLowerCase())) : posts
    const postsElements = posts.map(post => <PostContainer key={post.id} post={post}/>)
    return (
        <Row>
        <Col className="pr-0" sm={{size: 9, offset: 1}}>
            {/* Below is the Post component for each post. It is up to you how you would like to iterate over them. */}
            {postsElements}
          </Col>
        </Row>
    )
}

const sortAlgorithm = (posts, pointWeight, timeWeight) => {
    return posts
    .map(post => {
        console.log(Date.now() - new Date(post.createdAt))
        const weight = - 1 * timeWeight * (Date.now() - new Date(post.createdAt)) + pointWeight * post.votes
        return {post, weight}
    })
    .sort((a,b)=>a.weight<b.weight)
    .map(wp=>wp.post)
}

export default Posts