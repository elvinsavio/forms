import { Box, SxProps } from "@mui/material";
import FormViewer from "./components/viewer/FormViewer";
import type { JSON, Config } from "./types/types";

const config: Config = {
  useLib: "mui",
};

const sx: SxProps | null = {
  display: "flex",
  height: "calc(100% - 20px)",
  border: "2px solid rgba(0,0,0,0.2)",
  marginY: "5px",
  marginX: 20,
  overflow: "scroll",
};

const formJson: JSON = [
  {
    type: "header",
    value: "2023 test accusation form",
    variant: "h2",
    sx: {
      color: "red",
    },
  },
  {
    type: "description",
    value:
      "This is the form for the 2023 actuation filing list to be filled on or before 20th dec",
    variant: "subtitle1",
  },
];

function App() {
  return (
    <Box sx={sx}>
      <FormViewer config={config} form={formJson} />
    </Box>
  );
}

export default App;
