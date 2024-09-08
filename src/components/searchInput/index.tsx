import { Search } from "lucide-react";
import { InputHTMLAttributes } from "react";
import { Input } from "../ui/input";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

export function SearchInput({ ...rest }: SearchInputProps) {
  return (
    <div className="flex items-center w-96 mx-auto bg-white border border-gray-300 rounded-md shadow-sm">
      <span className="px-2 text-gray-500">
        <Search className="w-5 h-5" />
      </span>
      <Input
        type="text"
        placeholder="Buscar medicação..."
        {...rest}
        className="flex-1 px-3 py-2 text-sm border-none outline-none focus-visible:ring-0"
      />
    </div>
  );
}
