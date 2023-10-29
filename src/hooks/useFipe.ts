import { FipeContext } from '@/store/FipeProvider'
import { useContext } from 'react'

export default function useFipe() {
  const context = useContext(FipeContext)

  if (!context) {
    throw new Error('useFipe must be used within a FipeProvider')
  }

  return context
}
