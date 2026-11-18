import { Input } from "@/components/ui/input";
import { shopCopy } from "@/constants/home/copy";

type ProductsHeaderProps = {
  inputValue: string;
  onSearchChange: (value: string) => void;
};

function ProductsHeader({ inputValue, onSearchChange }: ProductsHeaderProps) {
  return (
    <div className="sticky top-0 z-1 flex flex-col justify-between gap-6 border-b border-border bg-background p-4 lg:flex-row lg:items-end">
      <div>
        <p className="text-sm text-muted-foreground">{shopCopy.eyebrow}</p>
        <h1 className="text-3xl tracking-tight">{shopCopy.title}</h1>
      </div>
      <Input
        value={inputValue}
        onChange={(e) => onSearchChange(e.target.value)}
        type="text"
        placeholder={shopCopy.searchPlaceholder}
        className="w-full lg:w-96"
      />
    </div>
  );
}

export default ProductsHeader;
