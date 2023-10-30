import { Brand, CarProps, Model, Year } from '.'

export type FipeAction =
  | { type: 'SET_BRANDS'; payload: Brand[] }
  | { type: 'SET_SELECTED_BRAND'; payload: Brand | null }
  | { type: 'SET_MODELS'; payload: Model[] }
  | { type: 'SET_SELECTED_MODEL'; payload: Model | null }
  | { type: 'SET_YEARS'; payload: Year[] }
  | { type: 'SET_SELECTED_YEAR'; payload: Year | null }
  | { type: 'SET_SELECTED_CAR_SPECIFICATION'; payload: CarProps | undefined }
  | { type: 'SET_IS_CAR_PRICE_LOADING'; payload: boolean }
