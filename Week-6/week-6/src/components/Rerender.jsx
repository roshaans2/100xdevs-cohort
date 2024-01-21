import React,{useState} from "react";

const getRandom = () => {
    return Math.random()
}

const Rerender = () => {
    const [name,setName] = useState("Rakesh")
    const handleClick = () => {
        setName(currName => {
            return getRandom()
        })
    }
    return(
        <div>
            <button onClick={handleClick}>Click me to change the title</button>
            <Header name={name}/>
            <Header name="Deepak"/>
            <Header name="Deepak"/>
            <Header name="Deepak"/>
        </div>
    )

}

const Header = React.memo(function Header({name}){
    return(
        <h1>My name is {name}</h1>
    )
})

export default Rerender