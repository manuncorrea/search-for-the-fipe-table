import ButtonBack from '@/components/ButtonBack'
import PriceContainer from '@/components/PriceContainer'
import useFipe from '@/hooks/useFipe'
import { Container } from '@/styles/pages/result'

export default function Result() {
  const { selectedCar } = useFipe()

  return (
    <Container>
      <div className="back">
        <ButtonBack />
      </div>
      {selectedCar ? (
        <>
          <h1>
            Tabela Fipe: Preço {selectedCar?.Marca} {selectedCar?.Modelo}{' '}
            {selectedCar?.AnoModelo}
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
