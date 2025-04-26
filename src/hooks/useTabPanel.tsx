import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ActivePanelStateType = string | null;

interface TabPanelContextProps {
  activePanel: string | null;
  setActivePanel: Dispatch<SetStateAction<string | null>>;
}

export const TabPanelContext = createContext<TabPanelContextProps | null>(null);

export const TabPanelProvider = ({ children }: React.PropsWithChildren) => {
  const [activePanel, setActivePanel] = useState<ActivePanelStateType>(null);

  return (
    <TabPanelContext.Provider value={{ activePanel, setActivePanel }}>
      {children}
    </TabPanelContext.Provider>
  );
};

export const useTabPanel = () => {
  const context = useContext(TabPanelContext);

  if (!context) throw new Error("Must be used within TabPanelProvider");
  const { activePanel, setActivePanel } = context;
  return {
    activePanel,
    setActivePanel,
  };
};

export default useTabPanel;
