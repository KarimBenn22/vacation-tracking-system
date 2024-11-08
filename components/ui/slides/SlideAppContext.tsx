import { ReactChildren } from "@/types/common";
import { createContext, useContext, useState } from "react";

interface SlideAppContextType {
  currentSlideIndex: number;
  goToPrevSlide: () => void;
  goToNextSlide: () => void;
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
  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) => prevIndex - 1);
  }
  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => prevIndex + 1);
  } 
  return (
    <SlideAppContext.Provider value={{currentSlideIndex,goToPrevSlide,goToNextSlide}}>
      {children}
    </SlideAppContext.Provider>
  );
};
