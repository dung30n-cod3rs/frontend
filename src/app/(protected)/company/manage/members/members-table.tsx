import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface MembersTableProps {
  members: Employee[];
}

const MembersTable: React.FC<MembersTableProps> = ({ members }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Имя</TableHead>
          <TableHead>Почта</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.id}>
            <TableCell className="font-medium">{member.id}</TableCell>
            <TableCell>{member.name}</TableCell>
            <TableCell>{member.email}</TableCell>
            <TableCell>
              <Button variant="ghost">Новый пароль</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MembersTable;
