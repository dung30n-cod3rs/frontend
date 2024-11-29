export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex justify-center flex-row items-center w-full">
        {children}
      </main>
    </>
  );
}
