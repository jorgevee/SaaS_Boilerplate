"use client";
import Link from "next/link";
import Image from "next/image";
const sideBarTabs = [
  {
    name: "Stock Sentiment",
    href: "/dashboard",
    icon: "homeIcon",
    current: true,
  },
  {
    name: "Reddit",
    href: "/dashboard/reddit",
    icon: "UserIcon",
    current: false,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: "CogIcon",
    current: false,
  },
];

export default function Sidebar(): JSX.Element {
  return (
    <div className="flex flex-col flex-shrink-0 w-64 bg-white border-r border-gray-200">
      <div className="flex flex-col h-0 flex-1">
        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
          <Image
            className="block lg:hidden h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
            width={100}
            height={100}
          />
          <Image
            className="hidden lg:block h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
            alt="Workflow"
            width={100}
            height={100}
          />
        </div>
        <nav className="flex-1 px-2 py-4 bg-gray-800 overflow-y-auto">
          {sideBarTabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
