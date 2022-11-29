import CampoTexto from "../components/CampoTexto"
import router from "next/router"
import { useState } from "react"

interface ILogin {
    password?: string
    email?: string
}

export default function Index(){
    const [login, setLogin] = useState<ILogin>({ email: '', password: '' })
    const [errors, setErrors] = useState<ILogin>({})
    const errorMessage = 'Campo obrigatório'

    function handleInputs (e) {
        setLogin({...login, [e.target.name]: e.target.value})
    }

    function handleSubmit () {
        setErrors({})

        if (!login.email) {
            setErrors({ ...errors, email: errorMessage })
            return
        }

        if (!login.password) {
            setErrors({ ...errors, password: errorMessage })
            return
        }

        if (!Object.keys(errors).length) {
            router.push("main")
        }
    }

    return (
        <div className="flex items-center h-screen justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img 
                    src="https://picsum.photos/1280/1280" 
                    alt="background" 
                    className="h-screen w-full"
                />
            </div>

            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <CampoTexto 
                    label="E-mail"
                    tipo="email"
                    valor={login.email}
                    nome="email"
                    handleValue={handleInputs}
                    erro={errors.email}
                />
                <CampoTexto 
                    label="Senha" 
                    tipo="password" 
                    valor={login.password}
                    nome="password"
                    handleValue={handleInputs}
                    erro={errors.password}
                />
                <button 
                    className="bg-indigo-500 hover:bg-indigo-400 w-full rounded-lg px-4 py-3 text-white mt-6" 
                    onClick={() => handleSubmit()}
                >
                    Entrar
                </button>
            </div>
        </div>
    )
}