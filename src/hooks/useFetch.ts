import axios from "axios"
import { useState, useEffect } from "react"

const API_URL = "https://marcelo.cpss.mywire.org/"

interface UseFetchResult<T> {
  data: T | null
  error: unknown
  loading: boolean
}

function useFetch<T = any>(endpoint: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<unknown>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = `${API_URL}${endpoint}` // ✅ sin barra extra
    //console.log("Fetching:", url)       // para sacar a consola la data

    axios
      .get(url)
      .then((resp) => setData(resp.data))
      .catch((err) => {
        console.error("Error en petición:", err)
        setError(err)
      })
      .finally(() => setLoading(false))
  }, [endpoint])

  return { data, error, loading }
  
}

export default useFetch
