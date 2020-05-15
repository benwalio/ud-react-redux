import React, { Component } from "react";

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
    }
    componentDidMount() {
        let user = this.props.match.params.user;
        this.setState({
            user
        })
    }
  render() {
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <h3 className="ui header">card</h3>
        <h6>{this.state.user}</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          dolores voluptate rerum quaerat velit ipsa voluptas aut harum, tempora
          ab nisi perferendis quisquam repudiandae, vel beatae, eum laborum
          molestias similique.
        </p>
      </div>
    );
  }
}
