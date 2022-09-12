import { Crud } from "../../Components/CRUD/Crud.jsx";
import { Container, Page } from "./Style.jsx";

export function App(){
    return(
        <Page>
            <Container>
                <Crud titulo="Clientes"/>  
            </Container>
        </Page>
    )
}