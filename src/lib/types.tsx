interface Filial {
  id: number;
  name: string;
}

interface Position {
  id: number;
  name: string;
  weight: number;
}

interface Employee {
  id: number;
  name: string;
  email: string;
}

interface Metric {
  id: number;
  name: string;
  positionId: number;
  weight: number;
  description: string;
  targetValue: number;
  count: number;
  bonus: number;
}

interface RatingRow {
  place: number;
  employee: Employee;
  position: Position;
  metric: Metric;
  value: number;
  filial: Filial;
}

interface Company {
  id: number;
  name: string;
}
