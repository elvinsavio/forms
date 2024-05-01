import { Config, JSON } from "../../../types/types";
import Typography from "../../../elements/typography";

const renderJSON = (useLib: Config["useLib"], json: JSON) => {
  const elements: JSX.Element[] = [];

  for (const element of json) {
    console.log(json);
    switch (element.type) {
      case "header":
        elements.push(
          <Typography
            sx={element.sx}
            useLib={useLib}
            value={element.value}
            variant={element.variant}
          />
        );
        break;
      default:
        elements.push(<>Not implemented yet</>);
    }
  }

  return elements;
};

export default renderJSON;
