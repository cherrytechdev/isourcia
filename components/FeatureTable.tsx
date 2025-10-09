import React from "react";
import { Feature } from "@/data/softwareData";

type FeatureTableProps = {
  title: string;
  features: Feature[];
};

export default function FeatureTable({ title, features }: FeatureTableProps) {
  // ✅ Détection automatique du type de tableau
  const isIncludedOnly = features.some((f) => "included" in f);
  const isCatalogueOnly = features.some((f) => "catalogue" in f);

  return (
    <section className="mb-12 sm:mb-16">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {/* Titre responsive - EN DEHORS du conteneur scrollable */}
        {title && (
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 tracking-tight">
            {title}
          </h2>
        )}

        {/* Conteneur scrollable */}
        <div
          className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          style={{
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "-ms-autohiding-scrollbar",
          }}
        >
          <table className="min-w-[400px] lg:min-w-full bg-white shadow-lg rounded-xl border border-gray-200 table-auto">
            <thead>
              <tr className="bg-gradient-to-r from-purple-900 to-red-500 text-white">
                {isCatalogueOnly ?
                  <th className="py-3 px-3 sm:px-4 text-left font-semibold whitespace-nowrap min-w-[200px]">
                    Catalogue
                  </th>
                  :
                  <th className="py-3 px-3 sm:px-4 text-left font-semibold whitespace-nowrap min-w-[200px]">
                    Fonctionnalité
                  </th>
                }
                {/* ✅ Condition : affichage des colonnes selon le type */}
                {isIncludedOnly || isCatalogueOnly ? (
                  <th className="py-3 px-3 sm:px-4 text-center font-bold whitespace-nowrap min-w-[120px]">

                  </th>
                ) : (
                  <>
                    <th className="py-3 px-3 sm:px-4 text-center font-bold whitespace-nowrap min-w-[100px]">
                      Initiale
                    </th>
                    <th className="py-3 px-3 sm:px-4 text-center font-bold whitespace-nowrap min-w-[100px]">
                      Évolution
                    </th>
                    <th className="py-3 px-3 sm:px-4 text-center font-bold whitespace-nowrap min-w-[100px]">
                      Amplitude
                    </th>
                  </>
                )}
              </tr>
            </thead>

            <tbody>
              {features.map((f, i) => (
                <tr
                  key={i}
                  className={`transition-colors duration-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100`}
                >
                  {/* Nom */}
                  <td className="py-3 px-3 sm:px-4 text-gray-800 font-medium whitespace-nowrap">
                    <span className="text-sm sm:text-base">{f.name}</span>
                  </td>

                  {/* Condition 3 cas : Included / Catalogue / Normal */}
                  {isIncludedOnly ? (
                    <td className="py-3 px-3 sm:px-4 text-center whitespace-nowrap">
                      <span
                        className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${f.included === "✓"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                          }`}
                      >
                        {f.included || "-"}
                      </span>
                    </td>
                  ) : isCatalogueOnly ? (
                    <td className="py-3 px-3 sm:px-4 text-center whitespace-nowrap">
                      <span
                        className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${f.included === "✓"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                          }`}
                      >
                        {f.catalogue || "-"}
                      </span>
                    </td>
                  ) : (
                    <>
                      {/* Initiale */}
                      <td className="py-3 px-3 sm:px-4 text-center whitespace-nowrap">
                        <span
                          className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${f.initial === "✓"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                            }`}
                        >
                          {f.initial || "-"}
                        </span>
                      </td>

                      {/* Évolution */}
                      <td className="py-3 px-3 sm:px-4 text-center whitespace-nowrap">
                        <span
                          className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${f.evolution === "Simple"
                            ? "bg-yellow-100 text-yellow-800"
                            : f.evolution === "Etendue"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-gray-100 text-gray-800"
                            }`}
                        >
                          {f.evolution || "-"}
                        </span>
                      </td>

                      {/* Amplitude */}
                      <td className="py-3 px-3 sm:px-4 text-center whitespace-nowrap">
                        <span className="inline-block px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-100 to-red-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">
                          {f.amplitude || "-"}
                        </span>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
}
