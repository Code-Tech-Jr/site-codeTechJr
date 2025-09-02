
type itensProps = {
    imgSrc: string;
    text: string;
}

function ContainerItens({imgSrc, text}: itensProps){
    return (
        <div>
            <img src={imgSrc} alt={text}/>
            <p style={{ whiteSpace: "pre-line"}}>{text}</p>
        </div>
    )
}

export default ContainerItens