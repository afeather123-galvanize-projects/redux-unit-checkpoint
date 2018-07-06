import React, {Component} from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

class AddPostForm extends Component {
  state = {
    author: '',
    title: '',
    content: '',
    img_url: ''
  }

  render() {
    const handleSubmit = e => {
      e.preventDefault()
      for(let key in this.state) {
        if(this.state[key].length === 0) return
      }
      this.props.handleSubmit(this.state)
    }
    return (
      <Row>
        <Col sm="10">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="title-field">Title</Label>
              <Input type="text" name="title" id="title-field"
              value={this.state.title}
              onChange={e=>this.setState({title: e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label for="body-field">Body</Label>
              <Input type="text" name="body" id="body-field" 
              value={this.state.content}
              onChange={e=>this.setState({content: e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label for="author-field">Author</Label>
              <Input type="text" name="author" id="author-field" 
              value={this.state.author}
              onChange={e=>this.setState({author: e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label for="image-field">Image URL</Label>
              <Input type="text" name="image" id="image-field" 
              value={this.state.img_url}
              onChange={e=>this.setState({img_url: e.target.value})}/>
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default AddPostForm
