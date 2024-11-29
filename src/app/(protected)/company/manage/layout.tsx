import ManageNavigation from "./manageNavigation";

export default function ManageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const company: Company = {
    id: 1,
    name: "test name",
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {company.name}
      </h2>
      <ManageNavigation />
      {children}
    </div>
  );
}
