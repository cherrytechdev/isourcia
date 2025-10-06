'use client'

import { useState } from "react";
import Link from "next/link";

type SidebarProps = {
  items: string[];
  activeItem: string;
  onSelect: (item: string) => void;
};

export default function Sidebar({ items, activeItem, onSelect }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Bouton toggle visible sur mobile + desktop */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Sidebar principale */}
      <aside
        className={`fixed top-0 left-0 bg-gray-800 text-white h-screen flex flex-col transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0 w-64" : "-translate-x-64 w-64"}`}
      >
        <div className="pt-20 p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold"><span className="text-red-400">8</span>Sens - Logiciels</h2>
        </div>

        <ul className="flex-1 overflow-y-auto">
          {items.map((item) => (
            <li
              key={item}
              onClick={() => {
                onSelect(item);
                if (window.innerWidth < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-4 cursor-pointer hover:bg-gray-700 transition-colors ${
                activeItem === item ? "bg-gray-700 font-semibold" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="p-4 border-t border-gray-700">
          <Link
            href="/pages/Contact8Sens"
            onClick={() => {
              if (window.innerWidth < 768) {
                setIsOpen(false);
              }
            }}
            className="flex items-center justify-center gap-2 border border-white text-lg rounded-lg text-white w-full transition hover:bg-white hover:text-gray-700 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
            </svg>
            Contactez-nous
          </Link>
        </div>
      </aside>

      {/* Overlay sombre quand la sidebar est ouverte sur mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 2xl:hidden"
        />
      )}
    </>
  );
}
