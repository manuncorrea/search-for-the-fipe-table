import AutoCompleteComponent from '@/components/AutoComplete'
import ButtonComponent from '@/components/Button'
import useFipe from '@/hooks/useFipe'
import { useRouter } from 'next/router'
import { Box, Container, Form } from '../styles/pages'

export default function Home() {
  const router = useRouter()

  const {
    getCarPrice,
    brands,
    models,
    years,
    setSelectBrand,
    setSelectModel,
    setSelectYear,
    selectedBrand,
    selectedModel,
    selectedYear,
    isCarPriceLoading,
  } = useFipe()

  const isSubmitDisabled =
    !selectedBrand || !selectedModel || !selectedYear || isCarPriceLoading

  const handleSubmit = async (data: React.FormEvent<HTMLFormElement>) => {
    data.preventDefault()

    const success = await getCarPrice()

    if (success) router.push('/result')
  }

  return (
    <Container>
      <Box>
        <Form onSubmit={handleSubmit}>
          <div className="item">
            <AutoCompleteComponent
              options={brands}
              label="Marca"
              loading={brands.length === 0}
              value={selectedBrand}
              onChange={(event, value) => setSelectBrand(value)}
              fullWidth
            />
          </div>

          <div className="item">
            <AutoCompleteComponent
              options={models}
              label="Modelo"
              loading={models.length === 0}
              value={selectedModel}
              onChange={(event, value) => {
                setSelectModel(value)
              }}
            />
          </div>
          <div className="item">
            {selectedBrand && selectedModel && (
              <AutoCompleteComponent
                options={years}
                label="Ano"
                loading={years.length === 0}
                value={selectedYear}
                onChange={(event, value) => {
                  setSelectYear(value)
                }}
              />
            )}
          </div>
          <ButtonComponent
            label="Consultar preço"
            type="submit"
            disabled={isSubmitDisabled}
            fullWidth
          />
        </Form>
      </Box>
    </Container>
  )
}
