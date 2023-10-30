import { Brand, CarProps, Model, Year } from '.'

export interface FipeContextProps {
  brands: Brand[]
  selectedBrand: Brand | null
  models: Model[]
  selectedModel: Model | null
  years: Year[]
  selectedYear: Year | null
  selectedCar: CarProps | undefined
  isCarPriceLoading: boolean

  getCarPrice: () => Promise<boolean>
  setSelectBrand: (brand: Brand | null) => void
  setSelectModel: (model: Model | null) => void
  setSelectYear: (year: Year | null) => void
}
