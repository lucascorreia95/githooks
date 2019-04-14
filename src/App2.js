import React, { useState, useEffect } from 'react';

export default function App2() {

  const [location, setLocation] = useState({})

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived)

    return () => navigator.geolocation.clearWatch(watchId)
  }, [])

  function handlePositionReceived({ coords }) {
    const { latitude, longitude }  = coords

    setLocation({ latitude, longitude })
  }

  return (
    <>
        Latitude: {location.latitude}
        <br />
        Longitude:  {location.longitude}
    </>
  )
}