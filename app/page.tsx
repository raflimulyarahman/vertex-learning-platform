import React, { Suspense } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Clock,
  FileText,
  Search,
  Star,
} from "lucide-react";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { VertexLogo } from "@/components/ui/design-system";

/* -------------------------------------------------------------------------- */
/*                               COURSE EMBLEMS                               */
/* -------------------------------------------------------------------------- */

function NextjsCourseEmblem() {
  return (
    <div
      className="relative flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[14px] bg-[#0B0D11] shadow-[0_2px_6px_rgba(15,23,42,0.16)] overflow-hidden"
      aria-hidden="true"
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="nextjs-card-glow"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(18 14) rotate(50) scale(46)"
          >
            <stop offset="0%" stopColor="#272D38" />
            <stop offset="60%" stopColor="#0D1017" />
            <stop offset="100%" stopColor="#07080C" />
          </radialGradient>
          <linearGradient
            id="nextjs-n-diag"
            x1="21"
            y1="17"
            x2="45"
            y2="47"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="72%" stopColor="#FFFFFF" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="nextjs-n-right"
            x1="39.5"
            y1="17"
            x2="39.5"
            y2="41"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <rect width="60" height="60" rx="14" fill="url(#nextjs-card-glow)" />
        <rect
          x="0.5"
          y="0.5"
          width="59"
          height="59"
          rx="13.5"
          stroke="white"
          strokeOpacity="0.08"
        />
        {/* Left vertical stem */}
        <path d="M19.5 42V18H23.1V42H19.5Z" fill="#FFFFFF" />
        {/* Right vertical stem */}
        <path d="M37.4 18H41V40.5H37.4V18Z" fill="url(#nextjs-n-right)" />
        {/* Diagonal stroke */}
        <path
          d="M22.8 18L44.2 45.2L41.2 47.4L19.8 20.1L22.8 18Z"
          fill="url(#nextjs-n-diag)"
        />
      </svg>
    </div>
  );
}

function DockerCourseEmblem() {
  return (
    <div
      className="flex h-[60px] w-[64px] shrink-0 items-center justify-start"
      aria-hidden="true"
    >
      <svg
        width="64"
        height="54"
        viewBox="0 0 64 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top row container */}
        <rect
          x="24"
          y="7"
          width="6.5"
          height="5.8"
          rx="0.8"
          fill="#2496ED"
          stroke="#0F2942"
          strokeWidth="1.2"
        />
        {/* Middle row containers */}
        <rect
          x="16.5"
          y="13.8"
          width="6.5"
          height="5.8"
          rx="0.8"
          fill="#38A3F5"
          stroke="#0F2942"
          strokeWidth="1.2"
        />
        <rect
          x="24"
          y="13.8"
          width="6.5"
          height="5.8"
          rx="0.8"
          fill="#2496ED"
          stroke="#0F2942"
          strokeWidth="1.2"
        />
        <rect
          x="31.5"
          y="13.8"
          width="6.5"
          height="5.8"
          rx="0.8"
          fill="#38A3F5"
          stroke="#0F2942"
          strokeWidth="1.2"
        />
        {/* Bottom row containers */}
        <rect
          x="9"
          y="20.6"
          width="6.5"
          height="5.8"
          rx="0.8"
          fill="#2496ED"
          stroke="#0F2942"
          strokeWidth="1.2"
        />
        <rect
          x="16.5"
          y="20.6"
          width="6.5"
          height="5.8"
          rx="0.8"
          fill="#52B0F8"
          stroke="#0F2942"
          strokeWidth="1.2"
        />
        <rect
          x="24"
          y="20.6"
          width="6.5"
          height="5.8"
          rx="0.8"
          fill="#2496ED"
          stroke="#0F2942"
          strokeWidth="1.2"
        />
        <rect
          x="31.5"
          y="20.6"
          width="6.5"
          height="5.8"
          rx="0.8"
          fill="#52B0F8"
          stroke="#0F2942"
          strokeWidth="1.2"
        />
        <rect
          x="39"
          y="20.6"
          width="6.5"
          height="5.8"
          rx="0.8"
          fill="#2496ED"
          stroke="#0F2942"
          strokeWidth="1.2"
        />
        {/* Container vertical vents */}
        <line x1="27.2" y1="8.3" x2="27.2" y2="11.5" stroke="#0F2942" strokeWidth="0.9" />
        <line x1="19.7" y1="15.1" x2="19.7" y2="18.3" stroke="#0F2942" strokeWidth="0.9" />
        <line x1="27.2" y1="15.1" x2="27.2" y2="18.3" stroke="#0F2942" strokeWidth="0.9" />
        <line x1="34.7" y1="15.1" x2="34.7" y2="18.3" stroke="#0F2942" strokeWidth="0.9" />
        <line x1="12.2" y1="21.9" x2="12.2" y2="25.1" stroke="#0F2942" strokeWidth="0.9" />
        <line x1="19.7" y1="21.9" x2="19.7" y2="25.1" stroke="#0F2942" strokeWidth="0.9" />
        <line x1="27.2" y1="21.9" x2="27.2" y2="25.1" stroke="#0F2942" strokeWidth="0.9" />
        <line x1="34.7" y1="21.9" x2="34.7" y2="25.1" stroke="#0F2942" strokeWidth="0.9" />
        <line x1="42.2" y1="21.9" x2="42.2" y2="25.1" stroke="#0F2942" strokeWidth="0.9" />
        {/* Whale body */}
        <path
          d="M57.8 23.2C56.2 22.1 52.8 21.8 50.2 22.6C49.8 19.6 47.9 17.2 45.6 15.8C44.9 17.7 44.8 20.3 45.9 22.4C44.4 23.2 42.1 23.7 39.6 23.7H5.5C4.5 29.8 6.4 36.6 11.4 40.9C16.2 45 23.3 46.5 31.6 46.2C42.9 45.8 50.8 40.1 54.6 30.2C57.4 30.4 60.3 29.5 61.9 27.1C60.6 26.2 59.1 25.8 57.5 26C58.2 25 58.3 24 57.8 23.2Z"
          fill="#2496ED"
          stroke="#0F2942"
          strokeWidth="1.35"
          strokeLinejoin="round"
        />
        {/* Whale underbelly highlight */}
        <path
          d="M11.6 40.8C16.3 44.8 23.2 46.3 31.5 46C37.5 45.8 42.7 44.1 46.7 41.2C39.2 42.6 28.4 42.8 18.8 39.2C15.9 38.1 13.4 38.9 11.6 40.8Z"
          fill="#BCE2FC"
        />
        {/* Whale eye */}
        <circle cx="20.5" cy="34.8" r="1.7" fill="#FFFFFF" stroke="#0F2942" strokeWidth="1" />
        <circle cx="20.8" cy="34.8" r="0.7" fill="#0F2942" />
      </svg>
    </div>
  );
}

function TypeScriptCourseEmblem() {
  return (
    <div
      className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-b from-[#3B82D6] to-[#2B6CB8] shadow-[0_2px_6px_rgba(37,99,235,0.20)]"
      aria-hidden="true"
    >
      <span className="font-sans text-[28px] leading-none font-bold tracking-[-0.03em] text-white select-none translate-y-[1px]">
        TS
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                USER AVATAR                                 */
/* -------------------------------------------------------------------------- */

function UserAvatar() {
  return (
    <button
      type="button"
      aria-label="Open user profile menu"
      className="relative inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[#E6DFD7] bg-[#EADFD5] overflow-hidden shadow-2xs transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
    >
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="avatar-bg" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EFECE8" />
            <stop offset="100%" stopColor="#DDD5CC" />
          </linearGradient>
          <linearGradient id="hair-grad" x1="12" y1="6" x2="28" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B2316" />
            <stop offset="100%" stopColor="#1E110A" />
          </linearGradient>
          <linearGradient id="skin-grad" x1="15" y1="10" x2="23" y2="25" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F2C6A8" />
            <stop offset="100%" stopColor="#DDA482" />
          </linearGradient>
        </defs>
        <rect width="38" height="38" fill="url(#avatar-bg)" />
        {/* Back hair */}
        <path
          d="M10.5 20C10.5 11.5 14.2 6.8 19.3 6.8C24.5 6.8 28 11.4 28.4 20.2C28.7 25.5 27.6 30.5 26.5 33H11.8C10.8 30 10.5 25 10.5 20Z"
          fill="url(#hair-grad)"
        />
        {/* Shoulders / dark top */}
        <path
          d="M6.5 38C7.8 31.8 12.6 28.8 19 28.8C25.4 28.8 30.2 31.8 31.5 38H6.5Z"
          fill="#1B1918"
        />
        {/* V-neck skin */}
        <path d="M15.8 27.2H22.2L21.5 31.5L19 33.8L16.5 31.5L15.8 27.2Z" fill="#E2AC8B" />
        {/* Head */}
        <ellipse cx="19" cy="17.6" rx="5.5" ry="6.8" fill="url(#skin-grad)" />
        {/* Front hair parting */}
        <path
          d="M13.3 16.5C13.8 11.6 16.6 9.8 19.6 10.2C22.4 10.5 24.4 12.8 24.9 17.5C23.5 14.5 21.8 12.6 19.5 12.2C17.1 12.9 14.8 14.4 13.3 16.5Z"
          fill="url(#hair-grad)"
        />
        {/* Eyes & brow hints */}
        <path d="M16.2 16.3C16.8 16 17.5 16 18 16.3" stroke="#3B2316" strokeWidth="0.75" strokeLinecap="round" />
        <path d="M20.1 16.3C20.6 16 21.3 16 21.9 16.3" stroke="#3B2316" strokeWidth="0.75" strokeLinecap="round" />
        <circle cx="17.1" cy="17.5" r="0.65" fill="#261710" />
        <circle cx="20.9" cy="17.5" r="0.65" fill="#261710" />
        {/* Subtle smile */}
        <path
          d="M17.4 21.1C18.2 21.7 19.8 21.7 20.6 21.1"
          stroke="#B56E52"
          strokeWidth="0.85"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*                                COURSE DATA                                 */
/* -------------------------------------------------------------------------- */

interface HomeCourse {
  slug: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate";
  duration: string;
  modules: string;
  emblem: React.ReactNode;
}

const FEATURED_COURSES: HomeCourse[] = [
  {
    slug: "nextjs-for-production",
    title: "Next.js for Production",
    description:
      "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: "12 modules",
    emblem: <NextjsCourseEmblem />,
  },
  {
    slug: "docker-essentials",
    title: "Docker Essentials",
    description:
      "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: "8 modules",
    emblem: <DockerCourseEmblem />,
  },
  {
    slug: "typescript-deep-dive",
    title: "TypeScript Deep Dive",
    description:
      "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: "10 modules",
    emblem: <TypeScriptCourseEmblem />,
  },
];

function LevelBarsIcon({ level }: { level: "Beginner" | "Intermediate" }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      className="shrink-0 text-[#64748B]"
      aria-hidden="true"
    >
      <rect x="1.5" y="8.5" width="2.2" height="4" rx="0.6" fill="currentColor" />
      <rect
        x="5.5"
        y="5.5"
        width="2.2"
        height="7"
        rx="0.6"
        fill="currentColor"
        fillOpacity={level === "Beginner" ? "0.45" : "1"}
      />
      <rect
        x="9.5"
        y="2.5"
        width="2.2"
        height="10"
        rx="0.6"
        fill="currentColor"
        fillOpacity="0.45"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*                           DECORATIVE FOOTER BARS                           */
/* -------------------------------------------------------------------------- */

const LEFT_SKYLINE_BARS = [
  { left: "0%", width: "9.5%", height: "42%", opacity: 0.55 },
  { left: "7.4%", width: "8.8%", height: "60%", opacity: 0.72 },
  { left: "13.6%", width: "9.2%", height: "80%", opacity: 0.85 },
  { left: "18.2%", width: "9.6%", height: "100%", opacity: 0.92 },
  { left: "25.4%", width: "9.4%", height: "74%", opacity: 0.8 },
  { left: "31.2%", width: "8.6%", height: "50%", opacity: 0.58 },
];

const RIGHT_SKYLINE_BARS = [
  { left: "51.5%", width: "9.2%", height: "38%", opacity: 0.48 },
  { left: "60.4%", width: "9.4%", height: "58%", opacity: 0.72 },
  { left: "68.2%", width: "9.2%", height: "74%", opacity: 0.86 },
  { left: "73.8%", width: "9.6%", height: "100%", opacity: 0.9 },
  { left: "82.6%", width: "9.4%", height: "64%", opacity: 0.76 },
  { left: "89.4%", width: "10.6%", height: "90%", opacity: 0.88 },
];

/* -------------------------------------------------------------------------- */
/*                               HOMEPAGE VIEW                                */
/* -------------------------------------------------------------------------- */

export default function VertexHomePage() {
  const stripeBg = {
    backgroundImage:
      "repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(218, 206, 194, 0.34) 6px, rgba(218, 206, 194, 0.34) 7px)",
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F172A] flex justify-center selection:bg-[#FFEEE5] selection:text-[#0F172A]">
      {/* Left Diagonal Hatch Gutter */}
      <div
        aria-hidden="true"
        className="hidden sm:block w-5 md:w-7 lg:w-8 shrink-0 border-r border-[#EFE9E2]"
        style={stripeBg}
      />

      {/* Main Framed Canvas */}
      <div className="relative flex-1 w-full max-w-[1440px] min-w-0 flex flex-col justify-between overflow-hidden bg-[#FAF8F5]">
        <div>
          {/* ============================================================== */}
          {/* TOP NAVBAR                                                     */}
          {/* ============================================================== */}
          <header className="border-b border-[#EFE9E2]">
            <div className="mx-auto flex h-[76px] items-center justify-between px-4 sm:px-9 lg:px-11">
              <div className="flex items-center gap-4 sm:gap-11">
                <Link
                  href="/"
                  aria-label="Vertex Home"
                  className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F97316] rounded-sm shrink-0"
                >
                  <VertexLogo size="md" />
                </Link>

                <nav aria-label="Primary" className="hidden sm:flex items-center gap-6 sm:gap-9">
                  <Link
                    href="#all-courses"
                    className="text-[14.5px] font-normal text-[#1E293B] hover:text-[#EA580C] transition-colors"
                  >
                    Courses
                  </Link>
                  <Link
                    href="#my-learning"
                    className="text-[14.5px] font-normal text-[#1E293B] hover:text-[#EA580C] transition-colors"
                  >
                    My Learning
                  </Link>
                </nav>
              </div>

              <div className="flex items-center gap-2 sm:gap-5 shrink-0">
                <button
                  type="button"
                  aria-label="Notifications"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#334155] hover:bg-[#F2ECE6] hover:text-[#0F172A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
                >
                  <Bell size={19} strokeWidth={1.75} />
                </button>
                <Suspense fallback={<UserAvatar />}>
                  <Show when="signed-out">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <SignInButton mode="modal">
                        <button
                          type="button"
                          className="text-[13.5px] sm:text-[14px] font-medium text-[#1E293B] hover:text-[#EA580C] transition-colors cursor-pointer px-1 py-1"
                        >
                          Sign in
                        </button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center h-[34px] sm:h-[36px] px-3 sm:px-3.5 rounded-[10px] bg-gradient-to-b from-[#EB7347] to-[#DF5E30] text-white text-[13px] sm:text-[13.5px] font-medium shadow-[0_2px_4px_rgba(223,94,48,0.2)] hover:from-[#E5673B] hover:to-[#D15224] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C] whitespace-nowrap"
                        >
                          Sign up
                        </button>
                      </SignUpButton>
                    </div>
                  </Show>
                  <Show when="signed-in">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox:
                            "h-[38px] w-[38px] border border-[#E6DFD7] shadow-2xs hover:scale-[1.02] transition-transform",
                        },
                      }}
                    />
                  </Show>
                </Suspense>
              </div>
            </div>
          </header>

          {/* ============================================================== */}
          {/* HERO SECTION                                                   */}
          {/* ============================================================== */}
          <main>
            <section
              aria-labelledby="hero-heading"
              className="border-b border-[#EFE9E2] px-5 sm:px-9 lg:px-11 pt-12 sm:pt-[62px] pb-12 sm:pb-[64px]"
            >
              <div className="mx-auto max-w-[744px] flex flex-col items-center text-center">
                {/* Eyebrow Badge */}
                <div className="inline-flex items-center justify-center rounded-[10px] border border-[#F4DFCE] bg-[#FCF6F0] px-4 py-1.5 shadow-[0_1px_2px_rgba(234,88,12,0.04)]">
                  <span className="font-sans text-[11px] leading-[14px] font-semibold tracking-[0.11em] uppercase text-[#E06331]">
                    INTELLIGENT LEARNING
                  </span>
                </div>

                {/* Main Display Title */}
                <h1
                  id="hero-heading"
                  className="mt-6 font-display text-[40px] sm:text-[54px] md:text-[62px] leading-[1.09] font-bold tracking-[-0.02em] text-[#0B0F17]"
                >
                  Search your learning
                  <br />
                  in plain English.
                </h1>

                {/* Subtitle */}
                <p className="mt-5 font-sans text-[15.5px] sm:text-[17.5px] leading-[1.6] font-normal text-[#5B6678] max-w-[46ch]">
                  Vertex understands what you want to learn and
                  <br className="hidden sm:inline" /> finds the exact lessons
                  across all your courses.
                </p>

                {/* Primary CTA Button */}
                <div className="mt-8">
                  <Link
                    href="#all-courses"
                    className="inline-flex items-center justify-center gap-3 h-[48px] px-6 rounded-[12px] bg-gradient-to-b from-[#EB7347] to-[#DF5E30] text-white font-sans text-[15px] font-medium shadow-[0_6px_16px_-3px_rgba(223,94,48,0.38),inset_0_1px_0_rgba(255,255,255,0.22)] hover:from-[#E5673B] hover:to-[#D15224] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
                  >
                    <span>Explore Courses</span>
                    <ArrowRight size={17} strokeWidth={1.9} aria-hidden="true" />
                  </Link>
                </div>

                {/* Hero Search Input Box */}
                <form
                  action="#all-courses"
                  method="GET"
                  role="search"
                  className="mt-10 sm:mt-11 w-full"
                >
                  <label
                    htmlFor="vertex-hero-search"
                    className="relative flex items-center w-full h-[64px] rounded-[16px] border border-[#EAE4DC] bg-[#FDFCFA] px-5 sm:px-6 shadow-[0_3px_12px_rgba(15,23,42,0.03)] transition-colors focus-within:border-[#FB923C] focus-within:bg-white cursor-text"
                  >
                    <Search
                      size={21}
                      strokeWidth={1.85}
                      className="text-[#334155] shrink-0 mr-3.5"
                      aria-hidden="true"
                    />
                    <input
                      id="vertex-hero-search"
                      name="q"
                      type="search"
                      placeholder="Ask anything about your learning..."
                      aria-label="Ask anything about your learning"
                      className="w-full bg-transparent font-sans text-[15.5px] sm:text-[16.5px] text-[#0F172A] placeholder:text-[#8E96A4] focus:outline-none"
                    />
                    <kbd className="ml-3 inline-flex items-center justify-center h-[34px] min-w-[60px] rounded-[8px] border border-[#EAE4DC] bg-[#FAF8F5] px-2.5 font-sans text-[13.5px] font-medium text-[#334155] shrink-0 select-none">
                      ⌘ K
                    </kbd>
                  </label>
                </form>
              </div>
            </section>

            {/* ============================================================== */}
            {/* ALL COURSES SECTION                                            */}
            {/* ============================================================== */}
            <section
              id="all-courses"
              aria-labelledby="all-courses-heading"
              className="px-5 sm:px-9 lg:px-11 pt-11 sm:pt-12 pb-8"
            >
              {/* Section Header Row */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2
                  id="all-courses-heading"
                  className="font-display text-[25px] sm:text-[27px] leading-[1.2] font-bold tracking-[-0.015em] text-[#0F172A]"
                >
                  All Courses
                </h2>

                <Link
                  href="#all-courses"
                  className="inline-flex items-center gap-2 font-sans text-[14.5px] font-medium text-[#E06331] hover:text-[#C2410C] transition-colors"
                >
                  <span>View all courses</span>
                  <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>

              {/* 3-Column Course Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
                {FEATURED_COURSES.map((course) => (
                  <article
                    key={course.slug}
                    className="group relative flex flex-col justify-between rounded-[18px] border border-[#EAE4DC] bg-[#FDFCFA] p-6 sm:p-[26px] min-h-[296px] shadow-[0_2px_8px_rgba(15,23,42,0.02)] hover:border-[#DFD6CA] hover:shadow-[0_8px_24px_-4px_rgba(15,23,42,0.06)] transition-all"
                  >
                    <div>
                      {/* Course Emblem */}
                      <div className="mb-6">{course.emblem}</div>

                      {/* Course Title */}
                      <h3 className="font-display text-[20px] sm:text-[21px] leading-[1.28] font-bold tracking-[-0.01em] text-[#0F172A] group-hover:text-[#DF5E30] transition-colors">
                        <Link
                          href={`#course-${course.slug}`}
                          className="after:absolute after:inset-0 focus:outline-none"
                        >
                          {course.title}
                        </Link>
                      </h3>

                      {/* Course Description */}
                      <p className="mt-2.5 font-sans text-[14px] leading-[1.55] text-[#5B6678]">
                        {course.description}
                      </p>
                    </div>

                    {/* Card Footer Metadata */}
                    <div className="mt-8 pt-4 border-t border-[#EFE9E2] flex items-center justify-between gap-2 font-sans text-[11.5px] text-[#5B6678]">
                      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                        <LevelBarsIcon level={course.level} />
                        <span>{course.level}</span>
                      </span>

                      <span className="inline-flex items-center gap-1.5 whitespace-nowrap tabular-nums">
                        <Clock
                          size={13}
                          strokeWidth={1.85}
                          className="text-[#64748B] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{course.duration}</span>
                      </span>

                      <span className="inline-flex items-center gap-1.5 whitespace-nowrap tabular-nums">
                        <FileText
                          size={13}
                          strokeWidth={1.85}
                          className="text-[#64748B] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{course.modules}</span>
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>

        {/* ================================================================ */}
        {/* FOOTER CALLOUT & DECORATIVE SKYLINE                              */}
        {/* ================================================================ */}
        <footer className="relative pt-4">
          {/* Callout Line with Star */}
          <div className="px-5 sm:px-9 lg:px-11 flex items-center gap-5">
            <div className="h-px flex-1 bg-[#EFE9E2]" aria-hidden="true" />
            <div className="inline-flex items-center gap-2.5 text-center">
              <Star
                size={19}
                strokeWidth={1.75}
                className="text-[#EA6A38] shrink-0"
                aria-hidden="true"
              />
              <span className="font-sans text-[14.5px] sm:text-[15.5px] font-normal text-[#475569]">
                New courses and lessons added every week.
              </span>
            </div>
            <div className="h-px flex-1 bg-[#EFE9E2]" aria-hidden="true" />
          </div>

          {/* Decorative Bottom Stepped Gradient Columns */}
          <div
            aria-hidden="true"
            className="relative mt-6 h-[150px] sm:h-[188px] w-full overflow-hidden pointer-events-none select-none"
          >
            {/* Soft ambient glow behind bars */}
            <div
              className="absolute inset-x-0 bottom-0 h-full opacity-55"
              style={{
                background:
                  "radial-gradient(38% 85% at 22% 100%, rgba(251, 146, 60, 0.36) 0%, transparent 100%), radial-gradient(42% 85% at 78% 100%, rgba(251, 146, 60, 0.38) 0%, transparent 100%)",
              }}
            />

            {[...LEFT_SKYLINE_BARS, ...RIGHT_SKYLINE_BARS].map((bar, idx) => (
              <div
                key={idx}
                className="absolute bottom-0 rounded-t-[2px]"
                style={{
                  left: bar.left,
                  width: bar.width,
                  height: bar.height,
                  opacity: bar.opacity,
                  background:
                    "linear-gradient(180deg, rgba(254, 215, 195, 0.08) 0%, rgba(251, 158, 120, 0.62) 38%, rgba(247, 134, 90, 0.72) 68%, rgba(253, 218, 202, 0.32) 100%)",
                  boxShadow: "0 -4px 18px rgba(249, 115, 22, 0.06)",
                }}
              />
            ))}
          </div>
        </footer>
      </div>

      {/* Right Diagonal Hatch Gutter */}
      <div
        aria-hidden="true"
        className="hidden sm:block w-5 md:w-7 lg:w-8 shrink-0 border-l border-[#EFE9E2]"
        style={stripeBg}
      />
    </div>
  );
}
