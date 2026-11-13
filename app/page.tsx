import React from "react";
import { CirclePlay, ExternalLink } from "lucide-react";
import {
  VertexLogo,
  VertexIcon,
  type VertexIconName,
  Button,
  SearchInput,
  SelectInput,
  Badge,
  StatusIndicator,
  ProgressBar,
  CourseCardPreview,
  VideoLessonCardPreview,
  LessonCardPreview,
  ResourceCardPreview,
  BrandNavbarPreview,
  BreadcrumbsPreview,
  PaginationPreview,
  PRINCIPLES_LIST,
} from "@/components/ui/design-system";

/* -------------------------------------------------------------------------- */
/*                               DESIGN TOKENS                                */
/* -------------------------------------------------------------------------- */

const PRIMARY_COLORS = [
  { name: "Primary 500", hex: "#F97316" },
  { name: "Primary 400", hex: "#FB923C" },
  { name: "Primary 300", hex: "#FDBA74" },
  { name: "Primary 200", hex: "#FED7AA" },
  { name: "Primary 100", hex: "#FFEEE5", bordered: true },
];

const NEUTRAL_COLORS = [
  { name: "Neutral 900", hex: "#0F172A" },
  { name: "Neutral 700", hex: "#334155" },
  { name: "Neutral 500", hex: "#64748B" },
  { name: "Neutral 300", hex: "#CBD5E1" },
  { name: "Neutral 200", hex: "#E2E8F0" },
  { name: "Neutral 100", hex: "#F1F5F9" },
  { name: "Neutral 50", hex: "#FAFAFC", bordered: true },
  { name: "White", hex: "#FFFFFF", bordered: true },
];

const TYPE_SCALE = [
  {
    style: "Display 1",
    font: "Playfair Display",
    size: "48 / 56",
    weight: "Bold",
    use: "Page titles",
    previewClass: "font-display text-[21px] leading-[28px] font-bold text-[#0F172A]",
  },
  {
    style: "Display 2",
    font: "Playfair Display",
    size: "36 / 44",
    weight: "Bold",
    use: "Section titles",
    previewClass: "font-display text-[18px] leading-[24px] font-bold text-[#0F172A]",
  },
  {
    style: "Heading 1",
    font: "Inter",
    size: "28 / 36",
    weight: "Semi Bold",
    use: "Card titles",
    previewClass: "font-sans text-[16px] leading-[22px] font-semibold text-[#0F172A]",
  },
  {
    style: "Heading 2",
    font: "Inter",
    size: "22 / 30",
    weight: "Semi Bold",
    use: "Sub section",
    previewClass: "font-sans text-[15px] leading-[20px] font-semibold text-[#0F172A]",
  },
  {
    style: "Heading 3",
    font: "Inter",
    size: "18 / 26",
    weight: "Medium",
    use: "Small titles",
    previewClass: "font-sans text-[14px] leading-[20px] font-medium text-[#0F172A]",
  },
  {
    style: "Body Large",
    font: "Inter",
    size: "16 / 24",
    weight: "Regular",
    use: "Body copy",
    previewClass: "font-sans text-[13.5px] leading-[20px] font-normal text-[#0F172A]",
  },
  {
    style: "Body",
    font: "Inter",
    size: "14 / 20",
    weight: "Regular",
    use: "Supporting text",
    previewClass: "font-sans text-[13px] leading-[18px] font-normal text-[#334155]",
  },
  {
    style: "Small",
    font: "Inter",
    size: "12 / 16",
    weight: "Regular",
    use: "Captions, meta",
    previewClass: "font-sans text-[12px] leading-[16px] font-normal text-[#475569]",
  },
];

const SPACING_STEPS = [
  { px: 4, rem: "0.25rem", w: 12, h: 12 },
  { px: 8, rem: "0.5rem", w: 16, h: 16 },
  { px: 12, rem: "0.75rem", w: 20, h: 20 },
  { px: 16, rem: "1rem", w: 24, h: 24 },
  { px: 24, rem: "1.5rem", w: 30, h: 30 },
  { px: 32, rem: "2rem", w: 36, h: 36 },
  { px: 40, rem: "2.5rem", w: 42, h: 42 },
  { px: 48, rem: "3rem", w: 48, h: 48 },
  { px: 64, rem: "4rem", w: 54, h: 58 },
];

const RADIUS_STEPS = [
  { px: "4px", token: "(xs)", radius: "4px" },
  { px: "8px", token: "(sm)", radius: "8px" },
  { px: "12px", token: "(md)", radius: "12px" },
  { px: "16px", token: "(lg)", radius: "16px" },
  { px: "24px", token: "(xl)", radius: "24px" },
  { px: "Full", token: "(circle)", radius: "9999px" },
];

const SHADOW_STEPS = [
  {
    name: "Sm",
    offset: "0 1px 2px 0",
    color: "rgba(15, 23, 42, 0.05)",
    shadow: "0 1px 2px 0 rgba(15, 23, 42, 0.05)",
  },
  {
    name: "Md",
    offset: "0 4px 12px -2px",
    color: "rgba(15, 23, 42, 0.08)",
    shadow: "0 4px 12px -2px rgba(15, 23, 42, 0.08)",
  },
  {
    name: "Lg",
    offset: "0 12px 24px -4px",
    color: "rgba(15, 23, 42, 0.10)",
    shadow: "0 12px 24px -4px rgba(15, 23, 42, 0.10)",
  },
  {
    name: "Xl",
    offset: "0 20px 40px -8px",
    color: "rgba(15, 23, 42, 0.12)",
    shadow: "0 20px 40px -8px rgba(15, 23, 42, 0.12)",
  },
];

const ICON_NAMES: VertexIconName[] = [
  "bell",
  "search",
  "play",
  "document",
  "bookmark",
  "chart",
  "clock",
  "user",
  "chevron-right",
];

/* -------------------------------------------------------------------------- */
/*                               SECTION HEADER                               */
/* -------------------------------------------------------------------------- */

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <span className="font-sans text-[12px] font-bold tracking-[0.08em] text-[#FB923C]">
        {num}
      </span>
      <h2 className="font-sans text-[12px] font-bold tracking-[0.1em] text-[#0F172A] uppercase">
        {title}
      </h2>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 MAIN PAGE                                  */
/* -------------------------------------------------------------------------- */

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F6] text-[#0F172A] py-5 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1360px] space-y-4">
        {/* ================================================================ */}
        {/* ROW 1: BRAND INTRO + 01 COLORS                                   */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Brand Cover Panel */}
          <section
            aria-label="Design System Overview"
            className="lg:col-span-4 rounded-[20px] border border-[#F1EDE8] bg-white p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <VertexLogo size="lg" />
              <h1 className="mt-6 font-display text-[44px] sm:text-[50px] leading-[1.12] font-bold tracking-[-0.02em] text-[#0F172A]">
                Design System
              </h1>
              <p className="mt-5 text-[15px] leading-[25px] text-[#475569] max-w-[34ch]">
                A unified design language for Vertex learning platform. Clean,
                modern and focused on clarity, consistency and intuitive
                learning experiences.
              </p>
            </div>

            <div className="mt-10 pt-4">
              <p className="font-sans text-[11.5px] font-semibold tracking-[0.12em] text-[#64748B] uppercase">
                VERSION 1.0 &nbsp;•&nbsp; MAY 2025
              </p>
            </div>
          </section>

          {/* 01 COLORS */}
          <section
            aria-label="01 Colors"
            className="lg:col-span-8 rounded-[20px] border border-[#F1EDE8] bg-white p-7 sm:p-8"
          >
            <SectionHeader num="01" title="COLORS" />

            {/* Primary Swatches */}
            <div>
              <h3 className="text-[13.5px] font-semibold text-[#0F172A] mb-3">
                Primary
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-[740px]">
                {PRIMARY_COLORS.map((swatch) => (
                  <div key={swatch.name} className="space-y-2">
                    <div
                      className={`h-[68px] w-full rounded-[12px] ${
                        swatch.bordered ? "border border-[#F3E3D8]" : ""
                      }`}
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div>
                      <p className="text-[12.5px] font-medium text-[#0F172A]">
                        {swatch.name}
                      </p>
                      <p className="text-[11.5px] text-[#64748B] font-sans">
                        {swatch.hex}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Neutral Swatches */}
            <div className="mt-6">
              <h3 className="text-[13.5px] font-semibold text-[#0F172A] mb-3">
                Neutral
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3.5">
                {NEUTRAL_COLORS.map((swatch) => (
                  <div key={swatch.name} className="space-y-2">
                    <div
                      className={`h-[52px] w-full rounded-[10px] ${
                        swatch.bordered ? "border border-[#E2E8F0]" : ""
                      }`}
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div>
                      <p className="text-[12px] font-medium text-[#0F172A] whitespace-nowrap">
                        {swatch.name}
                      </p>
                      <p className="text-[11px] text-[#64748B] font-sans">
                        {swatch.hex}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ================================================================ */}
        {/* ROW 2: 02 TYPOGRAPHY + 03 TYPE SCALE                             */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* 02 TYPOGRAPHY */}
          <section
            aria-label="02 Typography"
            className="lg:col-span-5 rounded-[20px] border border-[#F1EDE8] bg-white p-7 sm:p-8 flex flex-col justify-between"
          >
            <SectionHeader num="02" title="TYPOGRAPHY" />

            <div className="my-auto space-y-10 py-2">
              {/* Playfair Display Specimen */}
              <div className="flex items-center gap-7">
                <div className="w-[88px] shrink-0 text-center font-display text-[56px] leading-none font-bold text-[#0F172A]">
                  Ag
                </div>
                <div>
                  <h3 className="font-display text-[22px] leading-[28px] font-bold text-[#0F172A]">
                    Playfair Display
                  </h3>
                  <p className="mt-1.5 text-[13.5px] text-[#64748B]">
                    Elegant{" "}
                    <span className="text-[#FB923C] mx-1">•</span> Readable{" "}
                    <span className="text-[#FB923C] mx-1">•</span> Timeless
                  </p>
                </div>
              </div>

              {/* Inter Specimen */}
              <div className="flex items-center gap-7">
                <div className="w-[88px] shrink-0 text-center font-sans text-[56px] leading-none font-bold text-[#0F172A]">
                  Ag
                </div>
                <div>
                  <h3 className="font-sans text-[22px] leading-[28px] font-semibold text-[#0F172A]">
                    Inter
                  </h3>
                  <p className="mt-1.5 text-[13.5px] text-[#64748B]">
                    Clean{" "}
                    <span className="text-[#FB923C] mx-1">•</span> Modern{" "}
                    <span className="text-[#FB923C] mx-1">•</span> Highly legible
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 03 TYPE SCALE */}
          <section
            aria-label="03 Type Scale"
            className="lg:col-span-7 rounded-[20px] border border-[#F1EDE8] bg-white p-7 sm:p-8"
          >
            <SectionHeader num="03" title="TYPE SCALE" />

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[540px]">
                <thead>
                  <tr className="text-[12px] font-medium text-[#64748B]">
                    <th className="pb-3 font-medium w-[26%]">Style</th>
                    <th className="pb-3 font-medium w-[24%]">Font</th>
                    <th className="pb-3 font-medium w-[17%]">Size / Line Height</th>
                    <th className="pb-3 font-medium w-[16%]">Weight</th>
                    <th className="pb-3 font-medium w-[17%]">Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F8FAFC]">
                  {TYPE_SCALE.map((row) => (
                    <tr key={row.style} className="align-middle">
                      <td className={`py-2 ${row.previewClass}`}>{row.style}</td>
                      <td className="py-2 text-[12.5px] text-[#64748B]">
                        {row.font}
                      </td>
                      <td className="py-2 text-[12.5px] text-[#475569] tabular-nums">
                        {row.size}
                      </td>
                      <td className="py-2 text-[12.5px] text-[#64748B]">
                        {row.weight}
                      </td>
                      <td className="py-2 text-[12.5px] text-[#64748B]">
                        {row.use}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* ================================================================ */}
        {/* ROW 3: 04 SPACING SYSTEM + 05 RADIUS & SHADOWS                   */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* 04 SPACING SYSTEM */}
          <section
            aria-label="04 Spacing System"
            className="lg:col-span-6 rounded-[20px] border border-[#F1EDE8] bg-white p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <SectionHeader num="04" title="SPACING SYSTEM" />
              <p className="text-[13.5px] font-medium text-[#334155]">
                Base unit: 4px
              </p>
            </div>

            <div className="mt-8 pt-4 grid grid-cols-3 sm:grid-cols-9 gap-3 items-end">
              {SPACING_STEPS.map((step) => (
                <div
                  key={step.px}
                  className="flex flex-col items-center text-center"
                >
                  <div className="h-[68px] flex items-end justify-center mb-3">
                    <div
                      className="rounded-[5px] bg-[#FED7AA]/75 border border-[#FDBA74]/50"
                      style={{ width: `${step.w}px`, height: `${step.h}px` }}
                    />
                  </div>
                  <span className="text-[12.5px] font-semibold text-[#0F172A] tabular-nums">
                    {step.px}
                  </span>
                  <span className="mt-0.5 text-[11px] text-[#64748B] tabular-nums">
                    ({step.rem})
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 05 RADIUS & SHADOWS */}
          <section
            aria-label="05 Radius and Shadows"
            className="lg:col-span-6 rounded-[20px] border border-[#F1EDE8] bg-white p-7 sm:p-8"
          >
            <SectionHeader num="05" title="RADIUS & SHADOWS" />

            {/* Radius */}
            <div>
              <h3 className="text-[13.5px] font-semibold text-[#0F172A] mb-3.5">
                Radius
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {RADIUS_STEPS.map((r) => (
                  <div
                    key={r.px}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className="h-[46px] w-[46px] border border-[#E2E8F0] bg-[#FAFAFC]"
                      style={{ borderRadius: r.radius }}
                    />
                    <span className="mt-2 text-[12px] font-medium text-[#0F172A]">
                      {r.px}
                    </span>
                    <span className="text-[11px] text-[#64748B]">{r.token}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shadows */}
            <div className="mt-6">
              <h3 className="text-[13.5px] font-semibold text-[#0F172A] mb-3.5">
                Shadows
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {SHADOW_STEPS.map((s) => (
                  <div
                    key={s.name}
                    className="rounded-[12px] border border-[#F1F5F9] bg-white p-3.5"
                    style={{ boxShadow: s.shadow }}
                  >
                    <p className="text-[13.5px] font-semibold text-[#0F172A]">
                      {s.name}
                    </p>
                    <p className="mt-1.5 text-[10.5px] leading-[15px] text-[#64748B] tabular-nums">
                      {s.offset}
                    </p>
                    <p className="text-[10.5px] leading-[15px] text-[#64748B] tabular-nums">
                      {s.color}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ================================================================ */}
        {/* ROW 4: 06 ICONS + 07 BUTTONS + 08 INPUTS                         */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* 06 ICONS */}
          <section
            aria-label="06 Icons"
            className="lg:col-span-4 rounded-[20px] border border-[#F1EDE8] bg-white p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <SectionHeader num="06" title="ICONS" />

              {/* Outline Style */}
              <div>
                <h3 className="text-[12.5px] font-medium text-[#334155] mb-3">
                  Outline Style
                </h3>
                <div className="flex items-center justify-between gap-2 text-[#1E293B]">
                  {ICON_NAMES.map((name) => (
                    <span
                      key={`outline-${name}`}
                      className="inline-flex h-7 w-7 items-center justify-center"
                    >
                      <VertexIcon name={name} variant="outline" size={20} />
                    </span>
                  ))}
                </div>
              </div>

              {/* Filled Style (labeled Fileed Style on reference sheet) */}
              <div className="mt-6">
                <h3 className="text-[12.5px] font-medium text-[#334155] mb-3">
                  Fileed Style
                </h3>
                <div className="flex items-center justify-between gap-2 text-[#0F172A]">
                  {ICON_NAMES.map((name) => (
                    <span
                      key={`filled-${name}`}
                      className="inline-flex h-7 w-7 items-center justify-center"
                    >
                      <VertexIcon name={name} variant="filled" size={20} />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Icon Specs */}
            <div className="mt-7 pt-5 border-t border-[#F8FAFC]">
              <h4 className="text-[12.5px] font-semibold text-[#0F172A] mb-2">
                Icon Specs
              </h4>
              <ul className="space-y-1.5 text-[12px] text-[#64748B]">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                  24x24px grid
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                  2px stroke width (outline)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                  Rounded line caps
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                  Consistent optical balance
                </li>
              </ul>
            </div>
          </section>

          {/* 07 BUTTONS */}
          <section
            aria-label="07 Buttons"
            className="lg:col-span-5 rounded-[20px] border border-[#F1EDE8] bg-white p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <SectionHeader num="07" title="BUTTONS" />

              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[460px]">
                  <thead>
                    <tr className="text-[12px] font-medium text-[#64748B] text-left">
                      <th className="pb-3 font-medium w-[64px]" />
                      <th className="pb-3 font-medium px-1.5">Primary</th>
                      <th className="pb-3 font-medium px-1.5">Secondary</th>
                      <th className="pb-3 font-medium px-1.5">Tertiary</th>
                      <th className="pb-3 font-medium pl-1.5">Text</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-3">
                    {(["default", "hover", "disabled"] as const).map((state) => (
                      <tr key={state} className="align-middle">
                        <td className="py-2 pr-2 text-[12px] font-medium text-[#334155] capitalize">
                          {state}
                        </td>
                        <td className="py-2 px-1.5">
                          <Button variant="primary" visualState={state}>
                            Get Started
                          </Button>
                        </td>
                        <td className="py-2 px-1.5">
                          <Button variant="secondary" visualState={state}>
                            Explore Courses
                          </Button>
                        </td>
                        <td className="py-2 px-1.5">
                          <Button variant="tertiary" visualState={state}>
                            <span>View Lesson</span>
                            <ExternalLink size={13} strokeWidth={2} />
                          </Button>
                        </td>
                        <td className="py-2 pl-1.5">
                          <Button variant="text" visualState={state}>
                            <span>Watch Video</span>
                            <CirclePlay size={14} strokeWidth={2} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Button Specs */}
            <div className="mt-5 pt-4 border-t border-[#F8FAFC]">
              <h4 className="text-[12.5px] font-semibold text-[#0F172A] mb-2">
                Button Specs
              </h4>
              <ul className="space-y-1.5 text-[12px] text-[#64748B]">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                  Height: 44px (default)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                  Padding: 0 16px (lg), 0 12px (md)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                  Radius: 12px
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                  Font: Inter Medium (14–16px)
                </li>
              </ul>
            </div>
          </section>

          {/* 08 INPUTS */}
          <section
            aria-label="08 Inputs"
            className="lg:col-span-3 rounded-[20px] border border-[#F1EDE8] bg-white p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <SectionHeader num="08" title="INPUTS" />

              <div className="space-y-5">
                <div>
                  <label className="block text-[12.5px] font-medium text-[#334155] mb-2">
                    Search / Text Input
                  </label>
                  <SearchInput />
                </div>

                <div>
                  <label className="block text-[12.5px] font-medium text-[#334155] mb-2">
                    Select
                  </label>
                  <SelectInput />
                </div>
              </div>
            </div>

            {/* Field Specs */}
            <div className="mt-6 pt-4 border-t border-[#F8FAFC]">
              <h4 className="text-[12.5px] font-semibold text-[#0F172A] mb-2">
                Field Specs
              </h4>
              <ul className="space-y-1.5 text-[12px] text-[#64748B]">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                  Height: 44px
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                  Radius: 12px
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                  Border: 1px solid #E2E8F0
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                  Padding: 0 16px
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                  Focus: Border color #FB923C
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* ================================================================ */}
        {/* ROW 5: 09 BADGES / TAGS + 10 STATUS / INDICATORS + 11 PROGRESS   */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* 09 BADGES / TAGS */}
          <section
            aria-label="09 Badges and Tags"
            className="lg:col-span-4 rounded-[20px] border border-[#F1EDE8] bg-white p-6 sm:p-7"
          >
            <SectionHeader num="09" title="BADGES / TAGS" />
            <div className="grid grid-cols-3 gap-4 pt-1">
              <div className="space-y-2">
                <p className="text-[12px] font-medium text-[#334155]">Video</p>
                <Badge variant="video" />
              </div>
              <div className="space-y-2">
                <p className="text-[12px] font-medium text-[#334155]">Lesson</p>
                <Badge variant="lesson" />
              </div>
              <div className="space-y-2">
                <p className="text-[12px] font-medium text-[#334155]">Popular</p>
                <Badge variant="popular" />
              </div>
            </div>
          </section>

          {/* 10 STATUS / INDICATORS */}
          <section
            aria-label="10 Status and Indicators"
            className="lg:col-span-4 rounded-[20px] border border-[#F1EDE8] bg-white p-6 sm:p-7 flex flex-col justify-between"
          >
            <SectionHeader num="10" title="STATUS / INDICATORS" />
            <div className="flex flex-wrap items-center justify-between gap-3 py-2">
              <StatusIndicator status="in-progress" />
              <StatusIndicator status="completed" />
              <StatusIndicator status="now-playing" />
              <StatusIndicator status="locked" />
            </div>
          </section>

          {/* 11 PROGRESS BAR */}
          <section
            aria-label="11 Progress Bar"
            className="lg:col-span-4 rounded-[20px] border border-[#F1EDE8] bg-white p-6 sm:p-7 flex flex-col justify-between"
          >
            <SectionHeader num="11" title="PROGRESS BAR" />
            <div className="py-2.5">
              <ProgressBar percentage={35} />
            </div>
          </section>
        </div>

        {/* ================================================================ */}
        {/* ROW 6: 12 CARDS                                                  */}
        {/* ================================================================ */}
        <section
          aria-label="12 Cards"
          className="rounded-[20px] border border-[#F1EDE8] bg-white p-7 sm:p-8"
        >
          <SectionHeader num="12" title="CARDS" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="flex flex-col">
              <p className="text-[12px] font-medium text-[#64748B] mb-2.5">
                Course Card
              </p>
              <CourseCardPreview />
            </div>

            <div className="flex flex-col">
              <p className="text-[12px] font-medium text-[#64748B] mb-2.5">
                Lesson Card (Video)
              </p>
              <VideoLessonCardPreview />
            </div>

            <div className="flex flex-col">
              <p className="text-[12px] font-medium text-[#64748B] mb-2.5">
                Lesson Card (Lesson)
              </p>
              <LessonCardPreview />
            </div>

            <div className="flex flex-col">
              <p className="text-[12px] font-medium text-[#64748B] mb-2.5">
                Resource Card
              </p>
              <ResourceCardPreview />
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* ROW 7: 13 NAVIGATION + 14 PRINCIPLES                             */}
        {/* ================================================================ */}
        <section
          aria-label="13 Navigation and 14 Principles"
          className="rounded-[20px] border border-[#F1EDE8] bg-white p-7 sm:p-8 space-y-7"
        >
          {/* 13 NAVIGATION */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-4">
                <SectionHeader num="13" title="NAVIGATION" />
                <div className="pt-1">
                  <BrandNavbarPreview />
                </div>
              </div>

              <div className="lg:col-span-5">
                <p className="text-[12px] font-medium text-[#64748B] mb-2.5">
                  Breadcrumbs
                </p>
                <BreadcrumbsPreview />
              </div>

              <div className="lg:col-span-3">
                <p className="text-[12px] font-medium text-[#64748B] mb-2">
                  Pagination
                </p>
                <PaginationPreview />
              </div>
            </div>
          </div>

          <hr className="border-[#F1EDE8]" />

          {/* 14 PRINCIPLES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5">
                <span className="font-sans text-[12px] font-bold tracking-[0.08em] text-[#FB923C]">
                  14
                </span>
                <h2 className="font-sans text-[12px] font-bold tracking-[0.1em] text-[#0F172A] uppercase">
                  PRINCIPLES
                </h2>
              </div>
            </div>

            <div className="lg:col-span-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {PRINCIPLES_LIST.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <div className="mt-0.5 text-[#334155] shrink-0">
                      <IconComponent size={22} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-[13.5px] font-semibold text-[#0F172A]">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[12px] leading-[17px] text-[#64748B]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
