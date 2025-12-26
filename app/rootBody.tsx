"use client";

export default function RootBody({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
      relative
      mx-auto
      min-h-svh
      w-full
      max-w-[412px]
      bg-background
      overflow-hidden
    "
    >
      {children}
    </div>
  );
}
