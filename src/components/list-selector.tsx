import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ListSelectorProps {
  placeholder?: string;
  items?: Employee[] | Position[] | Filial[] | Metric[] | null;
  onChange?: (value: string) => void;
}

const ListSelector: React.FC<ListSelectorProps> = ({
  placeholder,
  items,
  onChange,
}) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items?.map((item) => (
            <SelectItem key={item.id} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ListSelector;
