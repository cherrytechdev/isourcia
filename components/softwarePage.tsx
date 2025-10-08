import React from "react";
import FeatureTable from "./FeatureTable";
import { Software } from "@/data/softwareData";
import Container from "@/common/Container";
import Link from "next/link";

export default function SoftwarePage({ title, description, tables, bGround }: Software) {
  return (
    <div className="bg-white pb-6 2xl:max-w-6xl mx-auto">
      <Container className="min-h-screen">
        <img src={bGround} alt={bGround} />
        <h1 className="text-3xl md:text-5xl font-bold my-10 text-gray-700">{title}</h1>
        <div className="space-y-4 text-sm md:text-base text-gray-700 mb-12">
          {description.map((p, i) => (
            <p key={i} className="text-md md:text-lg w-5/6 lg:w-full">{p}</p>
          ))}
        </div>
      </Container>
      <Container className="overflow-x-auto">
        {tables.map((table, i) => (
          <FeatureTable key={i} title={table.title} features={table.features} />
        ))}
      </Container>

      {/* Bouton Contact flottant */}
      <Link href="/pages/Contact8Sens" className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-red-600 text-white p-3 rounded-full hover:from-purple-700 hover:to-red-700 transition-all duration-200 z-50 hover:scale-105 animate-bounce">
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
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
            </svg>
      </Link>
    </div>
  );
}
