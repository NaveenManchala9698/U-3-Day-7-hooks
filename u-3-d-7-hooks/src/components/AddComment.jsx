import { useState, useEffect } from "react"
import { Form, Button } from 'react-bootstrap'

const AddComment = ({asin}) => {

    /* state = {
        comment: {
            comment: "",
            elementId: null
        }
    } */

    const [addBookComment, setAddBookComment] = useState({
        comment: "",
        rate: 1,
        
    })

    /* componentDidUpdate(prevProps) {
        if (prevProps.asin !== this.props.asin) {
            this.setState({
                comment: {
                    ...this.state.comment,
                    elementId: this.props.asin
                }
            })
        }
    } */

    useEffect(() => {
        setAddBookComment(() => ({
            ...addBookComment,
            elementId: asin
        }))
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [asin])

    const postComment = async (e) => {
        e.preventDefault()
        try {
            const url = "https://striveschool-api.herokuapp.com/api/comments/"

            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(addBookComment),
                headers: {
                    "Content-type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzNDM5MzdmZmQ0OTAwMTU4YTdhOWMiLCJpYXQiOjE2NTYzMzM5MzUsImV4cCI6MTY1NzU0MzUzNX0.c-9Im8VXXiGRjorisVfuH72atqDkHzY91DG_qsAAI1U",
                },
            })

            if (response.ok) {
                alert('Comment Added!!')
            }
            else {
                alert('No response!')
            }
        }
        catch (error) {
            console.log("Error!!")
        }
    }



    return (
        <div>
            <Form onSubmit={postComment}>
                <Form.Group>
                    <Form.Label><h5>Add Comment</h5></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add comment here"
                        value={addBookComment.comment}
                        onChange={e => setAddBookComment({
                                ...addBookComment,
                                comment: e.target.value
                        })}
                    />
                </Form.Group>
                {/* <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" value={addBookComment.rate}
                            onChange={e => setAddBookComment({
                                    ...addBookComment,
                                    rate: e.target.value
                            })}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group> */}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )

}

export default AddComment