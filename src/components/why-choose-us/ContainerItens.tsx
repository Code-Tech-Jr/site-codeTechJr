import React from "react";

type itensProps = {
    imgSrc: string;
    text: string;
    as?: React.ElementType;
}

function ContainerItens({imgSrc, text, as: Component = 'div'}: itensProps){
    return (
        <Component> 
            <img 
                src={imgSrc} 
                alt="" 
                aria-hidden="true"
            />
            <p style={{ whiteSpace: "pre-line"}}>{text}</p>
        </Component>
    )
}

export default ContainerItens