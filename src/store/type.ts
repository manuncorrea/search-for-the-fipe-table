interface StandardProps {
  code: string
  name: string
}

export type Brand = StandardProps
export type Model = StandardProps
export type Year = StandardProps

export interface CarProps {
  value: string
  brand: string
  model: string
  year: string
}

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

export interface FipeContextProps {
  handleGetCarPrice: () => Promise<boolean>
  brands: Brand[]
  selectedBrand: Brand | null
  models: Model[]
  selectedModel: Model | null
  years: Year[]
  selectedYear: Year | null
  selectedCar: CarProps | undefined
  isCarPriceLoading: boolean
}

export interface RootStateProps {
  fipe: FipeStateProps
}

export type FipeAction =
  | { type: 'SET_BRANDS'; payload: Brand[] }
  | { type: 'SET_SELECTED_BRAND'; payload: Brand | null }
  | { type: 'SET_MODELS'; payload: Model[] }
  | { type: 'SET_SELECTED_MODEL'; payload: Model | null }
  | { type: 'SET_YEARS'; payload: Year[] }
  | { type: 'SET_SELECTED_YEAR'; payload: Year | null }
  | { type: 'SET_SELECTED_CAR_SPECIFICATION'; payload: CarProps | undefined }
  | { type: 'SET_IS_CAR_PRICE_LOADING'; payload: boolean }
