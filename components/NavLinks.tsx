import { NavLinkProp } from "@types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function NavLinks({ path, title }: NavLinkProp) {
  const pathName = usePathname();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (path === pathName) {
      setActive(true);
    }
    return () => {
      setActive(false);
    };
  }, [pathName]);
  return (
    <Link
      href={path}
      className={`${
        active ? "text-site-yellow" : "text-white"
      } hover:text-site-yellow`}
    >
      {title}
    </Link>
  );
}

export default NavLinks;
