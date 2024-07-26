import Single from "../../component/Single/Single"
import { singleUser } from "../../data"


const User = () => {
    return (
        <div className=""><Single {...singleUser} /> </div>
    )
}

export default User