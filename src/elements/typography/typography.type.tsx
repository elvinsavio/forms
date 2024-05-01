import { ReactNode } from "react";
import { BaseElement, Heading } from "../../types/types";

export interface props extends BaseElement {
  value: string;
  variant: Heading["variant"];
  sx: Heading["sx"];
}

export interface MuiElement {
  variant: Heading["variant"];
  children: ReactNode;
  sx: Heading["sx"];
}