"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

export default function DropdownMenu({ title, items, className = "" }) {
  return (
    <Menu as="div" className={`relative inline-block text-left ${className}`}>
      <div>
        <MenuButton className={`inline-flex items-center ${className}`}>
          {title}
          <MdKeyboardArrowDown className="w-5 h-5 ml-1" />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems className="absolute z-20 mt-2 w-48 bg-white border rounded-md shadow-lg">
          <div className="p-1">
            {items.map((item, index) => (
              <MenuItem key={index}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 ${
                      active ? "bg-gray-100" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
