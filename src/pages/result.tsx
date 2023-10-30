import PriceContainer from '@/components/PriceContainer'
import useFipe from '@/hooks/useFipe'
import { Container } from '@/styles/pages/result'

export default function Result() {
  const { selectedBrand, selectedModel, selectedYear, selectedCar } = useFipe()

  return (
    <Container>
      {selectedCar ? (
        <>
          <h1>
            Tabela Fipe: Preço {selectedBrand?.nome} {selectedModel?.nome}{' '}
            {selectedYear?.nome}
          </h1>
          <PriceContainer>{selectedCar?.Valor}</PriceContainer>

          <span>Este é o preço de compra do veiculo</span>
        </>
      ) : (
        <div>Carregando detalhes do veículo...</div>
      )}
    </Container>
  )
}
