import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import FaComment from 'react-icons/lib/fa/comment'
import AddCommentForm from './AddCommentForm';
import moment from 'moment'

const Post = ({
  author,
  content,
  title,
  votes,
  img_url,
  id, 
  comments,
  upvotePost,
  createdAt,
  downvotePost,
  addComment}) => {
  const handleSubmit = (content) => addComment(id, content)
  const commentEles = comments.map((comment)=>(<li key={comment.id}>{comment.content}</li>))
  return (
    <Row className="mt-3">
      <Col>
        <Card>
          <CardImg
            top
            width="100%"
            src={img_url}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{title} | <FaArrowUp onClick={() => upvotePost(id)}/> {votes} <FaArrowDown onClick={() => downvotePost(id)}/></CardTitle>
            <CardSubtitle>{author}</CardSubtitle>
            <CardText>
              {content}
            </CardText>
              <hr />
              {moment(createdAt).fromNow()} | <FaComment /> {comments.length} Comments
              <AddCommentForm handleSubmit={handleSubmit}/>
              <ul className="mt-2">
                {commentEles}
              </ul>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Post
