
import SingleComment from "./SingleComment";

const CommentList = ({commentsArray }) => {
        return (
               
                   <>
                       {commentsArray && commentsArray.map((comment) => (
                        <li key={comment._id}><SingleComment  bookComments={comment}/></li>
                        ))}
                   </>
               
        )
    }

export default CommentList