import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Component } from "react";
import HistoryBooks from "./data/history.json";
import BookList from "./components/BookList";
import { Container, Row, Col } from "react-bootstrap";
import CommentArea from "./components/CommentArea";

class App extends Component {
  state = {
    asin: "",
  };

  changeBook = (newAsin) => {
    this.setState({
      asin: newAsin,
    });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={6}>
              <BookList books={HistoryBooks} changeBook={this.changeBook} />
            </Col>
            <Col md={6}>
              <CommentArea asin={this.state.asin} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;