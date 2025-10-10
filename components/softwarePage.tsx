import React from "react";
import FeatureTable from "./FeatureTable";
import { Software } from "@/data/softwareData";
import Image from "next/image";
import Link from "next/link";

export default function SoftwarePage({
  title,
  description,
  tables,
  bGround,
}: Software) {
  return (
    <div className="bg-white pb-6 min-h-screen overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {/* Container principal SANS overflow restriction */}
      <div className="max-w-md sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {bGround ? (
          <Image
            src={bGround as string}
            alt={bGround as string}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        ) : null}


        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold py-8 sm:py-10 text-gray-700">
          {title}
        </h1>

        {/* Description responsive */}
        <div className="space-y-4 text-gray-700 mb-8 sm:mb-12 pr-10 sm:pr-0 w-full">
          {description.map((p, i) => (
            <p key={i} className="text-base leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Tables - UNIQUEMENT une fois */}
        {tables.map((table, i) => (
          <FeatureTable key={i} title={table.title} features={table.features} />
        ))}
      </div>

      {/* Bouton Contact flottant */}
      <Link
        href="/pages/Contact8Sens"
        className="group fixed flex items-center bottom-6 right-6 bg-gradient-to-r from-purple-600 to-red-600 text-white p-3 rounded-full transition-all duration-300 z-50 hover:from-purple-700 hover:to-red-700"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">Suivant</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </Link>
    </div >
  );
}