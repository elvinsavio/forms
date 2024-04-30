export interface Config {
  useLib: "mui" | false;
}

export type JSON = Array<Heading | Button>;

export interface Heading {
  type: "header";
  value: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5";
}

export interface Button {
  type: "button";
}

export interface BaseElement {
  useLib: Config["useLib"];
}
