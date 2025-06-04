'use client'

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Page() {
  const [contador, setContador] = useState(0)
  let [marcas, setMarcas] = useState([])

async function listarMarcas(){
  let response = await fetch('http://10.10.67.20:3002//marcas')
  let listaMarcas = await response.json()
  setMarcas(listaMarcas)
}

useEffect(() => {


 },[] )  
listarMarcas
  //funcao para incrementar o contador
  function incrementar() {
    setContador(contador + 1)
  }
  return (
    <div className="p-4">
      <h1>Página Inicial</h1>
      <p className="text-4xl"> Contador: {contador}</p>
      <Button onClick={incrementar}>+</Button>
      <div className="mt-4">
        <h2>Marcas</h2>
        <ul>
{
  marcas.map((marca)=>{
    <li>{marca.nome}</li>
  })
}
        </ul>

      </div>
    </div>
  );
}
