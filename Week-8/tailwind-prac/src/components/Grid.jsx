import React from "react";

const Grid = () => {
    return(
        <div className="grid grid-cols-10">
            <div className="bg-red-500 col-span-4">hi</div>
            <div className="bg-green-500 col-span-4">hi</div>
            <div className="bg-yellow-500 col-span-2">hi</div>
        </div>
    )
}

export default Grid