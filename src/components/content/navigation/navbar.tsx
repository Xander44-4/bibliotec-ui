"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Ripple } from "m3-ripple";
import "m3-ripple/ripple.css";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <div className="flex justify-center w-full bg-gray-300 sticky top-0 z-50">

      <nav className="inline-flex w-fit items-center bg-white rounded-full shadow-md p-2 m-5 gap-1">
        {links.map((link) => {
          const isActive = active === link.label;
          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`
              flex items-center justify-between gap-2 px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200
              ${isActive
                  ? "bg-accent-soft-hover text-black"
                  : "text-black hover:bg-accent/10"
                }
            `}
            >
              {link.label}

            </Link>
          );
        })}
        <Button>
          <Ripple />
          <Link href="/login">
            Login
          </Link>
        </Button>
      </nav>
    </div>

  );
}