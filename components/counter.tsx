'use client'

import { Button } from "@heroui/button"
import { useState } from "react"

export function Contador(){
  let [contador,setContador] = useState(0)
  function contar(){
    setContador(contador + 1)
  }
  return(
    <div>
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <Button color="primary" onPress={contar}>+</Button>
    </div>
  )
}