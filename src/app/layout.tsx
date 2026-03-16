// Root layout — pass-through for next-intl locale routing.
// The actual <html> and <body> are rendered in [locale]/layout.tsx.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children as React.ReactElement;
}
