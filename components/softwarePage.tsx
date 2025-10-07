import React from "react";
import FeatureTable from "./FeatureTable";
import Container from "@/common/Container";
import { Software } from "@/data/softwareData";
import Image from "next/image";

export default function SoftwarePage({
  title,
  description,
  tables,
  bGround,
}: Software) {
  return (
    <div className=" bg-white px-6 pb-6 2xl:max-w-6xl mx-auto">
      <Container className="min-h-screen">
        <Image src={bGround as string} alt={bGround as string} />
        <h1 className="text-5xl font-bold my-10 text-gray-700">{title}</h1>
        <div className="space-y-4 text-gray-700 mb-12">
          {description.map((p, i) => (
            <p key={i} className="text-lg">
              {p}
            </p>
          ))}
        </div>

        {tables.map((table, i) => (
          <FeatureTable key={i} title={table.title} features={table.features} />
        ))}
      </Container>
    </div>
  );
}
