import { HandlerContextProvider } from "@commons/handler-context"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HandlerContextProvider>
          {children}
        </HandlerContextProvider>
      </body>
    </html>
  )
}
