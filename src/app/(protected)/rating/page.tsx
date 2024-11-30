"use client";
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
import React from "react";
import { UserApiDto } from "@/server/myApi";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import DatePickerWithRange from "@/components/date-picker";

export default function Rating() {
  const [user, setUser] = React.useState<UserApiDto | null>(null);
  const [filials, setFilials] = React.useState(null);
  const [positions, setPositions] = React.useState(null);
  const [metrics, setMetrics] = React.useState(null);

  const [selectedPosition, setSelectedPosition] = React.useState(null);

  const [rating, setRating] = React.useState(null);

  function handlePositionSelect(position) {
    const selected = positions?.find((pos) => pos.name === position);
    setSelectedPosition(selected?.id);
  }

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

    fetchFilials();
    fetchPositions();
  }, [user]);

  React.useEffect(() => {
    async function fetchMetrics() {
      const metricsRes = await fetch(
        "http://localhost:3000/api/metrics/available/",
        {
          method: "POST",
          body: JSON.stringify({ positionId: selectedPosition }),
        },
      );
      const data = await metricsRes.json();
      setMetrics(data.metrics);
    }

    fetchMetrics();
  }, [selectedPosition]);

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
              <ListSelector
                placeholder="Должность"
                items={positions}
                onChange={handlePositionSelect}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <ListSelector placeholder="Метрика" items={metrics} />
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <DatePickerWithRange date={date} setDate={setDate} />
        <Button variant="outline">Загрузить</Button>
      </div>
      <div>{rating && <DataTable columns={columns} data={rating} />}</div>
    </div>
  );
}
