import FormViewer from "./components/formViewer";
import { FormJSON } from "./types/formJson";
import { FormConfig } from "./types/fromConfig";

const formConfig: FormConfig= {
  useLib: "mui"
}


const formJson: FormJSON = [
  {
    type: "header",
    value: "Hello world form 2023",
  },
];

function App() {
  return (
    <>
      <FormViewer data={formJson} config={formConfig}/>
    </>
  );
}

export default App;
