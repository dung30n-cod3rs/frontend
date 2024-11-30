import AddPositionDialog from "./add-position";
import PositionsTable from "./positions-table";

export default function Page() {
  const positions: Position[] = [
    {
      id: 1,
      name: "Директор",
      weight: 1,
    },
    {
      id: 2,
      name: "Test",
      weight: 1,
    },
    {
      id: 3,
      name: "Test2",
      weight: 1,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <PositionsTable positions={positions} />
      <AddPositionDialog />
    </div>
  );
}
