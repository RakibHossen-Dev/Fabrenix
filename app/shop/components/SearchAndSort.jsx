import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const SearchAndSort = () => {
  return (
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-2xl  font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
        ALL <span className="font-bold text-gray-800">COLLECTION</span>
        <span className=" w-12 h-[2px] bg-gray-800"></span>
      </h2>
      <Input
        type="search"
        className="max-w-[400px] rounded-full"
        placeholder="Search anything"
      />
      <div>
        <Select>
          <SelectTrigger className="w-[130px] rounded-full">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchAndSort;
