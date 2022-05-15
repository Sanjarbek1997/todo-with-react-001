

import "./input.scss"

const Input =({change})=>{
    return (
        <>
        <input onKeyUp={change} type={"text"} placeholder={"Write ..."} />
        </>
    )
}

export default Input