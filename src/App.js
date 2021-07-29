import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id))
  }

  const fetchTours = async () => {
    const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
  }
  useEffect(() => {
    fetchTours()
  }, [])

  if (loading){
    return <main>
      <Loading/>
    </main>
  }

  if (tours.length === 0){
    return <main>
      <div className="title">
        <h2>No tours Left</h2>
        <button onClick={fetchTours} className="btncd
        ecd
        ">Reload</button>
      </div>
    </main>
  }
  return <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
}

export default App
