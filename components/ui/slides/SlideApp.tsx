"use client";
import { ReactChildren } from "@/types/common";
import { SlideAppProvider } from "./SlideAppContext";
import React, { isValidElement, useEffect } from "react";
import { SLIDE_OWNER_NAME } from "@/lib/constants";

export const SlideApp: React.FC<ReactChildren> = ({ children }) => {
  useEffect(() => {
    React.Children.toArray(children).forEach((child) => {
      //@ts-expect-error : _owner is a hidden React property!
      if(!(isValidElement(child) && child._owner.name == SLIDE_OWNER_NAME)){
        throw new Error("SlideApp accepts only Slide components!");
      }
    });
  }, [children]);
  return <SlideAppProvider>{children}</SlideAppProvider>;
};
