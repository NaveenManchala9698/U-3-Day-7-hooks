import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";



class BookList extends Component {

    render() {
        return (
            <Container>
               <h2>Books</h2>
                <Row>
                    {this.props.books && this.props.books.map(SelectedBook => (
                        <Col md={4} key={SelectedBook.asin}>
                            <SingleBook book={SelectedBook} 
                            changeBook = {this.props.changeBook}
                            />
                        </Col>
                    ))}

                </Row>
            </Container>


        )
    }
}

export default BookList