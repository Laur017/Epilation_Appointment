import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore'
import {db} from '../../firebase';

const localizer = momentLocalizer(moment)

// const events = [
//   {
//     start:moment('2024-03-28T10:00').toDate(),
//     end:moment('2024-03-28T15:00').toDate(),
//     title:"Mercedsa"

//   },
//   {
//     start:moment('2024-03-28T17:00').toDate(),
//     end:moment('2024-03-28T18:00').toDate(),
//     title:"Lorenzo"

//   },
//   {
//     start:moment('2024-03-29T17:00').toDate(),
//     end:moment('2024-03-29T18:00').toDate(),
//     title:"Vlaicu"

//   }
// ]

interface Event {
  start: Date;
  end: Date;
  title: string;
} 

export default function Programari() {
  const [events, setEvents] = useState<Event[]>([])
  const today = new Date();
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0);
  const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0);
  
  useEffect(() => {
      const fetchEvents = async () => {
        try {
          const docRef = doc(db, "electro", 'programari');
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log(data)

            const fetchedEvents =  Object.values(data).map((i) => ({
              start:moment(`${i.data.split('-').reverse().join('-')}T${i.ora}:00`).toDate(),
              end:moment(`${i.data.split('-').reverse().join('-')}T${(parseInt(i.ora)+1).toString()}:00`).toDate(),
              title:`${i.nume} - ${i.procedura} - ${i.numar}`
            }))
            setEvents(fetchedEvents)
          }else {
            console.log("No such document exists");
          }
        }catch (error){
          console.error(error)
        }
      } 
      fetchEvents()
  },[])

  useEffect(() => {

    console.log(events)

  },[events])
  return (
    <div className="programari-div">
      <div className="calendar-div">
       <Calendar 
        events={events} 
        localizer={localizer}
        min={startOfDay}
        max={endOfDay}
        />
      </div>
    </div>
  )
}
