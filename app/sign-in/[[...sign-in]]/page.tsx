import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";
import Link from "next/link";
import { VertexLogo } from "@/components/ui/design-system";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F172A] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-[#FFEEE5] selection:text-[#0F172A]">
      <div className="mb-8">
        <Link
          href="/"
          aria-label="Back to home"
          className="inline-flex items-center transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
        >
          <VertexLogo size="lg" />
        </Link>
      </div>
      <main className="flex items-center justify-center w-full">
        <Suspense fallback={<div className="h-96 w-80 animate-pulse rounded-2xl bg-[#EADFD5]/40" />}>
          <SignIn />
        </Suspense>
      </main>
    </div>
  );
}
