import { FC } from "react";
import { props } from "./formViewer.type";
import { JSON } from "../../types/types";
import Header from "../../elements/header";

const FormViewer: FC<props> = (props) => {
  const config = props.config;
  const renderJSON = (json: JSON) => {
    for (const element of json) {
      switch (element.type) {
        case "header":
          return <Header useLib={config.useLib} value={element.value} />;
      }
    }

    return <h1>hi</h1>;
  };

  return <div>{renderJSON(props.form)}</div>;
};

export default FormViewer;
