import React, { Component } from "react";
import { Link } from "react-router-dom";
import ModalOverlay from "./ModalOverlay";
import { connect } from "react-redux";
import { Segment, Container, Header } from "semantic-ui-react";

class Contact extends Component {
  render() {
    const cards = this.props.cards;
    return (
      <div>
        {cards.map((card) => {
          return (
            <Container text style={{ marginTop: "80px" }} key={card.id}>
              <Segment padded="very">
                <Header as="h3">
                  <Link to={`/${card.title}`}>{card.title}</Link>
                </Header>
                <p>{card.body}</p>
              </Segment>
            </Container>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(Contact);
