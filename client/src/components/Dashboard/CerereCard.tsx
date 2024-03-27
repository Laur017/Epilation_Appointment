import { deleteField, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'

interface Props {
    nume:string
    numar:string
    data:string
    ora:string
    procedura:string
    actiune: number
    handleAnulare: () => void
    ki:string
}

export default function CerereCard({nume, numar, data, ora, procedura, actiune, handleAnulare,ki}:Props) {
    const handleConfirmare = async () => {
        console.log(ki)
        if(actiune === 2){
            try {
                const docRef = doc(db, "electro", "cereri")
                await updateDoc(docRef,{
                    [ki]:deleteField()
                })
                console.log("mere")
            } catch (error){
                console.error('Error deleting field')
            }
        } else if (actiune === 1){
            try{
                const docRef = doc(db, "electro", "programari")
        
                await updateDoc(docRef,{
                  [ki]:{
                    nume:nume,
                    numar:numar,
                    procedura: procedura,
                    data:data,
                    ora:ora
                }
                });
                actiune = 2
                handleConfirmare()
              } catch (e) {
                console.log("Error adding document: ", e)
              }
        }

        handleAnulare()
    }
  
    return (
    <div className="cerere-card">
        <h2>Sigur <span className={actiune === 1?"green":"red"}>{actiune === 1 ? "confirmi" : "anulezi"}</span> urmatoarea programare ?</h2>
        <h4>Nume: <span>{nume}</span></h4>
        <h4>Numar de telefon: <span>{numar}</span></h4>
        <h4>Procedura: <span>{procedura}</span></h4>
        <h4>Pe data de: <span>{data}</span></h4>
        <h4>La ora: <span>{ora}:00</span></h4>
        <div>
            <button onClick={handleAnulare}>Anulare</button>
            <button className="book-btn" onClick={handleConfirmare}>Confirmare</button>
        </div>
    </div>
  )
}
