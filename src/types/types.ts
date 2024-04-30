export interface Config {
  useLib: "mui" | false;
}

export type JSON = Array<Heading | Button>;

interface Heading {
  type: "header";
  value: string;
}

interface Button {
  type: "button";
}

export interface BaseElement {
  useLib: Config["useLib"];
}
