
import React, {Component} from "react";
class Uncontrolled extends React.Component {
  constructor(props){
    super(props);
    this.updateSubmit = this.updateSubmit.bind(this);
    this.input = React.createRef();
  }
  updateSubmit(event){
    alert('You have entered the username and college name successfully');
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.updateSubmit}>
        <h1>Uncontrolled Form example</h1>
        <label>Name :
          <input type="text" ref={this.input}/>
        </label>
        <br></br>
        <label>
          College Name :
          <input type='text' ref={this.input}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
export default Uncontrolled;