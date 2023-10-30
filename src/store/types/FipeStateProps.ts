import { Brand, CarProps, Model, Year } from '.'

export interface FipeStateProps {
  brands: Brand[]
  selectedBrand: Brand | null
  models: Model[]
  selectedModel: Model | null
  years: Year[]
  selectedYear: Year | null
  selectedCar: CarProps | undefined
  isCarPriceLoading: boolean
}
