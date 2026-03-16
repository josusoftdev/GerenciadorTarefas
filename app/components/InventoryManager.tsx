"use client"

import { useState } from "react"
import { Item } from "../types/Item"
import InventoryItem from "./InventoryItem"


export default function InventoryManager() {

  const [items, setItems] = useState<Item[]>([])
  const [name, setName] = useState("")

  // função para adicionar
  function addItem() {

    if (!name.trim()) return

    const newItem: Item = {
      id: crypto.randomUUID(),
      name,
      quantity: 0
    }

    setItems([...items, newItem])
    setName("")
  }
// função para aumentar
  function increase(id: string) {

    setItems(items.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ))
  }
// função para diminuir
  function decrease(id: string) {

    setItems(items.map(item =>
      item.id === id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ))
  }

 // função para remover
  function removeItem(id: string) {

    setItems(items.filter(item => item.id !== id))
  }
  
  return (

    <div className="text-black">

      <div className="flex gap-2 mb-4">

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome do item"
          className="border rounded px-3 py-2 flex-1"
        />

        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Adicionar
        </button>

      </div>

      {items.map(item => (

        <InventoryItem
          key={item.id}
          item={item}
          increase={increase}
          decrease={decrease}
          remove={removeItem}
        />

      ))}

    </div>
  )
}