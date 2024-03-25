interface Props {
    nume:string,
    numar:string,
    procedura:number,
    data:string,
    ora:string,
    handleAnulare:any
}

export default function CheckData({nume, numar, procedura, data, ora, handleAnulare}:Props) {
    const dataCorecta = data.split("-").reverse().join("-")
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
            <button className="book-btn">Confirmare</button>
        </div>
    </div>
  )
}
