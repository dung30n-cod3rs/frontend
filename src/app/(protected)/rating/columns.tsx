"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<RatingRow>[] = [
  {
    accessorKey: "place",
    header: "Место",
  },
  {
    accessorKey: "employee.name",
    header: "Имя",
  },
  {
    accessorKey: "metric.name",
    header: "Название метрики",
  },
  {
    accessorKey: "value",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Значение
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
