import { Item } from "../types/Item"

type Props = {
  item: Item
  increase: (id: string) => void
  decrease: (id: string) => void
  remove: (id: string) => void
}

// componente para renderizar cada item do estoque
export default function InventoryItem({ item, increase, decrease, remove }: Props) {

  const lowStock = item.quantity < 3

  return (

    <div className="border rounded p-3 mb-3 flex justify-between items-center">

      <div>

        <p className="font-semibold text-black">
          {item.name}
        </p>

        {lowStock && (
          <p className="text-red-500 text-sm">
            Estoque Baixo
          </p>
        )}

      </div>

      <div className="flex items-center gap-2">

        <button
          onClick={() => decrease(item.id)}
          className="bg-gray-200 px-2 rounded"
        >
          -
        </button>

        <span className="text-black">
          {item.quantity}
        </span>

        <button
          onClick={() => increase(item.id)}
          className="bg-gray-200 px-2 rounded"
        >
          +
        </button>

        <button
          onClick={() => remove(item.id)}
          disabled={item.quantity > 0}
          className="bg-red-500 text-white px-2 py-1 rounded disabled:bg-gray-300"
        >
          Remover
        </button>

      </div>

    </div>

  )
}