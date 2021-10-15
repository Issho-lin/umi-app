import { useState, useCallback } from 'react'
import { fetchAccountApi } from '@/api/home'

export default function useHome() {
  const [count, setCount] = useState(1)
  const fetchAccount = useCallback(async () => {
    const res = await fetchAccountApi()
    console.log(res)
  }, [])

  return {
    count,
    setCount,
    fetchAccount,
  }
}
