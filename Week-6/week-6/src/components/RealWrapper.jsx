import React from "react";

const RealWrapper = () => {
    return(
        <div>
            <CardWrapper>
                <TextComponent/> 
            </CardWrapper>
        </div>
    )
}

const CardWrapper = ({children}) => {
    return(
        <div>
            {children}
        </div>
    )
}

const TextComponent = () => {
    return(
        <div>
            hi there
        </div>
    )
}

export default RealWrapper