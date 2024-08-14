import { Component } from 'react';

class Upload extends Component() {


    
  constructor() {
    super();
    this.state = {
      image: '',
    }
  }

  handleFileChange = e => {
    this.setState({
      [e.target.name]: e.target.files[0],
    })
  }

  handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    for (let name in this.state) {
      formData.append([this.props.field], this.state[name]);
    }

    formData.append('page', this.props.page)

    alert(JSON.stringify(formData));

    await fetch('/api/update/page/'+ this.props.id +'/', {
      method: 'PUT',
      body: formData,
    });

    alert('done');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <input 
          name="image" 
          type="file"
          field={this.props.field}
          id={this.props.id}
          page={this.props.page}
          onChange={this.handleFileChange}>
        </input>
        <input type="submit"></input>
      </form>
    )
  }
}

export default Upload;