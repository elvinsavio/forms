import { FC } from "react";
import type { MuiElement, props } from "./typography.type";
import { Typography as MUITypography } from "@mui/material";

const MuiElement: FC<MuiElement> = (props) => {
  return <MUITypography sx={props.sx} variant={props.variant}>{props.children}</MUITypography>;
};

const Typography: FC<props> = (props) => {
  const render = () => {
    switch (props.useLib) {
      case "mui":
        return <MuiElement sx={props.sx} variant={props.variant}>{props.value}</MuiElement>;
      default:
        return <>Not implemented yet</>
    }
  };
  return <>{render()}</>;
};

export default Typography;
