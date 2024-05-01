import { SxProps } from "@mui/system";

export type FormJSON = Array<Header>;

interface Base {
  sx?: SxProps;
  class?: React.HTMLAttributes<HTMLDivElement>["className"];
  style?: React.CSSProperties;
}

export  interface Header extends Base {
  type: "header";
  value: string;
}
