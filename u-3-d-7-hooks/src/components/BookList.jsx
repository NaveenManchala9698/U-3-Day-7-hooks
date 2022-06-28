
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";



const BookList = ({books, changeBook}) => {

        return (
            <Container>
               <h2>Books</h2>
                <Row>
                    {books && books.map(SelectedBook => (
                        <Col md={4} key={SelectedBook.asin}>
                            <SingleBook book={SelectedBook} 
                            changeBook = {changeBook}
                            />
                        </Col>
                    ))}

                </Row>
            </Container>


        )
    }


export default BookList