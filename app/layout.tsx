import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { ReactQueryClientProvider } from "./reactQueryProvider";
import RootBody from "./rootBody";


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
    <html lang="en" 
    
    className="bg-white xl:w-[412px] lg:w-[412px] md:w-[412px]">
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ReactQueryClientProvider>
        <body className='bg-white p-0 m-0 h-fit '>
          <RootBody>
            {children}
          </RootBody>
        </body>
      </ReactQueryClientProvider>
    </html>
  );
}
