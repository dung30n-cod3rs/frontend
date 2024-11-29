export default function Page() {
  const company: Company = {
    id: 1,
    name: "test name",
  };

  const members: Employee[] = [
    {
      id: 1,
      name: "Member name",
      email: "Member email",
    },
    {
      id: 2,
      name: "Member name",
      email: "Member email",
    },
    {
      id: 3,
      name: "Member name",
      email: "Member email",
    },
  ];

  const filials: Filial[] = [
    {
      id: 1,
      name: "Filial one",
    },
    {
      id: 2,
      name: "Filial two",
    },
    {
      id: 3,
      name: "Filial three",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {company.name}
      </h2>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Количество сотрудников: {members.length}
      </h3>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Филиалы
        </h3>
        <ul>
          {filials.map((filial) => (
            <li key={filial.id}>{filial.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
