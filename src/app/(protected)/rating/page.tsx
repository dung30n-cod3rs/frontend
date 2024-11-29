import ListSelector from "@/components/list-selector";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";

export default function Rating() {
  const filials: Filial[] = [];
  const positions: Position[] = [];
  const metrics: Metric[] = [];

  const rating: RatingRow[] = [
    {
      place: 1,
      employee: {
        id: 1,
        name: "Иван",
        email: "o4KzI@example.com",
      },
      position: {
        id: 1,
        name: "Должность 1",
      },
      metric: {
        id: 1,
        name: "Метрика 1",
        positionId: 1,
        weight: 1,
        description: "Описание метрики",
        targetValue: 100,
        count: 100,
        bonus: 0,
      },
      value: 50,
      filial: {
        id: 1,
        name: "Филиал 1",
      },
    },
    {
      place: 2,
      employee: {
        id: 2,
        name: "Петр",
        email: "o4KzI@example.com",
      },
      position: {
        id: 1,
        name: "Должность 1",
      },
      metric: {
        id: 1,
        name: "Метрика 1",
        positionId: 1,
        weight: 1,
        description: "Описание метрики",
        targetValue: 100,
        count: 100,
        bonus: 0,
      },
      value: 0,
      filial: {
        id: 1,
        name: "Филиал 1",
      },
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
              <ListSelector placeholder="Метрика" items={metrics} />
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Button variant="outline">Загрузить</Button>
      </div>
      <div>
        <DataTable columns={columns} data={rating} />
      </div>
    </div>
  );
}
