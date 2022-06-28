import CommentList from "./CommentList";
import { ListGroup } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
    /* state = {
          comments: [],
      }; */

    const [comments, setComments] = useState(null);

    /* componentDidMount = () => {
        if(this.props.asin) this.fetchComments();
    }; */

    useEffect(() => {
        fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);      //replaces componentDidMount

    /* componentDidUpdate = (prevProps, prevState) => {
          if(this.props.asin && prevProps.asin !== this.props.asin) {
              this.fetchComments()
          }
      } */

    useEffect(() => {
        fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [asin]);

    const fetchComments = async () => {
        try {
            const url = "https://striveschool-api.herokuapp.com/api/comments/" + asin;

            const response = await fetch(url, {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzNDM5MzdmZmQ0OTAwMTU4YTdhOWMiLCJpYXQiOjE2NTYzMzM5MzUsImV4cCI6MTY1NzU0MzUzNX0.c-9Im8VXXiGRjorisVfuH72atqDkHzY91DG_qsAAI1U",
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                /* this.setState(
                            {
                                comments: data
                            }
                        ) */

                setComments(data);
            } else {
                console.log("Errrrror!!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h2> Book Comments</h2>

            {/* {this.state.comments && this.state.comments.map((bookComment) => (
                        <Col key={bookComment._id}>
                        <p>Rating = {bookComment.rate}</p>
                        <p>comments = {bookComment.comment}</p>
                        </Col>
                    )) } */}
            {comments && (
                <ListGroup>
                    <CommentList commentsArray={comments} />
                    <AddComment asin={asin}/>
                </ListGroup>
            )}
        </>
    );
};

export default CommentArea;
