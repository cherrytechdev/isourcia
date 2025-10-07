"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import SoftwarePage from "@/components/softwarePage";
import { softwareData } from "@/data/softwareData";

export default function Home() {
  const softwareKeys = Object.keys(softwareData);
  const [activeSoftware, setActiveSoftware] = useState(softwareKeys[0]);

  return (
    <div className="flex">
      <Sidebar
        items={softwareKeys.map((key) => softwareData[key].title)}
        activeItem={softwareData[activeSoftware].title}
        onSelect={(title) => {
          const key = softwareKeys.find((k) => softwareData[k].title === title);
          if (key) setActiveSoftware(key);
        }}
      />

      <main className="flex-1">
        <SoftwarePage {...softwareData[activeSoftware]} />
      </main>
    </div>
  );
}
