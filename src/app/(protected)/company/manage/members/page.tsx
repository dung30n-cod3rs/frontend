import AddMemberDialog from "./add-member";
import MembersTable from "./members-table";

export default function Page() {
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

  return (
    <div className="flex flex-col gap-4">
      <MembersTable members={members} />
      <AddMemberDialog />
    </div>
  );
}
