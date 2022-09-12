
import { CampoTexto, Header, Titulo } from "./Style.jsx"

export function Crud({ titulo }){
    return (
        <Header>
            <Titulo>
                { titulo }
            </Titulo>
            <CampoTexto placeholder="Digite o nome..." />
        </Header>
    )
}