import { NavLinkProp } from "@types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function ResNavLink({ path, title }: NavLinkProp) {
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
      className={`p-2 hover:bg-slate-200 border-b border-light-gray rounded-sm ${
        active ? "text-site-yellow bg-slate-200" : "text-site-blue"
      }`}
    >
      {title}
    </Link>
  );
}

export default ResNavLink;
