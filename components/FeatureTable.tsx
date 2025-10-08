import React from "react";
import { Feature } from "@/data/softwareData";

type FeatureTableProps = {
  title: string;
  features: Feature[];
};

export default function FeatureTable({ title, features }: FeatureTableProps) {
  return (
    <div className="mb-16">
      <h2 className="text-xl md:text-3xl font-bold mb-8 text-gray-800">
        {title}
      </h2>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gradient-to-r from-purple-900 to-red-500 text-white font-semibold">
          <div>Fonctionnalité</div>
          <div className="text-center hidden md:block">Initiale</div>
          <div className="text-center hidden md:block">Evolution</div>
          <div className="text-center hidden md:block">Amplitude</div>
        </div>

        {features.map((f, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 group"
          >
            <div className="flex items-center space-x-3">
              <span className="font-medium text-gray-800">{f.name}</span>
            </div>

            <div className="flex md:justify-center items-center">
              <span className="md:hidden text-gray-500 mr-2">Initiale:</span>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  f.initial === "✓"
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {f.initial || "-"}
              </div>
            </div>

            <div className="flex md:justify-center items-center">
              <span className="md:hidden text-gray-500 mr-2">Evolution:</span>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  f.evolution === "Simple"
                    ? "bg-yellow-100 text-yellow-800"
                    : f.evolution === "Etendue"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-gray-100 text-gray-800"
                }`}
              >
                {f.evolution || "-"}
              </div>
            </div>

            <div className="flex md:justify-center items-center">
              <span className="md:hidden text-gray-500 mr-2">Amplitude:</span>
              <div className="px-3 py-1 bg-gradient-to-r from-purple-100 to-red-100 text-purple-800 rounded-full text-sm font-medium">
                {f.amplitude || "-"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
