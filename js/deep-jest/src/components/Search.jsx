import React, { Component } from 'react';

{/* <Search onSubmit={} /> */}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      content: ''
     }
     this.handleChange = this.handleChange.bind(this)
     this.handleKeyUp = this.handleKeyUp.bind(this)
  }
  render() { 
    return ( 
      <input type="test" value={this.state.content}
      onChange={this.handleChange}
      onKeyUp={this.handleKeyUp}
      />
     );
  }

  handleChange (e) {
    this.setState({
      content: e.target.value
    })
  }

  handleKeyUp (e) {
    const { content } = this.state
    if (e.keyCode === 13 && content) {
      this.props.onSubmit(content);
      this.setState({ content: '' })
    }
  }

}
 
export default Search;