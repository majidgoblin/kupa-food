import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryClientProvider } from "./reactQueryProvider";
import RootBody from "./rootBody";
import { inter } from "./font"; 
import NavigationBar from "@/components/navigationBar";

export const metadata: Metadata = {
  title: "Kupa food",
  description: "delivery food app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white h-svh ${inter.className}`}>
        <ReactQueryClientProvider>
          <RootBody>
            <div className="!bg-background pb-16">{children}</div>
            <NavigationBar />
          </RootBody>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
