import { useEffect, useState } from "react"
import Comment from "./Comment"

export default function Comments(){

    const [comments, setComments] = useState([])
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(data => setComments(data))
    },[])

    return (
        <div className="card">
            <h1>All Comments: {}</h1>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    )
}