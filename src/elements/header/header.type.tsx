import { ReactNode } from "react";
import { BaseElement } from "../../types";

export interface props extends BaseElement {
    value: string
}

export interface MuiElement {
  variant: "h1" | "h2" | "h3" | "h4" | "h5";
  children: ReactNode
}
