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
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import DatePickerWithRange from "@/components/date-picker";

export default function Page() {
  const [user, setUser] = React.useState<UserApiDto | null>(null);
  const [filials, setFilials] = React.useState(null);
  const [positions, setPositions] = React.useState(null);
  const [metrics, setMetrics] = React.useState(null);
  const [employees, setEmployees] = React.useState(null);
  const [selectedEmployee, setSelectedEmployee] = React.useState(null);

  function handleEmployeeSelect(employee) {
    const selected = employees?.find((emp) => emp.name === employee);
    console.log(selected);
    setSelectedEmployee(selected?.id);
  }

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 10, 20),
    to: addDays(new Date(2024, 10, 20), 5),
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
    async function fetchMetrics() {
      console.log(selectedEmployee);
      const metricsRes = await fetch(
        "http://localhost:3000/api/company/metrics",
        {
          method: "POST",
          body: JSON.stringify({
            employeeId: selectedEmployee,
            fromDate: date?.from,
            toDate: date?.to,
          }),
        },
      );
      const data = await metricsRes.json();
      setMetrics(data.metrics);
      console.log(data);
    }

    fetchMetrics();
  }

  console.log(selectedEmployee);

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
              <ListSelector
                placeholder="Сотрудник"
                items={employees}
                onChange={handleEmployeeSelect}
              />
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <DatePickerWithRange date={date} setDate={setDate} />
        {selectedEmployee ? (
          <Button variant="outline" onClick={handleDownload}>
            Загрузить
          </Button>
        ) : (
          <Button variant="outline" disabled>
            Загрузить
          </Button>
        )}
      </div>
      <div>
        {metrics ? <DataTable columns={columns} data={metrics} /> : null}
      </div>
    </div>
  );
}
