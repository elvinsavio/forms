import FormViewer from "./components/viewer/FormViewer";
import type { JSON, Config } from "./types";

const config: Config = {
  useLib: "mui"
}

const formJson: JSON = [
  {
    type: "header",
    value: "2023 Appraisal form",
  },
];

function App() {
  return (
    <>
      <FormViewer config={config} form={formJson}/>
    </>
  );
}

export default App;
