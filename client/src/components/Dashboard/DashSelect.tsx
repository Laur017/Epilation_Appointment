import { useState } from "react"

export default function DashSelect() {
  const [selected, setSelected] = useState<number>(1)
  const handleSelection = (n:number) => {
    setSelected(n)
  }
  return (
    <div className="dash-selection">
            <button 
              onClick={() => handleSelection(1)}
              className={selected === 1 ? 'selected-btn' : ''}
            >
              Cereri
            </button>
            <button 
              onClick={() => handleSelection(2)}
              className={selected === 2 ? 'selected-btn' : ''}
            >
              Programari
            </button>
    </div>
  )
}
