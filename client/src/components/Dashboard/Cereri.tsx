import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useEffect, useState } from 'react'
import Accept from '../../assets/accept.png'
import Decline from '../../assets/remove.png'
import Empty from '../../assets/empty-box.png'
import CerereCard from './CerereCard'

export default function Cereri() {
    const [info, setInfo] = useState<{nume:string, numar:string, data:string, procedura:string, ora:string}[]>()
    const [existsData, setExistsData] = useState(true)
    const [confirmTable, setConfirmTable] = useState(false)
    const [nume, setNume] = useState('')
    const [numar, setNumar] = useState('')
    const [procedura, setProcedura] = useState('')
    const [data, setData] = useState('')
    const [ora, setOra] = useState('')
    const [action, setAction] = useState(1)

    const handleAnulare = () =>{
        setConfirmTable(false)
    }

    useEffect(() => {
        const fetchData = async () => {
          
            try {
              const docRef = doc(db, "electro", "cereri");
              const docSnap = await getDoc(docRef);
              
              if (docSnap.exists()) {
                const data = docSnap.data();
                console.log(data)
                const dataArray = Object.entries(data).map(([key, value]) => ({ key, ...value }))
                setInfo(dataArray)
              } else {
                setExistsData(false)
              }
            } catch (error) {
              console.error("Error getting document:", error);
            }
      
        };
        
        fetchData();
      }, [])

      const handleAction = (a:string,b:string,c:string,d:string,e:string,f:number) => {
          setNume(a)
          setNumar(b)
          setProcedura(c)
          setData(d)
          setOra(e)
          setAction(f)
          setConfirmTable(true)
        }

  return (
    <div className="cereri-div">
        {
            existsData ? 
            info?.map((i,indx) => 
            <div key={indx} className='list-cerere'>
                <h5>{i.nume} - {i.numar}</h5>
                <h5>{i.procedura}</h5>
                <h5>{i.data} - {i.ora}:00</h5>
                <span>
                    <img src={Accept} onClick={() => handleAction(i.nume, i.numar, i.procedura, i.data, i.ora,1)}/>
                    <img src={Decline}  onClick={() => handleAction(i.nume, i.numar, i.procedura, i.data, i.ora,2)}/>
                </span>
            </div>) :
            <div className='empty-div'>
                <img src={Empty} />
                <h2>Nici o programare noua {":("}</h2>
            </div>
        }

        {
            confirmTable && 
            <div className='block-div'>
                <CerereCard 
                    nume={nume}
                    numar={numar}
                    data={data}
                    ora={ora}
                    procedura={procedura}
                    actiune = {action}
                    handleAnulare={handleAnulare}
                />
            </div>
        }
    </div>
  )
}
