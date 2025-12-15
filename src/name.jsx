import { useState } from "react";

function Name() {
    const [name, setName] = useState("");

    return(
        <div>
            <input
            type="text"
            onChange={(e)=> setName(e.target.value)}
            />
            <h2>Your name is: {name}</h2>
        </div>
    )
}
export default Name;