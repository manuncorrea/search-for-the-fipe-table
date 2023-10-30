import { ReactNode } from 'react'
import { Container } from './styles'

interface PriceContainerProps {
  children: ReactNode
}

export default function PriceContainer({ children }: PriceContainerProps) {
  return <Container>{children}</Container>
}
