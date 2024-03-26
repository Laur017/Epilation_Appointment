interface Props {
    nume:string
    numar:string
    data:string
    ora:string
    procedura:string
    actiune: number
    handleAnulare: () => void
}

export default function CerereCard({nume, numar, data, ora, procedura, actiune, handleAnulare}:Props) {
    const handleConfirmare = () => {
        console.log('Tot zbs')
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
