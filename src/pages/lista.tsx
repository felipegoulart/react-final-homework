import Layout from "../components/Layout";
import { useEffect, useState } from "react";

export default function Init(){
    const [carList, setCarList] = useState<any>([])

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('carList'))
        list && setCarList(list)
    }, [])
    
    return (
        <Layout titulo="Lista de carros" subtitulo="Carros cadastrados">
            <div className="flex flex-col justify-center m-auto w-3/4 bg-white p-4 px-8 rounded-md shadow-xl">
                <h3 className="text-center text-xl mb-4 font-bold">Carros Cadastrados</h3>
                <table>
                    <thead>
                        <th className="text-left">Marca</th>
                        <th className="text-left">Modelo</th>
                        <th className="text-left">Cor</th>
                        <th className="text-left">Ano</th>
                    </thead>
                    <tbody>
                        {(carList.map((car, index) => (
                            <tr className="hover:bg-gray-100 duration-200" key={index}>
                                <td>{car.brand}</td>
                                 <td>{car.model}</td>
                                 <td>{car.color}</td>
                                 <td>{car.year}</td>
                            </tr>
                        )))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}