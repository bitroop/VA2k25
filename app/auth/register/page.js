"use client";

import { Suspense } from "react";
import RegisterContent from "./RegisterContent";

export default function RegisterPageWrapper() {
  return (
    <Suspense fallback={<div className="text-white">Loading register...</div>}>
      <RegisterContent />
    </Suspense>
  );
}
