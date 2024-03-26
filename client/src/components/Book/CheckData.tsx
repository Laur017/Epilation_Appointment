import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'

interface Props {
    nume:string,
    numar:string,
    procedura:number,
    data:string,
    ora:string,
    handleAnulare:() => void
}

export default function CheckData({nume, numar, procedura, data, ora, handleAnulare}:Props) {
    const dataCorecta = data.split("-").reverse().join("-")
    
    const handleConfirmare = async () => {

        try{
            const docRef = doc(db, "electro", "cereri")
    
            await updateDoc(docRef,{
              [generateRandomKey()]:{
                nume:nume,
                numar:numar,
                procedura: procedura === 1 ? "mâini" : procedura === 2 ? "subrațe" : "picioare",
                data:dataCorecta,
                ora:ora
            }
            });
            console.log("Document added to the db")
          } catch (e) {
            console.log("Error adding document: ", e)
          }
    }
    
    function generateRandomKey() {
        return Math.random().toString(36).substring(2, 10);
    }

    return (
    <div className="div-validare-date">
        <h1>Verificarea datelor introduse</h1>
        <h2>
            Dnul/Dna 
            <span> {nume}</span>, 
            numar de contact: 
            <span> {numar}</span>,
            o rezervare pentru epilarea 
            <span>
                {procedura === 1 ? " mâinii " : 
                procedura === 2 ? " subrațului " :
                " piciorului "
                }
            </span> 
            pe data de: 
            <span> {dataCorecta} </span> 
            la ora 
            <span> {ora} : 00</span>
        </h2>

        <div>
            <button onClick={handleAnulare}>Anulare</button>
            <button className="book-btn" onClick={handleConfirmare}>Confirmare</button>
        </div>
    </div>
  )
}
