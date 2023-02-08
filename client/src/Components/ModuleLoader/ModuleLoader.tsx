import { Box } from "@mui/material";
import { ModuleLoaderObject } from "./Utils";

interface Props {
  initialData: ModuleLoaderObject;
}

const ModuleLoader = (props: Props) => {
  const { initialData } = props;

  return (
    <Box className="__moduleLoader">
      <Box className="__tabs">{initialData.tabs}</Box>
      <Box className="__module">{initialData.module}</Box>
    </Box>
  );
};

export default ModuleLoader;
