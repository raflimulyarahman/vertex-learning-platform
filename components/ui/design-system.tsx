import React from "react";
import {
  Bell,
  Search,
  CirclePlay,
  FileText,
  Bookmark,
  Clock,
  User,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ExternalLink,
  Lock,
  Eye,
  LayoutGrid,
  Target,
  PersonStanding,
  Folder,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                BRAND LOGO                                  */
/* -------------------------------------------------------------------------- */

export function VertexLogo({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const iconDim = size === "lg" ? 32 : size === "sm" ? 22 : 26;
  const textClass =
    size === "lg"
      ? "text-[24px] leading-[30px]"
      : size === "sm"
      ? "text-[16px] leading-[22px]"
      : "text-[18px] leading-[24px]";

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg
        width={iconDim}
        height={iconDim}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="vertex-brand-grad"
            x1="4"
            y1="4"
            x2="28"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
        </defs>
        {/* Outer inverted V-triangle with inner negative-space triangle */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.2 4.5C2.5 3.3 3.35 1.8 4.75 1.8H27.25C28.65 1.8 29.5 3.3 28.8 4.5L17.55 28.2C16.9 29.5 15.1 29.5 14.45 28.2L3.2 4.5ZM10.4 6.8L16 18.6L21.6 6.8H10.4Z"
          fill="url(#vertex-brand-grad)"
        />
      </svg>
      <span className={`font-sans font-bold tracking-tight text-neutral-900 ${textClass}`}>
        Vertex
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   ICONS                                    */
/* -------------------------------------------------------------------------- */

export type VertexIconName =
  | "bell"
  | "search"
  | "play"
  | "document"
  | "bookmark"
  | "chart"
  | "clock"
  | "user"
  | "chevron-right";

export function SignalBarsIcon({
  filled = false,
  size = 20,
  className = "",
}: {
  filled?: boolean;
  size?: number;
  className?: string;
}) {
  if (filled) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <rect x="3" y="14" width="4.5" height="7" rx="1.2" />
        <rect x="9.75" y="9.5" width="4.5" height="11.5" rx="1.2" />
        <rect x="16.5" y="4" width="4.5" height="17" rx="1.2" />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="14.5" width="4" height="6.5" rx="1" />
      <rect x="10" y="10" width="4" height="11" rx="1" />
      <rect x="16.5" y="4.5" width="4" height="16.5" rx="1" />
    </svg>
  );
}

export function VertexIcon({
  name,
  variant = "outline",
  size = 20,
  className = "",
}: {
  name: VertexIconName;
  variant?: "outline" | "filled";
  size?: number;
  className?: string;
}) {
  const isFilled = variant === "filled";

  if (isFilled) {
    switch (name) {
      case "bell":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M12 2a7 7 0 0 0-7 7v3.586l-1.707 1.707A1 1 0 0 0 4 16h16a1 1 0 0 0 .707-1.707L19 12.586V9a7 7 0 0 0-7-7zm0 20a3 3 0 0 0 2.83-2H9.17A3 3 0 0 0 12 22z" />
          </svg>
        );
      case "search":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        );
      case "play":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 6.8a.75.75 0 0 0-1.15.63v5.14a.75.75 0 0 0 1.15.63l4.25-2.57a.75.75 0 0 0 0-1.26l-4.25-2.57z" />
          </svg>
        );
      case "document":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 12a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1zm1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H9z" />
          </svg>
        );
      case "bookmark":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1.555.832L12 18.202l-5.445 3.63A1 1 0 0 1 5 21V4z" />
          </svg>
        );
      case "chart":
        return <SignalBarsIcon filled size={size} className={className} />;
      case "clock":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 5a1 1 0 1 0-2 0v5a1 1 0 0 0 .445.832l3 2a1 1 0 0 0 1.11-1.664L13 11.465V7z" />
          </svg>
        );
      case "user":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <circle cx="12" cy="8" r="4.25" />
            <path d="M4.5 20.2c0-3.6 3.35-6.2 7.5-6.2s7.5 2.6 7.5 6.2a.8.8 0 0 1-.8.8H5.3a.8.8 0 0 1-.8-.8z" />
          </svg>
        );
      case "chevron-right":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        );
    }
  }

  switch (name) {
    case "bell":
      return <Bell size={size} strokeWidth={1.85} className={className} />;
    case "search":
      return <Search size={size} strokeWidth={1.85} className={className} />;
    case "play":
      return <CirclePlay size={size} strokeWidth={1.85} className={className} />;
    case "document":
      return <FileText size={size} strokeWidth={1.85} className={className} />;
    case "bookmark":
      return <Bookmark size={size} strokeWidth={1.85} className={className} />;
    case "chart":
      return <SignalBarsIcon filled={false} size={size} className={className} />;
    case "clock":
      return <Clock size={size} strokeWidth={1.85} className={className} />;
    case "user":
      return <User size={size} strokeWidth={1.85} className={className} />;
    case "chevron-right":
      return <ChevronRight size={size} strokeWidth={1.85} className={className} />;
  }
}

/* -------------------------------------------------------------------------- */
/*                                  BUTTONS                                   */
/* -------------------------------------------------------------------------- */

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
export type ButtonVisualState = "default" | "hover" | "disabled";

export function Button({
  variant = "primary",
  visualState = "default",
  size = "lg",
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  visualState?: ButtonVisualState;
  size?: "md" | "lg";
}) {
  const isDisabled = visualState === "disabled" || props.disabled;
  const paddingClass =
    variant === "text"
      ? "px-1"
      : size === "lg"
      ? "px-4"
      : "px-3";

  let variantClasses = "";

  if (variant === "primary") {
    if (visualState === "disabled") {
      variantClasses = "bg-[#FFEEE5] text-[#FB923C]/80 cursor-not-allowed";
    } else if (visualState === "hover") {
      variantClasses = "bg-[#C2410C] text-white shadow-xs";
    } else {
      variantClasses =
        "bg-gradient-to-b from-[#FB923C] to-[#F97316] text-white shadow-xs hover:from-[#F97316] hover:to-[#EA580C]";
    }
  } else if (variant === "secondary") {
    if (visualState === "disabled") {
      variantClasses =
        "bg-white border border-[#FED7AA] text-[#FDBA74] cursor-not-allowed";
    } else if (visualState === "hover") {
      variantClasses =
        "bg-[#FFEEE5]/60 border border-[#FB923C] text-[#EA580C]";
    } else {
      variantClasses =
        "bg-white border border-[#FDBA74] text-[#F97316] hover:bg-[#FFEEE5]/50 hover:border-[#FB923C]";
    }
  } else if (variant === "tertiary") {
    if (visualState === "disabled") {
      variantClasses =
        "bg-[#FAFAFC] border border-[#F1F5F9] text-[#CBD5E1] cursor-not-allowed";
    } else if (visualState === "hover") {
      variantClasses =
        "bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A]";
    } else {
      variantClasses =
        "bg-white border border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC] hover:border-[#CBD5E1]";
    }
  } else if (variant === "text") {
    if (visualState === "disabled") {
      variantClasses = "bg-transparent text-[#FDBA74] cursor-not-allowed";
    } else if (visualState === "hover") {
      variantClasses = "bg-transparent text-[#EA580C]";
    } else {
      variantClasses = "bg-transparent text-[#F97316] hover:text-[#EA580C]";
    }
  }

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={`inline-flex items-center justify-center gap-2 h-[42px] rounded-[10px] font-sans text-[13px] font-medium transition-colors whitespace-nowrap ${paddingClass} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   INPUTS                                   */
/* -------------------------------------------------------------------------- */

export function SearchInput({
  placeholder = "Search anything...",
  shortcut = "⌘ K",
  defaultValue = "",
}: {
  placeholder?: string;
  shortcut?: string;
  defaultValue?: string;
}) {
  return (
    <div className="relative flex items-center w-full h-[44px] rounded-[12px] border border-[#E2E8F0] bg-white px-4 transition-colors focus-within:border-[#FB923C]">
      <Search
        size={17}
        strokeWidth={1.85}
        className="text-[#64748B] shrink-0 mr-2.5"
        aria-hidden="true"
      />
      <input
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full bg-transparent text-[13.5px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none"
      />
      {shortcut && (
        <kbd className="ml-2 inline-flex items-center gap-0.5 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] px-1.5 py-0.5 font-sans text-[11px] font-medium text-[#64748B] shrink-0">
          {shortcut}
        </kbd>
      )}
    </div>
  );
}

export function SelectInput({
  options = ["Most Relevant", "Newest First", "Duration: Short to Long"],
  defaultValue = "Most Relevant",
}: {
  options?: string[];
  defaultValue?: string;
}) {
  return (
    <div className="relative flex items-center w-full h-[44px]">
      <select
        defaultValue={defaultValue}
        aria-label="Sort results"
        className="w-full h-full appearance-none rounded-[12px] border border-[#E2E8F0] bg-white px-4 pr-10 text-[13.5px] font-medium text-[#0F172A] transition-colors focus:border-[#FB923C] focus:outline-none cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        strokeWidth={2}
        className="pointer-events-none absolute right-3.5 text-[#64748B]"
        aria-hidden="true"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                BADGES / TAGS                               */
/* -------------------------------------------------------------------------- */

export type BadgeVariant = "video" | "lesson" | "popular";

export function Badge({
  variant,
  children,
}: {
  variant: BadgeVariant;
  children?: React.ReactNode;
}) {
  const styles: Record<BadgeVariant, string> = {
    video: "bg-[#FFEEE5] text-[#F97316]",
    lesson: "bg-[#EEF2FF] text-[#4F46E5]",
    popular: "bg-[#FEF3C7]/85 text-[#D97706]",
  };

  const defaultLabels: Record<BadgeVariant, string> = {
    video: "VIDEO",
    lesson: "LESSON",
    popular: "POPULAR",
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-[6px] px-2.5 py-1 font-sans text-[11px] leading-[14px] font-bold tracking-[0.04em] uppercase ${styles[variant]}`}
    >
      {children ?? defaultLabels[variant]}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*                             STATUS / INDICATORS                            */
/* -------------------------------------------------------------------------- */

export type StatusType = "in-progress" | "completed" | "now-playing" | "locked";

export function StatusIndicator({ status }: { status: StatusType }) {
  switch (status) {
    case "in-progress":
      return (
        <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#334155]">
          <svg
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="#E2E8F0"
              strokeWidth="2.2"
            />
            <path
              d="M12 3a9 9 0 1 1-6.36 15.36"
              stroke="#F97316"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
          <span>In Progress</span>
        </div>
      );
    case "completed":
      return (
        <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#334155]">
          <svg
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="#16A34A"
              strokeWidth="2"
            />
            <path
              d="m8.5 12.2 2.3 2.3 4.8-4.8"
              stroke="#16A34A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Completed</span>
        </div>
      );
    case "now-playing":
      return (
        <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#334155]">
          <svg
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9.5" fill="#F97316" />
            <path d="M10.2 8.6v6.8l5.4-3.4-5.4-3.4z" fill="#FFFFFF" />
          </svg>
          <span>Now Playing</span>
        </div>
      );
    case "locked":
      return (
        <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#334155]">
          <Lock
            size={16}
            strokeWidth={2}
            className="text-[#475569] shrink-0"
            aria-hidden="true"
          />
          <span>Locked</span>
        </div>
      );
  }
}

/* -------------------------------------------------------------------------- */
/*                                PROGRESS BAR                                */
/* -------------------------------------------------------------------------- */

export function ProgressBar({ percentage = 35 }: { percentage?: number }) {
  const clamped = Math.max(0, Math.min(100, percentage));
  return (
    <div className="flex items-center gap-4 w-full">
      <div
        className="relative flex-1 h-[8px] rounded-full bg-[#F1F5F9] overflow-hidden"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${clamped}% complete`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#EA580C] to-[#FB923C]"
          style={{ width: `${clamped}%` }}
        />
      </div>
      <span className="text-[13px] text-[#64748B] shrink-0 tabular-nums">
        <strong className="font-semibold text-[#0F172A]">{clamped}%</strong> complete
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    CARDS                                   */
/* -------------------------------------------------------------------------- */

export function CourseCardPreview() {
  return (
    <article className="flex flex-col justify-between rounded-[16px] border border-[#E2E8F0]/90 bg-white p-5 shadow-[var(--shadow-vertex-sm)] h-full">
      <div>
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#0F172A] text-white font-sans text-[18px] font-semibold">
            N
          </div>
          <div className="min-w-0">
            <h3 className="text-[15px] leading-[22px] font-semibold text-[#0F172A]">
              Next.js for Production
            </h3>
            <p className="mt-1 text-[12.5px] leading-[18px] text-[#64748B]">
              Build scalable, high-performance web applications with Next.js.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-3.5 border-t border-[#F1F5F9] flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-[#64748B]">
        <span className="inline-flex items-center gap-1.5">
          <SignalBarsIcon size={13} className="text-[#64748B]" />
          Intermediate
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock size={13} strokeWidth={2} className="text-[#64748B]" />
          18h 24m
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Folder size={13} strokeWidth={2} className="text-[#64748B]" />
          12 modules
        </span>
      </div>
    </article>
  );
}

export function VideoLessonCardPreview() {
  return (
    <article className="flex flex-col justify-between rounded-[16px] border border-[#E2E8F0]/90 bg-white p-5 shadow-[var(--shadow-vertex-sm)] h-full">
      <div>
        <Badge variant="video" />
        <h3 className="mt-3 text-[15px] leading-[22px] font-semibold text-[#0F172A]">
          Data Fetching in Server Components
        </h3>
        <p className="mt-1.5 text-[12.5px] leading-[18px] text-[#64748B]">
          Learn how to fetch data on the server using async/await and Next.js best practices.
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center justify-between gap-2 text-[12px]">
        <span className="text-[#64748B]">Lesson 5.1 &nbsp;•&nbsp; 12:45</span>
        <a
          href="#watch"
          className="inline-flex items-center gap-1.5 font-medium text-[#F97316] hover:text-[#EA580C] transition-colors"
        >
          <CirclePlay size={14} strokeWidth={2} />
          <span>Watch from 12:45</span>
        </a>
      </div>
    </article>
  );
}

export function LessonCardPreview() {
  return (
    <article className="flex flex-col justify-between rounded-[16px] border border-[#E2E8F0]/90 bg-white p-5 shadow-[var(--shadow-vertex-sm)] h-full">
      <div>
        <Badge variant="lesson" />
        <h3 className="mt-3 text-[15px] leading-[22px] font-semibold text-[#0F172A]">
          Data Fetching &amp; Caching
        </h3>
        <p className="mt-1.5 text-[12.5px] leading-[18px] text-[#64748B]">
          Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance.
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center justify-between gap-2 text-[12px]">
        <span className="text-[#64748B]">Module 5</span>
        <a
          href="#lesson"
          className="inline-flex items-center gap-1.5 font-medium text-[#F97316] hover:text-[#EA580C] transition-colors"
        >
          <span>View lesson</span>
          <ExternalLink size={13} strokeWidth={2} />
        </a>
      </div>
    </article>
  );
}

export function ResourceCardPreview() {
  return (
    <article className="flex flex-col justify-between rounded-[16px] border border-[#E2E8F0]/90 bg-white p-5 shadow-[var(--shadow-vertex-sm)] h-full">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#E2E8F0] bg-[#FAFAFC] text-[#334155]">
          <FileText size={18} strokeWidth={1.85} />
        </div>
        <div className="min-w-0">
          <h3 className="text-[14.5px] leading-[20px] font-semibold text-[#0F172A]">
            Caching and Revalidation Guide
          </h3>
          <p className="mt-1 text-[12.5px] leading-[18px] text-[#64748B]">
            Deep dive into Next.js caching strategies.
          </p>
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center justify-between gap-2 text-[12px]">
        <span className="text-[#64748B]">PDF &nbsp;•&nbsp; 1.2 MB</span>
        <a
          href="#resource"
          aria-label="Open Caching and Revalidation Guide"
          className="inline-flex items-center justify-center text-[#F97316] hover:text-[#EA580C] transition-colors"
        >
          <ExternalLink size={14} strokeWidth={2} />
        </a>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 NAVIGATION                                 */
/* -------------------------------------------------------------------------- */

export function BrandNavbarPreview() {
  return (
    <nav
      aria-label="Primary"
      className="flex items-center gap-7"
    >
      <VertexLogo size="sm" />
      <div className="flex items-center gap-6">
        <a
          href="#courses"
          className="relative py-1 text-[13.5px] font-medium text-[#F97316]"
        >
          Courses
          <span className="absolute inset-x-0 -bottom-1.5 h-[2px] rounded-full bg-[#F97316]" />
        </a>
        <a
          href="#my-learning"
          className="py-1 text-[13.5px] font-medium text-[#334155] hover:text-[#0F172A] transition-colors"
        >
          My Learning
        </a>
      </div>
    </nav>
  );
}

export function BreadcrumbsPreview() {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[13px]">
      <a href="#all" className="text-[#64748B] hover:text-[#0F172A] transition-colors">
        All Courses
      </a>
      <ChevronRight size={14} className="text-[#94A3B8]" aria-hidden="true" />
      <a href="#nextjs" className="text-[#64748B] hover:text-[#0F172A] transition-colors">
        Next.js for Production
      </a>
      <ChevronRight size={14} className="text-[#94A3B8]" aria-hidden="true" />
      <span className="font-medium text-[#334155]">
        Data Fetching &amp; Caching
      </span>
    </nav>
  );
}

export function PaginationPreview() {
  return (
    <nav aria-label="Pagination" className="inline-flex items-center gap-1.5 text-[13px]">
      <button
        type="button"
        aria-label="Previous page"
        className="inline-flex h-7 w-7 items-center justify-center rounded-[8px] text-[#64748B] hover:bg-[#F1F5F9] transition-colors"
      >
        <ChevronLeft size={15} strokeWidth={2} />
      </button>
      <button
        type="button"
        aria-current="page"
        className="inline-flex h-7 w-7 items-center justify-center rounded-[8px] border border-[#FED7AA] bg-[#FFEEE5] font-semibold text-[#F97316]"
      >
        1
      </button>
      <button
        type="button"
        className="inline-flex h-7 w-7 items-center justify-center rounded-[8px] font-medium text-[#334155] hover:bg-[#F1F5F9] transition-colors"
      >
        2
      </button>
      <button
        type="button"
        className="inline-flex h-7 w-7 items-center justify-center rounded-[8px] font-medium text-[#334155] hover:bg-[#F1F5F9] transition-colors"
      >
        3
      </button>
      <span className="px-1 text-[#64748B]">...</span>
      <button
        type="button"
        className="inline-flex h-7 w-7 items-center justify-center rounded-[8px] font-medium text-[#334155] hover:bg-[#F1F5F9] transition-colors"
      >
        8
      </button>
      <button
        type="button"
        aria-label="Next page"
        className="inline-flex h-7 w-7 items-center justify-center rounded-[8px] text-[#64748B] hover:bg-[#F1F5F9] transition-colors"
      >
        <ChevronRight size={15} strokeWidth={2} />
      </button>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 PRINCIPLES                                 */
/* -------------------------------------------------------------------------- */

export const PRINCIPLES_LIST = [
  {
    title: "Clarity First",
    description: "Every element should communicate clearly.",
    icon: Eye,
  },
  {
    title: "Consistency",
    description: "Use components and patterns consistently across the platform.",
    icon: LayoutGrid,
  },
  {
    title: "Focus & Calm",
    description: "Remove noise and help learners focus on what matters.",
    icon: Target,
  },
  {
    title: "Accessible",
    description: "Design with accessibility and inclusivity in mind.",
    icon: PersonStanding,
  },
] as const;
