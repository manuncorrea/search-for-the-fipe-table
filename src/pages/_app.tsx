import { GlobalStyles } from '@/styles/global'
import { ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: '300',
})

const theme = createTheme()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
