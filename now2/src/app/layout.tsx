// app/layout.tsx
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import SessionProviderWrapper from "@/app/SessionProviderWrapper";
import "./globals.css"; // Ensure global styles are imported

export const metadata = {
  title: "NOW²",
  description: "Recycle your waste and donate to Waqf houses.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch the session server-side
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper session={session}>
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
