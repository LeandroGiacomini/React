import { useEffect, useState } from "react"
import React from 'react';
import { render } from "react-dom";

/*export class Count extends React.Component{
    constructor(props){
        super(props)

        this.state = { contador: 0}
    }

    componentDidMount(){
        console.log('ahahahah')
        console.log('anbdsa')
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(prevProps)
        console.log(prevState)
    }

    componentWillUnmount(){
        alert('alert')
    }

    render(){
        return(<div>
            <h1>Voce clicou {this.state.contador} </h1>
            <button onClick={()=>{
                this.setState({contador: this.state.contador + 1})
            }}>Clique</button>
        </div>)
    }

}*/

export function Contador(){
    
    const [contador, setContador] = useState(0)

    const [botao, setBotao] = useState("white")

    const [texto, setTexto] = useState("black")

    useEffect(()=>{
        console.log('tieww')
    },[contador])

    useEffect(()=> {
        console.log('mudou o tema!')

        return() =>{
            let b = document.getElementById("root").style.backgroundColor = botao
            let c = document.getElementById("root").style.color = texto
        }
    },[botao])


    function handleBotao(){
        if (botao == "white"){
            setBotao("black")
            setTexto("white")
        }
        else{
            setBotao("white")
            setTexto("black")
        }
    }

    return(
        <div>
            <h1>Voce clicou {contador} </h1>
            <button onClick={()=>{
                setContador(contador + 1)
            }}>Clique</button>

            <button onClick={()=> handleBotao()}>{botao}</button>
        </div>
    )
}