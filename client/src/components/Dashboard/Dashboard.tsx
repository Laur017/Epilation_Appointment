import { useState } from 'react'
import DashSelect from './DashSelect'
import './Dashboard.css'
import Cereri from './Cereri'
import Programari from './Programari'

export default function Dashboard() {
  const [page, setPage] = useState<number>(1)
  const handlePage = (n:number) => {
    setPage(n)
  }
  return (
    <div className="dashboard-div">
        <DashSelect handlePage={handlePage}/>
        {page === 1 ?
        <Cereri /> :
        <Programari />  
      }
    </div>
  )
}
