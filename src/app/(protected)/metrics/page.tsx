import { DataTable } from "@/components/data-table";
import ListSelector from "@/components/list-selector";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";

export default function Page() {
  const filials: Filial[] = [];
  const positions: Position[] = [];
  const employees: Employee[] = [];

  const metrics: Metric[] = [
    {
      id: 1,
      name: "Метрика 1",
      positionId: 1,
      weight: 1,
      description: "Описание метрики",
      targetValue: 100,
      count: 12,
      bonus: 251,
    },
    {
      id: 2,
      name: "Метрика 2",
      positionId: 2,
      weight: 1,
      description: "Описание метрики",
      targetValue: 100,
      count: 52,
      bonus: 512,
    },
    {
      id: 3,
      name: "Метрика 3",
      positionId: 3,
      weight: 1,
      description: "Описание метрики",
      targetValue: 100,
      count: 100,
      bonus: 13,
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <ListSelector placeholder="Филиал" items={filials} />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <ListSelector placeholder="Должность" items={positions} />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <ListSelector placeholder="Сотрудник" items={employees} />
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Button variant="outline">Загрузить</Button>
      </div>
      <div>
        <DataTable columns={columns} data={metrics} />
      </div>
    </div>
  );
}
