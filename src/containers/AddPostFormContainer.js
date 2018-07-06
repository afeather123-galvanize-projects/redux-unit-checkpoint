import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addPost} from '../actions/posts'
import AddPostForm from '../components/AddPostForm'

const mapDispatchToProps = dispatch => bindActionCreators({handleSubmit: addPost},dispatch)

export const AddPostFormContainer = connect(null,mapDispatchToProps)(AddPostForm)