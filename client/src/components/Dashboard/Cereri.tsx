import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useEffect, useState } from 'react'
import Accept from '../../assets/accept.png'
import Decline from '../../assets/remove.png'
import Empty from '../../assets/empty-box.png'

export default function Cereri() {
    const [info, setInfo] = useState<{nume:string, numar:string, data:string, procedura:string, ora:string}[]>()
    const [existsData, setExistsData] = useState(true)
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
      }, []);
  return (
    <div className="cereri-div">
        {
            existsData ? 
            info?.map(i => 
            <div>
                <h5>{i.nume} - {i.numar}</h5>
                <h5>{i.procedura}</h5>
                <h5>{i.data} - {i.ora}:00</h5>
                <span>
                    <img src={Accept} />
                    <img src={Decline} />
                </span>
            </div>) :
            <div className='empty-div'>
                <img src={Empty} />
                <h2>Nici o programare noua {":("}</h2>
            </div>
        }
    </div>
  )
}
