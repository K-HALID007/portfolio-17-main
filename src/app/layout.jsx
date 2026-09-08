import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Khalid Shaikh | Software Engineer @ MCS MAX",
  description:
    "Software Engineer at MCS MAX based in Mumbai. Specialized in offline-first mobile applications with Kotlin & SQLite, and scalable full-stack web platforms with the MERN stack.",
  keywords: [
    "Khalid Shaikh",
    "Software Engineer",
    "MCS MAX",
    "Kotlin",
    "Android Developer",
    "SQLite",
    "Room DB",
    "React",
    "Next.js",
    "Node.js",
    "Full-Stack Developer",
    "Mumbai",
  ],
  authors: [{ name: "Khalid Shaikh" }],
  creator: "Khalid Shaikh",
  openGraph: {
    title: "Khalid Shaikh | Software Engineer @ MCS MAX",
    description:
      "Software Engineer at MCS MAX based in Mumbai. Specialized in offline-first mobile applications with Kotlin & SQLite, and scalable full-stack web platforms with the MERN stack.",
    type: "website",
    locale: "en_US",
    siteName: "Khalid Shaikh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Shaikh | Software Engineer @ MCS MAX",
    description:
      "Software Engineer at MCS MAX based in Mumbai. Specialized in offline-first mobile applications with Kotlin & SQLite, and scalable full-stack web platforms with the MERN stack.",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
