interface TituloProps{
    titulo: string
    subtitulo: string
}

export default function init(props: TituloProps){
    return (
        <>
            <h1 className="font-black text-3xl text-gray-700">
                {props.titulo}
            </h1>
            <h2 className="font-light text-sm text-gray-600">
                {props.subtitulo}
            </h2>
        </>
    )
}