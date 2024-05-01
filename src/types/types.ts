import { SxProps } from "@mui/material";

export interface Config {
  useLib: "mui" | false;
}

export type JSON = Array<Heading | Description>;

interface BaseJSON {
  className?: string;
  sx?: SxProps;
  style?: React.CSSProperties;
}

export interface Heading extends BaseJSON {
  type: "header";
  value: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface Button extends BaseJSON {
  type: "button";
}

export interface Description extends BaseJSON {
  type: "description";
  value: string;
  variant: "subtitle1" | "subtitle2";
}

export interface BaseElement {
  useLib: Config["useLib"];
}
