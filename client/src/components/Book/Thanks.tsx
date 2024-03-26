import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useEffect, useState } from 'react';

export default function Thanks() {
    const { width, height } = useWindowSize()
    const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRunning(false);
    }, 7500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="thanks-div">
        {
            isRunning &&
            <Confetti
                width={width}
                height={height}
            />
        }
        <h3>Programare plasată ! 
            În curând ve-ți fi contactat 
            pentru confirmarea identității și pentru
            ulterioare detalii de pregătire. <br /><br />
            <span>Vă mulțumim ! ♡</span>
        </h3>
    </div>
  )
}
