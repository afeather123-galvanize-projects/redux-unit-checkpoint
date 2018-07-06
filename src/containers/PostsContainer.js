import {connect} from 'react-redux'
import Posts from '../components/Posts';

const mapStateToProps = (state,props) => {
    return {
        posts:state.posts,
        search: props.search
    }
}

export const PostsContainer = connect(mapStateToProps)(Posts)