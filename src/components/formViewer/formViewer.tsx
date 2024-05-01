import { FC } from "react";
import { props } from "./formViewer.type";
import { FormConfig, FormJSON } from "../../types";

const renderJSON = (useLib: FormConfig["useLib"], json: FormJSON) => {
  const elements: JSX.Element[] = [];

  for (const element of json) {
    switch (element.type) {
      case "header":
        elements.push(<h1>{element.value}</h1>);
        break;
      default:
        elements.push(
          <p>
            <i>No implementation yet</i>
          </p>
        );
    }
  }

  return elements;
};

const FormViewer: FC<props> = (props) => {
  return <>{renderJSON(props.config.useLib, props.data)}</>;
};

export default FormViewer;
