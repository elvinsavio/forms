import { FC } from "react";
import type { MuiElement, props } from "./header.type";
import { Typography } from "@mui/material";

const MuiElement: FC<MuiElement> = (props) => {
  return <Typography variant={props.variant}>{props.children}</Typography>;
};

const Header: FC<props> = (props) => {
  const render = () => {
    switch (props.useLib) {
      case "mui":
        return <MuiElement variant="h1">{props.value}</MuiElement>;
      default:
        return <>Not implemented yet</>
    }
  };
  return <>{render()}</>;
};

export default Header;
