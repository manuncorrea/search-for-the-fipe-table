import { store } from '@/store'
import FipeProvider from '@/store/FipeProvider'
import { GlobalStyles } from '@/styles/global'
import { ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { Provider } from 'react-redux'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
})

const theme = createTheme()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <FipeProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div className={roboto.className}>
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </FipeProvider>
    </Provider>
  )
}
