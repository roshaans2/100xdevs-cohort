import React from "react";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <button onClick={() => {
                    navigate("/dashboard")
                }}>Dashboard</button>
                <button onClick={() => {
                    navigate("/")
                }}>Landing</button>
                 <button onClick={() => {
                    navigate("/lazy")
                }}>Lazy Loading</button>
            </div>
        </div>
    )
}

export default Appbar