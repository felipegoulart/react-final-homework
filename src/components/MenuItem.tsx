import Link from "next/link"

interface MenuItemProps{
    url: string
    texto: string
    icone: any
}


export default function MenuItem(props: MenuItemProps){
    return (
        <li className="hover:bg-gray-100 duration-200">
            <Link href={props.url}>
                <a className="flex flex-col justify-center items-center w-20 h-20">
                    {props.icone}
                    <span className="text-gray-600 font-light text-xs">
                        {props.texto}
                    </span>
                </a>
            </Link>

        </li>
    )
}