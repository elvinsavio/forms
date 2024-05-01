import { FC } from "react";
import { props } from "./formViewer.type";
import renderJSON from "./lib/render";


const FormViewer: FC<props> = (props) => {
  const config = props.config;
  return <div>{renderJSON(config.useLib, props.form)}</div>;
};

export default FormViewer;
