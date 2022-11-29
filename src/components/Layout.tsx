import Cabecalho from "./Cabecalho"
import MenuLateral from "./MenuLateral"
import Conteudo from "./Conteudo"

interface LayoutProps{
    titulo:string
    subtitulo:string
    children?:any
}

export default function Layout(props:LayoutProps){
    return (
        <div className="flex h-screen w-screen">
            <MenuLateral />
            <div className="flex flex-col bg-gray-200 w-full p-7">
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
        </div>
    )
}