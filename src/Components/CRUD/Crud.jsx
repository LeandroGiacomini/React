import { Botao, CampoTexto, Divisinha, Header, Titulo } from "./Style.jsx"
import { IoIosAdd } from 'react-icons/io';
import { useEffect, useState } from "react";

export function Crud({ titulo }){
    

    const [ativo, setAtivo] = useState(false)

    useEffect(()=>{
        if (ativo == true)
        alert("Tutni")
    },[ativo])

    

    return (
        <Header>
            <Titulo>
                { titulo }
            </Titulo>
            <Divisinha >    
                <CampoTexto placeholder="Digite o nome..." />
                <Botao onClick={() => setAtivo(true)}>
                    <IoIosAdd size={45}/>
                </Botao>
            </Divisinha>
        </Header>
    )
}