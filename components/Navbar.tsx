"use client";
import { navLinksArray } from "@constants";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);
  return (
    <nav className="absolute width_parent md:border-b border-white z-20 ">
      <div className="width_container hidden md:flex flex-col gap-8 py-4">
        <div className="flex justify-between">
          <img src="/images/logo/logo.png" alt="site logo" className="w-40" />
          <p className="text-site-yellow">Make a call: +1 (212) 255-5511</p>
          <div className="flex gap-6 text-2xl text-site-yellow">
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faSquareInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div className="w-full flex items-center gap-8">
          {navLinksArray.map((item) => (
            <NavLinks key={item.title} {...item} />
          ))}
          <div className="flex-1 flex justify-end">
            <button className="solid_btn">GET A QUOTE</button>
          </div>
        </div>
      </div>

      <div className="w-full p-4 flex flex-col items-center md:hidden">
        <div className="width_container flex justify-between items-center">
          <img
            src="/images/logo/logo.png"
            alt="site logo"
            className="w-28 sm:w-32"
          />
          <button
            className="text-site-yellow text-lg mr-4"
            onClick={() => {
              setNavOpen((prev) => !prev);
            }}
          >
            <FontAwesomeIcon icon={navOpen ? faClose : faBars} />
          </button>
        </div>
        <div className={`w-full ${!navOpen && "overflow-y-hidden"}`}>
          <div
            className={`flex px-2 flex-col w-full bg-white transition shadow-lg ${
              navOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            {navLinksArray.map((item) => (
              <Link
                href={item.path}
                className="py-2 hover:bg-slate-200 border-b border-light-gray"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
