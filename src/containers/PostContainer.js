import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Post from '../components/Post'
import {upvotePost, downvotePost} from '../actions/posts'
import {addComment} from '../actions/comments'

const mapStateToProps = (state, props) => {
    return {
        ...props.post,
        comments: state.comments[props.post.id] || []
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({upvotePost,downvotePost,addComment}, dispatch)

export const PostContainer = connect(mapStateToProps,mapDispatchToProps)(Post)