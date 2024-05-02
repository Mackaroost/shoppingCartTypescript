import { useState, useEffect } from 'react'

const useFetchData = (url: string) => {
  const [data, setData] = useState([])
  const[loading, setLoading]=useState(true)


  useEffect(() => {
    (async()=>{
      try {
        const response = await fetch(url)
        const resJson = await response.json()
        setData(resJson)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    })();
  }, [url]) 

  return { data, loading}
}

export default useFetchData;
