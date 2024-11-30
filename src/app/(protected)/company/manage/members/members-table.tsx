import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface MembersTableProps {
  members: Employee[]
}

const MembersTable: React.FC<MembersTableProps> = ({ members }) => {


  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead key="id" className="w-[100px]">ID</TableHead>
          <TableHead key="name">Имя</TableHead>
          <TableHead key="email">Почта</TableHead>
          <TableHead key="button"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.id}>
            <TableCell className="font-medium" key="id">{member.id}</TableCell>
            <TableCell key="name">{member.name}</TableCell>
            <TableCell key="email">{member.email}</TableCell>
            <TableCell key="button">
              <Button variant="ghost">Новый пароль</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default MembersTable

