import MenuItem from "./MenuItem"
import {iconeAdicionar, iconeCarro, iconeAjustes} from "./icons/index"
import Image from 'next/image'
import logoImage from '../assets/images/logo.jpg'

export default function MenuLateral(){
    return (
        <aside>
            <div className="h-20 w-20 bg-white flex items-center justify-center">
							<Image src={logoImage} alt="Logo" />
            </div>
            <ul>
							<MenuItem url="main" texto="Cadastro" icone={iconeAdicionar} />
							<MenuItem url="lista" texto="Carros" icone={iconeCarro} />
							<MenuItem url="/" texto="Logout" icone ={iconeAjustes} />
            </ul>
        </aside>
    )
}