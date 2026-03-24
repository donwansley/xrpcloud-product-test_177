export const metadata = {
  title: 'Crypto Dashboard',
  description: 'Portfolio tracker'
}

export default function RootLayout({{ children }}) {{
  return (
    <html lang="en">
      <body style={{{{ margin: 0 }}}}>{{children}}</body>
    </html>
  )
}}
