import React, { Component } from "react";
import { Link } from "react-router-dom";
import ModalOverlay from './ModalOverlay';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <ModalOverlay />
        <div
          className="ui raised very padded text container segment"
          style={{ marginTop: "80px" }}
        >
          <Link to='/bob' className="ui header">bob</Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dolores voluptate rerum quaerat velit ipsa voluptas aut harum,
            tempora ab nisi perferendis quisquam repudiandae, vel beatae, eum
            laborum molestias similique.
          </p>
        </div>
        <div
          className="ui raised very padded text container segment"
          style={{ marginTop: "80px" }}
        >
          <Link to='/aaron' className="ui header">aaron</Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dolores voluptate rerum quaerat velit ipsa voluptas aut harum,
            tempora ab nisi perferendis quisquam repudiandae, vel beatae, eum
            laborum molestias similique.
          </p>
        </div>
        <div
          className="ui raised very padded text container segment"
          style={{ marginTop: "80px" }}
        >
          <Link to='/jess' className="ui header">jess</Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dolores voluptate rerum quaerat velit ipsa voluptas aut harum,
            tempora ab nisi perferendis quisquam repudiandae, vel beatae, eum
            laborum molestias similique.
          </p>
        </div>
      </div>
    );
  }
}
