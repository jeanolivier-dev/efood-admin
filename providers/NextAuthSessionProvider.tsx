"use client";

import { SessionProvider } from "next-auth/react";
import React, { Children } from "react";

interface NextAuthSessionProviderProps {
  children: React.ReactNode;
}

export default function NextAuthSessionProvider({
  children,
}: NextAuthSessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
