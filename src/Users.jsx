import { use } from "react"
import User from "./User"


export default function Users({usersFetch}){
    const users = use(usersFetch)
    
    return(
        <div className="card">
            <h1>Total Users: {users.length}</h1>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    )
}