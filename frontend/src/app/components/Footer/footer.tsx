"use client";

import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-blue-500 h-24">
      <div className="container mx-auto flex justify-between items-center h-full">
        <ul className="flex text-gray-100 font-bold text-lg">
          {links.map((link) => (
            <li className="mx-4 hover:text-gray-300" key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <p className="text-gray-100 text-lg">
          &copy; {currentYear} My SaaS App
        </p>
      </div>
    </footer>
  );
}
