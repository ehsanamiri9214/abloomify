import Auth from "@/components/auth/auth";
import MainHoc from "@/components/hoc/main.hoc";
import NavBar from "@/components/navbar";
import { isAuthenticated } from "@/utils/amplify-utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abloomify",
  description: "Project Management",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          bg-slate-200
          ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainHoc>
          <NavBar isSignedIn={await isAuthenticated()} />
          <Auth>{children}</Auth>
        </MainHoc>
      </body>
    </html>
  );
}
