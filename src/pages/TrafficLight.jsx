import { useEffect, useRef, useState } from "react";
import Light from "../components/TrafficLight/Light";

const trafficLightRules = {
  'red' : {
    color : 'red',
    timer : '5000',
    place : 1
  },
  'green' : {
    color : 'green',
    timer : '5000',
    place : 2
  },
  'yellow' : {
    color : 'yellow',
    timer : '1000',
    place : 3
  }
}

const trafficSignalPattern = ['red', 'yellow', 'green']

const TrafficLight = () => {
  const [currentSignal, setCurrentSignal] = useState(trafficLightRules['red']);
  const currentLightIndex = useRef(0);

  useEffect(() => {
    handleTrafficSignal();
  }, [currentLightIndex.current])

  const handleTrafficSignal = () => {
    if(currentLightIndex.current === 2) {
      currentLightIndex.current = 0;
    }
    else
    currentLightIndex.current += 1;

    console.log(trafficLightRules[trafficSignalPattern[currentLightIndex.current]]);
    

    setTimeout(() => {
      setCurrentSignal(trafficLightRules[trafficSignalPattern[currentLightIndex.current]])
    }, currentSignal.timer);
  }

  return (
    <div className="flex" style={{ height : '100vh', background : '#e1d7bd' }}>
      <div className="light-parent">
        {
          Object.keys(trafficLightRules).map((_, index) => (
            <div key={index}>
              <Light 
                color = {index + 1 === currentSignal.place ? currentSignal.color : '' }
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TrafficLight