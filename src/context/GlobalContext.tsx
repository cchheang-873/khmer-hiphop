import { createContext, ReactNode } from "react";
import { Navigation } from "../components/Navigation/Navigation";
import { Title } from "../components/Title/Title";
import "./GlobalContext.scss";

export interface GlobalContextProps {}

export const GlobalContext = createContext<GlobalContextProps>({});

export const GlobalContextProvider = (props: { children: ReactNode }) => {
  return (
    <GlobalContext.Provider value={{}}>
      <Title />
      <div className={"GlobalContext-children-container"}>
        <Navigation />
        <div className={"GlobalContext-children-content"}>{props.children}</div>
      </div>
    </GlobalContext.Provider>
  );
};
