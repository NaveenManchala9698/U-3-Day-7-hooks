

import {Card} from 'react-bootstrap'


const SingleBook = ({book, changeBook}) => {

   /*  state = {
        selected: false
    } */

        return (
            <Card
          // onClick={(e) => this.setState({selected: !this.state.selected})}   
          onClick={() => changeBook(book.asin)}
            >
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }


export default SingleBook