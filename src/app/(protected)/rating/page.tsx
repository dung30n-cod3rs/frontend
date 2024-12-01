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
  const [selectedMetric, setSelectedMetric] = React.useState(null);
  const [selectedFilial, setSelectedFilial] = React.useState(null);

  const [rating, setRating] = React.useState(null);

  function handleFilialSelect(filial) {
    const selected = filials?.find((fil) => fil.name === filial);
    setSelectedFilial(selected?.id);
  }

  function handleMetricSelect(metric) {
    const selected = metrics?.find((met) => met.name === metric);
    setSelectedMetric(selected?.id);
  }

  function handlePositionSelect(position) {
    const selected = positions?.find((pos) => pos.name === position);
    setSelectedPosition(selected?.id);
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
      console.log("123");
      console.log(data);
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

  function handleDownload() {
    async function fetchRating() {
      const ratingRes = await fetch(
        "http://localhost:3000/api/company/rating",
        {
          method: "POST",
          body: JSON.stringify({
            fromDate: date?.from,
            toDate: date?.to,
            metricId: selectedMetric,
            positionId: selectedPosition,
            filialId: selectedFilial,
            companyId: user.companyId,
          }),
        },
      );
      const data = await ratingRes.json();
      setRating(data.rating);
      console.log(data);
    }

    fetchRating();
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <ListSelector
                placeholder="Филиал"
                items={filials}
                onChange={handleFilialSelect}
              />
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
              <ListSelector
                placeholder="Метрика"
                items={metrics}
                onChange={handleMetricSelect}
              />
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <DatePickerWithRange date={date} setDate={setDate} />
        {selectedMetric ? (
          <Button variant="outline" onClick={handleDownload}>
            Загрузить
          </Button>
        ) : (
          <Button variant="outline" disabled>
            Загрузить
          </Button>
        )}
      </div>
      <div>{rating && <DataTable columns={columns} data={rating} />}</div>
    </div>
  );
}
