import { FipeAction, FipeStateProps } from './type'

const initialState: FipeStateProps = {
  brands: [],
  selectedBrand: null,
  models: [],
  selectedModel: null,
  years: [],
  selectedYear: null,
  selectedCar: undefined,
  isCarPriceLoading: false,
}

export const fipeReducer = (
  state: FipeStateProps = initialState,
  action: FipeAction,
): FipeStateProps => {
  switch (action.type) {
    case 'SET_BRANDS':
      return { ...state, brands: action.payload }
    case 'SET_SELECTED_BRAND':
      return {
        ...state,
        selectedBrand: action.payload,
        models: [],
        selectedModel: null,
        years: [],
        selectedYear: null,
      }
    case 'SET_MODELS':
      return { ...state, models: action.payload }
    case 'SET_SELECTED_MODEL':
      return {
        ...state,
        selectedModel: action.payload,
        years: [],
        selectedYear: null,
      }
    case 'SET_YEARS':
      return { ...state, years: action.payload }
    case 'SET_SELECTED_YEAR':
      return { ...state, selectedYear: action.payload }
    case 'SET_SELECTED_CAR_SPECIFICATION':
      return { ...state, selectedCar: action.payload }
    case 'SET_IS_CAR_PRICE_LOADING':
      return { ...state, isCarPriceLoading: action.payload }
    default:
      return state
  }
}
