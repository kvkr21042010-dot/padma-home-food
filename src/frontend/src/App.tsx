import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { MenuPage } from "@/pages/MenuPage";
import { SupportPage } from "@/pages/SupportPage";
import { useState } from "react";

export type Page = "home" | "menu" | "support";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <Layout page={page} onNavigate={setPage}>
      {page === "home" && <HomePage onNavigate={setPage} />}
      {page === "menu" && <MenuPage />}
      {page === "support" && <SupportPage />}
    </Layout>
  );
}
