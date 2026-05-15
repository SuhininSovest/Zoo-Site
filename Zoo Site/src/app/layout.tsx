import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

// Since we cannot run next fonts properly without Next CLI locally for now, 
// using generic text in globals.css as fallback, but kept here for standard pattern
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoo Management Dashboard",
  description: "Web-based Zoo Management Information System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zoo-light text-zoo-dark min-h-screen flex flex-col md:flex-row`}>
        <Sidebar />
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#f4f7f6]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
