import { Brand, CarProps, FipeAction, Model, Year } from './types'

export const setBrands = (brands: Brand[]): FipeAction => ({
  type: 'SET_BRANDS',
  payload: brands,
})
export const setSelectedBrand = (brand: Brand | null): FipeAction => ({
  type: 'SET_SELECTED_BRAND',
  payload: brand,
})
export const setModels = (models: Model[]): FipeAction => ({
  type: 'SET_MODELS',
  payload: models,
})
export const setSelectedModel = (model: Model | null): FipeAction => ({
  type: 'SET_SELECTED_MODEL',
  payload: model,
})
export const setYears = (years: Year[]): FipeAction => ({
  type: 'SET_YEARS',
  payload: years,
})
export const setSelectedYear = (year: Year | null): FipeAction => ({
  type: 'SET_SELECTED_YEAR',
  payload: year,
})
export const setSelectedCarSpecification = (
  specification: CarProps | undefined,
): FipeAction => ({
  type: 'SET_SELECTED_CAR_SPECIFICATION',
  payload: specification,
})
export const setIsCarPriceLoading = (isLoading: boolean): FipeAction => ({
  type: 'SET_IS_CAR_PRICE_LOADING',
  payload: isLoading,
})
