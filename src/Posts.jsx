import { use } from "react"
import Post from "./Post";


export default function Posts({postsPromise}){
    const posts = use(postsPromise)
    // console.log(posts);
    return (
        <div className="card">
            <h1>Total Post: {posts.length}</h1>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}