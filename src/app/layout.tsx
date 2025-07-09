"use client";

import type { Metadata } from "next";
import { Geist, Poppins, Nunito } from "next/font/google";
import "./globals.css";
import { ConfigProvider, Skeleton } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fredoka = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // include weights you need
  display: "swap",
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${fredoka.variable} ${poppins.variable} antialiased`}>
        <ConfigProvider
          theme={{
            components: {
              Input: {
                colorBgContainer: "#505359",
                colorBorder: "#505359",
                colorText: "white",
                 colorPrimaryHover: "green",
                 colorPrimary: "green",
              },
              Select: {
                colorBgContainer: "#505359",
                colorBorder: "#505359",
                colorText: "white",
                  colorTextLightSolid: "black"
              },
              Button: {
                colorBgContainer: "#1F2230",
                colorBorder: "#505359",
                colorPrimary: "#5B42F3",
                colorText: "white",
                colorTextDisabled:"gray"
              },
            },
          }}
        >
          {mounted ? children : <Skeleton />}
        </ConfigProvider>
      </body>
    </html>
  );
}
