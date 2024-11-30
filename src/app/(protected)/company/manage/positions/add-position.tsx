import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddPositionDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>Добавить должность</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавление должности</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Название
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="weight" className="text-right">
              Вес (целое число)
            </Label>
            <Input
              id="password"
              defaultValue="qwerty123"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Добавить</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddPositionDialog;
