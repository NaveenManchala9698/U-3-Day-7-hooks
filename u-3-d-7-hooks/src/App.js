import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HistoryBooks from "./data/history.json";
import BookList from "./components/BookList";
import { Container, Row, Col } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import { useState } from "react";

const App = () => {
  /* state = {
    asin: "",
  }; */

  const [asin, setAsin] = useState(null);

  /* changeBook = (newAsin) => {
    this.setState({
      asin: newAsin,
    });
  }; */

  /* const changeBook = (newAsin) => {
    setAsin(newAsin);
  }; */

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={6}>
            <BookList books={HistoryBooks} changeBook={setAsin} />
          </Col>
          <Col md={6}>
            <CommentArea asin={asin} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
