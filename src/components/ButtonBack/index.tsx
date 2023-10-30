import useFipe from '@/hooks/useFipe'
import IconButton from '@mui/material/IconButton'
import { useRouter } from 'next/router'
import { FaArrowLeft } from 'react-icons/fa'
import { Back } from './styles'

export default function ButtonBack() {
  const router = useRouter()
  const { setSelectBrand, setSelectModel, setSelectYear } = useFipe()

  const handleBack = () => {
    setSelectBrand(null)
    setSelectModel(null)
    setSelectYear(null)

    router.push('/')
  }

  return (
    <Back aria-label="Voltar" onClick={handleBack}>
      <FaArrowLeft />
    </Back>
  )
}
