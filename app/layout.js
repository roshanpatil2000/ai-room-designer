import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import Favicon from '/static/favicon.ico';


export const metadata = {
  title: "AI Room Designer",
  description: "Created by Roshan Patil",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

const outfit = Outfit({ subsets: ["latin"] })
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="en" suppressHydrationWarning>
        
        <body className={outfit.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
          >
            <Provider>
              {children}
            </Provider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
