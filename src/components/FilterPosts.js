import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FilterPosts extends Component {
  state = {
    search: ''
  }

  render () {
    const change = e => {
      this.setState({search: e.target.value})
      this.props.handleChange(this.state.search)
    }

    const submit = e => {
      e.preventDefault()
      this.props.handleChange(this.state.search)
    }

    return (
      <Form inline onSubmit={submit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filter-field" className="mr-sm-2">Filter by title:</Label>
          <Input type="text" name="title" id="filter-field" value={this.state.search}
          onChange={change}/>
        </FormGroup>
      </Form>
    )
  }
}

export default FilterPosts