import { useState } from "react";
import Child from "../Child/Child";

function Parent(props) {
    let [User, setUser] = useState({
        userName: "Eman",
        age: 20,
        job: "Front-End",
        onSale: true,
    });

    return (
        <>
            <div className="container my-5">
                <div className="bg-success text-white text-center py-3 rounded shadow">
                    <h1 className="mb-0">Parent</h1>
                </div>
                <div className="mt-4">
                    <Child UserInfo={User} />
                </div>
            </div>
        </>
    );
}
export default Parent;