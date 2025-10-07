import React from "react";
import { Feature } from "@/data/softwareData";

type FeatureTableProps = {
  title: string;
  features: Feature[];
};

export default function FeatureTable({ title, features }: FeatureTableProps) {
  const hasColumns = features.some(
    (f) => f.initial || f.evolution || f.amplitude
  );

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-purple-900 to-red-500 text-white">
              <th className="p-4 text-left font-semibold">Fonctionnalité</th>
              {hasColumns ? (
                <>
                  <th className="p-4 text-center font-semibold">Initiale</th>
                  <th className="p-4 text-center font-semibold">Evolution</th>
                  <th className="p-4 text-center font-semibold">Amplitude</th>
                </>
              ) : (
                <th className="p-4 text-center font-semibold"></th> // colonne unique pour included
              )}
            </tr>
          </thead>
          <tbody>
            {features.map((f, i) => (
              <tr key={i} className="border-b hover:bg-gray-50 text-gray-700">
                <td className="p-4">{f.name}</td>
                {hasColumns ? (
                  <>
                    <td className="p-4 text-center">{f.initial || ""}</td>
                    <td className="p-4 text-center">{f.evolution || ""}</td>
                    <td className="p-4 text-center">{f.amplitude || ""}</td>
                  </>
                ) : (
                  <td className="p-4 text-center">{f.included || ""}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
