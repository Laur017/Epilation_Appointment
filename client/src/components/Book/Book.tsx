import { useEffect, useState } from 'react'
import './Book.css'
import Arm from '../../assets/elbow.png'
import Armpit from '../../assets/armpit.png'
import Leg from '../../assets/leg.png'
import CheckData from './CheckData'

export default function Book() {
    const [typeBook, setTypeBook] = useState<number>(1);
    const [nume, setNume] = useState<string>('')
    const [numar, setNumar] = useState<string>('')
    const [ora, setOra] = useState<string>("09")
    const [verificareDate, setVerificareDate] = useState<boolean>(false)

    const changeTypeOfBook = (n:number):void =>{
        setTypeBook(n)
    }

    useEffect(() => {
        console.log(typeBook)
    },[typeBook])
    
    const azi = new Date()
    azi.setDate(azi.getDate() + 1)
    const day = azi.getDate()
    const month = azi.getMonth() + 1
    const year = azi.getFullYear()
    const aziString = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
    const [data, setData] = useState(aziString)

    const handleRezervare = () => {
        console.log(nume, numar, typeBook, data, ora)
        if(nume.length > 2 && numar.length > 7){
            setVerificareDate(true)
        }else{
            alert('Datele introduse sunt incomplete')
        }
    }

    const handleAnulare = () => {
        setVerificareDate(false)
    }

  return (
    <div className="book-div">
        <h2>Programează o rezervare acum !</h2>
        <div className="book-content">

        <label>
            Nume și Prenume *
            <input type="text" placeholder="eg. John Smith" value={nume} onChange={(e) => setNume(e.target.value)} required/>
        </label>
        <label>
            Număr de telefon *
            <input type="text" placeholder="eg. 069123456"  value={numar} onChange={(e) => setNumar(e.target.value)} required/>
        </label>
        <label>Tipul procedurii *</label>
        <div className="type-book">
            <button onClick={() => changeTypeOfBook(1)} className={typeBook === 1 ? "selected-type" : ""}><img src={Arm} /></button>
            <button onClick={() => changeTypeOfBook(2)} className={typeBook === 2 ? "selected-type" : ""}><img src={Armpit} /></button>
            <button onClick={() => changeTypeOfBook(3)} className={typeBook === 3 ? "selected-type" : ""}><img src={Leg} /></button>
        </div>

        <label>
            Data *
            <input type="date" min={aziString} value={data} onChange={(e) => setData(e.target.value)}/>
        </label>
        <label>
            Ora *
            <select className='select-time' onChange={(e) => setOra(e.target.value)}>
                <option value={"09"}>09:00</option>
                <option value={"10"}>10:00</option>
                <option value={"11"}>11:00</option>
                <option value={"12"}>12:00</option>
                <option value={"13"}>13:00</option>
                <option value={"14"}>14:00</option>
                <option value={"15"}>15:00</option>
                <option value={"16"}>16:00</option>
                <option value={"17"}>17:00</option>
            </select>
        </label>

        </div>
        <button className='book-btn' onClick={handleRezervare}>Rezervă</button>
        {verificareDate &&
        <div className='block-div'>
            <CheckData nume={nume} numar={numar} procedura={typeBook} data={data} ora={ora} handleAnulare={handleAnulare}/>
        </div>
        }
    </div>
  )
}
