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
} from './types'

interface FipeProviderProps {
  children: ReactNode
}

export const FipeContext = createContext<FipeContextProps | null>(null)

export default function FipeProvider({ children }: FipeProviderProps) {
  const dispatch = useDispatch()
  const state = useSelector((state: RootStateProps) => state.fipe)

  const setSelectBrand = (brand: Brand | null) => {
    dispatch({ type: 'SET_SELECTED_BRAND', payload: brand })
    if (brand === null) {
      dispatch({ type: 'SET_SELECTED_MODEL', payload: null })
      dispatch({ type: 'SET_SELECTED_YEAR', payload: null })
    }
  }

  const setSelectModel = (model: Model | null) => {
    dispatch({ type: 'SET_SELECTED_MODEL', payload: model })
    if (model === null) {
      dispatch({ type: 'SET_SELECTED_YEAR', payload: null })
    }
  }

  const setSelectYear = useCallback(
    (year: Year | null) => {
      dispatch({ type: 'SET_SELECTED_YEAR', payload: year })
    },
    [dispatch],
  )

  useEffect(() => {
    const getCarBrands = async () => {
      try {
        const { data } = await api.get<Brand[]>('/marcas')
        const options = data.map((item) => ({ ...item, label: item.nome }))
        dispatch(setBrands(options))
      } catch (err) {
        console.error(
          'Houve um problema ao carregar as marcas, por favor tente novamente mais tarde.',
        )
      }
    }

    getCarBrands()
  }, [dispatch])

  useEffect(() => {
    setSelectYear(null)
    if (state.selectedBrand?.codigo) {
      const getCarModel = async () => {
        try {
          setYears([])

          const { data } = await api.get<{ modelos: Model[] }>(
            `marcas/${state.selectedBrand?.codigo}/modelos`,
          )

          console.log(data)

          const options = data.modelos.map((item) => ({
            ...item,
            label: item.nome,
          }))

          dispatch(setModels(options))
        } catch (error) {
          console.error(
            'Houve um problema ao carregar os modelos, por favor tente novamente mais tarde.',
          )
        }
      }
      getCarModel()
    }
  }, [dispatch, setSelectYear, state.selectedBrand])

  useEffect(() => {
    if (state.selectedModel?.codigo && state.selectedBrand?.codigo) {
      const getCarYears = async () => {
        try {
          const { data } = await api.get<Year[]>(
            `marcas/${state.selectedBrand?.codigo}/modelos/${state.selectedModel?.codigo}/anos`,
          )

          const options = data.map((item) => ({ ...item, label: item.nome }))

          dispatch(setYears(options))
        } catch (error) {
          console.error(
            'Houve um problema ao carregar os anos, por favor tente novamente mais tarde.',
          )
        }
      }
      getCarYears()
    }
  }, [dispatch, state.selectedBrand, state.selectedModel])

  const getCarPrice = useCallback(async () => {
    if (
      !state.selectedBrand?.codigo ||
      !state.selectedModel?.codigo ||
      !state.selectedYear?.codigo
    ) {
      console.error('Preencha todos os campos para realizar a busca.')
      return false
    }

    try {
      dispatch(setIsCarPriceLoading(true))

      const apiUrl = `/marcas/${state.selectedBrand?.codigo}/modelos/${state.selectedModel?.codigo}/anos/${state.selectedYear?.codigo}`

      const { data } = await api.get<CarProps>(apiUrl)

      dispatch(setSelectedCarSpecification(data))

      return true
    } catch (error) {
      console.error(error)

      console.error(
        'Houve um problema ao consultar o valor do veículo, por favor tente novamente mais tarde.',
      )

      return false
    } finally {
      dispatch(setIsCarPriceLoading(false))
    }
  }, [dispatch, state.selectedBrand, state.selectedModel, state.selectedYear])

  const value = {
    getCarPrice,
    setSelectBrand,
    setSelectModel,
    setSelectYear,
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
