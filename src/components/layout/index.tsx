function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="mt-4 w-4/5 m-auto">{children}</main>
    </>
  );
}

export { Layout };
