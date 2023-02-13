import MenuIcon from "@mui/icons-material/Menu";
import { ModuleLoaderObject } from "./Utils";
import { Topbar } from "../Topbar/Topbar";
import IconButton from "@mui/material/IconButton";
import { ModuleContent } from "./Styled/ModuleContent";
import { ModuleContainer } from "./Styled/ModuleContainer";
import { Box, SwipeableDrawer } from "@mui/material";
import { observer } from "mobx-react";
import { ModuleSideBar } from "./Styled/ModuleSideBar";
import { ModuleContentContainer } from "./Styled/ModuleContentContainer";

interface Props {
  initialData: ModuleLoaderObject;
}

const ModuleLoader = (props: Props) => {
  const { initialData } = props;

  return (
    <ModuleContainer>
      <Topbar>
        <IconButton onClick={initialData.onClickMenu}>
          <MenuIcon color="secondary" />
        </IconButton>
        <div className="fd-row" style={{ gap: "40px" }}>
          {initialData.navItems}
        </div>
      </Topbar>
      <ModuleContentContainer>
        <ModuleSideBar sx={{ width: initialData.sidebarWidth }}>{initialData.navItems}</ModuleSideBar>
        <ModuleContent>{initialData.module}</ModuleContent>
      </ModuleContentContainer>
    </ModuleContainer>
  );
};

export default observer(ModuleLoader);
