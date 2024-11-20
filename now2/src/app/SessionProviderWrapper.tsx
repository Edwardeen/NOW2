// components/SessionProviderWrapper.tsx
"use client"; // Ensure this is a client component

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface SessionProviderWrapperProps {
  session: Session | null;
  children: React.ReactNode;
}

const SessionProviderWrapper: React.FC<SessionProviderWrapperProps> = ({ session, children }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionProviderWrapper;
