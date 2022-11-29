interface ConteudoProps{
    children?: any
}

export default function init(props: ConteudoProps){
    return (
        <>
            {props.children}
        </>
    )
}