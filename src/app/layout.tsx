import type { Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Is It A Holiday?",
  description: "Check if today is a holiday",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
