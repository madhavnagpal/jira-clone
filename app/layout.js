import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scrum Pulse",
  description: "Project Management Software(Jira clone)",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#1a202c",
          colorInputBackground: "#2D3748",
          colorInputText: "#F3F4F6",
        },
        elements: {
          formButtonPrimary: "text-white",
          card: "bg-gray-800",
          headerTitle: "text-blue-400",
          headerSubtitle: "text-gray-400",
        },
      }}
    >
      <html lang="en">
        <body className={cn(inter.className, "animated-dotted-background")}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
