import { HTMLInputTypeAttribute } from "react"

interface AutProps {
    label: string
    valor: any
    tipo?: 'text' | 'email' | 'password' | 'number'
    nome: string
    erro?: string
    classes?: string
    handleValue: (novoValor: any) => void
}

export default function Init ({handleValue, valor, label, tipo, erro, nome = 'text', classes}: AutProps) {
    return (
        <div className={`w-full flex flex-col mt-4 ${classes}`}>
            <label htmlFor="nome" >{label}</label>
            <input
                className={`rounded-lg bg-gray-100 border focus:bg-white focus:outline-none focus:border-blue-500 px-4 py-3 ${erro ? 'border-red-600' : ''}`}
                type={tipo} 
                value={valor}
                onChange={handleValue}
                name={nome}
            />
            {erro && <small className="text-red-600">{erro}</small>}
        </div>
    )
}