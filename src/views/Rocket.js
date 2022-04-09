import React, {useState, useEffect} from 'react'

function Rocket(props) {
  const [rocketId, setRocketId] = useState('rocket');

  useEffect(() => {
    if (props.animate !== undefined) {
      setRocketId(props.animate);
    }

  }, [props.animate]);

  return (
    <div id={rocketId}>
      <div className="ship">
        <div className="window"></div>
        <div className="left wing"></div>
        <div className="right wing"></div>
        <div className="thruster"></div>
      </div>
      <div className="flame-container">
        <div className="red flame"></div>
        <div className="orange flame"></div>
        <div className="yellow flame"></div>
        <div className="white flame"></div>
      </div>
    </div>
  )
}

export default Rocket