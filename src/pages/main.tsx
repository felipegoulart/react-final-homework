import Layout from "../components/Layout"
import CampoTexto from "../components/CampoTexto"
import { useState } from "react"

interface ICar {
  model: string
  brand: string
  year: number | null
  color: string
}

export default function Home() {
  const [showFormMessage, setShowFormMessage] = useState(false)
  const [form, setForm] = useState<ICar>({
    model: '',
    brand: '',
    year: 2022,
    color: ''
  })

  function handleSubmit(e) {
    e.preventDefault()

    const carList: ICar[] = JSON.parse(localStorage.getItem('carList')) || []
    carList.push(form)

    localStorage.setItem('carList', JSON.stringify(carList))

    setForm({
      model: '',
      brand: '',
      year: 2022,
      color: ''
    })

    handleFormMessage()
  }

  function handleFormMessage () {
    setShowFormMessage(true)
    setTimeout(() => setShowFormMessage(false), 5000)
  }

  function handleInputs (e) {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  return (
    <Layout titulo="Cadastro de carros" subtitulo="Cadastre um carro">
      <form onSubmit={e => handleSubmit(e)} className="flex flex-col w-3/4 mx-auto justify-between">
        <div className="flex w-full">
          <CampoTexto
              classes="mr-4"
              label="Modelo"
              tipo="text"
              valor={form.model}
              nome="model"
              handleValue={handleInputs}
          />
          <CampoTexto 
              label="Marca"
              tipo="text"
              valor={form.brand}
              nome="brand"
              handleValue={handleInputs}
          />
        </div>

        <div className="flex w-full justify-between">
          <CampoTexto
              classes="mr-4"
              label="Ano"
              tipo="number"
              valor={form.year}
              nome="year"
              handleValue={handleInputs}
          />
          <CampoTexto 
              label="Cor"
              tipo="text"
              valor={form.color}
              nome="color"
              handleValue={handleInputs}
          />
        </div>

        <div className="w-full flex justify-center pt-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white w-48 py-2 rounded-md duration-200"
          >
            Cadastrar
          </button>
        </div>
      </form>

      { showFormMessage && <span className="text-gray-700 font-bold text-center mt-4 text-lg">Carro cadastrado com sucesso</span> }

    </Layout>
  )
}

/* <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
    
      <Cabecalho titulo="Pagina inicial" subtitulo="Subitulo da pagina inicial" />

      <Cabecalho titulo="Outra pagina" subtitulo="Subitulo da pagina" />

      <MenuItem url="/" texto="Inicial" icone={iconeCasa} />
  

      <MenuItem url="ajuda" texto="Ajuda" icone={iconeAjuda}>
      </MenuItem>

    </div> */