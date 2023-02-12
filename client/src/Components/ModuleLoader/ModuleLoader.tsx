import MenuIcon from "@mui/icons-material/Menu";
import { ModuleLoaderObject } from "./Utils";
import { Topbar } from "../Topbar/Topbar";
import IconButton from "@mui/material/IconButton";
import { ModuleContent } from "./Styled/ModuleContent";
import { ModuleContainer } from "./Styled/ModuleContainer";

interface Props {
  initialData: ModuleLoaderObject;
}

const ModuleLoader = (props: Props) => {
  const { initialData } = props;

  return (
    <ModuleContainer>
      <Topbar>
        <IconButton onClick={initialData.onMenuOpen}>
          <MenuIcon color="secondary" />
        </IconButton>
        <div className="fd-row" style={{ gap: "40px" }}>
          {initialData.tabs}
        </div>
      </Topbar>
      <ModuleContent>{initialData.module}</ModuleContent>
    </ModuleContainer>
  );
};

export default ModuleLoader;
