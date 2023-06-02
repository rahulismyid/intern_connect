import { createContext, useContext, useState } from "react";
import { initialSession, Session } from "../models/session";

export const SessionContext = createContext<
  [Session, (session: Session) => void]
>([initialSession, () => {}]);
export const useSessionContext = () => useContext(SessionContext);

interface MyCompProps {
  children: React.ReactNode;
}

export const SessionContextProvider: React.FC<MyCompProps> = ({ children }) => {
  const [sessionState, setSessionState] = useState(initialSession);

  const defaultSessionContext: [Session, typeof setSessionState] = [
    sessionState,
    setSessionState,
  ];

  console.log(children);

  return (
    <SessionContext.Provider value={defaultSessionContext}>
      {children}
    </SessionContext.Provider>
  );
};
