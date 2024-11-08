import { ReactChildren } from "@/types/common";
import { createContext, useContext, useState } from "react";

interface SlideAppContextType {
  currentSlideIndex: number;
}

const SlideAppContext = createContext<SlideAppContextType | undefined>(
  undefined
);

export const useSlideAppContext = () => {
  const context = useContext(SlideAppContext);
  if (!context) {
    throw new Error(
      "useSlideAppContext must be used within a SlideAppProvider!"
    );
  }
  return context;
};

export const SlideAppProvider: React.FC<ReactChildren> = ({ children }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  return (
    <SlideAppContext.Provider value={{currentSlideIndex}}>
      {children}
    </SlideAppContext.Provider>
  );
};
