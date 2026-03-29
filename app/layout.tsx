import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'BETRA - Banking Education, Training & Research Association',
  description: 'Promoting financial literacy, strengthening banking institutions, and supporting inclusive financial systems through education, training, and research.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="pt-24">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}


