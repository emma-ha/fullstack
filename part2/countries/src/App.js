import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const[countries, setCountires] = useState([])
  const[queue, setQ] = useState('')

  const handleQ = event => setQ(event.target.value)

  const filCount = countries.filter(count => count.name.includes(queue))

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then
    (response => 
      setCountires(response.data.map(({name, capital, area, languages, flags}) => ({name: name.common, capital, area, languages, flags})
      )))
  }, [])

  

  return(
    <div>
      <p>Find countries<input value = {queue} onChange = {handleQ}  /></p>
      {filCount.length > 10 && (<h3>Too many macthes</h3>)}
      {filCount.length <= 10 && filCount.length > 1 && 
        filCount.map(count => <div>{count.name}</div>)}
      {filCount.length === 1 &&
        (
          <>
            <h1>
              {filCount[0].name}
            </h1>
            <div>
              capital {filCount[0].capital}
            </div>
            <div>
              area {filCount[0].area}
            </div>
          </>
        )}
    </div>

  )
}

export default App