const Block =({text,compUncomp})=>{
    return (
        <>
        <button onClick={compUncomp} type="button">
            {text}
        </button>
        </>
    )
}

export default Block