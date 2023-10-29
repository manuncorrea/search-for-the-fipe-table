import api from '@/pages/api'
import { ReactNode, createContext, useCallback, useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from '.'
import {
  setBrands,
  setIsCarPriceLoading,
  setModels,
  setSelectedCarSpecification,
  setYears,
} from './actions'
import {
  Brand,
  CarProps,
  FipeContextProps,
  Model,
  RootStateProps,
  Year,
} from './type'

interface FipeProviderProps {
  children: ReactNode
}

export const FipeContext = createContext<FipeContextProps | null>(null)

export default function FipeProvider({ children }: FipeProviderProps) {
  const dispatch = useDispatch()
  const state = useSelector((state: RootStateProps) => state.fipe)

  useEffect(() => {
    const getCarBrands = async () => {
      try {
        const { data } = await api.get<Brand[]>('/')
        dispatch(setBrands(data))
      } catch (err) {
        console.error(
          'Houve um problema ao carregar as marcas, por favor tente novamente mais tarde.',
        )
      }
    }

    getCarBrands()
  }, [dispatch])

  useEffect(() => {
    if (state.selectedBrand?.code) {
      const getCarModel = async () => {
        try {
          const { data } = await api.get<Model[]>(
            `${state.selectedBrand?.code}/modelos`,
          )
          dispatch(setModels(data))
        } catch (error) {
          console.error(
            'Houve um problema ao carregar os modelos, por favor tente novamente mais tarde.',
          )
        }
      }
      getCarModel()
    }
  }, [dispatch, state.selectedBrand])

  useEffect(() => {
    if (state.selectedModel?.code && state.selectedBrand?.code) {
      const getCarYears = async () => {
        try {
          const { data } = await api.get<Year[]>(
            `${state.selectedBrand?.code}/modelos/${state.selectedModel?.code}/anos`,
          )
          dispatch(setYears(data))
        } catch (error) {
          console.error(
            'Houve um problema ao carregar os anos, por favor tente novamente mais tarde.',
          )
        }
      }
      getCarYears()
    }
  }, [dispatch, state.selectedBrand, state.selectedModel])

  const handleGetCarPrice = useCallback(async () => {
    if (
      !state.selectedBrand?.code ||
      !state.selectedModel?.code ||
      !state.selectedYear?.code
    ) {
      console.error('Preencha todos os campos para realizar a busca.')
      return false
    }
    try {
      dispatch(setIsCarPriceLoading(true))
      const { data } = await api.get<CarProps>(
        `${state.selectedBrand?.code}/modelos/${state.selectedModel?.code}/anos/${state.selectedYear?.code}`,
      )
      dispatch(setSelectedCarSpecification(data))
      return true
    } catch (error) {
      console.error(
        'Houve um problema ao consultar o valor do veículo, por favor tente novamente mais tarde.',
      )
      return false
    } finally {
      dispatch(setIsCarPriceLoading(false))
    }
  }, [dispatch, state.selectedBrand, state.selectedModel, state.selectedYear])

  const value = {
    handleGetCarPrice,
    brands: state.brands,
    selectedBrand: state.selectedBrand,
    models: state.models,
    selectedModel: state.selectedModel,
    years: state.years,
    selectedYear: state.selectedYear,
    selectedCar: state.selectedCar,
    isCarPriceLoading: state.isCarPriceLoading,
  }

  return (
    <Provider store={store}>
      <FipeContext.Provider value={value}>{children}</FipeContext.Provider>
    </Provider>
  )
}
