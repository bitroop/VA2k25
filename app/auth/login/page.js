"use client";

import { Suspense } from "react";
import LoginContent from "./LoginContent";

export default function LoginPageWrapper() {
  return (
    <Suspense fallback={<div className="text-white">Loading login...</div>}>
      <LoginContent />
    </Suspense>
  );
}
