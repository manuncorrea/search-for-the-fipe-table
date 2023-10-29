import ButtonComponent from '@/components/Button'
import { Box, Container } from '../styles/pages/search'
import api from './api'

export default function Home() {
  const handleSubmit = () => {
    console.log('entrou', api)
  }

  return (
    <Container>
      <Box>
        <ButtonComponent label="Consultar preço" onClick={handleSubmit} />
      </Box>
    </Container>
  )
}
