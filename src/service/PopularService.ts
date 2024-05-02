import { useState, useEffect } from 'react'

const usePopularService = (url: string) => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const responseData = await response.json()
        setPopular(responseData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPopular()
  }, [url])

  return {popular}
}

export default usePopularService
