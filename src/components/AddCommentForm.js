import React, {Component} from 'react'
import {Form, FormGroup, Input, Button} from 'reactstrap'

class AddCommentForm extends Component {

    state = {
        content: ''
    }

    render() {
        const handleSubmit = e => {
            e.preventDefault()
            this.props.handleSubmit(this.state.content)
            this.setState({content: ''})
        }

        return (
            <Form inline onSubmit={handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="text" name="comment" id="comment-field" placeholder="Enter a comment here" 
                    value={this.state.content}
                    onChange={e=>this.setState({content: e.target.value})}/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        )
    }
}

export default AddCommentForm