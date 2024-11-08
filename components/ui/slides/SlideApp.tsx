"use client";
import { ReactChildren } from "@/types/common";
import { SlideAppProvider } from "./SlideAppContext";
import React from "react";

export const SlideApp: React.FC<ReactChildren> = ({ children }) => {
  return <SlideAppProvider>{children}</SlideAppProvider>;
};
