import { useEffect, useState } from 'react'
import './Book.css'

export default function Book() {
    const [typeBook, setTypeBook] = useState<number>(1);

    const changeTypeOfBook = (n:number):void =>{
        setTypeBook(n)
    }

    useEffect(() => {
        console.log(typeBook)
    },[typeBook])
    
  return (
    <div className="book-div">
        <h2>Book your visit now !</h2>
        <label>
            Insert your name 
            <input type="text" placeholder="eg. John Smith"/>
        </label>
        <label>
            Phone number
            <input type="text" placeholder="eg. +123456789"/>
        </label>

        <div className="type-book">
            <button onClick={() => changeTypeOfBook(1)}>Small</button>
            <button onClick={() => changeTypeOfBook(2)}>Medium</button>
            <button onClick={() => changeTypeOfBook(3)}>Big</button>
        </div>

        <label>
            Date
            <input type="date" placeholder="eg. +123456789"/>
        </label>
        <label>
            Hour
            <input type="time" placeholder="eg. +123456789"/>
        </label>

        <button className='book-btn'>Book now</button>
    </div>
  )
}
