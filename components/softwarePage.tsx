import React from "react";
import FeatureTable from "./FeatureTable";
import Container from "@/common/Container";
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
    <div className="bg-white pb-6">
      {/* Container principal SANS overflow restriction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image
          src={bGround as string}
          alt={bGround as string}
          width={1200}
          height={800}
          className="w-full h-auto"
        />
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-8 sm:my-10 text-gray-700">
          {title}
        </h1>
        
        {/* Description responsive */}
        <div className="space-y-4 text-gray-700 mb-8 sm:mb-12">
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
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-red-600 text-white p-3 rounded-full hover:from-purple-700 hover:to-red-700 transition-all duration-200 z-50 hover:scale-105 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-phone"
        >
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
        </svg>
      </Link>
    </div>
  );
}