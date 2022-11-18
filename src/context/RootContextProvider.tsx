"use client";

import { createContext, useEffect, useState } from "react";

interface GlobalContext {
  testState: string;
}

export const RootContext = createContext<GlobalContext>({} as GlobalContext);

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [testState, setTestState] = useState("test");

  return (
    <RootContext.Provider
      value={{
        testState,
      }}
    >
      {children}
    </RootContext.Provider>
  );
}
