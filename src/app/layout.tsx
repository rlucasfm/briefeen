import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeConfig } from './theme.config';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Briefeen',
  description: 'Seu assistente de projetos!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <AppRouterCacheProvider>
          <ThemeConfig>
            {children}
          </ThemeConfig>
        </AppRouterCacheProvider>  
      </body>
    </html>
  )
}
