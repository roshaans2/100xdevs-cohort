import React from "react";

const Wrapper = () => {
    return <div>
         <CardWrapper innerComponent={<TextComponent/>} />
    </div>
   
}

const TextComponent = () => {
    return(
        <div>
            Hi there
        </div>
    )
}

const CardWrapper = ({innerComponent}) => {
    return(
        <div>
            {innerComponent}
        </div>
    )
}

export default Wrapper