"use client";

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
import { UserApiDto } from "@/server/myApi";
import React from "react";
import { DatePickerWithRange } from "@/components/date-picker";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";

export default function Page() {
  const [user, setUser] = React.useState<UserApiDto | null>(null);
  const [filials, setFilials] = React.useState(null);
  const [positions, setPositions] = React.useState(null);
  const [employees, setEmployees] = React.useState(null);

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  React.useEffect(() => {
    async function fetchUser() {
      const userRes = await fetch("http://localhost:3000/api/users/me");
      const data = await userRes.json();
      setUser(data.user);
    }

    fetchUser();
  }, []);

  React.useEffect(() => {
    async function fetchFilials() {
      const filialsRes = await fetch(
        "http://localhost:3000/api/filials/by-company",
        {
          method: "POST",
          body: JSON.stringify({ companyId: user.companyId }),
        },
      );
      const data = await filialsRes.json();
      setFilials(data.filials);
    }

    async function fetchPositions() {
      const positionsRes = await fetch(
        "http://localhost:3000/api/company/positions",
        {
          method: "POST",
          body: JSON.stringify({ companyId: user.companyId }),
        },
      );
      const data = await positionsRes.json();
      setPositions(data.positions);
    }

    async function fetchEmployees() {
      const employeesRes = await fetch(
        "http://localhost:3000/api/company/members",
        {
          method: "POST",
          body: JSON.stringify({ companyId: user.companyId }),
        },
      );
      const data = await employeesRes.json();
      setEmployees(data.employees);
    }

    fetchFilials();
    fetchPositions();
    fetchEmployees();
  }, [user]);

  function handleDownload() {
    async function fetchMetrics() {}
  }

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
        <DatePickerWithRange date={date} setDate={setDate} />
        <Button variant="outline">Загрузить</Button>
      </div>
      <div>
        <DataTable columns={columns} data={metrics} />
      </div>
    </div>
  );
}
