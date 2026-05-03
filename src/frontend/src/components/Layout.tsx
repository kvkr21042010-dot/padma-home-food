import type { Page } from "@/App";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
  page: Page;
  onNavigate: (page: Page) => void;
}

export function Layout({ children, page, onNavigate }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header page={page} onNavigate={onNavigate} />
      <main className="flex-1">{children}</main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
