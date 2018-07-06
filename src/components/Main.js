import React, { Component } from 'react'
import AddPostForm from './AddPostForm'
import Post from './Post'
import FilterPosts from './FilterPosts'
import { Container, Row, Col, Button } from 'reactstrap'
import { PostsContainer } from '../containers/PostsContainer';
import { AddPostFormContainer } from '../containers/AddPostFormContainer';

class Main extends Component {
  state = {
    showForm: false,
    search: ''
  }

  changeSearch = (str) => {
    this.setState({search: str})
  }

  render() {
    const form = this.state.showForm ? 
    <Row className="mt-4">
      <Col sm={{size: 11, offset: 1}}>
        <AddPostFormContainer />
      </Col>
    </Row> : null

    return (
      <Container className="mt-4">
        <Row>
          <Col sm={{size: 8, offset: 1}}>
            <FilterPosts handleChange={this.changeSearch}/>
          </Col>
          <Col sm="2">
            <Button color="secondary" onClick={()=>{this.setState({showForm: !this.state.showForm})}}>Add Post</Button>
          </Col>
        </Row>
        {form}
        <PostsContainer search={this.state.search} />
      </Container>
    )
  }
}

export default Main
