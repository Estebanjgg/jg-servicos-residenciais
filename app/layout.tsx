import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "JG Serviços Residenciais - Serviços Completos para sua Casa",
  description: "Oferecemos serviços de limpeza de estofados, jardinagem, pintura, piscina, elétrica e produtos de limpeza. CNPJ: 61.717.923/0001-53",
  keywords: "limpeza estofados, jardinagem, pintura, piscina, elétrica, produtos limpeza, serviços residenciais",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
