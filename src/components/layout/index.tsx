function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="mt-4 bg-red-100 h-screen">{children}</div>
  )
}

export { Layout }