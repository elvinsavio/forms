import FormViewer from "./components/viewer/FormViewer";
import type { JSON, Config } from "./types/types";

const config: Config = {
  useLib: "mui"
}

const formJson: JSON = [
  {
    type: "header",
    value: "2023 Appraisal form",
    variant: 'h1'
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
