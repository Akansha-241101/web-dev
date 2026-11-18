import { useEffect, useState } from "react";
import { Heart, Moon, ShoppingCart, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { shopCopy } from "@/constants/home/copy";

function Header() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <header className="flex items-center justify-between border-b border-border pb-6">
      <Link to="/">
        <img
          src={
            isDark
              ? "/images/brand/logo-dark.png"
              : "/images/brand/logo-light.png"
          }
          alt={shopCopy.logoAlt}
          className="h-8 w-auto"
        />
      </Link>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link to="/wishlist" aria-label="Wishlist">
            <Heart />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link to="/cart" aria-label="Cart">
            <ShoppingCart />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle color theme"
        >
          {isDark ? <Sun /> : <Moon />}
        </Button>
      </div>
    </header>
  );
}

export default Header;
