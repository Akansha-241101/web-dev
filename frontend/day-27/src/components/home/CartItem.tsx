import { Button } from "@/components/ui/button";
import { shopCopy } from "@/constants/home/copy";
import type { CartItem as CartItemType } from "@/types/home/types";

type CartItemProps = {
  item: CartItemType;
  onIncrease: (productId: number) => void;
  onDecrease: (productId: number) => void;
  onRemove: (productId: number) => void;
};

function CartItem({ item, onIncrease, onDecrease, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span>
        {item.name} — ₹{item.prices.INR.toLocaleString("en-IN")}
      </span>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => onDecrease(item.id)}
        >
          -
        </Button>
        <span>{item.quantity}</span>
        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => onIncrease(item.id)}
        >
          +
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onRemove(item.id)}>
          {shopCopy.remove}
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
