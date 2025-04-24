
import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen flex">
      <Navigation />
      <main className={cn("pl-16 lg:pl-64 w-full min-h-screen", className)}>
        <div className="container page-transition py-6 max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}
